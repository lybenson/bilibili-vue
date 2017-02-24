<template>
	<div class="banner">
		<div class="topic-preview-wrapper">
			<div class="topic-preview-list-wrapper">
				<ul class="topic-preview" style="width: 500%;"  ref="banner"> 
					<BannerItem v-for="i in bannerLinks" :banner-link="i"></BannerItem>
				</ul>
			</div>
			<a class="more-topic" href="/topic/integrated-1.html" target="_blank">更多
				<i class="b-icon b-icon-arrow-r"></i>
			</a>
			<div class="s-bottom"></div>
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
			time: 0
		}
	},
	mounted() {
		//轮播图定时滚动
		setInterval(() => {
			console.log(this.time)
			if (this.time === 5) {
				this.time = 0
			}
			let distance = -100 * this.time
			let left = distance + "%"
			console.log(left)
			this.$refs.banner.style.marginLeft = left
			this.time ++
		}, 1000)
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
			.topic-preview-list-wrapper
				overflow hidden
				border-radius 4px
</style>