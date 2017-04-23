<template>
	<li class="top-item">
		<div class="v-item">
			<a href="/video/av8815046/" target="_blank" :title="contentTop.title">
				<div class="preview">
					<img :src="contentTop.pic" :alt="contentTop.title">
				</div>
				<div class="mask">
				</div>
				<div class="info">
					<div class="t">{{contentTop.title}}</div>
					<p class="up">up主：{{contentTop.author}}</p>
					<p class="play">播放：{{contentTop.play}}</p>
				</div>
			</a>
		</div>
	</li>
</template>

<script>
export default {
	props: {
		contentTop: {
			type: Object
		}
	}
}
</script>

<style lang="stylus" scoped>
	.top-item
		float left
		width 180px
		margin-bottom 20px
		.v-item
			width 160px
			height 100px
			position relative
			.preview
				height 100px
				background 0
				overflow hidden
				border-radius 4px
			img
				height 100%
				margin 0 auto
				display block
				width 160px
				opacity 1
			.mask
				position absolute
				width 100%
				height 100%
				opacity 0
				visibility hidden
				top 0px
				left 0px
				z-index 1
				background rgba(0,0,0,0.7)
				transition .3s all linear
				border-radius 4px
				&:hover
					visibility visible
					opacity 1
					transition none
			.info
				padding 10px 0 3px
				height 18px
				overflow hidden
				position absolute
				width 100%
				bottom 0
				left 0px
				z-index 1
				background linear-gradient(transparent,rgba(0,0,0,0.1) 20%,rgba(0,0,0,0.2) 35%,rgba(0,0,0,0.6) 65%,rgba(0,0,0,0.9))
				border-radius 0 0 4px 4px
				p
					color #99a2aa
					margin 5px 5px 0
					transition .2s all linear
					opacity 0
					height 16px
					&.up
						margin-top 10px
						text-overflow ellipsis
						overflow hidden
						white-space nowrap
				.t
					height 18px
					line-height 18px
					overflow hidden
					color #fff
					margin 0 5px
					word-break break-all
					word-wrap break-word
			&:hover .mask
				visibility visible
				opacity 1
				transition none
			&:hover .info 
				padding 0
				height 100%
				background 0
			&:hover .info p
				opacity 1
				transition .3s all linear
			&:hover .t
				margin-top 10px
				height 36px

</style>