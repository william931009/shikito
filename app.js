const icon = (name) => `<i data-lucide="${name}" aria-hidden="true"></i>`;

const copy = {
  zh: {
    appTitle: "智慧軌道隨行",
    apiStatus: "Google Transit 真實查詢",
    oneVoice: "一句話完成跨運具旅程",
    assistantTitle: "今天要去哪裡？",
    inputPlaceholder: "例如：我要從中壢車站到台北車站，現在出發",
    routingEyebrow: "Routing",
    routeTitle: "真實路線",
    replan: "重新查詢",
    from: "出發地",
    to: "目的地",
    accessibleFirst: "少走路優先",
    accessibleMeta: "以 Google Transit 的步行段落作為比較基礎",
    liveEyebrow: "Transit Data",
    liveTitle: "轉乘時刻",
    personalEyebrow: "Personalization",
    savedTitle: "我的識途",
    save: "收藏",
    language: "語言",
    favorites: "常用路線",
    apiSettings: "API 設定",
    apiHelp: "請填入已啟用 Maps JavaScript API 與 Directions API (Legacy) 的 Google Maps API Key。",
    saveKey: "儲存",
    navAssistant: "助理",
    navRoute: "路線",
    navLive: "時刻",
    navSaved: "我的",
    quickVoice: "中壢到台北",
    quickVoiceMeta: "Google Transit 真實查詢",
    quickAirport: "機場到新竹",
    quickAirportMeta: "桃機到新竹科學園區",
    quickTaipeiAirport: "台北到機場",
    quickTaipeiAirportMeta: "台北車站到桃園機場",
    assistantGreeting:
      "你好，我是識途。API Key 請到「我的」頁設定；設定後就能用 Google Maps 查真實大眾運輸路線。",
    thinking: "正在呼叫 Google Maps DirectionsService 查詢真實大眾運輸路線...",
    keyMissingTitle: "尚未設定 API Key",
    keyNeeded: "請先到「我的」頁設定 Google Maps API Key。需要啟用 Maps JavaScript API 與 Directions API (Legacy)。",
    validatingKey: "正在驗證 Google Maps API Key...",
    checkingKey: "驗證中",
    keyReadyStatus: "已儲存 API Key。若更換 Key，系統會先重新驗證。",
    keySaved: "Google Maps API Key 已儲存，可以開始查詢真實路線。",
    keyInvalid:
      "API Key 驗證失敗。請確認 Key 正確、已啟用 Maps JavaScript API 與 Directions API (Legacy)、帳單與 HTTP referrer 設定。若剛剛輸入錯 Key，請重新整理後再試新 Key。",
    keyLoadedDifferent:
      "目前頁面已載入另一組 Google Maps API Key。請重新整理頁面後，再儲存新的 Key。",
    routeReady: "真實路線已完成",
    noRoute: "目前還沒有路線。請輸入起訖點後查詢。",
    parseFailed: "我還沒判斷出起點和目的地。請輸入像「從高雄火車站到中原大學」這樣的句子。",
    totalTime: "總時間",
    transfers: "轉乘",
    walk: "步行",
    distance: "距離",
    routeIntro: "以下結果來自 Google Maps Transit 路線服務。",
    sourceNote: "資料來源：Google Maps Directions API。實際班次與路線依 Google Maps 回傳為準。",
    mapPlaceholder: "設定 API Key 並查詢後，這裡會顯示 Google 地圖路線。",
    openRoute: "點我查看路線",
    queryFailed: "查詢失敗，請確認 API Key、API 啟用狀態、帳單設定與輸入地點。",
    saved: "已加入常用路線",
    exists: "這條路線已在常用清單",
    installReady: "已準備安裝識途 PWA",
    installUnavailable: "目前瀏覽器尚未提供安裝提示",
    noFavorites: "尚未收藏路線",
    min: "分",
    departAt: "出發",
    ready: "已啟用",
  },
  en: {
    appTitle: "Rail Companion",
    apiStatus: "Google Transit live query",
    oneVoice: "One voice query, end-to-end journey",
    assistantTitle: "Where to today?",
    inputPlaceholder: "Try: Zhongli Station to Taipei Main Station now",
    routingEyebrow: "Routing",
    routeTitle: "Real Route",
    replan: "Search again",
    from: "From",
    to: "To",
    accessibleFirst: "Less walking",
    accessibleMeta: "Compare by walking distance from Google Transit legs",
    liveEyebrow: "Transit Data",
    liveTitle: "Transit Times",
    personalEyebrow: "Personalization",
    savedTitle: "My Shikito",
    save: "Save",
    language: "Language",
    favorites: "Saved routes",
    apiSettings: "API settings",
    apiHelp: "Enter a Google Maps API key with Maps JavaScript API and Directions API (Legacy) enabled.",
    saveKey: "Save",
    navAssistant: "Chat",
    navRoute: "Route",
    navLive: "Times",
    navSaved: "Mine",
    quickVoice: "Zhongli to Taipei",
    quickVoiceMeta: "Real Google Transit query",
    quickAirport: "Airport to Hsinchu",
    quickAirportMeta: "TPE to Hsinchu Science Park",
    quickTaipeiAirport: "Taipei to airport",
    quickTaipeiAirportMeta: "Taipei Main Station to TPE",
    assistantGreeting:
      "Hi, I am Shikito. Add your API key in Mine, then I can query real Google Maps transit routes.",
    thinking: "Calling Google Maps DirectionsService for a real transit route...",
    keyMissingTitle: "API key is not set",
    keyNeeded: "Please set a Google Maps API key in Mine first. Enable Maps JavaScript API and Directions API (Legacy).",
    validatingKey: "Validating Google Maps API key...",
    checkingKey: "Checking",
    keyReadyStatus: "API key is saved. New keys will be validated before saving.",
    keySaved: "Google Maps API key saved. Real route search is ready.",
    keyInvalid:
      "API key validation failed. Check the key, Maps JavaScript API, Directions API (Legacy), billing and HTTP referrer settings. If the wrong key was loaded, refresh before trying a new key.",
    keyLoadedDifferent:
      "This page already loaded Google Maps with another API key. Refresh the page before saving a new key.",
    routeReady: "Real route ready",
    noRoute: "No route yet. Enter origin and destination to search.",
    parseFailed: "I could not find both origin and destination. Try: from Kaohsiung Station to Chung Yuan University.",
    totalTime: "Total",
    transfers: "Transfers",
    walk: "Walk",
    distance: "Distance",
    routeIntro: "Results are from Google Maps Transit directions.",
    sourceNote: "Data source: Google Maps Directions API. Routes and times follow Google Maps results.",
    mapPlaceholder: "After you set an API key and search, the Google route map appears here.",
    openRoute: "Tap to view route",
    queryFailed: "Search failed. Check API key, enabled APIs, billing and place names.",
    saved: "Saved to frequent routes",
    exists: "This route is already saved",
    installReady: "Shikito PWA is ready to install",
    installUnavailable: "Install prompt is not available yet",
    noFavorites: "No saved routes yet",
    min: "min",
    departAt: "Depart",
    ready: "Ready",
  },
  ja: {
    appTitle: "鉄道コンパニオン",
    apiStatus: "Google Transit 実検索",
    oneVoice: "一言で旅程を完成",
    assistantTitle: "今日はどこへ？",
    inputPlaceholder: "例：中壢駅から台北駅まで今出発",
    routingEyebrow: "Routing",
    routeTitle: "実経路",
    replan: "再検索",
    from: "出発地",
    to: "目的地",
    accessibleFirst: "徒歩少なめ",
    accessibleMeta: "Google Transit の徒歩区間を基準に比較",
    liveEyebrow: "Transit Data",
    liveTitle: "乗換時刻",
    personalEyebrow: "Personalization",
    savedTitle: "My Shikito",
    save: "保存",
    language: "言語",
    favorites: "よく使う経路",
    apiSettings: "API 設定",
    apiHelp: "Maps JavaScript API と Directions API (Legacy) を有効にした Google Maps API Key を入力してください。",
    saveKey: "保存",
    navAssistant: "案内",
    navRoute: "経路",
    navLive: "時刻",
    navSaved: "自分",
    quickVoice: "中壢から台北",
    quickVoiceMeta: "Google Transit 実検索",
    quickAirport: "空港から新竹",
    quickAirportMeta: "桃園空港から新竹科学園区",
    quickTaipeiAirport: "台北から空港",
    quickTaipeiAirportMeta: "台北駅から桃園空港",
    assistantGreeting:
      "こんにちは、識途です。API Key は My ページで設定してください。設定後に実際の交通経路を検索できます。",
    thinking: "Google Maps DirectionsService で実際の交通経路を検索しています...",
    keyMissingTitle: "API Key 未設定",
    keyNeeded: "先に My ページで Google Maps API Key を設定してください。Maps JavaScript API と Directions API (Legacy) が必要です。",
    validatingKey: "Google Maps API Key を検証しています...",
    checkingKey: "検証中",
    keyReadyStatus: "API Key は保存済みです。新しい Key は保存前に検証します。",
    keySaved: "Google Maps API Key を保存しました。",
    keyInvalid:
      "API Key の検証に失敗しました。Key、Maps JavaScript API、Directions API (Legacy)、請求設定、HTTP referrer を確認してください。間違った Key を読み込んだ場合は、再読み込みしてから新しい Key を試してください。",
    keyLoadedDifferent:
      "このページは別の Google Maps API Key で読み込み済みです。新しい Key を保存する前にページを再読み込みしてください。",
    routeReady: "実経路が完成しました",
    noRoute: "まだ経路がありません。出発地と目的地を入力してください。",
    parseFailed: "出発地と目的地を判定できませんでした。例：高雄駅から中原大学まで。",
    totalTime: "合計",
    transfers: "乗換",
    walk: "徒歩",
    distance: "距離",
    routeIntro: "結果は Google Maps Transit 経路サービスから取得しています。",
    sourceNote: "データソース：Google Maps Directions API。経路と時刻は Google Maps の結果に従います。",
    mapPlaceholder: "API Key を設定して検索すると、Google 地図の経路がここに表示されます。",
    openRoute: "タップして経路を見る",
    queryFailed: "検索に失敗しました。API Key、API 有効化、課金設定、地名を確認してください。",
    saved: "よく使う経路に保存しました",
    exists: "この経路は保存済みです",
    installReady: "Shikito PWA をインストールできます",
    installUnavailable: "インストール通知はまだ利用できません",
    noFavorites: "保存された経路はありません",
    min: "分",
    departAt: "出発",
    ready: "有効",
  },
  ko: {
    appTitle: "철도 동행",
    apiStatus: "Google Transit 실제 조회",
    oneVoice: "한 문장으로 여정 완성",
    assistantTitle: "오늘 어디로 갈까요?",
    inputPlaceholder: "예: 가오슝역에서 중원대학교까지 지금 출발",
    routingEyebrow: "Routing",
    routeTitle: "실제 경로",
    replan: "다시 조회",
    from: "출발지",
    to: "목적지",
    accessibleFirst: "도보 적게",
    accessibleMeta: "Google Transit의 도보 구간을 기준으로 비교",
    liveEyebrow: "Transit Data",
    liveTitle: "환승 시간",
    personalEyebrow: "Personalization",
    savedTitle: "내 Shikito",
    save: "저장",
    language: "언어",
    favorites: "자주 쓰는 경로",
    apiSettings: "API 설정",
    apiHelp: "Maps JavaScript API와 Directions API (Legacy)를 사용 설정한 Google Maps API Key를 입력하세요.",
    saveKey: "저장",
    navAssistant: "도우미",
    navRoute: "경로",
    navLive: "시간",
    navSaved: "내 정보",
    quickVoice: "중리에서 타이베이",
    quickVoiceMeta: "Google Transit 실제 조회",
    quickAirport: "공항에서 신주",
    quickAirportMeta: "타오위안 공항에서 신주 과학단지",
    quickTaipeiAirport: "타이베이에서 공항",
    quickTaipeiAirportMeta: "타이베이역에서 타오위안 공항",
    assistantGreeting:
      "안녕하세요, Shikito입니다. API Key는 내 정보 페이지에서 설정하세요. 설정 후 Google Maps로 실제 대중교통 경로를 조회할 수 있습니다.",
    thinking: "Google Maps DirectionsService로 실제 대중교통 경로를 조회하는 중...",
    keyMissingTitle: "API Key 미설정",
    keyNeeded:
      "먼저 내 정보 페이지에서 Google Maps API Key를 설정하세요. Maps JavaScript API와 Directions API (Legacy)가 필요합니다.",
    validatingKey: "Google Maps API Key를 확인하는 중...",
    checkingKey: "확인 중",
    keyReadyStatus: "API Key가 저장되어 있습니다. 새 Key는 저장 전에 먼저 확인합니다.",
    keySaved: "Google Maps API Key가 저장되었습니다. 실제 경로 조회를 시작할 수 있습니다.",
    keyInvalid:
      "API Key 확인에 실패했습니다. Key, Maps JavaScript API, Directions API (Legacy), 결제 및 HTTP referrer 설정을 확인하세요. 잘못된 Key를 입력했다면 새로고침 후 다시 시도하세요.",
    keyLoadedDifferent:
      "이 페이지는 이미 다른 Google Maps API Key로 로드되었습니다. 새 Key를 저장하려면 페이지를 새로고침하세요.",
    routeReady: "실제 경로가 준비되었습니다",
    noRoute: "아직 경로가 없습니다. 출발지와 목적지를 입력하세요.",
    parseFailed: "출발지와 목적지를 찾지 못했습니다. 예: 가오슝역에서 중원대학교까지.",
    totalTime: "총 시간",
    transfers: "환승",
    walk: "도보",
    distance: "거리",
    routeIntro: "아래 결과는 Google Maps Transit 경로 서비스에서 가져왔습니다.",
    sourceNote: "자료 출처: Google Maps Directions API. 실제 시간과 경로는 Google Maps 결과를 따릅니다.",
    mapPlaceholder: "API Key를 설정하고 조회하면 여기에 Google 지도 경로가 표시됩니다.",
    openRoute: "경로 보기",
    queryFailed: "조회 실패. API Key, API 사용 설정, 결제 설정과 장소 이름을 확인하세요.",
    saved: "자주 쓰는 경로에 저장했습니다",
    exists: "이미 저장된 경로입니다",
    installReady: "Shikito PWA를 설치할 수 있습니다",
    installUnavailable: "현재 브라우저에서 설치 안내를 사용할 수 없습니다",
    noFavorites: "저장된 경로가 없습니다",
    min: "분",
    departAt: "출발",
    ready: "사용 가능",
  },
};

