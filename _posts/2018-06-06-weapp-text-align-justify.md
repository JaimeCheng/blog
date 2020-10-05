---
layout: post
title:  "微信小程序文本实现两端对齐"
date:   2018-06-06 11:11:00 +0800
categories: 小程序
---

文本实现两端对齐，大多人都知道`text-align:justify;` 
实际上，写这句真的没有两端对齐的效果如图；
![text-align:justify;](https://upload-images.jianshu.io/upload_images/3981371-fc9767728d2e51d6.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

在网上检索了一堆，都是互相的转帖，歪门邪道的方法很不实用；
其实只要写一行代码即可；

## text-align-last:  justify; 
![text-align-last:  justify;](https://upload-images.jianshu.io/upload_images/3981371-c9bf6d326b2bdf42.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

html应该同样适用，但我没亲自测试；
下次专门测试一下对各个浏览器的兼容再回来补写；
就这一行代码，比各种歪门邪道的办法快捷好使；

