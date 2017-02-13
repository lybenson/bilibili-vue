<template>
	<div class="search">
		<form action="//search.bilibili.com/all" id="searchform">
			<input name="keyword" type="text" class="search-keyword" id="search-keyword" autocomplete="off" accesskey="s" x-webkit-speech="" x-webkit-grammar="builtin:translate" placeholder="这样的历史剧才靠谱！" data-recommend="av8509845">
			<button type="submit" class="search-submit"></button>
		</form>
		<a class="link-ranking" href="//www.bilibili.com/ranking" target="_blank">
			<span>排行榜</span>
		</a>
	</div>
</template>
<script>
	export default {

	}
</script>

<style lang="stylus" scoped>
	.search
		z-index 100
		position absolute
		top calc(170px - (56px - 32px) - 32px)
		right 0
		width 268px
		height 32px
		padding 2px 2px 2px 72px
		background-color rgba(0, 0, 0, 0.12)
		border-radius 6px
		#searchform
			background-color rgba(255, 255, 255, 0.88)
			display block
			height 32px
			border-radius 4px
			transition .2s background-color
			margin-top 0em
			.search-keyword
				float left
				width 200px
				color #222
				font-size 12px
				overflow hidden
				height 32px
				line-height 32px
				padding 0 12px
				border 0
				box-shadow none
				background-color transparent
				outline 0
			.search-submit
				display block
				position absolute
				right 0
				width 48px
				cursor pointer
				height 32px
				background url(../../assets/images/icons.png) -653px -720px
				margin 0
				padding 0
				border 0
		.link-ranking
			position absolute
			left 2px
			top 2px
			height 32px
			line-height 32px
			background-color rgba(255, 255, 255, 0.8)
			border-radius 4px
			width 68px
			transition .2s background-color
			span
				padding-left 26px
				color #f25d8e
				display inline-block
				background url(../../assets/images/icons.png) -659px -655px no-repeat
</style>