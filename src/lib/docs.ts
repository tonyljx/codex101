import { getCollection, type CollectionEntry } from 'astro:content';
import { copy, docSectionLabels, type Locale } from './site';

export type DocSection = 'top' | 'start' | 'foundations' | 'explore' | 'available' | 'releases';

export type DocNavItem = {
  slug: string;
  title: string;
  description: string;
};

export type DocNavGroup = {
  key: Exclude<DocSection, 'top'>;
  title: string;
  description: string;
  items: DocNavItem[];
};

export type DocsNavigation = {
  overview: DocNavItem;
  top: DocNavItem[];
  groups: DocNavGroup[];
  all: DocNavItem[];
  search: DocNavItem[];
};

const sectionOrder: Exclude<DocSection, 'top'>[] = ['start', 'foundations', 'explore', 'available', 'releases'];

const uiLabels: Record<Locale, { onThisPage: string; previousArticle: string; nextArticle: string }> = {
  zh: { onThisPage: '本页内容', previousArticle: '上一篇', nextArticle: '下一篇' },
  en: { onThisPage: 'On this page', previousArticle: 'Previous', nextArticle: 'Next' },
  'zh-TW': { onThisPage: '本頁內容', previousArticle: '上一篇', nextArticle: '下一篇' },
  ja: { onThisPage: 'このページの内容', previousArticle: '前へ', nextArticle: '次へ' },
  ko: { onThisPage: '이 페이지에서', previousArticle: '이전', nextArticle: '다음' },
  ru: { onThisPage: 'На этой странице', previousArticle: 'Назад', nextArticle: 'Далее' },
  es: { onThisPage: 'En esta página', previousArticle: 'Anterior', nextArticle: 'Siguiente' },
  fr: { onThisPage: 'Sur cette page', previousArticle: 'Précédent', nextArticle: 'Suivant' },
  de: { onThisPage: 'Auf dieser Seite', previousArticle: 'Zurück', nextArticle: 'Weiter' },
  pt: { onThisPage: 'Nesta página', previousArticle: 'Anterior', nextArticle: 'Próximo' },
  id: { onThisPage: 'Di halaman ini', previousArticle: 'Sebelumnya', nextArticle: 'Berikutnya' },
  vi: { onThisPage: 'Trong trang này', previousArticle: 'Trước', nextArticle: 'Tiếp theo' },
  tr: { onThisPage: 'Bu sayfada', previousArticle: 'Önceki', nextArticle: 'Sonraki' },
};

export const docsUi = (locale: Locale) => uiLabels[locale];

export const docSlug = (entry: CollectionEntry<'docs'>) => entry.data.translationKey;

export async function getDocsEntries(locale: Locale) {
  const entries = await getCollection('docs', ({ data }) => data.locale === locale && !data.draft);
  const positions = new Set<string>();

  for (const entry of entries) {
    // Astro's glob loader normalizes entry IDs to lowercase, while locale routing keeps BCP 47 casing.
    const expectedId = `${entry.data.locale.toLowerCase()}/${entry.data.translationKey}`;
    if (entry.id !== expectedId) {
      throw new Error(`Docs entry id mismatch: expected "${expectedId}", received "${entry.id}".`);
    }

    if (!entry.data.referenceHub) {
      const position = `${entry.data.section}:${entry.data.order}`;
      if (positions.has(position)) {
        throw new Error(`Duplicate docs navigation position "${position}" for locale "${locale}".`);
      }
      positions.add(position);
    }
  }

  return entries.sort((a, b) => {
    if (a.data.section === b.data.section) return a.data.order - b.data.order;
    const aIndex = a.data.section === 'top' ? -1 : sectionOrder.indexOf(a.data.section);
    const bIndex = b.data.section === 'top' ? -1 : sectionOrder.indexOf(b.data.section);
    return aIndex - bIndex;
  });
}

export async function getDocsNavigation(locale: Locale): Promise<DocsNavigation> {
  const entries = await getDocsEntries(locale);
  const mainEntries = entries.filter((entry) => !entry.data.referenceHub);
  const toNavItem = (entry: CollectionEntry<'docs'>): DocNavItem => ({
    slug: docSlug(entry),
    title: entry.data.navTitle ?? entry.data.title,
    description: entry.data.description,
  });
  const top = mainEntries.filter((entry) => entry.data.section === 'top').map(toNavItem);
  const labels = docSectionLabels[locale];
  const zhDescriptions: Record<Exclude<DocSection, 'top'>, string> = {
    start: '从快速开始、基础用法和导入流程开始。',
    foundations: '掌握提示词、个性化、插件与权限。',
    explore: '查看最新动态、模型、定价和常用术语。',
    available: '选择桌面端、Web、CLI、IDE 或云端使用。',
    releases: '跟进更新日志、功能成熟度和开源进展。',
  };
  const groups = sectionOrder.map((section) => {
    const items = mainEntries.filter((entry) => entry.data.section === section).map(toNavItem);
    return {
      key: section,
      title: labels[section],
      description: locale === 'zh'
        ? zhDescriptions[section]
        : section === 'start'
          ? copy[locale].getStarted
          : items[0]?.description ?? labels[section],
      items,
    };
  });
  const overview = {
    slug: '',
    title: copy[locale].docsOverview,
    description: copy[locale].docsDescription,
  };

  return {
    overview,
    top,
    groups,
    // Hub pages live in the global header and are not part of the source site's
    // previous/next article sequence. Keeping them out also makes the final
    // release article (`open-source`) terminate the sequence correctly.
    all: [overview, ...groups.flatMap((group) => group.items)],
    search: entries.map(toNavItem),
  };
}
