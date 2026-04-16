# 阶段 1: 构建阶段
FROM node:20-alpine AS build-stage

# 设置工作目录
WORKDIR /app

# 复制 package.json 和 package-lock.json 以利用 Docker 缓存
COPY package.json package-lock.json ./

# 安装项目依赖
RUN npm install

# 复制项目所有文件
COPY . .

# 执行构建命令，生成静态文件到 docs/.vitepress/dist
RUN npm run docs:build

# 阶段 2: 运行阶段
FROM nginx:stable-alpine AS production-stage

# 将构建好的静态文件复制到 Nginx 的默认静态资源目录
# VitePress 默认构建输出路径为 docs/.vitepress/dist
COPY --from=build-stage /app/docs/.vitepress/dist /usr/share/nginx/html

# 暴露 80 端口
EXPOSE 8080

# 启动 Nginx，并保持在前台运行
CMD ["nginx", "-g", "daemon off;"]
