export default {
  title: "Настройки",
  sections: {
    hermesAgent: "Агент",
    appearance: "Внешний вид",
    privacy: "Приватность",
    credentialPool: "Пул ключей",
  },
  theme: {
    label: "Тема",
    system: "Системная",
    light: "Светлая",
    dark: "Тёмная",
  },
  roundedCorners: {
    label: "Скруглённые углы",
    hint: "Отключите для прямых углов во всём приложении",
  },
  font: {
    label: "Шрифт",
    manrope: "Manrope",
    system: "Системный",
    hint: "Выберите шрифт интерфейса",
  },
  language: {
    label: "Язык",
    english: "English",
    indonesian: "Bahasa Indonesia",
    japanese: "日本語",
    spanish: "Español",
    chinese: "中文",
    portuguese: "Portuguese",
    turkish: "Türkçe",
    russian: "Русский",
    hint: "Выберите язык интерфейса",
  },
  hotkey: {
    section: "Горячие клавиши",
    quickCallLabel: "Быстрый вызов окна",
    quickCallHint:
      "Глобальное сочетание для мгновенного вызова окна из любого приложения.",
    notSet: "не задано",
  },
  analytics: {
    label: "Отправлять анонимную аналитику использования",
    hint: "Помогает улучшать приложение, отправляя анонимные обобщённые данные об использовании. Можно отключить в любой момент.",
    disclosure: {
      uuid: "Случайный идентификатор установки, хранится только на этом устройстве (без имени, почты и данных аккаунта).",
      platform: "Ваша операционная система, версия Electron и версия Node.js.",
      navigation:
        "Какие экраны вы открываете в приложении (например, Чат, Сессии, Настройки). Содержимое чатов, запросы, ответы модели и содержимое файлов не собираются.",
      endpoint:
        "Данные отправляются в сервис аналитики. Запись сессий и автозахват просмотров отключены.",
      notCollected:
        "Никогда не собираются: сообщения чата, пути к файлам, API-ключи, конфигурация модели, учётные данные.",
    },
  },
  notDetected: "Не определено",
  updatedSuccessfully: "Успешно обновлено!",
  updateSuccess: "Приложение успешно обновлено.",
  updateFailed: "Не удалось обновить.",
  version: "v{{version}}",
  proxyPlaceholder: "напр. socks5://127.0.0.1:1080 или http://proxy:8080",
  modelNamePlaceholder: "напр. anthropic/claude-opus-4.6",
  modelBaseUrlPlaceholder: "http://localhost:1234/v1",
  networkSection: "Сеть",
  forceIpv4: "Принудительно IPv4",
  forceIpv4Hint:
    "Отключить IPv6, чтобы устранить таймауты подключения в некоторых сетях",
  httpProxy: "HTTP-прокси",
  httpProxyHint:
    "SOCKS или HTTP прокси для всех исходящих подключений (оставьте пустым для автоопределения)",
  saved: "Сохранено",
  providerHint: "Выберите провайдера вывода или автоопределение по API-ключу",
  customProviderHint:
    "Используйте любой OpenAI-совместимый API (LM Studio, Ollama, vLLM и т.д.)",
  modelHint: "Имя модели по умолчанию (пусто — взять модель провайдера по умолчанию)",
  refreshModels: "Обновить список моделей",
  discoveringModels: "Загрузка доступных моделей…",
  discoveredCount: "Доступно моделей: {{count}} — начните вводить для фильтра",
  discoveryNoKey:
    "Укажите API-ключ провайдера в .env, чтобы загрузить список моделей",
  discoveryError:
    "Не удалось получить список моделей провайдера — можно ввести имя модели вручную",
  customBaseUrlHint: "OpenAI-совместимый эндпоинт API",
  compatApiKeyHint:
    "Хранится как {{envVar}} — обязателен для удалённых эндпоинтов, необязателен для localhost.",
  poolHint:
    "Добавьте несколько API-ключей одного провайдера для автоматической ротации и балансировки. Приложение будет их чередовать.",
  add: "Добавить",
  remove: "Удалить",
  keyLabel: "Ключ",
  empty: "(пусто)",
  dataSection: "Данные",
  dataHint:
    "Экспорт или импорт конфигурации, сессий, навыков и памяти.",
  backingUp: "Резервное копирование...",
  exportBackup: "Экспорт резервной копии",
  importing: "Импорт...",
  importBackup: "Импорт резервной копии",
  logsSection: "Логи",
  refresh: "Обновить",
  emptyLog: "(пусто)",
  updating: "Обновление...",
  updateEngine: "Обновить движок",
  latestVersion: "Уже актуальная версия",
  autoUpgradeDesktop: "Автообновление приложения",
  autoUpgradeDesktopHint:
    "Автоматически загружать новые версии при запуске. Отключите, чтобы показывать кнопку обновления без загрузки до нажатия.",
  runningDiagnosis: "Выполняется диагностика...",
  runDiagnosis: "Запустить диагностику",
  running: "Выполняется...",
  debugDump: "Отладочный дамп",
  migrationDetected: "Обнаружена установка OpenClaw",
  migrationDesc:
    "Найден OpenClaw в <code>{{path}}</code>. Можно перенести конфигурацию, API-ключи, сессии и навыки.",
  migrationDismiss: "Больше не показывать",
  migrating: "Перенос...",
  migrateToHermes: "Перенести",
  skip: "Пропустить",
  appearanceHint: "Выберите предпочитаемый внешний вид интерфейса",
  apiKeyPlaceholder: "API-ключ",
  labelPlaceholder: "Метка ({{optional}})",
  connectionSection: "Подключение",
  modeLocal: "Локально",
  modeRemote: "Удалённо",
  modeLocalHint: "Используется Hermes, установленный на этом устройстве",
  modeRemoteHint: "Подключение к серверу Hermes в сети или облаке",
  remoteUrl: "URL сервера",
  remoteUrlHint:
    "URL сервера Hermes (должен отдавать /health и /v1/chat/completions)",
  remoteApiKey: "API-ключ",
  remoteApiKeyHint:
    "Совпадает с API_SERVER_KEY на удалённом хосте. Оставьте пустым, если сервер принимает запросы без аутентификации.",
  testingConnection: "Проверка...",
  testConnection: "Проверить подключение",
  save: "Сохранить",
  serverConfigTitle: "Конфигурация сервера",
  serverConfigHint:
    "Вы подключены к удалённому серверу. Выбор модели, ключи провайдеров и учётные данные управляются на сервере. Их редактируют на хосте и перезапускают контейнер.",
  connectionMode: "Режим",
  switchedToLocal: "Переключено в локальный режим",

  // Сообщество
  communityTitle: "Сообщество",
  communityHint:
    "Присоединяйтесь к нашему каналу, чтобы задавать вопросы и общаться с другими пользователями.",
  joinDiscord: "Открыть канал Discord",

  // SSH и конфигурация сервера
  modeSsh: "SSH-туннель",
  modeSshHint:
    "Туннель к удалённому Hermes по SSH — без открытых портов и API-ключей.",
  sessionDisabledTitle: "История сессий отключена — не задан API_SERVER_KEY",
  sessionDisabledDesc:
    "Без ключа сервера шлюз не может аутентифицировать запросы продолжения сессии. Сообщения будут отправляться, но история диалогов не сохранится между перезапусками.",
  generateKey: "Сгенерировать и сохранить ключ",
  generating: "Генерация…",
  remoteEnvTitle: "Задайте API_SERVER_KEY на удалённом сервере",
  remoteEnvSshDesc:
    "Режим SSH: добавьте API_SERVER_KEY=<ваш-ключ> в ~/.hermes/profiles/<профиль>/.env на удалённом хосте и перезапустите шлюз.",
  remoteEnvDesc:
    "Удалённый режим: добавьте API_SERVER_KEY=<ваш-ключ> в .env на сервере Hermes и перезапустите шлюз.",
  sshHost: "SSH-хост",
  sshPort: "SSH-порт",
  sshUsername: "Имя пользователя",
  sshKeyPath: "Путь к приватному ключу",
  sshKeyPathOptional: "(необязательно, по умолчанию ~/.ssh/id_rsa)",
  sshRemotePort: "Порт удалённого Hermes",
  sshRemotePortDefault: "(по умолчанию 8642)",
  sshHint:
    "Убедитесь, что ssh {{cmd}} выполняется без запроса пароля. Первое подключение доверяет ключу хоста и сохраняет его в ~/.ssh/known_hosts; при смене ключа SSH откажет в подключении.",
  sshHintWelcome:
    "Использует системный SSH. Убедитесь, что ssh {{cmd}} уже выполняется без запроса пароля.",
  testingSsh: "Проверка SSH…",
  testSsh: "Проверить SSH-подключение",
  connectSsh: "Подключиться по SSH",
  sshTitle: "Подключение по SSH",
  sshSubtitle:
    "Туннель к удалённому Hermes по SSH — без открытых портов и API-ключей.",
  sshHostPlaceholder: "192.168.1.100 или myserver.local",
  sshUsernamePlaceholder: "hermes",
  sshErrorRequired: "Хост и имя пользователя обязательны.",
  sshErrorConnection:
    "Не удалось подключиться по SSH или достучаться до Hermes. Проверьте:\n• Верный SSH-ключ (или работает ~/.ssh/id_rsa)\n• Шлюз Hermes запущен на удалённом хосте\n• Верный удалённый порт (по умолчанию 8642)",
  sshErrorFailed: "Проверка SSH-подключения не удалась: {{msg}}",
  sshErrorFailedSimple: "Проверка SSH-подключения не удалась.",
  remoteErrorUrl: "Введите URL.",
  remoteErrorConnection:
    "Не удалось достучаться до Hermes по этому URL. Проверьте URL и API-ключ.\n\nОставьте ключ пустым, если сервер принимает запросы без аутентификации (напр. SSH-туннель на localhost).",
  remoteErrorFailed: "Проверка подключения не удалась.",
  sshSuccess: "SSH-туннель подключён!",
  sshErrorRequiredSimple: "Хост и имя пользователя обязательны",
  remoteSuccess: "Успешно подключено!",
  remoteErrorRequiredSimple: "Введите URL",
  remoteErrorFailedSimple: "Не удалось достучаться до сервера",
  apiGenerated: "API-ключ сгенерирован — шлюз перезапускается…",
} as const;
