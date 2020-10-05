---
layout: post
title:  "CSS浮动塌陷和一点关于浮动的事儿"
date:   2017-07-16 10:20:00 +0800
categories: 前端笔记
---

把浮动塌陷拿出来做文章是因为之前没深究过它的原理，导致在布局中常因为浮动塌陷撑不开div而苦恼；
借此写个总结加深记忆，也顺便说说浮动和定位的那点事...
### 何谓“浮动塌陷”
先看一段代码
```html
<style type="text/css">
            #aa{
                margin: 100px 100px;
                width: 500px;
                 height: auto;
                border: 2px solid blueviolet;
            }
            #ff{
                width: 50px;
                height: 100px;
                float: left;
                border: 2px solid red;
            }
</style>

 <body>
        <div id="aa">
            <div id="ff">

            </div>
        </div>
 </body>
```
代码运行结果如图：紫色div本应被红div撑开；
但由于红div浮动后脱离文档流导致紫div没有同一文档流的子元素，而heiight也没设定值，空的紫色div上下边就重合了。这就是浮动导致的`浮动塌陷`；

![浮动塌陷](https://upload-images.jianshu.io/upload_images/3981371-3eb051755e2259bf.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

### 那么如何解决浮动塌陷？？
1. 给父元素加`overflow:hidden`；
   这种方法可能会导致下拉框等内容不可见，慎用；

2. 给父元素加`float:left/right`；
   使用此方法 要注意浮动对布局是否有影响；

3. 给父元素加`position:absolute`；
   注意事项 同上；

4. 在浮动元素末尾添加一个空的标签例如 `<div style=”clear:both”></div>`；
   有人说这种方式引入了不必要的冗余元素；

5. 父元素的`after伪元素`设置`clear`属性`.clearfix:after{...}`；
   别人都说这个办法好；

6. 最直接：给父元素设固定 `height`；

> 我个人最常用的是第四种和第五种，一个空div标签翻不了天，而且代码量少，对布局不会造成什么影响
其实它和添加一个伪元素的性质是一样的，只不过一个看得见一个看不见；

### 接下来再说说float 和position 
+ 浮动是个神奇的东西。给行内元素加上浮动，就会具有块状元素的特性；
+ 浮动对`position：absolute`和`display：flex`的元素无效，也就是影响不了这两位；
+ 浮动会影响`position：relative`。不信你可以试试，我就不贴demo了；
+ 说到`relative`，很多同学初学时会很迷这块，现在一句话让你醍醐灌顶：“`占着茅坑不拉屎！`”有道理不；

想到什么日后再补充，毕竟`float`是个神奇物种，一时间也概括不全；

