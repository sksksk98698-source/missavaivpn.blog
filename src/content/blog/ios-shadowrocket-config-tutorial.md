---
title: "Shadowrocket 小火箭保姆级使用教程：从美区 Apple ID 获取、订阅导入到智能分流"
category: "客户端教程"
excerpt: "苹果 iPhone 和 iPad 用户如何获取并使用 Shadowrocket（小火箭）？详尽步骤讲解海外账号注册、节点一键导入、开启代理与分流规则最佳实践。"
date: 2026-03-18
author: "missavai 实验室"
authorRole: "移动端安全架构师"
authorOrg: "missavaiVPN"
avatar: "/assets/avatar-sophie.webp"
cover: "/assets/post-onboarding.webp"
---

在 iOS 生态中，**Shadowrocket（俗称小火箭）** 是公认最成熟、稳定性最好且操作门槛最低的代理工具。由于国内 App Store 无法直接搜索上架，很多苹果用户在第一步就被难住了。

本文由 missavaiVPN 评测实验室为你梳理从获取应用到导入机场订阅的完整闭环教程。

---

## 一、如何下载正版 Shadowrocket？

### 步骤 1：准备一个外区 Apple ID（美区或港区）
Shadowrocket 在外区 App Store 售价为 $2.99。你可以通过以下两种方式获取：
1. **自行免费注册一个美区 Apple ID：** 准备一个全新未注册过苹果账号的邮箱，在苹果官网地区选择美国，免信用卡绑定；
2. **使用正规购买的外区礼品卡或机场提供的公用/合租账号：** 绝大多数优质机场（如 [光速云](/airports/guangsu)）用户中心均提供详细的苹果账号获取通道或客户端协助服务。

### 步骤 2：登录 App Store 下载正版应用
1. 打开 iPhone 自带的 **App Store**（切勿在设置中登录 iCloud，仅在 App Store 商店内登录！）；
2. 点击右上角头像退出原有国区账号，输入外区账号和密码登录；
3. 搜索 **Shadowrocket**（认准开发者为 *Shadow Launch Technology Limited*，图标为一个白色小火箭在浅蓝背景中）；
4. 下载完成后退出外区账号，换回日常账号即可正常使用。

---

## 二、一键导入机场订阅

1. 打开 Safari 浏览器，登录你购买的机场用户后台（推荐使用榜首 [光速云](/airports/guangsu)）；
2. 找到「便捷导入」或「一键订阅」按钮，选择「导入到 Shadowrocket」；
3. 系统会自动跳转唤醒小火箭客户端，并自动完成节点列表的拉取与更新；
4. 若自动跳转未成功，可选择「复制订阅链接」，在小火箭首页点击右上角 `+` 号，类型选择 `Subscribe`，在 URL 输入框中粘贴链接并点击右上角「保存」即可。

---

## 三、推荐全局配置：开启智能分流 (Config)

在 Shadowrocket 底部导航栏中：
1. **全局路由选择「配置 (Config)」：** 默认内置的精细化分流规则集会自动识别访问流量。访问百度、微信、淘宝等国内服务走 Direct 直连，不消耗机场流量且零延迟；访问 Google、YouTube、ChatGPT 时自动走选中节点；
2. **选择最优低延迟节点：** 点击「连通性测试」，选择 Ping 延迟最低且绿标的专线节点（如香港或日本）；
3. **开启顶部开关：** 首次开启时 iOS 系统会弹出「添加 VPN 配置」授权弹窗，点击允许并验证面容或指纹，顶部状态栏显示 VPN 标识即可畅通无阻！
