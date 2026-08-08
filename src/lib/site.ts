export const locales = [
  'zh',
  'en',
  'zh-TW',
  'ja',
  'ko',
  'ru',
  'es',
  'fr',
  'de',
  'pt',
  'id',
  'vi',
  'tr',
] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'zh';

export const localeNames: Record<Locale, string> = {
  zh: '中文',
  en: 'English',
  'zh-TW': '繁體中文',
  ja: '日本語',
  ko: '한국어',
  ru: 'Русский',
  es: 'Español',
  fr: 'Français',
  de: 'Deutsch',
  pt: 'Português',
  id: 'Bahasa Indonesia',
  vi: 'Tiếng Việt',
  tr: 'Türkçe',
};

type Copy = {
  siteName: string;
  home: string;
  docs: string;
  useCases: string;
  resources: string;
  tryChatGPT: string;
  search: string;
  openMenu: string;
  closeMenu: string;
  theme: string;
  language: string;
  pathPicker: string;
  nonDeveloper: string;
  nonDeveloperCta: string;
  developer: string;
  developerCta: string;
  heroTitle: string;
  heroDescription: string;
  download: string;
  getStarted: string;
  exploreTitle: string;
  exploreDescription: string;
  workTitle: string;
  workDescription: string;
  buildTitle: string;
  buildDescription: string;
  useCasesTitle: string;
  useCasesDescription: string;
  newsTitle: string;
  docsOverview: string;
  docsDescription: string;
  viewUpdates: string;
  docsNavigation: string;
  docsNavigationDescription: string;
};

const en: Copy = {
  siteName: 'Codex Learn',
  home: 'Home',
  docs: 'Docs',
  useCases: 'Use cases',
  resources: 'Resources',
  tryChatGPT: 'Try ChatGPT',
  search: 'Search the docs',
  openMenu: 'Open navigation',
  closeMenu: 'Close navigation',
  theme: 'Toggle light and dark theme',
  language: 'Switch language',
  pathPicker: 'Choose the path that fits you',
  nonDeveloper: 'No coding required',
  nonDeveloperCta: 'Start with the guided path',
  developer: 'Developer',
  developerCta: 'Open developer docs',
  heroTitle: 'Find your way into Codex—whether you code or not.',
  heroDescription:
    'Start with guided app workflows, or jump directly to the CLI, IDE, configuration, and developer tools. Pick your path and get to a useful result faster.',
  download: 'Download ChatGPT',
  getStarted: 'Get started',
  exploreTitle: 'Explore ideas.',
  exploreDescription:
    'Use Chat to ask questions, think through possibilities, and make sense of topics through conversation.',
  workTitle: 'Get work done.',
  workDescription:
    'Use ChatGPT Work to turn a goal, files, and context into documents, spreadsheets, presentations, and other useful deliverables.',
  buildTitle: 'Build anything.',
  buildDescription:
    'Use Codex to understand codebases, build and test features, fix bugs, and review changes.',
  useCasesTitle: 'What will you do with ChatGPT?',
  useCasesDescription: 'Start with a workflow, a deliverable, or something you want to build.',
  newsTitle: 'What’s new in ChatGPT and Codex',
  docsOverview: 'Overview',
  docsDescription:
    'Start with a goal, idea, or task. ChatGPT can gather context, take action, and produce useful results.',
  viewUpdates: 'View all updates',
  docsNavigation: 'Documentation',
  docsNavigationDescription:
    'Start with the essentials or jump directly to Codex CLI, IDE, configuration, and developer tools.',
};