const defaultFavorites = [
  { name: "桃園機場 → 新竹科學園區", from: "桃園國際機場", to: "新竹科學園區" },
  { name: "中壢車站 → 台北車站", from: "中壢車站", to: "台北車站" },
];

const state = {
  lang: localStorage.getItem("shikito-lang") || "zh",
  googleKey: localStorage.getItem("shikito-google-key") || "",
  favorites: JSON.parse(localStorage.getItem("shikito-favorites-real") || "null") || defaultFavorites,
  messages: [],
  deferredInstall: null,
  googleLoading: null,
  googleScriptKey: "",
  apiStatus: "",
  directionsService: null,
  directionsRenderer: null,
  map: null,
  lastDirections: null,
  lastDirectionsRaw: null,
  lastRouteInfo: null,
};

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
const t = (key) => copy[state.lang][key] || copy.zh[key] || key;

function htmlLang() {
  return { zh: "zh-Hant", en: "en", ja: "ja", ko: "ko" }[state.lang] || "zh-Hant";
}

function googleMapsLang() {
  return { zh: "zh-TW", en: "en", ja: "ja", ko: "ko" }[state.lang] || "zh-TW";
}

function speechLang() {
  return { zh: "zh-TW", en: "en-US", ja: "ja-JP", ko: "ko-KR" }[state.lang] || "zh-TW";
}

