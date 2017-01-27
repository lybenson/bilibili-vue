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
</style>
