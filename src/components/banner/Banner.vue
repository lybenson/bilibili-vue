<template>
	<div class="banner">
		<div class="topic-preview-wrapper">
			<div class="topic-preview-list-wrapper">
				<ul class="topic-preview" style="width: 500%;"  ref="banner"> 
					<BannerItem v-for="i in bannerLinks" :banner-link="i"></BannerItem>
				</ul>
			</div>
			<a class="more-topic" href="/topic/integrated-1.html" target="_blank">更多
				<i class="b-icon"></i>
			</a>
			<div class="s-bottom">
				<div class="title">
					<span class="">
						<a href="http://www.bilibili.com/blackboard/activity-Hk-ZOAoKl.html" target="_blank">开棺而起！</a>
					</span>
				</div>
				<ul class="slide-bar">
					<li bar="bar"></li>
					<li bar="bar"></li>
					<li bar="bar"></li>
					<li bar="bar"></li>
					<li bar="bar"></li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
import BannerItem from 'components/banner/BannerItem'
export default {
	data() {
		return {
			bannerLinks: ['http://i0.hdslb.com/bfs/archive/5e03bce223d8af8f1eeefc7928d0fdf85a51bc7d.jpg', 'http://i0.hdslb.com/bfs/archive/7e1a5353c2bca2704d5f2a85f7cca395ff57f0f1.jpg','http://i0.hdslb.com/bfs/archive/5009a193676d6166083dc756fe40bd555f48864d.jpg','http://i0.hdslb.com/bfs/archive/778b9e7f7ac51a495daa8a0936cb41ae2b4c11e4.png','http://i0.hdslb.com/bfs/archive/14545332a4293781becd078594ddcf045ebe776c.jpg'
			],
			count: 0,
			item: 5
		}
	},
	mounted() {
		//轮播图定时滚动
		setInterval(() => {
			if (this.count === 5) {
				this.count = 0
			}
			let distance = -100 * this.count
			let left = distance + "%"
			this.$refs.banner.style.marginLeft = left
			this.count ++
		}, 5000)
	},
	components: {
		BannerItem
	}
}
</script>

<style lang="stylus" scoped="">
	.banner
		height 220px
		width 440px
		.topic-preview-wrapper
			position relative
			height 100%
			width 100%
			a
				color #fff
			.topic-preview-list-wrapper
				overflow hidden
				border-radius 4px
			.more-topic
				position absolute
				right 15px
				bottom 35px
				color #fff
				background  rgba(0,0,0,0.64)
				width 50px
				height 24px
				line-height 24px
				text-align center
				border-radius 4px
				transition .2s all linear
				.b-icon
					display inline-block
					vertical-align middle
					width 6px
					height 12px
					margin -2px 0 0 5px
					background url(../../assets/images/icons.png) no-repeat
					background-position -541px -218px
			.s-bottom
				position absolute
				bottom 0
				left 0
				width 100%
				height 35px
				background linear-gradient(transparent,rgba(0,0,0,0.1) 20%,rgba(0,0,0,0.2) 35%,rgba(0,0,0,0.5) 65%,rgba(0,0,0,0.66))
				border-radius 0 0 4px 4px
				.title
					position absolute
					bottom 0
					vertical-align top
					left 20px
					top 0
					height 35px
					line-height 35px
					width 50%
					overflow hidden
					white-space nowrap
					text-overflow ellipsis
					color #fff
					font-size 14px
				.slide-bar
					position absolute
					right 5px
					bottom 5px
					overflow hidden
					padding 2px 5px
					li
						float left
						cursor pointer
						width 18px
						height 18px
						margin 2px 2px
						background url(../../assets/images/icons.png) -855px -790px no-repeat
</style>