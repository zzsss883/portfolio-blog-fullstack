#!/bin/bash

echo "🚀 开始部署新UI到Vercel..."
echo ""

# 进入前端目录
cd "$(dirname "$0")/frontend"

# 清理旧的构建
echo "📦 清理旧的构建文件..."
rm -rf build

# 安装依赖
echo "📥 安装依赖..."
npm install --legacy-peer-deps

# 构建项目
echo "🔨 构建项目..."
npm run build

# 检查构建是否成功
if [ ! -d "build" ]; then
    echo "❌ 构建失败！"
    exit 1
fi

echo "✅ 构建成功！"
echo ""

# 检查是否已登录 Vercel
echo "🔐 检查 Vercel 登录状态..."
if ! vercel whoami 2>/dev/null; then
    echo "❌ 未登录 Vercel，请先运行: vercel login"
    exit 1
fi

echo "✅ 已登录 Vercel"
echo ""

# 部署到 Vercel
echo "🚀 部署到 Vercel..."
vercel --prod --yes

echo ""
echo "🎉 部署完成！"
echo ""
echo "访问您的网站查看新UI："
echo "https://frontend-hm66vf4ma-dsadas-projects-99e7ef69.vercel.app"