export const copy: Record<Locale, Copy> = {
  en,
  zh: {
    ...en,
    siteName: 'ChatGPT 中文教程',
    home: '首页',
    docs: '文档',
    useCases: '探索用例',
    resources: '资源',
    tryChatGPT: '试用 ChatGPT',
    search: '文档内容搜索',
    openMenu: '打开文档导航',
    closeMenu: '关闭文档导航',
    theme: '切换深色模式',
    language: '切换语言',
    pathPicker: '选择适合你的最短上手路径',
    nonDeveloper: '无需编程基础',
    nonDeveloperCta: '从零基础路径开始',
    developer: '开发者',
    developerCta: '查看开发者文档',
    heroTitle: '不管会不会写代码，都能找到适合自己的 Codex 路径。',
    heroDescription:
      '从 App 和 ChatGPT 工作流开始，或直接进入 CLI、IDE、配置与开发工具。选择你的身份，用最短路径完成第一件真正有用的事。',
    download: '下载 ChatGPT',
    getStarted: '快速开始',
    exploreTitle: '探索想法。',
    exploreDescription: '用对话提问、梳理可能性，并把复杂主题想明白。',
    workTitle: '完成工作。',
    workDescription: '把目标、文件和上下文交给 ChatGPT Work，产出文档、表格、演示文稿等真正有用的结果。',
    buildTitle: '构建任何东西。',
    buildDescription: '用 Codex 理解代码库、开发和测试功能、修复问题并评审改动。',
    useCasesTitle: '你会用 ChatGPT 做什么？',
    useCasesDescription: '从一项工作流、一份交付物，或一个想构建的东西开始。',
    newsTitle: 'ChatGPT 与 Codex 最新动态',
    docsOverview: '概览',
    docsDescription: '从一个目标、想法或任务开始。ChatGPT 可以收集上下文、采取行动，并产出真正有用的结果。',
    viewUpdates: '查看全部更新',
    docsNavigation: '文档导航',
    docsNavigationDescription: '从入门主题进入，也可以直接查找 Codex CLI、IDE、配置和开发者工具。',
  },
  'zh-TW': {
    ...en,
    pathPicker: '選擇最適合你的上手路徑', nonDeveloper: '不需要程式基礎', nonDeveloperCta: '從入門路徑開始', developer: '開發者', developerCta: '查看開發者文件',
    siteName: 'Codex 中文教學',
    home: '首頁', docs: '文件', useCases: '使用情境', resources: '資源', tryChatGPT: '試用 ChatGPT',
    search: '搜尋文件', openMenu: '開啟文件導覽', closeMenu: '關閉文件導覽', theme: '切換深色模式', language: '切換語言',
    heroTitle: '讓你的想法成真。',
    heroDescription: 'ChatGPT 現在能承接你最具挑戰的工作。熟悉的 ChatGPT 體驗與 Codex 的完整能力，都集中在同一個應用程式中。',
    download: '下載 ChatGPT', getStarted: '快速開始', exploreTitle: '探索想法。', exploreDescription: '透過對話提問、梳理可能性，並理解複雜主題。',
    workTitle: '完成工作。', workDescription: '運用 ChatGPT Work 將目標、檔案與脈絡轉化為文件、試算表和簡報。',
    buildTitle: '打造任何東西。', buildDescription: '使用 Codex 理解程式碼庫、建立與測試功能、修正錯誤並審查變更。',
    useCasesTitle: '你會用 ChatGPT 做什麼？', useCasesDescription: '從工作流程、交付成果或你想打造的東西開始。', newsTitle: 'ChatGPT 與 Codex 最新消息',
    docsOverview: '概覽', docsDescription: '從一個目標、想法或任務開始。ChatGPT 能收集脈絡、採取行動並產出有用成果。', viewUpdates: '查看所有更新', docsNavigation: '文件導覽', docsNavigationDescription: '從入門主題開始，或直接查看 Codex CLI、IDE、設定與開發者工具。',
  },
  ja: {
    ...en,
    pathPicker: '自分に合う最短ルートを選ぶ', nonDeveloper: 'コーディング不要', nonDeveloperCta: 'ガイド付きで始める', developer: '開発者', developerCta: '開発者向けドキュメントを見る',
    siteName: 'Codex ラーニング', home: 'ホーム', docs: 'ドキュメント', useCases: 'ユースケース', resources: 'リソース', tryChatGPT: 'ChatGPT を試す', search: 'ドキュメントを検索', openMenu: 'ナビゲーションを開く', closeMenu: 'ナビゲーションを閉じる', theme: 'テーマを切り替える', language: '言語を切り替える',
    heroTitle: 'アイデアを形に。', heroDescription: 'ChatGPT が、あなたの最も意欲的な仕事を引き受けます。使い慣れた ChatGPT と Codex の力が、ひとつのアプリになりました。', download: 'ChatGPT をダウンロード', getStarted: 'はじめる', exploreTitle: 'アイデアを探る。', exploreDescription: '会話を通じて質問し、可能性を整理し、テーマへの理解を深めます。', workTitle: '仕事を進める。', workDescription: '目標、ファイル、文脈を、文書・表計算・プレゼンなどの成果物に変えます。', buildTitle: '何でもつくる。', buildDescription: 'Codex でコードベースを理解し、機能を作り、テストし、バグを直します。', useCasesTitle: 'ChatGPT で何をしますか？', useCasesDescription: 'ワークフロー、成果物、または作りたいものから始めましょう。', newsTitle: 'ChatGPT と Codex の最新情報', docsOverview: '概要', docsDescription: '目標、アイデア、タスクから始めましょう。ChatGPT が文脈を集め、行動し、役立つ成果を生み出します。', viewUpdates: 'すべての更新を見る', docsNavigation: 'ドキュメント', docsNavigationDescription: '基本から始めるか、Codex CLI、IDE、設定、開発者ツールへ直接進めます。',
  },
  ko: {
    ...en,
    pathPicker: '나에게 맞는 가장 빠른 시작 경로', nonDeveloper: '코딩 경험 불필요', nonDeveloperCta: '안내 경로로 시작', developer: '개발자', developerCta: '개발자 문서 보기',
    siteName: 'Codex 학습', home: '홈', docs: '문서', useCases: '사용 사례', resources: '리소스', tryChatGPT: 'ChatGPT 사용해 보기', search: '문서 검색', openMenu: '탐색 열기', closeMenu: '탐색 닫기', theme: '테마 전환', language: '언어 전환', heroTitle: '아이디어를 현실로.', heroDescription: 'ChatGPT가 가장 야심찬 작업을 맡습니다. 익숙한 ChatGPT 경험과 Codex의 모든 기능을 하나의 앱에서 만나보세요.', download: 'ChatGPT 다운로드', getStarted: '시작하기', exploreTitle: '아이디어 탐색.', exploreDescription: '대화로 질문하고 가능성을 살펴보며 주제를 이해하세요.', workTitle: '업무 완수.', workDescription: '목표, 파일, 맥락을 문서와 스프레드시트, 프레젠테이션으로 전환하세요.', buildTitle: '무엇이든 구축.', buildDescription: 'Codex로 코드베이스를 이해하고 기능을 빌드·테스트하며 버그를 수정하세요.', useCasesTitle: 'ChatGPT로 무엇을 하시겠어요?', useCasesDescription: '워크플로, 결과물 또는 만들고 싶은 것에서 시작하세요.', newsTitle: 'ChatGPT와 Codex의 새로운 소식', docsOverview: '개요', docsDescription: '목표, 아이디어 또는 작업으로 시작하세요. ChatGPT가 맥락을 수집하고 실행해 유용한 결과를 만듭니다.', viewUpdates: '모든 업데이트 보기', docsNavigation: '문서 탐색', docsNavigationDescription: '기본부터 시작하거나 Codex CLI, IDE, 구성 및 개발자 도구로 이동하세요.',
  },
  ru: {
    ...en,
    pathPicker: 'Выберите самый короткий путь для себя', nonDeveloper: 'Без навыков программирования', nonDeveloperCta: 'Начать с пошагового пути', developer: 'Разработчик', developerCta: 'Открыть документацию разработчика',
    siteName: 'Codex Обучение', home: 'Главная', docs: 'Документация', useCases: 'Сценарии', resources: 'Ресурсы', tryChatGPT: 'Попробовать ChatGPT', search: 'Поиск по документации', openMenu: 'Открыть навигацию', closeMenu: 'Закрыть навигацию', theme: 'Сменить тему', language: 'Сменить язык', heroTitle: 'Воплощайте идеи в жизнь.', heroDescription: 'ChatGPT готов взяться за самые амбициозные задачи. Знакомый ChatGPT и вся мощь Codex теперь в одном приложении.', download: 'Скачать ChatGPT', getStarted: 'Начать', exploreTitle: 'Исследуйте идеи.', exploreDescription: 'Задавайте вопросы, рассматривайте возможности и разбирайтесь в сложных темах в диалоге.', workTitle: 'Выполняйте работу.', workDescription: 'Превращайте цели, файлы и контекст в документы, таблицы, презентации и другие результаты.', buildTitle: 'Создавайте что угодно.', buildDescription: 'Используйте Codex, чтобы понимать код, создавать и тестировать функции и исправлять ошибки.', useCasesTitle: 'Что вы сделаете с ChatGPT?', useCasesDescription: 'Начните с процесса, результата или идеи, которую хотите создать.', newsTitle: 'Новое в ChatGPT и Codex', docsOverview: 'Обзор', docsDescription: 'Начните с цели, идеи или задачи. ChatGPT соберёт контекст, выполнит действия и создаст полезный результат.', viewUpdates: 'Все обновления', docsNavigation: 'Документация', docsNavigationDescription: 'Начните с основ или перейдите к Codex CLI, IDE, настройкам и инструментам разработчика.',
  },
  es: {
    ...en,
    pathPicker: 'Elige la ruta más corta para ti', nonDeveloper: 'Sin experiencia en programación', nonDeveloperCta: 'Empezar con la ruta guiada', developer: 'Desarrollador', developerCta: 'Ver documentación para desarrolladores',
    siteName: 'Aprende Codex', home: 'Inicio', docs: 'Documentación', useCases: 'Casos de uso', resources: 'Recursos', tryChatGPT: 'Probar ChatGPT', search: 'Buscar en la documentación', openMenu: 'Abrir navegación', closeMenu: 'Cerrar navegación', theme: 'Cambiar tema', language: 'Cambiar idioma', heroTitle: 'Haz realidad tus ideas.', heroDescription: 'ChatGPT ahora puede encargarse de tu trabajo más ambicioso. La experiencia de siempre y toda la potencia de Codex, en una sola app.', download: 'Descargar ChatGPT', getStarted: 'Empezar', exploreTitle: 'Explora ideas.', exploreDescription: 'Pregunta, analiza posibilidades y comprende temas mediante la conversación.', workTitle: 'Haz el trabajo.', workDescription: 'Convierte objetivos, archivos y contexto en documentos, hojas de cálculo y presentaciones.', buildTitle: 'Crea lo que quieras.', buildDescription: 'Usa Codex para entender bases de código, crear y probar funciones y corregir errores.', useCasesTitle: '¿Qué harás con ChatGPT?', useCasesDescription: 'Empieza con un flujo de trabajo, un entregable o algo que quieras crear.', newsTitle: 'Novedades de ChatGPT y Codex', docsOverview: 'Descripción general', docsDescription: 'Empieza con un objetivo, una idea o una tarea. ChatGPT reúne contexto, actúa y produce resultados útiles.', viewUpdates: 'Ver todas las novedades', docsNavigation: 'Documentación', docsNavigationDescription: 'Empieza por lo esencial o ve a Codex CLI, IDE, configuración y herramientas para desarrolladores.',
  },
  fr: {
    ...en,
    pathPicker: 'Choisissez le parcours le plus direct', nonDeveloper: 'Aucun code requis', nonDeveloperCta: 'Commencer avec le parcours guidé', developer: 'Développeur', developerCta: 'Voir la documentation développeur',
    siteName: 'Apprendre Codex', home: 'Accueil', docs: 'Documentation', useCases: 'Cas d’usage', resources: 'Ressources', tryChatGPT: 'Essayer ChatGPT', search: 'Rechercher dans la documentation', openMenu: 'Ouvrir la navigation', closeMenu: 'Fermer la navigation', theme: 'Changer de thème', language: 'Changer de langue', heroTitle: 'Donnez vie à vos idées.', heroDescription: 'ChatGPT peut désormais prendre en charge vos projets les plus ambitieux. Toute la puissance de Codex est réunie dans une seule app.', download: 'Télécharger ChatGPT', getStarted: 'Commencer', exploreTitle: 'Explorez des idées.', exploreDescription: 'Posez des questions, examinez les possibilités et comprenez les sujets par la conversation.', workTitle: 'Faites avancer le travail.', workDescription: 'Transformez objectifs, fichiers et contexte en documents, feuilles de calcul et présentations.', buildTitle: 'Construisez ce que vous voulez.', buildDescription: 'Utilisez Codex pour comprendre le code, créer et tester des fonctionnalités et corriger les bugs.', useCasesTitle: 'Que ferez-vous avec ChatGPT ?', useCasesDescription: 'Commencez par un flux de travail, un livrable ou quelque chose à construire.', newsTitle: 'Nouveautés de ChatGPT et Codex', docsOverview: 'Vue d’ensemble', docsDescription: 'Partez d’un objectif, d’une idée ou d’une tâche. ChatGPT rassemble le contexte, agit et produit des résultats utiles.', viewUpdates: 'Voir toutes les nouveautés', docsNavigation: 'Documentation', docsNavigationDescription: 'Commencez par l’essentiel ou accédez à Codex CLI, IDE, configuration et outils de développement.',
  },
  de: {
    ...en,
    pathPicker: 'Wähle den kürzesten Weg für dich', nonDeveloper: 'Keine Programmierkenntnisse nötig', nonDeveloperCta: 'Mit dem geführten Einstieg beginnen', developer: 'Entwickler', developerCta: 'Entwicklerdokumentation öffnen',
    siteName: 'Codex lernen', home: 'Start', docs: 'Dokumentation', useCases: 'Anwendungsfälle', resources: 'Ressourcen', tryChatGPT: 'ChatGPT testen', search: 'Dokumentation durchsuchen', openMenu: 'Navigation öffnen', closeMenu: 'Navigation schließen', theme: 'Design wechseln', language: 'Sprache wechseln', heroTitle: 'Erwecke deine Ideen zum Leben.', heroDescription: 'ChatGPT übernimmt jetzt deine anspruchsvollsten Aufgaben. Die vertraute Erfahrung und die ganze Kraft von Codex in einer App.', download: 'ChatGPT herunterladen', getStarted: 'Loslegen', exploreTitle: 'Ideen erkunden.', exploreDescription: 'Stelle Fragen, prüfe Möglichkeiten und erschließe Themen im Gespräch.', workTitle: 'Arbeit erledigen.', workDescription: 'Verwandle Ziele, Dateien und Kontext in Dokumente, Tabellen und Präsentationen.', buildTitle: 'Alles bauen.', buildDescription: 'Verstehe Codebasen mit Codex, entwickle und teste Funktionen und behebe Fehler.', useCasesTitle: 'Was wirst du mit ChatGPT tun?', useCasesDescription: 'Starte mit einem Workflow, einem Ergebnis oder etwas, das du bauen möchtest.', newsTitle: 'Neu in ChatGPT und Codex', docsOverview: 'Überblick', docsDescription: 'Beginne mit einem Ziel, einer Idee oder Aufgabe. ChatGPT sammelt Kontext, handelt und liefert nützliche Ergebnisse.', viewUpdates: 'Alle Updates ansehen', docsNavigation: 'Dokumentation', docsNavigationDescription: 'Beginne mit den Grundlagen oder springe direkt zu Codex CLI, IDE, Konfiguration und Entwicklertools.',
  },
  pt: {
    ...en,
    pathPicker: 'Escolha o caminho mais direto para você', nonDeveloper: 'Sem programação', nonDeveloperCta: 'Começar pelo caminho guiado', developer: 'Desenvolvedor', developerCta: 'Abrir documentação para desenvolvedores',
    siteName: 'Aprenda Codex', home: 'Início', docs: 'Documentação', useCases: 'Casos de uso', resources: 'Recursos', tryChatGPT: 'Experimentar ChatGPT', search: 'Pesquisar na documentação', openMenu: 'Abrir navegação', closeMenu: 'Fechar navegação', theme: 'Alternar tema', language: 'Mudar idioma', heroTitle: 'Dê vida às suas ideias.', heroDescription: 'O ChatGPT agora pode assumir seus trabalhos mais ambiciosos. A experiência familiar e todo o poder do Codex em um único app.', download: 'Baixar ChatGPT', getStarted: 'Começar', exploreTitle: 'Explore ideias.', exploreDescription: 'Faça perguntas, avalie possibilidades e entenda assuntos por meio da conversa.', workTitle: 'Conclua o trabalho.', workDescription: 'Transforme metas, arquivos e contexto em documentos, planilhas e apresentações.', buildTitle: 'Crie qualquer coisa.', buildDescription: 'Use o Codex para entender código, criar e testar recursos e corrigir bugs.', useCasesTitle: 'O que você fará com o ChatGPT?', useCasesDescription: 'Comece com um fluxo de trabalho, uma entrega ou algo que queira criar.', newsTitle: 'Novidades do ChatGPT e Codex', docsOverview: 'Visão geral', docsDescription: 'Comece com uma meta, ideia ou tarefa. O ChatGPT reúne contexto, age e produz resultados úteis.', viewUpdates: 'Ver todas as novidades', docsNavigation: 'Documentação', docsNavigationDescription: 'Comece pelo essencial ou vá para Codex CLI, IDE, configuração e ferramentas para desenvolvedores.',
  },
  id: {
    ...en,
    pathPicker: 'Pilih jalur tercepat untuk Anda', nonDeveloper: 'Tanpa pengalaman coding', nonDeveloperCta: 'Mulai dengan panduan', developer: 'Developer', developerCta: 'Buka dokumentasi developer',
    siteName: 'Belajar Codex', home: 'Beranda', docs: 'Dokumentasi', useCases: 'Contoh penggunaan', resources: 'Sumber daya', tryChatGPT: 'Coba ChatGPT', search: 'Cari dokumentasi', openMenu: 'Buka navigasi', closeMenu: 'Tutup navigasi', theme: 'Ganti tema', language: 'Ganti bahasa', heroTitle: 'Wujudkan ide Anda.', heroDescription: 'ChatGPT kini dapat menangani pekerjaan paling ambisius Anda. Pengalaman ChatGPT dan kekuatan penuh Codex ada dalam satu aplikasi.', download: 'Unduh ChatGPT', getStarted: 'Mulai', exploreTitle: 'Jelajahi ide.', exploreDescription: 'Ajukan pertanyaan, pertimbangkan kemungkinan, dan pahami topik melalui percakapan.', workTitle: 'Selesaikan pekerjaan.', workDescription: 'Ubah tujuan, file, dan konteks menjadi dokumen, spreadsheet, dan presentasi.', buildTitle: 'Bangun apa saja.', buildDescription: 'Gunakan Codex untuk memahami basis kode, membuat dan menguji fitur, serta memperbaiki bug.', useCasesTitle: 'Apa yang akan Anda lakukan dengan ChatGPT?', useCasesDescription: 'Mulai dari alur kerja, hasil, atau sesuatu yang ingin Anda bangun.', newsTitle: 'Yang baru di ChatGPT dan Codex', docsOverview: 'Ringkasan', docsDescription: 'Mulai dengan tujuan, ide, atau tugas. ChatGPT mengumpulkan konteks, bertindak, dan menghasilkan hasil yang berguna.', viewUpdates: 'Lihat semua pembaruan', docsNavigation: 'Dokumentasi', docsNavigationDescription: 'Mulai dari hal penting atau langsung ke Codex CLI, IDE, konfigurasi, dan alat pengembang.',
  },
  vi: {
    ...en,
    pathPicker: 'Chọn lộ trình ngắn nhất cho bạn', nonDeveloper: 'Không cần biết lập trình', nonDeveloperCta: 'Bắt đầu với lộ trình hướng dẫn', developer: 'Nhà phát triển', developerCta: 'Mở tài liệu dành cho nhà phát triển',
    siteName: 'Học Codex', home: 'Trang chủ', docs: 'Tài liệu', useCases: 'Tình huống sử dụng', resources: 'Tài nguyên', tryChatGPT: 'Dùng thử ChatGPT', search: 'Tìm trong tài liệu', openMenu: 'Mở điều hướng', closeMenu: 'Đóng điều hướng', theme: 'Chuyển giao diện', language: 'Đổi ngôn ngữ', heroTitle: 'Biến ý tưởng thành hiện thực.', heroDescription: 'ChatGPT giờ có thể đảm nhận công việc tham vọng nhất của bạn. Trải nghiệm quen thuộc và toàn bộ sức mạnh Codex trong một ứng dụng.', download: 'Tải ChatGPT', getStarted: 'Bắt đầu', exploreTitle: 'Khám phá ý tưởng.', exploreDescription: 'Đặt câu hỏi, xem xét khả năng và hiểu chủ đề qua trò chuyện.', workTitle: 'Hoàn thành công việc.', workDescription: 'Biến mục tiêu, tệp và ngữ cảnh thành tài liệu, bảng tính và bản trình bày.', buildTitle: 'Xây dựng mọi thứ.', buildDescription: 'Dùng Codex để hiểu mã nguồn, xây dựng và kiểm thử tính năng, sửa lỗi.', useCasesTitle: 'Bạn sẽ làm gì với ChatGPT?', useCasesDescription: 'Bắt đầu với quy trình, sản phẩm bàn giao hoặc điều bạn muốn xây dựng.', newsTitle: 'Điểm mới trong ChatGPT và Codex', docsOverview: 'Tổng quan', docsDescription: 'Bắt đầu với mục tiêu, ý tưởng hoặc nhiệm vụ. ChatGPT thu thập ngữ cảnh, hành động và tạo ra kết quả hữu ích.', viewUpdates: 'Xem mọi cập nhật', docsNavigation: 'Tài liệu', docsNavigationDescription: 'Bắt đầu với kiến thức cơ bản hoặc đi thẳng tới Codex CLI, IDE, cấu hình và công cụ phát triển.',
  },
  tr: {
    ...en,
    pathPicker: 'Size en uygun kısa yolu seçin', nonDeveloper: 'Kodlama deneyimi gerekmez', nonDeveloperCta: 'Rehberli yoldan başlayın', developer: 'Geliştirici', developerCta: 'Geliştirici belgelerini açın',
    siteName: 'Codex Öğren', home: 'Ana sayfa', docs: 'Belgeler', useCases: 'Kullanım örnekleri', resources: 'Kaynaklar', tryChatGPT: 'ChatGPT’yi dene', search: 'Belgelerde ara', openMenu: 'Gezintiyi aç', closeMenu: 'Gezintiyi kapat', theme: 'Temayı değiştir', language: 'Dili değiştir', heroTitle: 'Fikirlerinizi hayata geçirin.', heroDescription: 'ChatGPT artık en iddialı işlerinizi üstlenebilir. Tanıdık deneyim ve Codex’in tüm gücü tek bir uygulamada.', download: 'ChatGPT’yi indir', getStarted: 'Başlayın', exploreTitle: 'Fikirleri keşfedin.', exploreDescription: 'Sorular sorun, olasılıkları düşünün ve konuları sohbet yoluyla anlayın.', workTitle: 'İşi tamamlayın.', workDescription: 'Hedefleri, dosyaları ve bağlamı belgelere, tablolara ve sunumlara dönüştürün.', buildTitle: 'Her şeyi oluşturun.', buildDescription: 'Codex ile kod tabanlarını anlayın, özellikleri oluşturup test edin ve hataları düzeltin.', useCasesTitle: 'ChatGPT ile ne yapacaksınız?', useCasesDescription: 'Bir iş akışı, teslimat veya oluşturmak istediğiniz şeyle başlayın.', newsTitle: 'ChatGPT ve Codex’te yenilikler', docsOverview: 'Genel bakış', docsDescription: 'Bir hedef, fikir veya görevle başlayın. ChatGPT bağlamı toplar, harekete geçer ve yararlı sonuçlar üretir.', viewUpdates: 'Tüm güncellemeleri görün', docsNavigation: 'Belgeler', docsNavigationDescription: 'Temel bilgilerden başlayın veya Codex CLI, IDE, yapılandırma ve geliştirici araçlarına geçin.',
  },
};

