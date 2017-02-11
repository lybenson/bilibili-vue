<template>
	<ul class="s-menu">
		<li>
			<a href="http://member.bilibili.com/v/video/submit.html" target="_blank">
				<i class="b-icon b-icon-vp"></i>
				<em>视频投稿</em>
			</a>
		</li>
		<li>
			<a href="http://member.bilibili.com/v/#!/article" target="_blank">
				<i class="b-icon b-icon-vm"></i>
				<em>投稿管理</em>
			</a>
		</li>
		<li>
			<a href="http://member.bilibili.com/v/" target="_blank">
				<i class="b-icon b-icon-vc"></i>
				<em>创作中心</em>
			</a>
		</li>
	</ul>
</template>

<script>
export default {

}
</script>

<style lang="stylus" scoped>
	.s-menu
		position absolute
		display block
		top 42px
		right 0px
		z-index 15
		width 216px
		border 0
		transition .2s
		border-radius 0 0 4px 4px
		background-color #fff
		box-shadow rgba(0, 0, 0, 0.16) 2px 4px
		overflow hidden
		li
			cursor pointer
			text-align center
			width 72px
			height 64px
			transition .1s
			float left
			list-style-type none
			em
				display block
				font-style normal
				font-weight normal
			a
				display block
				color #f25d8e
				padding 14px 12px 0 12px
				line-height 1
				.b-icon
					display inline-block
					vertical-align middle
					width 20px
					height 20px
					margin 0 auto 8px
					background url(../../assets/images/icons.png)
					&.b-icon-vp
						background-position -471px -919px
					&.b-icon-vm
						background-position -471px -982px
					&.b-icon-vc
						background-position -471px -1753px



</style>