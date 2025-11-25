# Portfolio & Blog API

这是一个完整的 RESTful API，用于管理个人作品集和博客内容。

## 技术栈

- Node.js
- Express.js
- MongoDB Atlas (Mongoose)
- JWT 认证
- bcrypt 密码加密
- Helmet 安全中间件

## 环境变量

`.env` 文件已配置完成，包含以下变量：

```
PORT=5001
MONGODB_URI=mongodb+srv://o1uzpxtk_db_user:WCGvlES8jtK7z2JH@cluster0.4khdnbf.mongodb.net/portfolio?retryWrites=true&w=majority
JWT_SECRET=362f34297d24663e09b6d2b8b81fe5285966d0eb56e0e16088b52a5c752a23a0
NODE_ENV=development
```

**注意**：端口设置为 5001（因为 macOS 的 AirPlay 服务占用了 5000 端口）

## 安装和运行

```bash
npm install
npm run dev  # 开发模式
npm start    # 生产模式
```

## API 端点

### 用户认证

- `POST /api/users/register` - 注册新用户
  - Body: `{ "username": "string", "email": "string", "password": "string" }`

- `POST /api/users/login` - 用户登录
  - Body: `{ "email": "string", "password": "string" }`
  - Returns: JWT token

### 项目 (Projects)

- `GET /api/projects` - 获取所有项目 (公开)
- `GET /api/projects/:id` - 获取单个项目 (公开)
- `POST /api/projects` - 创建项目 (需要认证)
  - Headers: `Authorization: Bearer <token>`
  - Body: `{ "title": "string", "description": "string", "imageUrl": "string", "repoUrl": "string", "liveUrl": "string" }`
- `PUT /api/projects/:id` - 更新项目 (需要认证)
- `DELETE /api/projects/:id` - 删除项目 (需要认证)

### 博客 (Blog)

- `GET /api/blog` - 获取所有博客文章 (公开)
- `GET /api/blog/:id` - 获取单个博客文章及评论 (公开)
- `POST /api/blog` - 创建博客文章 (需要认证)
  - Headers: `Authorization: Bearer <token>`
  - Body: `{ "title": "string", "content": "string" }`
- `PUT /api/blog/:id` - 更新博客文章 (需要认证，仅作者)
- `DELETE /api/blog/:id` - 删除博客文章 (需要认证，仅作者)

### 评论 (Comments)

- `GET /api/blog/:postId/comments` - 获取文章的所有评论 (公开)
- `POST /api/blog/:postId/comments` - 创建评论 (需要认证)
  - Headers: `Authorization: Bearer <token>`
  - Body: `{ "body": "string" }`

### 联系表单 (Contact)

- `POST /api/contact` - 发送联系消息 (公开)
  - Body: `{ "name": "string", "email": "string", "message": "string" }`

## 部署

API 可以部署到 Render、Heroku 或其他 Node.js 托管平台。