export type DocSectionKey = 'start' | 'foundations' | 'explore' | 'available' | 'releases';

type DocSectionLabels = Record<DocSectionKey, string>;

const enSections: DocSectionLabels = {
  start: 'Get started',
  foundations: 'Foundations',
  explore: 'Explore',
  available: 'Available on',
  releases: 'Releases',
};

const zhSections: DocSectionLabels = {
  start: '开始使用',
  foundations: '基础',
  explore: '探索',
  available: '可用平台',
  releases: '发布',
};

export const docSectionLabels: Record<Locale, DocSectionLabels> = {
  zh: zhSections,
  en: enSections,
  'zh-TW': { start: '開始使用', foundations: '基礎', explore: '探索', available: '可用平台', releases: '發布' },
  ja: { start: 'はじめる', foundations: '基礎', explore: '探索', available: '利用できる環境', releases: 'リリース' },
  ko: { start: '시작하기', foundations: '기초', explore: '탐색', available: '사용 가능한 곳', releases: '릴리스' },
  ru: { start: 'Начало работы', foundations: 'Основы', explore: 'Обзор', available: 'Платформы', releases: 'Релизы' },
  es: { start: 'Primeros pasos', foundations: 'Fundamentos', explore: 'Explorar', available: 'Disponible en', releases: 'Lanzamientos' },
  fr: { start: 'Bien démarrer', foundations: 'Fondamentaux', explore: 'Explorer', available: 'Disponible sur', releases: 'Versions' },
  de: { start: 'Erste Schritte', foundations: 'Grundlagen', explore: 'Entdecken', available: 'Verfügbar auf', releases: 'Versionen' },
  pt: { start: 'Primeiros passos', foundations: 'Fundamentos', explore: 'Explorar', available: 'Disponível em', releases: 'Lançamentos' },
  id: { start: 'Mulai', foundations: 'Dasar', explore: 'Jelajahi', available: 'Tersedia di', releases: 'Rilis' },
  vi: { start: 'Bắt đầu', foundations: 'Nền tảng', explore: 'Khám phá', available: 'Có trên', releases: 'Bản phát hành' },
  tr: { start: 'Başlarken', foundations: 'Temeller', explore: 'Keşfet', available: 'Kullanılabilir', releases: 'Sürümler' },
};

