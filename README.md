# 全栈作品集和博客项目

这是一个完整的全栈项目，包含后端 RESTful API 和前端 React 应用。

## 项目结构

```
stuck2/
├── backend/          # Node.js + Express API
└── frontend/         # React 前端应用
```

## 技术栈

### 后端
- Node.js
- Express.js
- MongoDB Atlas (Mongoose)
- JWT 认证
- bcrypt 密码加密
- Helmet 安全中间件

### 前端
- React 18
- React Router 6
- Axios
- Context API
- 鸿蒙设计风格（黄色和紫色主题）

## 快速开始

### 后端设置

1. 进入后端目录：
```bash
cd backend
```

2. 安装依赖：
```bash
npm install
```

3. 创建 `.env` 文件：
```bash
PORT=5000
MONGODB_URI=your_mongodb_atlas_connection_string
JWT_SECRET=your_super_secret_jwt_key_here
NODE_ENV=development
```

4. 启动服务器：
```bash
npm run dev  # 开发模式
# 或
npm start    # 生产模式
```

### 前端设置

1. 进入前端目录：
```bash
cd frontend
```

2. 安装依赖：
```bash
npm install
```

3. （可选）创建 `.env` 文件：
```bash
REACT_APP_API_URL=http://localhost:5000
```

4. 启动开发服务器：
```bash
npm start
```

应用将在 `http://localhost:3000` 启动。

## 功能特性

### 后端 API
- ✅ 用户认证（注册、登录、JWT）
- ✅ 项目管理（CRUD）
- ✅ 博客文章管理（CRUD）
- ✅ 评论系统
- ✅ 联系表单
- ✅ 权限控制（保护路由、作者验证）

### 前端应用
- ✅ 响应式设计
- ✅ 项目展示页面
- ✅ 博客列表和详情页
- ✅ 评论功能
- ✅ 联系表单
- ✅ 用户认证（登录/注册）
- ✅ 管理面板（项目管理、博客管理）

## API 端点

详细 API 文档请查看 [backend/README.md](./backend/README.md)

## 部署

### 后端部署
可以部署到 Render、Heroku 或其他 Node.js 托管平台。

### 前端部署
构建后可以部署到 Vercel、Netlify 等平台：

```bash
cd frontend
npm run build
```

## 设计风格

采用鸿蒙设计风格，使用黄色和紫色作为主题色：
- 主色：紫色 (#8B5CF6)
- 辅助色：黄色 (#FFD700)
- 现代化、响应式设计

## 许可证

ISC