const knownPlaces = [
  {
    canonical: "中原大學",
    aliases: [
      "中原大學",
      "中原大学",
      "中元大學",
      "中元大学",
      "中源大學",
      "中源大学",
      "中園大學",
      "中園大学",
      "Chung Yuan University",
      "Chung Yuan Christian University",
      "CYCU",
      "중원대학교",
      "중원대학",
      "중위안대학교",
    ],
  },
  {
    canonical: "高雄車站",
    aliases: ["高雄車站", "高雄火車站", "高雄站", "高雄駅", "Kaohsiung Station", "가오슝역", "가오슝 기차역"],
  },
  {
    canonical: "中壢車站",
    aliases: [
      "中壢車站",
      "中壢火車站",
      "中壢站",
      "中坜车站",
      "中坜站",
      "中壢駅",
      "Zhongli Station",
      "Chungli Station",
      "중리역",
    ],
  },
  {
    canonical: "台北車站",
    aliases: [
      "台北車站",
      "臺北車站",
      "台北火車站",
      "台北站",
      "台北駅",
      "Taipei Main Station",
      "Taipei Station",
      "타이베이역",
    ],
  },
  {
    canonical: "桃園國際機場",
    aliases: [
      "桃園國際機場",
      "桃園機場",
      "桃機",
      "桃園空港",
      "Taoyuan Airport",
      "Taoyuan International Airport",
      "TPE",
      "타오위안 공항",
      "타오위안국제공항",
    ],
  },
  {
    canonical: "新竹科學園區",
    aliases: [
      "新竹科學園區",
      "新竹科學園",
      "新竹科學園区",
      "Hsinchu Science Park",
      "新竹サイエンスパーク",
      "신주 과학단지",
      "신주 과학 공원",
    ],
  },
];

