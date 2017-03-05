<template>
	<div class="lv-item">
		<a class="lv-preview">
			<img src="//i0.hdslb.com/bfs/live/90ec156dd17d7adc0c2c8262ead6886ff358fcf5.jpg@320w_200h.webp" alt="好久不见" style="opacity: 1;">
			<div class="lv-mask">
				<div class="lv-face">
					<img src="//i1.hdslb.com/bfs/face/dec5867307ac5c71a56a5d6925057dffe284dee0.jpg@40w_40h.webp" style="opacity: 1;">
				</div>
				<span class="lv-onair-txt"><i class="lv-onair-icon"></i>Live
				</span>
			</div>
			<span class="b-tag">电子竞技</span>
		</a>
		<a href="http://live.bilibili.com/128" target="_blank">
			<div class="lv-room">
				<div class="lv-t" title="穿睡衣如果尬舞会怎么样">穿睡衣如果尬舞会怎么样</div>
			</div>
			<div class="lv-info">
				<div class="lv-host">
					<i class="b-icon b-icon-live-host">
					</i>lybenson
				</div>
				<div class="lv-online">
					<i class="b-icon b-icon-live-online"></i>4773
				</div>
			</div>
		</a>
	</div>
</template>

<script>
export default {

}
</script>

<style lang="stylus">
	.lv-item
		width 160px
		.lv-preview
			width 160px
			height 100px
			display block
			position relative
			img
				display block
				width 100%
				height 100%
				margin 0 auto
				border-radius 4px
			.lv-mask
				position absolute
				width 100%
				height 100%
				top 0px
				left 0px
				z-index 1
				transition .2s all linear
				border-radius 4px
			.lv-face
				position absolute
				width 48px
				height 48px
				top 26px
				left 24px
				border-radius 60px
				overflow hidden
				img
					display block
					margin 0 auto
					border-radius 4px
					width 100%
					height 100%
			.lv-onair-txt
				display inline-block
				position absolute
				left 88px
				top 40%
				height 20px
				line-height 20px
				width 48px
				border-radius 20px
				background-color #00a1d6
				color #fff
			.lv-onair-icon
				display inline-block
				width 6px
				height 6px
				border-radius 3px
				background-color #fff
				margin 8px 3px 0 7px
				vertical-align top
			.b-tag
				display inline-block
				position absolute
				right 0
				bottom 0
				padding 0 5px
				height 20px
				line-height 20px
				border-radius 4px 0 0
				color #fff
				background-color rgba(0,0,0,0.5)
				transition .2s all linear
		.lv-room
			position relative
			padding-top 8px
			min-height 16px
			z-index 3
			.lv-t
				height 16px
				min-width 105px
				white-space nowrap
				text-overflow ellipsis
				overflow hidden
				color #222
				line-height 16px
				transition .2s all linear
		.lv-info
			padding-top 8px
			width 160px
			.lv-host, .lv-online
				display inline-block
				vertical-align top
				color #99a2aa
				white-space nowrap
				text-overflow ellipsis
				overflow hidden
				line-height 16px
			.lv-host
				width 75px
			.lv-online
				width 75px
				margin-left 5px
			.b-icon
				background  url(../../assets/images/icons.png) no-repeat
				vertical-align top
				margin-top 3px
				margin-right 5px
				display inline-block
				width 12px
				height 12px
				&.b-icon-live-host
					background-position -282px -154px
				&.b-icon-live-online
					background url(../../assets/images/live-eye.png)
</style>