---
layout: post
title:  "mac-xampp-htdoc文件权限问题"
date:   2017-08-13 10:24:00 +0800
categories: MAC
---

一次性：
```
sudo chmod -R 777 /文件夹目录 
```
永久性：
修改apache配置文件  `/etc/httpd.conf`
```
User daemon   => User jaimecheng
group daemon
```
