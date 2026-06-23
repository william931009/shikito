# 識途 Shikito

識途 Shikito 是一個手機版智慧軌道隨行系統 PWA，目標是讓使用者用一句自然語句查詢大眾運輸路線。使用者可以輸入或語音說出「我要從高雄火車站到中原大學」這類需求，系統會解析出起點與目的地，並透過 Google Maps DirectionsService 查詢真實 Transit 路線。

本專案是純前端靜態網站，沒有後端伺服器，可直接部署到 GitHub Pages。

## 線上展示

GitHub Pages 網址：

```text
https://你的帳號.github.io/shikito-web/
```

請將上方網址替換成實際部署後的 GitHub Pages 網址。

## 主要功能

- 手機版 PWA 介面，可用瀏覽器開啟，也可加入手機主畫面。
- 文字輸入旅程需求，例如「我要從高雄火車站到中原大學」。
- 語音輸入，支援中文、英文、日文、韓文語音語系。
- 多語自然句解析，支援中文、英文、日文、韓文常見起訖點句型。
- 地名誤辨修正，例如「中元大學」、「中源大學」、「中園大學」會修正為「中原大學」。
- Google Maps API Key 設定放在「我的」頁，不顯示在首頁。
- API Key 會先驗證，驗證成功才存入瀏覽器 localStorage。
- Google Maps Transit 真實路線查詢。
- 地圖路線顯示、路線摘要、逐段步驟與轉乘資訊。
- 少走路優先偏好。
- 常用路線收藏與一鍵重播。
- 中文、英文、日文、韓文介面切換。
- Service Worker 離線快取基礎。

## 使用技術

- HTML
- CSS
- JavaScript ES Modules
- Google Maps JavaScript API
- Google Maps Directions API (Legacy)
- Web Speech API
- PWA Manifest
- Service Worker
- localStorage

## Google Maps API 設定

本系統不會把 Google Maps API Key 寫在程式碼裡。使用者需要到系統的「我的」頁自行輸入 API Key。

Google Cloud 專案需啟用：

- Maps JavaScript API
- Directions API (Legacy)

建議在 Google Cloud Console 對 API Key 設定 HTTP referrer 限制。

本機測試可加入：

```text
http://localhost:5173/*
```

GitHub Pages 可加入：

```text
https://你的帳號.github.io/shikito-web/*
```

如果 repository 名稱不是 `shikito-web`，請改成實際的 GitHub Pages 路徑。

## 本機執行

進入專案資料夾後啟動靜態伺服器：

```bash
python3 -m http.server 5173
```

開啟：

```text
http://localhost:5173
```

## GitHub Pages 部署

1. 將此資料夾內容上傳到 GitHub repository。
2. 進入 repository 的 `Settings`。
3. 左側選擇 `Pages`。
4. `Build and deployment` 選擇 `Deploy from a branch`。
5. Branch 選擇 `main`，資料夾選擇 `/root`。
6. 儲存後等待 GitHub Pages 部署完成。
7. 將 GitHub Pages 網址加入 Google Maps API Key 的 HTTP referrer。
8. 開啟網站，進入「我的」頁輸入 API Key，即可開始查詢路線。

## 專案檔案

```text
shikito-web/
├── index.html
├── styles.css
├── app.js
├── manifest.webmanifest
├── sw.js
├── assets/
│   └── shikito-icon.svg
└── README.md
```

## 注意事項

- 請不要把自己的 Google Maps API Key 寫進 README 或程式碼。
- API Key 建議只允許自己的 GitHub Pages 網址與本機測試網址使用。
- Google Maps 路線結果會依 Google Maps 回傳資料、API 啟用狀態、帳單狀態與地區支援而不同。
- Web Speech API 在不同瀏覽器與手機系統上支援程度可能不同。
