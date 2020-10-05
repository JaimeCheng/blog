---
layout: post
title:  "移动端巧用margin-padding的百分比实现自适应"
date:   2017-07-03 15:53:00 +0800
categories: 前端笔记
---

今天遇到了一个曾经认为的世纪大难题----图片完美的自适应；

### 重要！敲黑板，划重点！！
>当`margin/padding`取值形式为百分比的值时，无论是`left/right`，还是`top/bottom`，都是以`父元素的width`为参照物的！-----来自W3C标准

所以，很有必要深入研读下W3C规范；
### 举个栗子
要求：在每个原图长宽比例不同的情况下，实现如图的效果，且图片宽高是百分比；
#### 前提是不使用js
![image.png](https://upload-images.jianshu.io/upload_images/3981371-88ca3c4d0265a255.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

### 我之前的错代码


```html
<li>
      <img src="">
      <img src="">
      <img src="">
</li>
```

```html
li{
   width:100%;
}
li img {
	width: 32%;
	float: left;
	margin-right: 2%; 
}
```
结果是这样的————按照图片原始比例高度自适应的；<br>
![image.png](https://upload-images.jianshu.io/upload_images/3981371-736177182d47962b.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

### 解决办法--设置容器的子元素或伪元素padding-bottom/top
使用`margin/padding的百分比值`来解决自适应高度的关键在于：<br>

容器`margin/padding的百分比`参照物是父元素的宽度，而容器的width的百分比参照物也是父元素的宽度，俩属性参照物一致，那么想要把这俩属性的值统一起来就很简单了；

给`img`加一个`div父容器`，用`百分比`给div一个宽，`高`则给父容器的`伪元素padding-bottom的百分比`来占位。容器做好之后，`img`用相对定位t`op:0;left:0;width:100%;height:100%`填满整个`div`就ok了。经测试，直接给父容器加`padding-bottom百分比`也可以，但是加在伪元素上更好；

```html
<li>
     <div class="flex-pic">
            <img src="">
     </div>
     <div class="flex-pic">
            <img src="">
     </div>
     <div class="flex-pic">
            <img src="">
     </div>
</li>
```
```css

li{
    width:100%;
}
li  .flex-pic{

	width: 32%;

	float: left;

	margin-right: 2%; 

	margin-top: 8px;

	position: relative;

	z-index: 2;

	overflow:hidden; 

	background:center center no-repeat;

}

.flex-pic:before{

	content: "";

	display:inline-block;

	padding-bottom:75%;

	width: 100%;

	pointer-events: none;

	z-index: -1;	

}

.flex-pic img{

	width:100%; 

	height:100%; 

    position:absolute;

    top: 0;

    left: 0;

}

```

### 总结
自适应的精髓在于宽度，`margin/padding设置百分比`弥补了元素高度无法自适应地与元素宽度保持一致的缺陷；

