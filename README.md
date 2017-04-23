## 前言

> 为什么是哔哩哔哩(俗称B站)呢？其一是因为我是B站的重度使用者，每周基本上都会在B站上看看火影忍者、暴走大事件等。另外一个原因呢，就是B站首页很美观大方，而且处处充满了细节。所以对于实践确实是一个不错的项目。目前的技术栈主要的采用的是前端Vue2+后端Koa2的前后端分离的方式，语法全部使用ES6/7。关于数据也来自真实的数据接口。

## 技术栈

前端：vue2 + vuex + webpack + ES6/7 + stylus

后端：koa2

## 项目运行

#### 源码地址:  [https://github.com/lybenson/bilibili-vue](https://github.com/lybenson/bilibili-vue) 

#### 如何运行

前端运行：

```javascript
cd bilibili-vue
npm install
npm run dev
```

后端运行

```javascript
cd bilibili-vue/bilibili-api
npm install
npm run dev
```

为了确保运行正确，请先运行后端服务。访问 http://localhost:8080

#### 相关截图:

首页：

![QQ截图20170423210104](C:\Users\Benson\Desktop\QQ截图20170423210104.png)

轮播：

![QQ截图20170423213449](C:\Users\Benson\Desktop\QQ截图20170423213449.png)

直播：

![QQ截图20170423210140](C:\Users\Benson\Desktop\QQ截图20170423210140.png)

![QQ截图20170423210218](C:\Users\Benson\Desktop\QQ截图20170423210218.png)

排行：

![QQ截图20170423210248](C:\Users\Benson\Desktop\QQ截图20170423210248.png)

游戏：

![QQ截图20170423213519](C:\Users\Benson\Desktop\QQ截图20170423213519.png)

拖拽排序与滚动效果：

![QQ截图20170423210330](C:\Users\Benson\Desktop\QQ截图20170423210330.png)



## 总结

目前主要功能都已经完成的差不多。主要还差一个预览视频与弹幕的功能尚未完成，希望能把B站首页写完，持续更新中。

另外，如果这个项目对你有用，也欢迎star。