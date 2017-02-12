<template>
  <div class="header" style="background-image: url('//i0.hdslb.com/bfs/archive/4f59bf959d51592016e07efe62969c411288826a.png');">
  	<div class="header-layer"></div>
  	<a class="header-link" target="_blank" href="http://www.bilibili.com" data-loc-id="142"></a>
  	<div class="h-center">
  		<a href="/" class="logo" style="background-image: url('//i0.hdslb.com/bfs/archive/bb2aa0d954bf59d4ee555a8a603fe83888463b6b.png');"></a>
  		<div class="banner-title">哔哩哔哩 (゜-゜)つロ 干杯~</div>
      <search class="msearch"></search>
  	</div>
  </div>
</template>

<script>
import Search from './Search.vue'
export default {
  components: {
    Search
  }
}
</script>

<style lang="stylus">
 .header
    background transparent no-repeat center -10px
    position relative
    margin -42px auto 0
    .header-layer
    	height 170px
    .header-link
    	position absolute
    	top 0px
    	left 0px
    	width 100%
    	height 170px
    	z-index 10
    .h-center
    	width 980px
    	margin 0 auto
    	position relative
    	height 170px
    	top -170px
    	transition .2s height
    	.logo
    		position absolute
    		width 220px
    		height 105px
    		left 24px
    		top 55px
    		background transparent no-repeat left center
    		z-index 100
    	.banner-title
    		position absolute
    		top 114px
    		left 255px
    		line-height 20px
    		padding 6px 10px
    		background-color rgba(0, 0, 0, 0.68)
    		color #fff
    		border-radius 4px
    		font-size 14px
    		max-width  350px
    		transition .2s
</style>
