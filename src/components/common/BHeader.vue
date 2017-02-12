<template>
  <div class="header" style="background-image: url('http://i0.hdslb.com/bfs/archive/4b9c7031618e743f3ed3e13f74ebc0130c55d981.jpg';">
  	<div class="header-layer"></div>
  	<a class="header-link" target="_blank" href="http://www.bilibili.com" data-loc-id="142"></a>
  	<div class="h-center">
  		<a href="/" class="logo" style="background-image: url('//i0.hdslb.com/bfs/archive/bb2aa0d954bf59d4ee555a8a603fe83888463b6b.png');"></a>
  		<div class="banner-title">哔哩哔哩 (゜-゜)つロ 干杯~</div>
  	</div>
  	<div class="num"></div>
  </div>
</template>

<script>
export default {

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
    	transition .2s heigh
    
</style>
