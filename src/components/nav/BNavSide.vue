<template>
	<div class="index-nav nav-side" style="opacity: 1; display: block; top: 100px; left: auto; right: 0px;">
		<div class="border"></div>
		<div class="nav-list">
			<div class="n-i sortable" v-for="item in sortValues">
				<div class="name">{{item}}</div>
			</div>
			<div class="n-i customize" title="自定义" @click="sort">
				<i class="n-icon-sort"></i><p>排序</p>
			</div>
		</div>
		<div class="n-i gotop">
			<div class="s-line"></div>
			<div class="btn_gotop" title="返回顶部"></div>
		</div>
		<div class="n-i n-i-mlink">
			<a href="#" target="_blank"  @mouseover="rotate">
				<div class="mlink-dl-msg"></div>
				<div class="n-i-mlink-bg" ref="mlinkBg" ></div>
			</a>
		</div>
	</div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
	computed: {
		...mapGetters([
			'sortValues'
		])
	},
	methods: {
		rotate() {
			console.log('开始选装')
		},
		sort() {
			console.log('开始排序')
		}
	}
}
</script>

<style lang="stylus" scoped>
	.index-nav
		position fixed
		width 48px
		z-index 90
		text-align center
		.nav-list
			position relative
			z-index 250
			background-color #f6f9fa
			border 1px solid #e5e9ef
			overflow hidden
			border-radius 4px
		.n-i
			cursor pointer
			&:first-child
				border-top 0
			.name
				height 32px
				line-height 32px
				transition .1s linear
				transition-property background-color,color
				&:hover
					background-color #00a1d6
					color #fff
			&.customize
				padding 8px 0
				border-top 1px solid	#e5e9ef
				&:hover
					background-color #00a1d6
					color #fff
					.n-icon-sort
						background-position -727px -151px
				.n-icon-sort
					display block
					margin 0 auto 4px
					background url(../../assets/images/icons.png) -663px -151px no-repeat
					height 18px
					width 18px
			&.gotop
				border 0
				position relative
				z-index 50
				.s-line
					border-left 1px solid #ddd
					border-right 1px solid #ddd
					height 9px
					width 30px
					margin 0 auto
				.btn_gotop
					height 48px
					background #f6f9fa url(../../assets/images/icons.png) -648px -72px no-repeat
					border 1px solid #e5e9ef
					overflow hidden
					border-radius 4px
					&:hover
						background-color #00a1d6
						background-position -714px -72px
						border-color #00a1d6
			&.n-i-mlink
				border 0 
				position relative
				z-index 50
				.mlink-dl-msg
					background url(//i0.hdslb.com/bfs/static/3af67e81274b02ca1693fdb73adbc03c98c3880a.png)
					width 106px
					height 44px
					position absolute
					left -106px
					top -23px
					display none
				.n-i-mlink-bg
					display block
					background-image url("//i0.hdslb.com/bfs/static/e6f2388d454c82004905753802e9cfe709d80d08.png")
					width 80px
					height 80px
					background-position 0 0
					margin-left -16px
</style>