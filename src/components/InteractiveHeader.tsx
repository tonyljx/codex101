import { useEffect, useMemo, useRef, useState } from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Languages,
  Menu,
  Moon,
  MoreHorizontal,
  Search,
  Sun,
  X,
} from 'lucide-react';
import {
  copy,
  defaultLocale,
  localeNames,
  locales,
  localizedPath,
  stripLocalePrefix,
  type Locale,
} from '../lib/site';
import type { DocsNavigation } from '../lib/docs';
import { getReferenceHubKey, getReferenceSidebar } from '../lib/reference-sidebars';

type Props = {
  locale: Locale;
  currentPath: string;
  kind: 'landing' | 'docs';
  navigation: DocsNavigation;
};

const docsBase = (locale: Locale) => localizedPath(locale, '/docs');

export default function InteractiveHeader({ locale, currentPath, kind, navigation }: Props) {
  const [searchOpen, setSearchOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const [dark, setDark] = useState(false);
  const [query, setQuery] = useState('');
  const searchInput = useRef<HTMLInputElement>(null);
  const morePinned = useRef(false);
  const c = copy[locale];
  const normalizedCurrentPath = currentPath === '/' ? currentPath : currentPath.replace(/\/+$/, '');

  const searchItems = useMemo(
    () => [
      { title: navigation.overview.title, href: docsBase(locale) },
      ...navigation.search.map((item) => ({
        title: item.title,
        href: localizedPath(locale, `/docs/${item.slug}`),
      })),
    ],
    [locale, navigation],
  );

  const filteredItems = useMemo(() => {
    const normalized = query.trim().toLocaleLowerCase(locale);
    if (!normalized) return searchItems.slice(0, 6);
    return searchItems
      .filter((item) => item.title.toLocaleLowerCase(locale).includes(normalized))
      .slice(0, 8);
  }, [locale, query, searchItems]);

  const suggestedSearches = ['mcp', 'sandbox', 'subagents', 'noninteractive', 'worktrees'];

  useEffect(() => {
    setDark(document.documentElement.classList.contains('dark'));
    const onKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault();
        setSearchOpen(true);
      }
      if (event.key === 'Escape') {
        setSearchOpen(false);
        setMenuOpen(false);
        setLanguageOpen(false);
        morePinned.current = false;
        setMoreOpen(false);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('overlay-open', searchOpen || menuOpen);
    if (searchOpen) window.setTimeout(() => searchInput.current?.focus(), 40);
    return () => document.body.classList.remove('overlay-open');
  }, [menuOpen, searchOpen]);

  const toggleTheme = () => {
    const next = !dark;
    document.documentElement.classList.toggle('dark', next);
    document.documentElement.dataset.theme = next ? 'dark' : 'light';
    document.documentElement.dataset.themePreference = next ? 'dark' : 'light';
    window.localStorage.setItem('codex101-theme', next ? 'dark' : 'light');
    setDark(next);
  };

  const basePath = stripLocalePrefix(normalizedCurrentPath);
  const currentSlug = basePath.startsWith('/docs/') ? basePath.slice('/docs/'.length) : '';
  const referenceSidebar = getReferenceSidebar(locale, currentSlug);
  const referenceHub = getReferenceHubKey(locale, currentSlug);
  const languageHref = (target: Locale) => referenceHub && target !== defaultLocale
    ? localizedPath(target, referenceHub === 'skills' ? '/docs' : `/docs/${referenceHub}`)
    : localizedPath(target, basePath);
  const closeAll = () => {
    setMenuOpen(false);
    setLanguageOpen(false);
    morePinned.current = false;
    setMoreOpen(false);
  };

  const landingNav = [
    { label: c.home, href: localizedPath(locale, '/') },
    { label: c.docs, href: docsBase(locale) },
    { label: c.useCases, href: `${localizedPath(locale, '/')}#use-cases` },
    { label: c.resources, href: `${localizedPath(locale, '/')}#resources` },
  ];
  const docsHeaderItems = [navigation.overview, ...navigation.top].map((item) => ({
    label: item.title,
    slug: item.slug,
    href: item.slug ? localizedPath(locale, `/docs/${item.slug}`) : docsBase(locale),
  }));
  const moreSlugs = new Set(['security-administration', 'administration']);
  const primaryDocsHeaderItems = docsHeaderItems.filter((item) => !moreSlugs.has(item.slug));
  const moreDocsHeaderItems = docsHeaderItems.filter((item) => moreSlugs.has(item.slug));
  const isHeaderItemActive = (item: { href: string; slug?: string }) => item.href === normalizedCurrentPath
    || (referenceHub && item.href === localizedPath(locale, `/docs/${referenceHub}`))
    || (item.href === docsBase(locale) && normalizedCurrentPath === docsBase(locale));

  return (
    <>
      <header className={`site-header site-header--${kind}`} data-testid="site-header">
        <div className="site-header__inner">
          <div className="site-header__brand-group">
            {kind === 'docs' && (
              <button
                className="icon-button site-header__menu"
                type="button"
                aria-label={menuOpen ? c.closeMenu : c.openMenu}
                aria-expanded={menuOpen}
                onClick={() => setMenuOpen((value) => !value)}
              >
                <Menu aria-hidden="true" />
              </button>
            )}
            <a className="site-header__brand" href={localizedPath(locale, '/')} aria-label={c.siteName}>
              <img src="/images/openai-mark.svg" alt="" width="28" height="28" />
              {kind === 'docs' && <span>{c.siteName}</span>}
            </a>
          </div>

          <nav className="site-header__nav" aria-label="Primary navigation">
            {(kind === 'docs' ? primaryDocsHeaderItems : landingNav).map((item) => {
              const active = isHeaderItemActive(item);
              return (
                <a key={item.href} href={item.href} data-active={active || undefined} aria-current={item.href === normalizedCurrentPath ? 'page' : undefined}>
                  {item.label}
                </a>
              );
            })}
          </nav>

          <div className="site-header__actions">
            {kind === 'landing' && (
              <a className="header-cta" href="https://chatgpt.com/" target="_blank" rel="noreferrer">
                {c.tryChatGPT}
                <ArrowUpRight aria-hidden="true" />
              </a>
            )}
            <button className="icon-button" type="button" aria-label={c.search} onClick={() => setSearchOpen(true)}>
              <Search aria-hidden="true" />
              {kind === 'docs' && <span className="header-search-label">{c.search}</span>}
              {kind === 'docs' && <kbd>⌘K</kbd>}
            </button>
            {kind === 'docs' && (
              <div className="language-control">
                <button
                  className="icon-button language-control__trigger"
                  type="button"
                  aria-label={c.language}
                  aria-expanded={languageOpen}
                  onClick={() => {
                    setLanguageOpen((value) => !value);
                    morePinned.current = false;
                    setMoreOpen(false);
                  }}
                >
                  <Languages aria-hidden="true" />
                  <span>{localeNames[locale]}</span>
                </button>
                {languageOpen && (
                  <div className="language-menu" role="menu" aria-label={c.language}>
                    {locales.map((target) => (
                      <a
                        key={target}
                        href={languageHref(target)}
                        lang={target}
                        role="menuitemradio"
                        aria-checked={target === locale}
                      >
                        <span>{localeNames[target]}</span>
                        {target === locale && <Check aria-hidden="true" />}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            )}
            <button className="icon-button theme-toggle" type="button" aria-label={c.theme} aria-pressed={dark} onClick={toggleTheme}>
              {dark ? <Moon aria-hidden="true" /> : <Sun aria-hidden="true" />}
            </button>
            {kind === 'docs' && (
              <div
                className="more-control"
                onMouseEnter={() => {
                  if (!morePinned.current) setMoreOpen(true);
                }}
                onMouseLeave={() => {
                  if (!morePinned.current) setMoreOpen(false);
                }}
                onBlur={(event) => {
                  if (!event.currentTarget.contains(event.relatedTarget)) {
                    morePinned.current = false;
                    setMoreOpen(false);
                  }
                }}
              >
                <button
                  className="icon-button desktop-more"
                  type="button"
                  aria-label={locale === defaultLocale ? '更多' : 'More'}
                  aria-haspopup="menu"
                  aria-expanded={moreOpen}
                  onClick={() => {
                    const nextPinned = !morePinned.current;
                    morePinned.current = nextPinned;
                    setMoreOpen(nextPinned);
                    setLanguageOpen(false);
                  }}
                >
                  <MoreHorizontal aria-hidden="true" />
                </button>
                {moreOpen && (
                  <div className="more-menu" role="menu">
                    {moreDocsHeaderItems.map((item) => {
                      const active = isHeaderItemActive(item);
                      return (
                        <a key={item.href} href={item.href} role="menuitem" data-active={active || undefined} aria-current={item.href === normalizedCurrentPath ? 'page' : undefined}>
                          <span>{item.label}</span>
                          <ArrowRight aria-hidden="true" />
                        </a>
                      );
                    })}
                    <div className="more-menu__divider" role="separator" />
                    <a href="mailto:liangjiongxin@gmail.com" role="menuitem">
                      <span>{locale === defaultLocale ? '联系我' : 'Contact'}</span>
                      <small>liangjiongxin@gmail.com</small>
                    </a>
                  </div>
                )}
              </div>
            )}
            {kind === 'landing' && (
              <button className="icon-button site-header__landing-menu" type="button" aria-label={c.openMenu} onClick={() => setMenuOpen(true)}>
                <Menu aria-hidden="true" />
              </button>
            )}
          </div>
        </div>
      </header>

      {menuOpen && (
        <div className="mobile-drawer" role="dialog" aria-modal="true" aria-label={c.docsNavigation}>
          <button className="mobile-drawer__backdrop" type="button" aria-label={c.closeMenu} onClick={() => setMenuOpen(false)} />
          <div className="mobile-drawer__panel">
            <div className="mobile-drawer__header">
              <strong>{kind === 'docs' ? c.docsNavigation : c.siteName}</strong>
              <button className="icon-button" type="button" aria-label={c.closeMenu} onClick={() => setMenuOpen(false)}>
                <X aria-hidden="true" />
              </button>
            </div>
            {kind === 'landing' ? (
              <nav className="mobile-drawer__landing-nav">
                {landingNav.map((item) => <a key={item.href} href={item.href} onClick={closeAll}>{item.label}<ArrowRight aria-hidden="true" /></a>)}
                <a href={docsBase(locale)} onClick={closeAll}>{c.getStarted}<ArrowRight aria-hidden="true" /></a>
              </nav>
            ) : (
              <>
                <nav className="mobile-drawer__contexts" aria-label="Documentation categories">
                  {[navigation.overview, ...navigation.top].map((item) => (
                    <a key={item.slug || 'overview'} href={item.slug ? localizedPath(locale, `/docs/${item.slug}`) : docsBase(locale)} onClick={closeAll}>
                      {item.title}
                    </a>
                  ))}
                </nav>
                <div className="mobile-drawer__docs">
                  {referenceSidebar ? referenceSidebar.groups.map((group) => group.title ? (
                    <section key={group.title}>
                      <h2>{group.title}</h2>
                      {group.items.map((item) => (
                        <a key={item.href} href={item.href} onClick={closeAll}>{item.title}</a>
                      ))}
                    </section>
                  ) : group.items.map((item) => (
                    <a key={item.href} className="mobile-drawer__overview" href={item.href} onClick={closeAll}>{item.title}</a>
                  ))) : (
                    <>
                      <a className="mobile-drawer__overview" href={docsBase(locale)} onClick={closeAll}>{c.docsOverview}</a>
                      {navigation.groups.map((group) => (
                        <section key={group.title}>
                          <h2>{group.title}</h2>
                          {group.items.map((item) => (
                            <a key={item.slug} href={localizedPath(locale, `/docs/${item.slug}`)} onClick={closeAll}>{item.title}</a>
                          ))}
                        </section>
                      ))}
                    </>
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {searchOpen && (
        <div className="search-overlay" role="dialog" aria-modal="true" aria-label={c.search}>
          <button className="search-overlay__backdrop" type="button" aria-label="Close search" onClick={() => setSearchOpen(false)} />
          <div className="search-dialog">
            <div className="search-dialog__input-row">
              <Search aria-hidden="true" />
              <input ref={searchInput} value={query} onChange={(event) => setQuery(event.target.value)} placeholder={c.search} />
              <button className="icon-button" type="button" aria-label="Close search" onClick={() => setSearchOpen(false)}><X aria-hidden="true" /></button>
            </div>
            <div className="search-dialog__results">
              <h2>{query ? c.search : locale === defaultLocale ? '推荐搜索' : 'Suggested'}</h2>
              {!query ? (
                <div className="search-dialog__suggestions">
                  {suggestedSearches.map((suggestion) => (
                    <button
                      key={suggestion}
                      type="button"
                      onClick={() => {
                        setQuery(suggestion);
                        searchInput.current?.focus();
                      }}
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
              ) : filteredItems.length ? filteredItems.map((item) => (
                  <a key={item.href} href={item.href}>
                    <span>{item.title}</span>
                    <ArrowRight aria-hidden="true" />
                  </a>
                )) : <p>{locale === defaultLocale ? '没有找到匹配内容。' : 'No matching documentation found.'}</p>}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
