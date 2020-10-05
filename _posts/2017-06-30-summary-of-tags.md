---
layout: post
title:  "常用标签元素及含义汇总"
date:   2017-06-30 14:09:00 +0800
categories: 前端笔记
---

### head中常用结构及含义

```html
<html>
  <head>   
    <!-- meta 元标记 供机器识别 -->
    <meta charset="utf-8">
    <meta name="renderer" content="webkit" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="format-detection" content="telephone=no" />
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <base href="http://www.oczm.top" target="_blank">
    <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
    <link href="css.css" rel="stylesheet" />
    <script src="js.js"></script>
    <title>HTML5常用结构及含义</title>
    <meta name="keywords" content="html5,html" />
    <meta name="description" content="常用结构及含义" />     
  </head>          
 </html>
```
 常见知名引擎如下：
     Trident-IE的内核；
     Gecko-火狐的内核；
     WebKit-谷歌浏览器内核；
#### 含义

+  告知浏览器使用 webkit内核（360等很多双核浏览器，使浏览器就会自动切换选择兼容模式，还是极速模式。）；
`<meta name="renderer" content="webkit" />`
+ 如果用户使用是IE浏览器自动切换最新版本（因为IE11,也同时包含了IE78910等系列版本）；
 `<meta http-equiv="X-UA-Compatible" content="IE=edge" />`   
 声明当前页面用chrome内核来渲染；
`< meta http-equiv = "X-UA-Compatible" content = "chrome=1" >`
复杂一些的就是：
`< meta http-equiv = "X-UA-Compatible" content = "IE=edge,chrome=1" />`
这样写可以达到的效果是如果安装了GoogleChromeFrame，则使用GCF来渲染页面，如果为安装GCF，则使用最高版本的IE内核进行渲染；
+ 禁止移动端把数字自动识别为电话号码；
`<meta name="format-detection" content="telephone=no" />`
+ viewport视窗。主要用在移动端，含义是内容宽度使用设备宽度，初始尺寸为正常大小；
 后面还两个参数《user-scalable=no,maximum-scale=1.0》是否允许用户缩放参数可以忽略（因为受到手机影响一般用户都可以自己缩放）    ；

        <meta name="viewport" content="width=device-width,initial-scale=1.0">
        <meta name="viewport" content="width=device-width,user-scalable=no,initialscale=1.0,maximum-scale=1.0">

+ `<base>` 该标签作为HTML文挡中所有链接标签的默认跳转链接；
 `<base href="http://www.oczm.top" target="_blank">`   

+ 在浏览器地址栏左边（或浏览器选项卡上方）显示的小图标 ，图标请使用favicon.ico名称和格式，其他格式也行但是兼容性没有ico格式好。也可以简写；

        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="ico图像的路径" />
    
<hr>

### 块状元素和行内元素区别

#### 块状元素（块状标签）
1、宽度默认，100%；
2、高度，默认内容有多大就有多高；
3、独占一行；

	<div>-  不知道用哪个，就用div
	<header>- 头部
	<footer> - 尾部
	<nav> - 导航
	<section> - 区域
	<article>  - 文章
	<aisde>  - 侧边栏
	<address> - 地址
	<p> - 段落
	<ul  li>   - 列表
	<ol  li >
	...
	
#### 行内元素（行内标签）
1、不换行；
2、不能识别宽度和高度，内容决定宽高 可能忽视上下边距的存在；

	<span>
	<b>   
    <i>  
    <em>
	<time>   
    <strong>
	<sup>  上标   
    <sub>  下标
	...
	
#### 行内块状元素
同时拥有行内元素和块状的特征；
所有行内元素、块状元素、行内块状都可以相互转换；

    display:inline-block;
    display: block;
    display:inline-block；
 
<hr>
#### h5新增布局元素
  `hgroup, header, aside, nav, section, article, footer, time, address,
  figure, figcaption, details 等...`
#### 内容存放型最常用标签
  `h1-h6,  a, img, span, b,  strong, em,  i,  code,  pre ` 
#### 多媒体型
  `embed、 canvas、audio、video、source`
#### 自定义标签与h5标签兼容问题
所有布局型标签都可以通过在CSS和JS上面加如下格式即可兼容老浏览器；
```html
<style>
       nav{display:block;}   
</style>  
       
<script>
        document.createElement("nav");
</script>
```
  