function refreshIcons() {
  if (window.lucide) window.lucide.createIcons();
}

function showToast(text) {
  const toast = $("#toast");
  toast.textContent = text;
  toast.classList.add("is-visible");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => toast.classList.remove("is-visible"), 2600);
}

function updateClock() {
  $("#clockText").textContent = new Date().toLocaleTimeString("zh-TW", {
    hour: "2-digit",
    minute: "2-digit",
  });
}

function setView(viewName) {
  $$(".view").forEach((view) => view.classList.toggle("is-active", view.dataset.view === viewName));
  $$("[data-nav]").forEach((button) =>
    button.classList.toggle("is-active", button.dataset.nav === viewName),
  );
  if (viewName === "route" && state.map) {
    window.setTimeout(() => window.google.maps.event.trigger(state.map, "resize"), 80);
  }
}

function syncIntroMessage() {
  const greetings = Object.values(copy).map((messages) => messages.assistantGreeting);
  if (
    state.messages.length === 1 &&
    state.messages[0].role === "assistant" &&
    greetings.includes(state.messages[0].text)
  ) {
    state.messages[0].text = t("assistantGreeting");
  }
}

function translate() {
  document.documentElement.lang = htmlLang();
  syncIntroMessage();
  $$("[data-i18n]").forEach((node) => {
    node.textContent = t(node.dataset.i18n);
  });
  $$("[data-i18n-placeholder]").forEach((node) => {
    node.placeholder = t(node.dataset.i18nPlaceholder);
  });
  $$(".segmented button").forEach((button) =>
    button.classList.toggle("is-selected", button.dataset.lang === state.lang),
  );
  renderApiPanel();
  renderQuickPrompts();
  renderMessages();
  renderRoute();
  renderTransitTimes();
  renderFavorites();
  refreshIcons();
}

function renderApiPanel() {
  $("#apiPanel").classList.toggle("is-ready", Boolean(state.googleKey));
  $("#googleKeyInput").value = state.googleKey ? "••••••••••••••••••••" : "";
  $("#apiStatusMessage").textContent = state.apiStatus || (state.googleKey ? t("keyReadyStatus") : "");
}

function renderQuickPrompts() {
  const prompts = [
    ["quickVoice", "quickVoiceMeta", "message-circle", "中壢車站", "台北車站"],
    ["quickAirport", "quickAirportMeta", "plane", "桃園國際機場", "新竹科學園區"],
    ["quickTaipeiAirport", "quickTaipeiAirportMeta", "train-front", "台北車站", "桃園國際機場"],
  ];
  $("#quickPrompts").innerHTML = prompts
    .map(
      ([title, meta, iconName, from, to]) => `
      <button class="quick-card" type="button" data-from="${from}" data-to="${to}" data-prompt="${title}">
        ${icon(iconName)}
        <strong>${t(title)}</strong>
        <span>${t(meta)}</span>
      </button>
    `,
    )
    .join("");
}

function pushMessage(message) {
  state.messages.push(message);
  const keep = 6;
  if (state.messages.length > keep) {
    state.messages = state.messages.slice(state.messages.length - keep);
  }
}

function removeThinkingMessage() {
  state.messages = state.messages.filter((message) => message.text !== t("thinking"));
}

function renderMessages() {
  $("#messageList").innerHTML = state.messages
    .map((message) => {
      if (message.kind === "route") {
        return `<button class="route-card message assistant result-card" type="button" data-open-route="true">
          <h3>${t("routeReady")}</h3>
          <p>${state.lastRouteInfo?.summary || t("routeIntro")}</p>
          ${metricGrid()}
          <span class="open-route-hint">${t("openRoute")}</span>
        </button>`;
      }
      return `<div class="message ${message.role}">
        ${message.role === "assistant" ? `<strong>Shikito</strong>` : ""}
        ${message.text}
      </div>`;
    })
    .join("");
  const list = $("#messageList");
  list.scrollTop = list.scrollHeight;
}

function metricGrid() {
  if (!state.lastRouteInfo) return "";
  const { duration, distance, transfers, walkMinutes } = state.lastRouteInfo;
  return `<div class="route-metrics">
    <div><span>${t("totalTime")}</span><strong>${duration}</strong></div>
    <div><span>${t("transfers")}</span><strong>${transfers}</strong></div>
    <div><span>${t("walk")}</span><strong>${walkMinutes} ${t("min")}</strong></div>
    <div><span>${t("distance")}</span><strong>${distance}</strong></div>
  </div>`;
}

function normalizePlace(place) {
  const trimmed = smartPlaceName(place);
  if (!trimmed) return trimmed;
  if (/台灣|Taiwan|Taipei|Taoyuan|Hsinchu/i.test(trimmed)) return trimmed;
  return `${trimmed}, 台灣`;
}

