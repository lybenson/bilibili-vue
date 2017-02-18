<template>
  <div class="top_container">
    <div class="z_top b-header-blur b-header-blur-black">
      <div class="b-header-mask-wrp">
        <div class="b-header-mask-bg" style="background-image: url('//i0.hdslb.com/bfs/archive/4f59bf959d51592016e07efe62969c411288826a.png');"></div>
        <div class="b-header-mask"></div>
      </div>
      <div class="z_header">
        <div class="z_top_nav">
          <ul>
            <li class="home">
              <a class="i-link" href="//www.bilibili.com/">
                <span>主站</span>
              </a>
            </li>
            <li class="hbili">
              <a class="i-link" href="//h.bilibili.com/" title="画友">画友</a>
            </li>
            <li class="b-gc" hasframe="true">
              <a class="i-link" href="//game.bilibili.com/" title="游戏中心">游戏中心</a>
            </li>
            <li class="live" hasframe="true">
              <a class="i-link" target="_blank" href="//live.bilibili.com/" title="直播">直播</a>
            </li>
            <li class="b-zb">
              <a class="i-link" target="_blank" href="//zb.bilibili.com/" title="周边">周边</a>
            </li>
            <li class="planet">
              <a class="i-link" target="_blank" href="//planet2017.bilibili.com/" title="拜年祭2017">拜年祭
              <em class="new"></em>
              </a>
            </li>
            <li></li>
          </ul>
        </div>
        <div class="uns_box">
          <ul class="menu">
            <li id="i_menu_login_reg" guest="yes" class="u-i" style="display: list-item">
              <a id="i_menu_login_btn" class="i-link login" href="https://account.bilibili.com/login">
                <span>登录</span>
              </a>
              <i class="s-line"></i>
              <a id="i_menu_register_btn" class="i-link reg" href="https://www.bilibili.com/register">
                <span>注册</span>
              </a>
            </li>
            <li class="u-i b-post">
              <a class="i-link" href="http://member.bilibili.com/v/video/submit.html" target="_blank" @mouseenter="isShowPostMenu = !isShowPostMenu" @mouseleave="isShowPostMenu = !isShowPostMenu">投稿</a>
              <PostMaterial v-show="isShowPostMenu"></PostMaterial>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PostMaterial from './PostMaterial.vue'
export default {
  data() {
    return {
      isShowPostMenu: false
    }
  },
  components: {
    PostMaterial
  },
  methods: {
    showPostMenu() {
      this.isShowPostMenu = !this.isShowPostMenu
    }
  }
}
</script>

<style lang="stylus">
  .top_container
    color #222
    position relative
    z-index 10000
    .z_top
      background-color transparent
      height 42px
      background #fff
      box-shadow rgba(0, 0, 0, 0.1) 0 1px 2px
      top 0px
      left 0px
      width 100%
      position relative
      z-index 10000
      font-family "Microsoft YaHei",Arial,Helvetica,sans-serifsans-serif
      color #222
      .i-link
        padding 0 14px
        transition .15s background-color
        font-size 13px
      a
        color #222
    .b-header-blur
      background-color transparent
      .b-header-mask-wrp
        position absolute
        top 0px
        left 0px
        width 100%
        height 100%
        overflow hidden
        background-color #fff
        .b-header-mask-bg
          position absolute
          height 62px
          padding 0 20px
          top -10px
          left -20px
          width 100%
          filter blur(5px)
          z-index 50
          background-position center 0!important
          background-repeat no-repeat
        .b-header-mask
          position absolute
          top 0px
          left 0px
          width 100%
          height 100%
          z-index 100
          background-color rgba(0, 0, 0, 0.4)
      .z_header
        display block
        margin 0 auto
        position relative
        text-align left
        z-index 10000
        width 980px
        zoom 1
        &:after
          content ''
          display block
          visibility hidden
          height 0
          clear both
          font-size 0
        .z_top_nav
          float left
          height 42px
          font-size 12px
          li
            .new
              position absolute
              right -8px
              color #f25d8e
              top 13px
              background url(../../assets/images/icons.png) no-repeat
              width 22px
              height 10px
              background-position -851px -412px
            a.i-link
              font-size 12px
          ul
            zoom 1
            &:after
              content ''
              display block
              visibility hidden
              height 0
              clear both
              font-size 0
            li
              float left
              text-align center
              line-height 42px
              position relative
              list-style-stype: none
              a.i-link
                height 100%
                display block
                color #fff
              &.home
                margin-left -10px
                background-image url(../../assets/images/icons.png)
                background-repeat no-repeat
                background-position -845px -74px
                .i-link
                  width 50px
                  height 42px
                  padding 0 0 0 20px
              &.hbili
                position relative
              &.live
                position relative
        .uns_box
          float right
          font-size 12px
          ul
            &.menu
              float left
              position relative
            li
              list-style-type none
              &.u-i
                float left
                text-align center
                height 42px
                line-height 42px
                position relative
                a.i-link
                  display block
                  color #222
                &#i_menu_login_reg
                  padding 0 10px
                  .i-link
                    display inline-block
                    padding 0 10px
                    color #fff
                    span
                      display block
                      margin 0px
                      padding 0px
                  .s-line
                    display inline-block
                    border-left 1px solid #fff
                    height 12px
                    margin-top 16px
                    vertical-align top
                &.b-post
                  margin-right 0px
                  a.i-link
                    margin 0px
                    padding 0px
                    width 58px
                    position relative
                    z-index 100
                    background url(../../assets/images/b-post.png) center center no-repeat
                    height 48px
                    border-radius 0 0 5px 5px
                    color #fff!important
                    font-size 14px
</style>
