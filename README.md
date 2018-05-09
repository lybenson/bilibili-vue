
预览地址： [http://www.lybenson.com/bilibili/](http://www.lybenson.com/bilibili/)

## 技术栈

前端：vue2 + vuex + webpack + ES6/7 + stylus + nginx

后端：koa2

## 项目运行

#### 源码地址:  [https://github.com/lybenson/bilibili-vue](https://github.com/lybenson/bilibili-vue) 

#### 如何运行

运行前请先安装`nodejs`

`clone`项目到本地

```shell
git clone https://github.com/lybenson/bilibili-vue.git
```

前端运行

```shell
cd bilibili-vue
npm install
npm run dev
```

后端运行

```shell
cd bilibili-vue/bilibili-api
npm install
npm run dev
```

为了确保运行正确，请先运行后端服务。再运行前端，之后访问 http://localhost:8080

## 组件

根据首页的各模块的功能不同，划分出了共20多个可复用的组件。具体请看下方

```shell
├── banner  //轮播组件
│   ├── Banner.vue
│   └── BannerItem.vue
├── common  // 公共组件
│   ├── BHeader.vue
│   ├── BMenu.vue
│   ├── BMenuItem.vue
│   ├── PostMaterial.vue
│   ├── Search.vue
│   └── TopContainer.vue
├── content  // 主内容组件
│   └── BContent.vue
├── contentRow  // 单个分类的组件
│   ├── BContentRow.vue
│   ├── BRowBody.vue
│   ├── BRowHead.vue
│   ├── BRowItem.vue
│   ├── BRowRank.vue
│   └── BRowRankBody.vue
├── contentTop  // 页面顶部组件
│   ├── BContentTop.vue
│   └── BContentTopItem.vue
├── live  //直播所在的组件
│   ├── BLive.vue
│   ├── BLiveItem.vue
│   ├── BLiveRank.vue
│   └── BLiveRankItem.vue
├── nav  //右侧导航条组件
│   ├── BNavSide.vue
│   └── smooth-scroll.js
└── promote  // 推广组件
    ├── BPromote.vue
    └── BPromoteItem.vue
```

组件的原则就是尽量将复杂的UI布局划分成单个小的UI组件，逻辑处理也被划分成更多的单个小的逻辑。数据流动采用的单向数据流动。子组件的数据更多的是来自于父组件，父组件的数据主要是其本身发起的`ajax`请求。本项目中`ajax`请求库使用的是`axios`。

## 状态管理

目前的状态管理采用`vuex`。由于`vuex`可以分多个子`module`。所以在不同模块下单独维护一份状态，同时对于一些公共的状态，比如发起网络请求的`requesting`，错误时的状态`error`则保存在根状态中，之后可以通过子模块中的`rootState.requesting`获取来赋值。

在子模块中发送网络请求获取数据是一个异步的过程，所以将网络请求放在`actions`。每次发起网络需要经历下面的步骤

1. 请求中

   ```
   rootState.requesting = true  //请求状态更新为true,表示请求中
   commit(TYPE.XX_REQUEST)  // 发送同步操作，请求中的数据处理
   ```

2. 请求成功

   ```
   rootState.requesting = false  //请求状态更新为false,表示请求结束
   commit(TYPE.XX_SUCCESS, response) //发送同步操作,处理请求成功后数据
   ```

3. 请求失败

   ```
   rootState.requesting = false  //请求状态更新为false,表示请求结束
   rootState.error = error
   commit(TYPE.XX_FAILURE, error) //发送同步操作,处理请求失败
   ```

## 动画

B站首页充斥着大量的动画效果。目前动画使用的主要有三种方式：

1. 以`hover`效果触发。

2. 通过`js`触发的效果，如点击轮播图的原点时，主要通过设置css属性`transition: .2s;`，再通过`js` 设置css属性`this.$refs.banner.style.marginLeft = left`。

3. 通过`vue`提供的动画方式。

   ```javascript
   <transition name="fade">
    <div v-if="isSort">
        <div class="tip"></div>
        <div class="custom-bg"></div>
    </div>
   </transition>
   ```

## 样式

样式文件使用的是`stylus`，暂未使用任何`vue`现成的UI组件。需要安装`stylus-loader`, `stylus`，由于`vue-cli`中的`webpack`已经配置好了`stylus`了，所以只需要安装就可以了。

```shell
npm install stylus-loader --save-dev
npm install stylus --save-dev
```
## 性能优化

* 图片懒加载
* 压缩`js`、`css`


* 服务器开启`gzip`
* 浏览器缓存
* ...

## 发布

完成项目后将发布到自己的服务器上，首先确保服务器已安装`nodejs`，具体安装步骤不再赘述。

#### 后端发布

后端采用`pm2`做项目管理

安装`pm2`

```shell
npm install pm2 -g
```

启动项目

```
cd bilibili-api && npm install 
pm2 start index.js
```

#### 前端发布

1. `webpack`打包

```
npm run build
```

需要注意的是，直接运行此命令可能会导致资源无法找到的问题。所以需要对`webpack`配置做一定的修改。

在`webpack.base.conf.js`文件中修改`publicPath`如下

```javascript
output: {
    path: config.build.assetsRoot,
    publicPath: './',  //资源的公共路径
    // publicPath: process.env.NODE_ENV === 'production' ? config.build.assetsPublicPath : config.dev.assetsPublicPath,
    filename: '[name].js'
}
```

这样打包后还会出现`stylus`中`background-image `资源无法找到的问题，我采用的方式修改`ExtractTextPlugin`配置，在`webpack.prod.conf.js`中修改

```javascript
new ExtractTextPlugin('[name].[contenthash].css')
```

将分离的`css`打包路径分离到`static`文件夹之外。

打包完成后上传到服务器`/var/www/html/bilibili`目录下。

2. 配置nginx服务器。

   ```
   location /bilibili {
     root /var/www/html;
     index index.html;
   }
   ```

## 总结

目前主要功能都已经完成的差不多。主要还差一个预览视频与弹幕的功能尚未完成，希望能把B站首页写完，并且会持续更新中，后面可能会加上直播等功能。

#### 相关截图:

首页：

![20170423210104.png](http://upload-images.jianshu.io/upload_images/426435-d2a3e8b1463cdd2e.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

轮播：

![20170423213449.png](http://upload-images.jianshu.io/upload_images/426435-edce08bcca33c6a1.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

直播：

![20170423210140.png](http://upload-images.jianshu.io/upload_images/426435-c2a8412724f6a121.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
![20170423210218.png](http://upload-images.jianshu.io/upload_images/426435-e0f463350b7b5f21.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

排行：

![20170423210248.png](http://upload-images.jianshu.io/upload_images/426435-6c61dcd032f80f92.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

游戏：

![20170423213519.png](http://upload-images.jianshu.io/upload_images/426435-bf8786eee29a4f3a.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

拖拽排序与滚动效果：

![20170423213599.png](http://upload-images.jianshu.io/upload_images/426435-1ef3ae591420a074.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
