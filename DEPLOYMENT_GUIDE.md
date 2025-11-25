# Vercel 部署指南

本指南将帮助您将前后端项目部署到 Vercel。

## 📋 前置准备

### 1. Vercel 账号
- 访问 [Vercel](https://vercel.com)
- 使用 GitHub 账号登录（推荐）

### 2. 环境变量准备

#### 后端需要的环境变量：
- `MONGODB_URI`: MongoDB Atlas 连接字符串
- `JWT_SECRET`: JWT 密钥
- `NODE_ENV`: production

#### 前端需要的环境变量：
- `REACT_APP_API_URL`: 后端 API 地址（部署后端后获得）

---

## 🚀 部署步骤

### 第一步：部署后端 API

#### 方法 1: 通过 Vercel 网站部署（推荐）

1. **访问 Vercel Dashboard**
   - 登录 https://vercel.com/dashboard
   - 点击 "Add New..." → "Project"

2. **导入 GitHub 仓库**
   - 选择 `portfolio-blog-fullstack` 仓库
   - 点击 "Import"

3. **配置项目**
   ```
   Project Name: portfolio-blog-api
   Framework Preset: Other
   Root Directory: backend
   ```

4. **配置环境变量**
   点击 "Environment Variables"，添加以下变量：

   | Name | Value |
   |------|-------|
   | `MONGODB_URI` | `mongodb+srv://o1uzpxtk_db_user:WCGvlES8jtK7z2JH@cluster0.4khdnbf.mongodb.net/portfolio?retryWrites=true&w=majority` |
   | `JWT_SECRET` | `362f34297d24663e09b6d2b8b81fe5285966d0eb56e0e16088b52a5c752a23a0` |
   | `NODE_ENV` | `production` |

5. **部署**
   - 点击 "Deploy"
   - 等待部署完成（约 1-2 分钟）
   - **记下部署 URL**，例如：`https://portfolio-blog-api.vercel.app`

#### 方法 2: 通过 Vercel CLI 部署

```bash
# 登录 Vercel（如果还没登录）
vercel login

# 进入后端目录
cd backend

# 部署
vercel

# 添加环境变量
vercel env add MONGODB_URI production
# 输入: mongodb+srv://o1uzpxtk_db_user:WCGvlES8jtK7z2JH@cluster0.4khdnbf.mongodb.net/portfolio?retryWrites=true&w=majority

vercel env add JWT_SECRET production
# 输入: 362f34297d24663e09b6d2b8b81fe5285966d0eb56e0e16088b52a5c752a23a0

vercel env add NODE_ENV production
# 输入: production

# 重新部署以应用环境变量
vercel --prod
```

---

### 第二步：部署前端

#### 方法 1: 通过 Vercel 网站部署（推荐）

1. **创建新项目**
   - 在 Vercel Dashboard 点击 "Add New..." → "Project"
   - 再次选择 `portfolio-blog-fullstack` 仓库
   - 点击 "Import"

2. **配置项目**
   ```
   Project Name: portfolio-blog-frontend
   Framework Preset: Create React App
   Root Directory: frontend
   Build Command: npm run build
   Output Directory: build
   ```

3. **配置环境变量**
   添加后端 API 地址（使用第一步获得的 URL）：

   | Name | Value |
   |------|-------|
   | `REACT_APP_API_URL` | `https://portfolio-blog-api.vercel.app` |

   ⚠️ **重要**: 将 `https://portfolio-blog-api.vercel.app` 替换为您实际的后端部署 URL

4. **部署**
   - 点击 "Deploy"
   - 等待部署完成（约 2-3 分钟）
   - **记下前端 URL**，例如：`https://portfolio-blog-frontend.vercel.app`

#### 方法 2: 通过 Vercel CLI 部署

```bash
# 进入前端目录
cd frontend

# 部署
vercel

# 添加环境变量（使用后端部署的 URL）
vercel env add REACT_APP_API_URL production
# 输入: https://your-backend-url.vercel.app

# 重新部署
vercel --prod
```

---

### 第三步：更新后端 CORS 设置

部署完成后，需要更新后端的 CORS 配置以允许前端域名访问。

#### 选项 1: 修改代码（推荐用于生产环境）

编辑 `backend/server.js`:

```javascript
// 将这一行：
app.use(cors());

// 改为：
app.use(cors({
  origin: ['https://your-frontend-url.vercel.app', 'http://localhost:3000'],
  credentials: true
}));
```

然后提交并推送到 GitHub，Vercel 会自动重新部署。

#### 选项 2: 保持当前配置（允许所有域名）

当前配置 `app.use(cors())` 允许所有域名访问，对于测试来说足够。

---

## ✅ 验证部署

### 1. 测试后端 API

访问后端健康检查端点：
```
https://your-backend-url.vercel.app/api/health
```

应该返回：
```json
{
  "status": "OK",
  "message": "API is running"
}
```

### 2. 测试前端

访问前端 URL：
```
https://your-frontend-url.vercel.app
```

应该能看到完整的网站界面。

### 3. 测试完整功能

- ✅ 注册新用户
- ✅ 登录
- ✅ 查看项目列表
- ✅ 查看博客文章
- ✅ 创建评论
- ✅ 发送联系消息

---

## 🔧 常见问题

### 问题 1: 前端无法连接后端

**解决方案**:
1. 检查前端环境变量 `REACT_APP_API_URL` 是否正确
2. 确保后端 API 已成功部署并可访问
3. 检查浏览器控制台的 CORS 错误

### 问题 2: MongoDB 连接失败

**解决方案**:
1. 检查 MongoDB Atlas 的 Network Access
2. 添加 `0.0.0.0/0` 到 IP 白名单（允许所有 IP）
3. 确认 `MONGODB_URI` 环境变量正确

### 问题 3: 部署后页面空白

**解决方案**:
1. 检查 Vercel 部署日志
2. 确认前端构建成功
3. 检查浏览器控制台错误

### 问题 4: API 请求超时

**解决方案**:
- Vercel Serverless Functions 有 10 秒超时限制（免费版）
- 优化数据库查询
- 考虑升级到 Pro 版本（60 秒超时）

---

## 📊 部署后的 URL 结构

部署完成后，您将有以下 URL：

| 服务 | 用途 | 示例 URL |
|------|------|---------|
| 后端 API | RESTful API | `https://portfolio-blog-api.vercel.app` |
| 前端网站 | 用户界面 | `https://portfolio-blog-frontend.vercel.app` |

---

## 🔄 自动部署

Vercel 已配置为自动部署：

- **Push to `main` 分支** → 自动部署到生产环境
- **Push to 其他分支** → 创建预览部署
- **Pull Request** → 创建预览链接

---

## 🎯 下一步

1. **配置自定义域名**（可选）
   - 在 Vercel Dashboard → Settings → Domains
   - 添加您的域名并配置 DNS

2. **设置环境变量**
   - Production: 生产环境变量
   - Preview: 预览环境变量
   - Development: 开发环境变量

3. **监控和分析**
   - Vercel Dashboard 提供实时分析
   - 查看部署日志和性能指标

---

## 📝 重要提示

⚠️ **安全建议**:

1. **更改默认密钥**
   - 生成新的 `JWT_SECRET`
   - 使用安全的随机字符串

2. **MongoDB 安全**
   - 创建专用数据库用户
   - 使用强密码
   - 定期更新凭据

3. **CORS 配置**
   - 生产环境中限制允许的域名
   - 不要使用 `*` 允许所有来源

4. **环境变量**
   - 永远不要将 `.env` 文件提交到 Git
   - 在 Vercel Dashboard 中安全管理

---

## 🆘 获取帮助

如果遇到问题：

1. **查看 Vercel 文档**
   - https://vercel.com/docs

2. **检查部署日志**
   - Vercel Dashboard → Deployments → View Function Logs

3. **社区支持**
   - Vercel Discord: https://vercel.com/discord
   - GitHub Issues

---

## ✨ 部署成功检查清单

部署完成后，请确认：

- [ ] 后端 API 健康检查返回 200 OK
- [ ] 前端网站可以正常访问
- [ ] 用户注册功能正常
- [ ] 用户登录功能正常
- [ ] 项目列表可以加载
- [ ] 博客文章可以显示
- [ ] 评论功能正常
- [ ] 联系表单可以提交
- [ ] MongoDB 数据正确存储
- [ ] 所有环境变量已配置

---

**祝您部署顺利！** 🚀

如有问题，请查看 Vercel 部署日志或联系技术支持。
