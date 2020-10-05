---
layout: post
title:  "解决外边距塌陷(margin-collapse)的对策汇总"
date:   2017-07-11 13:23:00 +0800
categories: 前端笔记
---

#### 有这么一段代码
```html
<style type="text/css">
 *{
    margin: 0;
 }   
 .out{
    width: 200px;
    height: 200px;
    background: paleturquoise;
  }
  .in{
     width: 100px;
     height: 50px;
     margin: 30px auto;
     background: pink;
  }
 </style>
     
<body>
    <div class="out">
         <div class="in"></div>
    </div>
</body>
```
#### 它本来应该是酱婶儿的 ↓
![image.png](https://upload-images.jianshu.io/upload_images/3981371-b4ae38100c8ba81d.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

#### 结果 却是酱婶儿的(黑人问号.jpg)...  
![image.png](https://upload-images.jianshu.io/upload_images/3981371-aed3527336abc8b2.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

嵌套的两个div。本该是子div距离父div上边 30px的距离的，现在却是父div随着子div走了30px，两个上边重叠了；
两个垂直相邻的边距  没有任何真实东西填充以分隔二者，于是外边距合并了，此之谓`边距塌陷`；
总之就是两个盒子的垂直外边距或者 ，垂直方向的两条边距接触了不一定非得两个盒子完全接触才会形成 这种塌陷；
> 塌陷只存在与相邻的垂直外边距，即只涉及到margin-top/bottom，水平（margin-left/rignt无）<br>

知道问题所在了 ，就拿东西去填充分隔它们。比如` padding 和 border`；
网上还有一种说法就是 让其中一个脱离文档流，亲测可行。`即absolute 和float`；
最后一种 给父div加溢出的css  `overflow`，亲测也可行，~~但不太理解其中原理~~；
~~在我看来 overflow:hidden;是一个总能在特殊时刻解决问题的东西；~~
`overflow: hidden;` 其实就是触发了 [BFC](https://www.jianshu.com/p/040546c79025)，感谢简书小伙伴的提醒；
通过各方搜索，汇总出如下方案----给父元素加如下样式；

+ `border:1px solid transparent;`
+ `padding:1px;`
+ `float:left/right`
+ `position:absolute`
+ `display:inline-block`
+ `overflow:hidden/auto`

#### 最后再附上参考[demo](https://jsfiddle.net/JaimeCheng/9tq0m7py/)









