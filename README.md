# 雾雪公益广告

<a href="https://github.com/cqnb/sls-lovead-service">
    <img src="https://img.shields.io/github/stars/cqnb/sls-lovead-service?color=%23181717&label=GitHub%20Repo%20stars&logo=github&style=for-the-badge"
        style="border-radius: 4px !important;" alt="GitHub Repo stars">
</a>

<a href="https://github.com/cqnb/sls-lovead-service">
    <img src="https://img.shields.io/github/last-commit/cqnb/sls-lovead-service?color=%23181717&label=GitHub%20last%20commit&logo=github&style=for-the-badge"
        style="border-radius: 4px !important;" alt="GitHub last commit">
</a>

<a href="https://github.com/cqnb/sls-lovead-service">
    <img src="https://img.shields.io/github/release-date/cqnb/sls-lovead-service?color=%23181717&label=GitHub%20Release%20Date&logo=github&style=for-the-badge"
        style="border-radius: 4px !important;" alt="GitHub Release Date">
</a>

<a href="https://github.com/cqnb/sls-lovead-service">
    <img src="https://img.shields.io/github/v/release/cqnb/sls-lovead-service?color=%23181717&label=GitHub%20release&logo=github&style=for-the-badge"
        style="border-radius: 4px !important;" alt="GitHub release (latest by date)">
</a>

一个开源的公益广告服务

### 关于作者
我是白石喵酱，在线上我是一个哔哩哔哩UP主，在线下我是一个大学生/平面设计师。虽然这个项目非常简单，但我没有系统的学习过前端知识，所以可能在代码上会出一些问题，如发现问题希望大家可以指正。

### 项目初衷
类似于公益404，希望能通过微薄之力帮助需要帮助的人。这个项目会收集一些帮助/扶持/救灾等项目并以广告的形式显示。当然这是无偿的。

## 快速开始
1. 创建标签
```html
<div id="sls_lovead"></div>
```

2. 引入js
```html
<script src="https://cqnb.github.io/sls-lovead-service/api/lovead.js"></script>
```
| 广告大小 | 描述 |
| ------------ | --------------- |
| `lovead.js` | 16:9广告 |
| `wlovead.js` | 长广告 (未完成) |

3. 引入css
```html
<style>
    @import url("https://cqnb.github.io/sls-lovead-service/css/lovead.css");
</style>
```

## 示例
```html
<div id="sls_lovead"></div>
<script src="https://cqnb.github.io/sls-lovead-service/api/lovead.js"></script>
<style>
    @import url("https://cqnb.github.io/sls-lovead-service/css/lovead.css");
</style>
```

### 使用jsDelivr CDN
```html
<div id="sls_lovead"></div>
<script src="https://cdn.jsdelivr.net/gh/cqnb/sls-lovead-service/api/lovead.js"></script>
<style>
    @import url("https://cdn.jsdelivr.net/gh/cqnb/sls-lovead-service/css/lovead.css");
</style>
```

## 待办
- [x] 支持一个页面多个同规格广告
- [x] 修改部分功能实现形式

## 关于内容
在公益广告内容方面本站/雾雪梦创/白喵影像仅提供广告展示服务，出现任何问题与我们无关。

### 举报
china_zyxs@163.com
主题: 雾雪公益广告内容举报
收到邮件会在一个月内回复，没有回复麻烦您重新发送一下。

### 投稿
china_zyxs@163.com
主题: 雾雪公益广告内容投稿
收到邮件会在一个月内回复，没有回复麻烦您重新发送一下。

### 联系我
china_zyxs@163.com
收到邮件会在一个月内回复，没有回复麻烦您重新发送一下。

## 标签 ID
| ID | 描述 |
| ----------------- | ------------ |
| `sls_lovead` | 广告主体 |
| `sls_lovead_div` | 广告内容主体 |
| `sls_lovead_text` | 广告文字图片 |
| `sls_lovead_img` | 广告图片 |