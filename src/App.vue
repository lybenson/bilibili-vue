<template>
  <div id="app">
    <TopContainer />
    <BHeader />
    <BContent :rows="rows" />
    <BNavSide
      :options="options"
      @change="isShowMask"
    />
    <div
      v-show="showMask"
      ref="mask"
      class="wnd-mask"
    />
  </div>
</template>

<script>
import TopContainer from 'components/common/TopContainer.vue'
import BHeader from 'components/common/BHeader.vue'
import BContent from 'components/content/BContent.vue'
import BNavSide from 'components/nav/BNavSide'

import { mapGetters } from 'vuex'
export default {
  name: 'App',
  components: {
    TopContainer,
    BHeader,
    BContent,
    BNavSide
  },
  data () {
    return {
      showMask: false
    }
  },
  watch: {
    options () {
      console.log('options 变化了')
    },
    items () {
      console.log('items 变化了')
    }
  },
  mounted () {
    this.$store.dispatch('getContentRows')
  },
  computed: {
    ...mapGetters([
      'requesting',
      'error',
      'rows'
    ]),
    options () {
      const options = {
        offset: 100, // 偏移的距离
        items: this.rows,
        offsetTop: 0 // 距离顶部距离
      }
      return options
    }
  },
  methods: {
    isShowMask () {
      this.showMask = !this.showMask
    }
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
    .wnd-mask
      position fixed
      width 100%
      height 150%
      background-color #000
      opacity .5!important
      z-index 1000
      top 0px
      left 0px
      transition .2s
</style>
