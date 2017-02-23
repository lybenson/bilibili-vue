<template>
  <div id="app">
    <TopContainer></TopContainer>
    <BHeader></BHeader>
    <Content></Content>
  </div>
</template>

<script>
import TopContainer from 'components/common/TopContainer.vue'
import BHeader from 'components/common/BHeader.vue'
import Content from 'components/content/Content.vue'
export default {
  name: 'app',
  components: {
    TopContainer,
    BHeader,
    Content
  }
}
</script>

<style lang="stylus">
  #app 
    font-family "Microsoft YaHei",Arial,Helvetica,sans-serif
    -webkit-font-smoothing antialiased
    font-size 12px
    margin 0
    padding 0
    background #fff
    color #222
    min-width 990px
    tap-highlight-color transparent
    -webkit-tap-highlight-color transparent
</style>