function placeKey(value) {
  return value
    .toLowerCase()
    .replace(/[()\[\]{}「」『』"'’‘“”.,，。!！?？;；:：\-\s]/g, "")
    .replace(/臺/g, "台")
    .replace(/车/g, "車")
    .replace(/学/g, "學")
    .replace(/区/g, "區")
    .trim();
}

function levenshtein(a, b) {
  const rows = Array.from({ length: a.length + 1 }, (_, i) => [i]);
  for (let j = 1; j <= b.length; j += 1) rows[0][j] = j;
  for (let i = 1; i <= a.length; i += 1) {
    for (let j = 1; j <= b.length; j += 1) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      rows[i][j] = Math.min(rows[i - 1][j] + 1, rows[i][j - 1] + 1, rows[i - 1][j - 1] + cost);
    }
  }
  return rows[a.length][b.length];
}

function smartPlaceName(place) {
  const cleaned = cleanupPlace(place);
  const key = placeKey(cleaned);
  if (!key) return "";

  let best = null;
  for (const placeInfo of knownPlaces) {
    for (const alias of placeInfo.aliases) {
      const aliasKey = placeKey(alias);
      if (!aliasKey) continue;
      if (key === aliasKey || key.includes(aliasKey) || aliasKey.includes(key)) {
        return placeInfo.canonical;
      }
      const maxLen = Math.max(key.length, aliasKey.length);
      if (maxLen <= 12) {
        const score = 1 - levenshtein(key, aliasKey) / maxLen;
        if (score >= 0.78 && (!best || score > best.score)) {
          best = { canonical: placeInfo.canonical, score };
        }
      }
    }
  }
  return best?.canonical || cleaned;
}

function placesMentionedIn(text) {
  const textKey = placeKey(text);
  const matches = [];
  for (const placeInfo of knownPlaces) {
    let bestIndex = Infinity;
    for (const alias of placeInfo.aliases) {
      const aliasKey = placeKey(alias);
      const index = textKey.indexOf(aliasKey);
      if (index !== -1 && index < bestIndex) bestIndex = index;
    }
    if (bestIndex !== Infinity) matches.push({ canonical: placeInfo.canonical, index: bestIndex });
  }
  return matches
    .sort((a, b) => a.index - b.index)
    .filter((item, index, items) => items.findIndex((other) => other.canonical === item.canonical) === index)
    .map((item) => item.canonical);
}

function cleanupPlace(place) {
  return place
    .replace(
      /^(我要|我想要|我想|想要|請問|請幫我|幫我|幫忙|麻煩|要|從|自|please|can you|could you|take me|guide me|출발지는|목적지는)\s*/gi,
      "",
    )
    .replace(
      /(現在出發|現在|今天|明天|後天|出發|最快|怎麼去|怎麼走|怎麼搭|交通|大眾運輸|路線|的路線|幫我查|now|today|tomorrow|route|directions|how to get there|行きたい|行き方|経路|ルート|지금|오늘|내일|경로|가는 길|가고 싶어|알려줘).*$/gi,
      "",
    )
    .replace(/[，,。.!！?？；;：:]+$/g, "")
    .trim();
}

function parseQuery(text) {
  const clean = text
    .replace(/\s+/g, " ")
    .replace(/到達/g, "到")
    .trim();
  const patterns = [
    /(?:從|自)\s*(.+?)\s*(?:要去|想去|前往|到|去|往)\s*(.+?)(?:，|,|。|!|！|\?|？|；|;|$)/,
    /(.+?)\s*(?:要去|想去|前往|到|去|往)\s*(.+?)(?:，|,|。|!|！|\?|？|；|;|$)/,
    /from\s+(.+?)\s+to\s+(.+?)(?:,|\.|!|\?|$)/i,
    /(.+?)\s*(?:から|より)\s*(.+?)\s*(?:まで|へ|に)(?:。|、|,|\.|!|\?|$)/,
    /(.+?)\s*(?:에서|부터)\s*(.+?)\s*(?:까지|으로|로|에)(?:\.|,|!|\?|。|$)/,
  ];
  for (const pattern of patterns) {
    const match = clean.match(pattern);
    if (match) {
      const from = smartPlaceName(match[1]);
      const to = smartPlaceName(match[2]);
      if (from && to && from !== to) return { from, to };
    }
  }
  const mentioned = placesMentionedIn(clean);
  if (mentioned.length >= 2) return { from: mentioned[0], to: mentioned[1] };
  return null;
}

function setApiStatus(message) {
  state.apiStatus = message;
  renderApiPanel();
}

async function saveApiKey() {
  const input = $("#googleKeyInput").value.trim();
  if (!input || input.includes("•")) return;
  const button = $("#saveGoogleKeyButton");
  button.disabled = true;
  button.textContent = t("checkingKey");
  setApiStatus(t("validatingKey"));
  try {
    await validateGoogleApiKey(input);
    state.googleKey = input;
    state.googleLoading = null;
    state.directionsService = null;
    state.directionsRenderer = null;
    state.map = null;
    localStorage.setItem("shikito-google-key", state.googleKey);
    setApiStatus(t("keySaved"));
    showToast(t("keySaved"));
  } catch (error) {
    console.warn(error);
    setApiStatus(apiKeyErrorMessage(error));
    showToast(apiKeyErrorMessage(error));
  } finally {
    button.disabled = false;
    button.textContent = t("saveKey");
    refreshIcons();
  }
}

function loadGoogleMaps(key = state.googleKey, shouldInitServices = true) {
  if (!key) return Promise.reject(new Error("NO_KEY"));
  if (window.google?.maps?.DirectionsService) {
    if (state.googleScriptKey && state.googleScriptKey !== key) {
      return Promise.reject(new Error("MAPS_KEY_ALREADY_LOADED"));
    }
    state.googleScriptKey = state.googleScriptKey || key;
    if (shouldInitServices) initGoogleServices();
    return Promise.resolve();
  }
  if (state.googleLoading) return state.googleLoading;

  state.googleLoading = new Promise((resolve, reject) => {
    const callbackName = `initShikitoMaps${Date.now()}`;
    const priorAuthFailure = window.gm_authFailure;
    const timer = window.setTimeout(() => fail(new Error("MAPS_LOAD_FAILED")), 12000);
    const fail = (error) => {
      window.clearTimeout(timer);
      delete window[callbackName];
      window.gm_authFailure = priorAuthFailure;
      state.googleLoading = null;
      reject(error);
    };
    window.gm_authFailure = () => fail(new Error("GOOGLE_AUTH_FAILED"));
    window[callbackName] = () => {
      window.clearTimeout(timer);
      delete window[callbackName];
      window.gm_authFailure = priorAuthFailure;
      state.googleScriptKey = key;
      if (shouldInitServices) initGoogleServices();
      resolve();
    };
    const script = document.createElement("script");
    script.dataset.shikitoGoogleMaps = "true";
    script.src = `https://maps.googleapis.com/maps/api/js?key=${encodeURIComponent(
      key,
    )}&language=${googleMapsLang()}&region=TW&callback=${callbackName}`;
    script.async = true;
    script.defer = true;
    script.onerror = () => fail(new Error("MAPS_LOAD_FAILED"));
    document.head.appendChild(script);
  });
  return state.googleLoading;
}

async function validateGoogleApiKey(key) {
  if (window.google?.maps?.DirectionsService && state.googleScriptKey && state.googleScriptKey !== key) {
    throw new Error("MAPS_KEY_ALREADY_LOADED");
  }
  await loadGoogleMaps(key, false);
  const service = new window.google.maps.DirectionsService();
  await routeWithGoogle("台北車站, 台灣", "中壢車站, 台灣", service);
}

function isApiKeyError(error) {
  return ["REQUEST_DENIED", "GOOGLE_AUTH_FAILED", "MAPS_LOAD_FAILED", "DIRECTIONS_TIMEOUT", "NO_KEY"].includes(
    error.message,
  );
}

function apiKeyErrorMessage(error) {
  if (error.message === "MAPS_KEY_ALREADY_LOADED") return t("keyLoadedDifferent");
  if (isApiKeyError(error)) return t("keyInvalid");
  return `${t("queryFailed")} (${error.message})`;
}

function clearInvalidGoogleKey() {
  state.googleKey = "";
  state.directionsService = null;
  state.directionsRenderer = null;
  state.map = null;
  localStorage.removeItem("shikito-google-key");
  renderApiPanel();
  renderRoute();
  renderTransitTimes();
}

function initGoogleServices() {
  if (!state.map) {
    $("#map").innerHTML = "";
    state.map = new window.google.maps.Map($("#map"), {
      center: { lat: 24.989, lng: 121.313 },
      zoom: 10,
      mapTypeControl: false,
      streetViewControl: false,
      fullscreenControl: false,
    });
  }
  if (!state.directionsService) {
    state.directionsService = new window.google.maps.DirectionsService();
  }
  if (!state.directionsRenderer) {
    state.directionsRenderer = new window.google.maps.DirectionsRenderer({
      map: state.map,
      suppressMarkers: false,
      preserveViewport: false,
    });
  }
}

async function queryRoute(from, to, sourceText = "") {
  const origin = normalizePlace(from);
  const destination = normalizePlace(to);
  if (!origin || !destination) {
    showToast(t("queryFailed"));
    return;
  }
  $("#fromInput").value = from;
  $("#toInput").value = to;
  if (!state.googleKey) {
    pushMessage({ role: "assistant", text: t("keyNeeded") });
    renderMessages();
    showToast(t("keyNeeded"));
    setView("saved");
    return;
  }

  pushMessage({ role: "assistant", text: t("thinking") });
  renderMessages();

  try {
    await loadGoogleMaps();
    const rawResult = await routeWithGoogle(origin, destination);
    const result = choosePreferredRoute(rawResult);
    state.lastDirectionsRaw = rawResult;
    state.lastDirections = result;
    state.directionsRenderer.setDirections(result);
    state.lastRouteInfo = extractRouteInfo(result, sourceText);
    removeThinkingMessage();
    pushMessage({ role: "assistant", kind: "route" });
    renderMessages();
    renderRoute();
    renderTransitTimes();
    setView("route");
  } catch (error) {
    console.warn(error);
    removeThinkingMessage();
    const message = apiKeyErrorMessage(error);
    if (isApiKeyError(error)) {
      clearInvalidGoogleKey();
      setView("saved");
    }
    pushMessage({ role: "assistant", text: message });
    renderMessages();
    showToast(message);
  }
}

function routeWithGoogle(origin, destination, service = state.directionsService, timeoutMs = 12000) {
  return new Promise((resolve, reject) => {
    const timer = window.setTimeout(() => reject(new Error("DIRECTIONS_TIMEOUT")), timeoutMs);
    service.route(
      {
        origin,
        destination,
        travelMode: window.google.maps.TravelMode.TRANSIT,
        region: "TW",
        unitSystem: window.google.maps.UnitSystem.METRIC,
        provideRouteAlternatives: true,
        transitOptions: {
          departureTime: new Date(),
        },
      },
      (result, status) => {
        window.clearTimeout(timer);
        if (status === "OK" && result) resolve(result);
        else reject(new Error(status));
      },
    );
  });
}

function routeWalkingMeters(route) {
  return (route.legs || []).reduce(
    (routeSum, leg) =>
      routeSum +
      (leg.steps || [])
        .filter((step) => step.travel_mode === "WALKING")
        .reduce((sum, step) => sum + (step.distance?.value || 0), 0),
    0,
  );
}

function choosePreferredRoute(result) {
  const routes = [...(result.routes || [])];
  if ($("#accessibleToggle")?.checked && routes.length > 1) {
    routes.sort((a, b) => routeWalkingMeters(a) - routeWalkingMeters(b));
  }
  return { ...result, routes };
}

function stripHtml(html) {
  const template = document.createElement("template");
  template.innerHTML = html || "";
  return template.content.textContent || template.innerText || "";
}

function extractRouteInfo(result, sourceText) {
  const route = result.routes[0];
  const leg = route.legs[0];
  const steps = leg.steps || [];
  const transitSteps = steps.filter((step) => step.travel_mode === "TRANSIT");
  const walkingMeters = steps
    .filter((step) => step.travel_mode === "WALKING")
    .reduce((sum, step) => sum + (step.distance?.value || 0), 0);
  const walkingSeconds = steps
    .filter((step) => step.travel_mode === "WALKING")
    .reduce((sum, step) => sum + (step.duration?.value || 0), 0);
  return {
    sourceText,
    summary: `${leg.start_address} → ${leg.end_address}`,
    duration: leg.duration?.text || "",
    distance: leg.distance?.text || "",
    transfers: Math.max(0, transitSteps.length - 1),
    walkMinutes: Math.max(0, Math.round(walkingSeconds / 60)),
    walkingMeters,
    departure: leg.departure_time?.text || "",
    arrival: leg.arrival_time?.text || "",
    steps,
    transitSteps,
  };
}

function renderRoute() {
  const info = state.lastRouteInfo;
  if (!info) {
    $("#routeSummary").innerHTML = `<article class="summary-card">
      <h3>${state.googleKey ? t("ready") : t("keyMissingTitle")}</h3>
      <p>${state.googleKey ? t("noRoute") : t("keyNeeded")}</p>
    </article>`;
    $("#map").innerHTML = `<div class="map-placeholder">${t("mapPlaceholder")}</div>`;
    $("#routeTimeline").innerHTML = "";
    $("#directionsPanel").innerHTML = "";
    return;
  }
  $("#routeSummary").innerHTML = `<article class="summary-card">
    <h3>${info.summary}</h3>
    <p>${t("routeIntro")}</p>
    ${metricGrid()}
    <p class="source-note">${t("sourceNote")}</p>
  </article>`;
  $("#routeTimeline").innerHTML = info.steps
    .map((step) => {
      const transit = step.transit;
      const title =
        step.travel_mode === "TRANSIT"
          ? `${transit?.line?.short_name || transit?.line?.name || "Transit"} · ${
              transit?.departure_stop?.name || ""
            } → ${transit?.arrival_stop?.name || ""}`
          : stripHtml(step.instructions);
      const meta =
        step.travel_mode === "TRANSIT"
          ? `${transit?.departure_time?.text || ""} → ${transit?.arrival_time?.text || ""}`
          : `${step.duration?.text || ""} · ${step.distance?.text || ""}`;
      const tags =
        step.travel_mode === "TRANSIT"
          ? [transit?.line?.vehicle?.name || "Transit", transit?.num_stops ? `${transit.num_stops} stops` : ""]
          : [step.travel_mode, step.distance?.text || ""];
      return `<article class="timeline-card">
        <div class="timeline-icon">${icon(step.travel_mode === "TRANSIT" ? "train-front" : "footprints")}</div>
        <div>
          <h3>${title}</h3>
          <p>${meta}</p>
          <div class="timeline-meta">${tags.filter(Boolean).map((tag) => `<span>${tag}</span>`).join("")}</div>
        </div>
      </article>`;
    })
    .join("");
  $("#directionsPanel").innerHTML = `<article class="directions-text">
    <h3>Google Directions</h3>
    ${info.steps.map((step) => `<p>${stripHtml(step.instructions)} (${step.duration?.text || ""})</p>`).join("")}
  </article>`;
  refreshIcons();
}

function renderTransitTimes() {
  const info = state.lastRouteInfo;
  if (!info) {
    $("#alertStack").innerHTML = `<article class="alert-card">
      <span class="alert-icon">${icon(state.googleKey ? "info" : "key-round")}</span>
      <div>
        <h3>${state.googleKey ? t("noRoute") : t("keyNeeded")}</h3>
        <p>${t("sourceNote")}</p>
      </div>
    </article>`;
    $("#liveBoard").innerHTML = "";
    $("#serviceNotePanel").innerHTML = "";
    return;
  }
  $("#alertStack").innerHTML = `<article class="alert-card">
    <span class="alert-icon">${icon("info")}</span>
    <div>
      <h3>Google Transit</h3>
      <p>${info.departure ? `出發 ${info.departure}，抵達 ${info.arrival}。` : t("routeIntro")}</p>
    </div>
  </article>`;
  $("#liveBoard").innerHTML = info.transitSteps
    .map((step) => {
      const transit = step.transit;
      return `<article class="live-card">
        <div>
          <h3>${transit?.line?.short_name || transit?.line?.name || "Transit"}</h3>
          <p>${transit?.departure_stop?.name || ""} → ${transit?.arrival_stop?.name || ""}</p>
        </div>
        <div class="eta"><strong>${transit?.departure_time?.text || "--"}</strong><span>${t("departAt")}</span></div>
      </article>`;
    })
    .join("");
  $("#serviceNotePanel").innerHTML = `<article class="service-note-card">
    <h3>資料來源</h3>
    <p>${t("sourceNote")}</p>
  </article>`;
  refreshIcons();
}

function saveCurrentRoute() {
  const from = $("#fromInput").value.trim();
  const to = $("#toInput").value.trim();
  if (!from || !to) return;
  const name = `${from} → ${to}`;
  const exists = state.favorites.some((item) => item.name === name);
  if (exists) {
    showToast(t("exists"));
    return;
  }
  state.favorites.unshift({ name, from, to });
  localStorage.setItem("shikito-favorites-real", JSON.stringify(state.favorites));
  renderFavorites();
  showToast(t("saved"));
}

function renderFavorites() {
  const target = $("#favoriteRoutes");
  if (!state.favorites.length) {
    target.innerHTML = `<p class="empty">${t("noFavorites")}</p>`;
    return;
  }
  target.innerHTML = state.favorites
    .map(
      (route, index) => `
      <article class="favorite-card">
        <div>
          <h4>${route.name}</h4>
          <p>${route.from} → ${route.to}</p>
        </div>
        <button type="button" data-use-favorite="${index}" aria-label="套用">${icon("play")}</button>
      </article>
    `,
    )
    .join("");
  refreshIcons();
}

function startVoice() {
  const button = $("#voiceButton");
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition) {
    showToast("此瀏覽器不支援 Web Speech API，請使用文字輸入。");
    return;
  }
  const recognition = new SpeechRecognition();
  recognition.lang = speechLang();
  recognition.interimResults = false;
  recognition.onstart = () => button.classList.add("is-listening");
  recognition.onend = () => button.classList.remove("is-listening");
  recognition.onerror = () => {
    button.classList.remove("is-listening");
    showToast("語音權限未開啟，請改用文字輸入。");
  };
  recognition.onresult = (event) => {
    const transcript = event.results[0]?.[0]?.transcript;
    if (transcript) sendQuery(transcript);
  };
  recognition.start();
}

