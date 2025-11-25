# Portfolio & Blog Frontend

这是个人作品集和博客的前端应用，使用 React 构建。

## 技术栈

- React 18
- React Router 6
- Axios
- Context API (状态管理)

## 功能特性

- 🏠 首页展示
- 📁 项目展示页面
- 📝 博客列表和详情页
- 💬 评论功能（需要登录）
- 📧 联系表单
- 🔐 用户认证（登录/注册）
- 🛠️ 管理面板（项目管理、博客管理）

## 安装和运行

```bash
npm install
npm start
```

应用将在 `http://localhost:3000` 启动。

## 环境变量

创建 `.env` 文件（可选）：

```
REACT_APP_API_URL=http://localhost:5001
```

如果不设置，默认使用 `http://localhost:5000`（需要手动修改代码中的默认值）。

**注意**：后端服务器运行在端口 5001。

## 构建部署

```bash
npm run build
```

构建后的文件在 `build` 目录，可以部署到 Vercel、Netlify 等平台。

## 设计风格

采用鸿蒙设计风格，使用黄色和紫色作为主题色：
- 主色：紫色 (#8B5CF6)
- 辅助色：黄色 (#FFD700)
- 现代化、响应式设计

## 路由

- `/` - 首页
- `/projects` - 项目展示
- `/blog` - 博客列表
- `/blog/:id` - 博客详情
- `/contact` - 联系表单
- `/login` - 登录
- `/register` - 注册
- `/admin` - 管理面板（需要登录）

