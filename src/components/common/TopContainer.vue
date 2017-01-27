<template>
	<div class="top-container">
		<div class="top">
			<div class="header-mask-wrap">
				<div class="header-mask-bg" style="background-image: url(&quot;//i0.hdslb.com/bfs/archive/d018a3742c508cc379472735bf7d124cc7ae9f13.jpg&quot;);"></div>
				<div class="header-mask"></div>
			</div>
			<div class="header">
				<div class="top—nav">
					<ul>
						<li class="home">
							<a class="i-link" href="//www.bilibili.com/">
								<span>主站</span>
							</a>
						</li>
						<li class="hbili">
							<a class="i-link" href="http://h.bilibili.com/" title="画友">画友</a>
						</li>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
					</ul>
				</div>
				<div class="uns-box">
					
				</div>
			</div>
		</div>
	</div>
</template>

<script>

export default {

}
</script>

<style lang="stylus">
	.top-container
		color #222
		position reltive
		z-index 10000
		.top
			height 42px
			background #fff
			box-shadow rgba(0,0,0,0.1) 0 1px 2px
			top 0
			left 0
			width 100%
			position relative
			z-index 10000
			color #222
			background-color transparent
			.header-mask-wrap
				position absolute
				top 0
				left 0
				width 100%
				height 100%
				overflow hidden
				background-color #fff
				.header-mask-bg
					position absolute
					height 62px
					padding 0 20px
					top -10px
					left -20px
					width 100%
					filter blur(5px)
					z-index 50
					background-position center 0!important
					background-repeat no-repeat
				.header-mask
					background-color rgba(0,0,0,0.4)
					position absolute
					top 0
					left 0
					width 100%
					height 100%
					background-color rgba(255,255,255,0.4)
					z-index 100
			.header
				margin 0 auto
				position relative
				text-align left
				z-index 10000
				width 980px
				zoom 1
				.top—nav
					float left
					height 42px
					font-size 12px
					ul
						zoom 1
						margin 0
						padding 0
						display block
						list-style-type none
						-webkit-margin-before 1em
						-webkit-margin-after 1em
						-webkit-margin-start 0px
						-webkit-margin-end 0px
						-webkit-padding-start 40px
						li
							display list-item
							margin 0
							padding 0
							list-style-type none
						.home
							background-position -845px -74px
							margin-left -10px
							background-repeat no-repeat
							.i-link
								display block
								transition .15s background-color
								color #fff
								font-size 12px
								width 50px
								height 42px
								padding 0 0 0 20px
</style>