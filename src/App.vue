<template>
  <div id="app">
    <TopContainer></TopContainer>
  </div>
</template>

<script>
import TopContainer from 'components/common/TopContainer.vue'

export default {
  name: 'app',
  components: {
    TopContainer
  }
}
</script>

<style lang="stylus">
  #app 
    font-family "Microsoft YaHei",Arial,Helvetica,sans-serifsans-serif
    -webkit-font-smoothing antialiased
    -moz-osx-font-smoothing grayscale
    font-size 12px
    margin 0
    padding 0
    background #fff
    color #222
    min-width 990px
    tap-highlight-color transparent
    -webkit-tap-highlight-color transparent
</style>