function sendQuery(text) {
  const clean = text.trim();
  if (!clean) return;
  pushMessage({ role: "user", text: clean });
  renderMessages();
  const parsed = parseQuery(clean);
  if (!parsed) {
    pushMessage({ role: "assistant", text: t("parseFailed") });
    renderMessages();
    showToast(t("parseFailed"));
    return;
  }
  queryRoute(parsed.from, parsed.to, clean);
}

function bindEvents() {
  $$("[data-nav]").forEach((button) => {
    button.addEventListener("click", () => setView(button.dataset.nav));
  });
  $("#queryForm").addEventListener("submit", (event) => {
    event.preventDefault();
    sendQuery($("#queryInput").value);
    $("#queryInput").value = "";
  });
  $("#quickPrompts").addEventListener("click", (event) => {
    const card = event.target.closest("[data-prompt]");
    if (!card) return;
    queryRoute(card.dataset.from, card.dataset.to, `${card.dataset.from} → ${card.dataset.to}`);
  });
  $("#messageList").addEventListener("click", (event) => {
    if (event.target.closest("[data-open-route]")) {
      setView("route");
    }
  });
  $("#saveGoogleKeyButton").addEventListener("click", saveApiKey);
  $("#googleKeyInput").addEventListener("focus", (event) => {
    if (state.googleKey) event.target.value = "";
  });
  $("#voiceButton").addEventListener("click", startVoice);
  $("#accessibleToggle").addEventListener("change", () => {
    if (state.lastDirectionsRaw) {
      const result = choosePreferredRoute(state.lastDirectionsRaw);
      state.lastDirections = result;
      state.directionsRenderer?.setDirections(result);
      state.lastRouteInfo = extractRouteInfo(result, state.lastRouteInfo?.sourceText || "");
      renderRoute();
      renderTransitTimes();
    }
  });
  $("#replanButton").addEventListener("click", () => queryRoute($("#fromInput").value, $("#toInput").value));
  $("#swapRoute").addEventListener("click", () => {
    const from = $("#fromInput");
    const to = $("#toInput");
    [from.value, to.value] = [to.value, from.value];
  });
  $("#saveCurrentRoute").addEventListener("click", saveCurrentRoute);
  $$(".segmented button").forEach((button) => {
    button.addEventListener("click", () => {
      state.lang = button.dataset.lang;
      localStorage.setItem("shikito-lang", state.lang);
      translate();
    });
  });
  $("#favoriteRoutes").addEventListener("click", (event) => {
    const button = event.target.closest("[data-use-favorite]");
    if (!button) return;
    const route = state.favorites[Number(button.dataset.useFavorite)];
    if (route) queryRoute(route.from, route.to, route.name);
  });
  $("#installButton").addEventListener("click", async () => {
    if (!state.deferredInstall) {
      showToast(t("installUnavailable"));
      return;
    }
    state.deferredInstall.prompt();
    await state.deferredInstall.userChoice;
    state.deferredInstall = null;
  });
  window.addEventListener("beforeinstallprompt", (event) => {
    event.preventDefault();
    state.deferredInstall = event;
    showToast(t("installReady"));
  });
}

async function registerServiceWorker() {
  if ("serviceWorker" in navigator) {
    try {
      await navigator.serviceWorker.register("./sw.js?v=6");
    } catch (error) {
      console.info("Service worker registration skipped", error);
    }
  }
}

function boot() {
  state.messages = [{ role: "assistant", text: t("assistantGreeting") }];
  bindEvents();
  updateClock();
  window.setInterval(updateClock, 1000 * 20);
  translate();
  registerServiceWorker();
}

boot();