export const localizedPath = (locale: Locale, path: string) => {
  const normalized = path.startsWith('/') ? path : `/${path}`;
  if (locale === defaultLocale) return normalized;
  return `/${locale}${normalized === '/' ? '/' : normalized}`;
};

export const stripLocalePrefix = (path: string) => {
  for (const locale of locales) {
    if (locale !== defaultLocale && (path === `/${locale}` || path.startsWith(`/${locale}/`))) {
      const stripped = path.slice(locale.length + 1);
      return stripped || '/';
    }
  }
  return path;
};

export const modeItems = (locale: Locale) => {
  const zh = locale === 'zh' || locale === 'zh-TW';
  return {
    explore: zh
      ? [
          ['学习新知识', '提出问题，获得清晰解释，并沿着好奇心继续探索。'],
          ['头脑风暴与发展想法', '把一个模糊念头变成可以继续打磨的方向。'],
          ['比较选项并制定计划', '看清取舍，选择方向，并变成可执行的下一步。'],
        ]
      : [
          ['Learn something new', 'Ask questions, get clear explanations, and follow your curiosity.'],
          ['Brainstorm and develop ideas', 'Turn a rough thought into stronger ideas you can refine.'],
          ['Compare options and make plans', 'Understand tradeoffs and turn a direction into next steps.'],
        ],
    work: zh
      ? [
          ['研究并整合信息', '汇总文件与来源，把关键细节变成清晰观点。'],
          ['分析文件和数据', '发现模式、比较证据，并找出真正重要的洞察。'],
          ['创建文档、表格和演示文稿', '把材料变成可审阅、分享和持续完善的成果。'],
        ]
      : [
          ['Research and synthesize information', 'Bring together files and sources into a clear point of view.'],
          ['Analyze files and data', 'Find patterns, compare evidence, and surface useful insights.'],
          ['Create documents, spreadsheets, and presentations', 'Turn source material into polished work.'],
        ],
    build: zh
      ? [
          ['理解和浏览代码库', '快速看清项目结构并找到重要文件。'],
          ['构建功能并修复问题', '把想法或 issue 变成可运行的改动。'],
          ['测试、评审并交付', '运行检查、阅读差异，并让改动可以安全发布。'],
        ]
      : [
          ['Understand and navigate a codebase', 'Get oriented and find the important files quickly.'],
          ['Build features and fix bugs', 'Turn an idea or issue into a working change.'],
          ['Test, review, and ship changes', 'Run checks, review the diff, and get ready to ship.'],
        ],
  };
};

