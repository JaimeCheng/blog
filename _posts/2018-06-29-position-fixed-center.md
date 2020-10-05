---
layout: post
title:  "position-fixed-的元素居中显示"
date:   2018-06-29 12:08:00 +0800
categories: 前端笔记
---

标题本身是个很简单是事，因为一般body宽度都是100%； 
很久没写html，今天写一个小页面的时候突然遇到了，记录一下；
body宽度我设置的是640px，所以有个`fixed`的元素没居中；

>position:fixed 生成绝对定位的元素，相对于浏览器窗口进行定位。

让其居中的css：
```css
  div {
     position: fixed;
     margin: auto;
     left: 0;
     right: 0;
   }
```
