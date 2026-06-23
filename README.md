# 識途 Shikito 手機版 PWA 原型

此資料夾是依據 `識途Shikito甲班第十組.pdf` 製作的手機版系統。新版已改為真實 API 模式：在「我的」頁設定並驗證 Google Maps API Key 後，會呼叫 Google Maps DirectionsService 查詢大眾運輸路線。

## 執行方式

在此資料夾啟動靜態伺服器：

```bash
python3 -m http.server 5173
```

接著開啟：

```text
http://localhost:5173
```

## 已完成展示功能

- 語音/文字輸入旅程助理
- Google Maps Transit 真實路線查詢
- 地圖路線渲染與文字步驟
- 少步行偏好
- 轉乘時刻資訊
- 常用路線收藏與一鍵重播
- 中文、英文、日文、韓文介面切換
- 中文、英文、日文、韓文語音辨識語系切換
- 多語自然句解析與常見地名誤辨修正，例如「中元大學」修正為「中原大學」
- PWA manifest 與 Service Worker 離線快取

## 部署成網址

此專案是純前端靜態網站，可以部署到 GitHub Pages、Netlify、Vercel 或 Cloudflare Pages。部署後會得到一個 HTTPS 網址，可以用手機隨時打開，也可以安裝成 PWA。

最簡單的做法：

1. 到 Netlify Drop：`https://app.netlify.com/drop`
2. 將 `deploy/shikito-web` 資料夾拖進去，或上傳 `deploy/shikito-web.zip`。
3. Netlify 會產生一組網址，例如 `https://shikito-demo.netlify.app`。
4. 到 Google Cloud Console 的 API Key 設定，把 HTTP referrer 加上：

```text
https://你的網址/*
```

若使用 GitHub Pages，網址通常會是：

```text
https://你的帳號.github.io/shikito-mobile-system/
```

Google Maps API Key 的 HTTP referrer 需要加上：

```text
https://你的帳號.github.io/shikito-mobile-system/*
```

## 需要準備的 API

Google Maps API Key，請在 Google Cloud 專案啟用：

- Maps JavaScript API
- Directions API (Legacy)

建議先用 HTTP referrer 限制：

- `http://localhost:5173/*`
- 未來部署網址，例如 `https://你的網域/*`

## 檔案說明

- `index.html`：手機版主畫面
- `styles.css`：RWD 與品牌視覺
- `app.js`：Google Maps 真實路線查詢、對話、收藏與多語互動
- `manifest.webmanifest`：PWA 設定
- `sw.js`：離線快取
- `assets/shikito-icon.svg`：App 圖示
- `docs/`：SA 文件輸出位置
