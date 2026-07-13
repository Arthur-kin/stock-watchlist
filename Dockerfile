# === 第一階段：編譯原始碼 ===
FROM node:lts-alpine as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# === 第二階段：使用 Nginx 運行編譯好的靜態檔案 ===
FROM nginx:stable-alpine as production-stage
# 將第一階段打包好的 dist 資料夾，複製到 Nginx 預設存放網頁的目錄
COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
