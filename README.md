# 深蓝之下 · Jekyll 静态站点

基于 Jekyll 构建的深海科普主题静态站点，包含单页图鉴首页、博客文章系统、关于页，纯 HTML/CSS/JS 实现，无外部依赖。

## 项目结构

```
deep-blue-blog/
├── _config.yml              # 站点全局配置
├── Gemfile                  # Ruby 依赖声明
├── .gitignore               # Git 忽略规则
├── index.html               # 首页（深海图鉴单页）
├── blog.html                # 博客列表页
├── about.md                 # 关于页
├── _layouts/
│   ├── default.html         # 默认布局（组合 head/nav/content/footer）
│   ├── post.html            # 博客文章布局
│   └── page.html            # 普通页面布局
├── _includes/
│   ├── head.html            # <head> 部分（meta、样式引用、SEO）
│   ├── nav.html             # 顶部导航栏
│   └── footer.html          # 页脚 + 回到顶部按钮 + JS 引用
├── _posts/
│   ├── 2026-09-05-five-ocean-zones.md       # 示例文章：五层海洋深度带
│   └── 2026-09-05-deep-sea-bioluminescence.md # 示例文章：深海生物发光
└── assets/
    ├── css/
    │   └── style.css        # 全站样式（含首页、博客、响应式）
    └── js/
        └── main.js          # 全站脚本（气泡、滚动显现、数字动画、回到顶部）
```

## 本地运行

### 1. 安装 Ruby 环境

- **Windows**：下载 [RubyInstaller](https://rubyinstaller.org/)，安装带 Devkit 的版本
- **macOS**：`brew install ruby`
- **Linux (Ubuntu/Debian)**：`sudo apt-get install ruby-full build-essential`

### 2. 安装依赖

```bash
cd deep-blue-blog
gem install bundler
bundle install
```

> 国内用户建议先切换 Ruby 镜像源加速下载：
> ```bash
> gem sources --add https://gems.ruby-china.com/ --remove https://rubygems.org/
> ```

### 3. 启动本地预览

```bash
bundle exec jekyll serve
```

启动后访问 `http://localhost:4000` 即可预览站点，修改文件后会自动增量构建。

### 4. 生产构建

```bash
bundle exec jekyll build
```

构建产物输出到 `_site/` 目录，可直接部署到任意静态托管平台。

## 部署配置

### GitHub Pages
- 推送代码到 GitHub 仓库，开启 Pages 即可，GitHub 原生支持 Jekyll 自动构建
- 构建命令：自动识别，无需配置
- 输出目录：自动

### Cloudflare Pages
- 框架预设：`Jekyll`
- 构建命令：`bundle exec jekyll build`
- 输出目录：`_site`

### 阿里云 ESA Pages
- 框架预设：`Jekyll`
- 构建命令：`bundle exec jekyll build`
- 输出目录：`_site`

### CODING Pages / 静态网站
- 构建命令：`bundle exec jekyll build`
- 输出目录：`_site`

## 写作指南

### 新建文章

在 `_posts/` 目录下创建 Markdown 文件，文件名必须遵循 `YYYY-MM-DD-文章标题.md` 格式。

文章开头需要包含 Front Matter：

```yaml
---
layout: post
title: 文章标题
date: 2026-09-05 10:00:00 +0800
categories: 分类名
tags: [标签1, 标签2]
description: 文章摘要描述
---
```

正文使用标准 Markdown 语法编写。

### 新建页面

在项目根目录创建 `.md` 或 `.html` 文件，指定 `layout: page` 和 `permalink` 即可。

## 自定义配置

编辑 `_config.yml` 可修改：
- `title` / `subtitle`：站点标题与副标题
- `description`：站点描述（用于 SEO）
- `author` / `email`：作者信息
- `url` / `baseurl`：部署域名与子路径
- `paginate`：博客列表每页文章数

## 技术栈

- **构建引擎**：Jekyll 4.x
- **模板语言**：Liquid
- **样式**：原生 CSS（深海主题配色，CSS 变量管理）
- **脚本**：原生 JavaScript（无框架依赖）
- **插件**：jekyll-feed、jekyll-seo-tag、jekyll-sitemap、jekyll-paginate
