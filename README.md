# React App

這是一個使用 React 與 Vite 建立的專案。

## 專案啟動

### 1. 安裝依賴套件

請先確保你的環境已安裝 Node.js，接著在專案根目錄執行：

```bash
npm install
```

### 2. 啟動開發伺服器

執行以下指令來啟動本地開發伺服器：

```bash
npm run dev
```
這將會在 `http://localhost:3000` 啟動專案（依據 `package.json` 中的設定）。

### 3. 建置專案 (Production)

若要打包專案以供部署，請執行：

```bash
npm run build
```
打包後的檔案會存放在 `dist` 資料夾中。

---

## 部署 (GitHub Actions)

專案已設定好 GitHub Actions (`.github/workflows/deploy.yml`)。
當你推送程式碼到 `main` 或 `master` 分支時，GitHub Actions 會自動幫你進行建置，並透過 **GitHub Pages** 部署。

請確保：
1. 進入 GitHub 儲存庫的 **Settings** -> **Pages**。
2. 在 **Build and deployment** 區塊，將 **Source** 設為 **GitHub Actions**。

---

## 檔案過濾 (.gitignore)

專案已預設忽略了以下檔案，以避免不必要的檔案被推送到儲存庫中：
- 依賴套件 (`node_modules/`)
- 編譯輸出 (`dist/`, `build/`)
- 環境變數 (`.env`)，但保留了 `.env.example` 供參考
- 編輯器設定與暫存檔 (`.vscode/`, `.idea/`, `.DS_Store` 等)