export const useCaseCards = (locale: Locale) => {
  const zh = locale === 'zh' || locale === 'zh-TW';
  const titles = zh
    ? ['清空收件箱', '让 ChatGPT 操作你的电脑', '持续推进一个目标', '构建响应式前端', '理解大型代码库', '创建或修改演示文稿']
    : ['Get your email to inbox zero', 'Use your computer with ChatGPT', 'Follow a goal', 'Build responsive front-end designs', 'Understand large codebases', 'Create or revise a slide deck'];
  const descriptions = zh
    ? ['清理积压邮件、按你的语气起草回复。', '让 ChatGPT 在 macOS 或 Windows 上点击、输入和导航。', '给 Codex 一个可以长期推进的目标。', '把截图与视觉参考还原为经过验证的界面。', '梳理请求链路、模块关系与关键文件。', '把笔记、数据或已有资料变成演示文稿。']
    : ['Clear the backlog and draft replies in your voice.', 'Let ChatGPT click, type, and navigate apps.', 'Give Codex a durable objective for long-running work.', 'Turn visual references into responsive, verified UI.', 'Trace request flows and find the right files fast.', 'Turn notes and data into a polished slide deck.'];
  const images = ['manage-your-inbox', 'use-your-computer-with-codex', 'follow-goals', 'frontend-designs', 'codebase-onboarding', 'generate-slide-decks'];
  return titles.map((title, index) => ({ title, description: descriptions[index], image: `/images/${images[index]}.webp` }));
};
