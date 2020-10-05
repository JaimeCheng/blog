---
layout: post
title:  "Gitee+-——-码云微信小程序的从零到一"
date:   2020-02-29 18:08:00 +0800
categories: 小程序
---

2019年初就有这个想法了，一直拖到现在才完成真的欠揍...本想写 GitHub 但是这个小程序有很多了，想着我们国产的码云我也总用，这个还没有一个我用着顺手的小程序，于是 Gitee+ 就诞生了。仓库地址附在文末。

### 准备工作
在开发 Gitee+ 之前，有两个问题需要确定：
- 码云 api
- markdown 语法解析

第一个问题，[码云OpenAPI](https://gitee.com/api/v5/swagger#/getV5ReposOwnerRepoStargazers?ex=no) 其实很完善，但是我想在展示推荐项目和热门项目还有热门搜索词条，并没有这个API，怎么办？自己动手丰衣足食。最开始是托朋友用php爬虫实现，后来想着小程序有云开发啊干嘛要准备多余的服务端呢？两个云函数搭配 `cheerio` 即可轻松实现我的需求！
第二个问题，markdown 语法解析基本是这个小程序最重要的地方了。2019年有这个想法的时候就关注了几个相关开源仓库终于派上用场。
- [html2wxml](https://github.com/qwqoffice/html2wxml)
- [wxParse](https://github.com/icindy/wxParse)
- [towxml](https://github.com/sbfkcel/towxml)
- [wemark](https://github.com/TooBug/wemark)
每个我都做了试用，`towxml` 基本是目前开源里最完美的渲染markdown库了。在这再次感谢作者开源！
问题都得以解决，可以着手开发了！😝

### 技术选型
微信小程序是我看官方文档学习的，所以我对原生语法非常之熟悉，最终还是决定用原生写，有机会再尝试下别的框架...
数据来源就是 [码云OpenAPI](https://gitee.com/api/v5/swagger#/getV5ReposOwnerRepoStargazers?ex=no) 和小程序的云开发；
UI 上面使用了有赞 [Vant Weapp](https://youzan.github.io/vant-weapp/#/intro) 的若干组件。

### 开发之前
我并不懂设计，也不会用PS😅，logo是在 [logoko](https://www.logoko.com.cn/) 在线制作的，界面设计是我翻烂了站酷、花瓣然后硬生生自己想出来的，费了我不少功夫。😅 仓库主页的设计参考了一下[Gitter](https://github.com/huangjianke/Gitter)。

Gitee+ 的主要功能就是 **按语言筛选推荐项目**、**用户/项目搜索**、**用户个人主页**，再往细了说就是 仓库列表、仓库内容、用户登录、用户主页、用户列表。
确定了功能后就能选出自己需要的 api 和小程序的页面，然后就是写页面接数据了。

### 开发中的问题
**主要就是文件和图片解析**

其中的难点就是markdown语法解析和项目文件的解析。前者已经在准备工作中得到解决，md文件不用说了直接用 towxml 渲染就可以了。但是像 `.js`，`.json`，`css`等文件不能直接用 towxml 渲染，刚开始我直接把内容输出到页面上，但没有格式很难看，灵机一动想到一个好主意！！获取到文件后缀基本就算获取到文件语言了，直接在文件内容前后拼接上代码块在放到 towxml 渲染！对于 `wxml` 和 `wxss` 直接将它们认为 `html` 和 `css`，就算后缀不是正确的文件语言，经测试也能很好的带格式渲染出来，开心！！
```js
 content = '```' + this.data.type + '\n' + content + '\n```'
```
例如：
![sql](https://upload-images.jianshu.io/upload_images/3981371-452f0d636a1f9352.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
然后代码渲染的问题解决了，还有图片的问题来了。刚开始我直接把图片视为普通文件把base64解密后直接输出，显示的就是一堆乱码。后来想了想应该直接放在 `image` 标签里，可以直接显示base64图像的啊！为什么之前没想到😒
```js
content = 'data:image/png;base64,' + res.content
```
```html
<image src="{{ content }}" mode="widthFix"></image>
```

### 待解决问题
普通图片的问题已经解决了，`svg` 还没有解决，另外可能还有什么字体文件之类，但这些没 `svg` 紧急，`svg` 有方案的大佬快来告诉我，我试了几种方案没有成功，最近略忙也搁置了，解决后会来更新！


### 最后
欢迎各位大佬前来指点一番！！！
[Gitee+ 仓库地址](https://github.com/JaimeCheng/weapp-gitee) 手里有star的铁子们给个star啊！！🤤
![扫码体验 Gitee+](https://upload-images.jianshu.io/upload_images/3981371-624e8a3c6dcd33d1.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)



