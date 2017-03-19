<template>
	<div class="b-live">
		<div class="b-l">
			<div class="b-head">
				<div class="left">
					<span class="b-head-i"></span>
					<span class="b-head-t">
						<a href="//live.bilibili.com/" target="_blank">
							<h2>正在直播</h2>
						</a>
					</span>
					<span class="b-head-s">
						当前共有<em>{{online_total}}</em>个在线直播
					</span>
				</div>
				<div class="right">
					<div class="b-link-more">
						<a href="//live.bilibili.com" target="_blank">更多<i class="b-icon b-icon-arrow-r"></i></a>
					</div>
				</div>
				<div class="read-push">
					<span class="icon-refresh"></span>
					<span class="info">
						<b>{{dynamic}}</b>
						<em>条新动态</em>
					</span>
				</div>
			</div>
			<div class="b-body">
				<ul class="v-list-live" v-if="recommend">
					<li v-for="item in recommend">
						<BLiveItem :live="item"></BLiveItem>
					</li>
				</ul>
			</div>
		</div>
		<div class="b-r">
			<BLiveRank :ranklist="ranking" :preview="preview" :recommendAnchor="recommendAnchor"></BLiveRank>
		</div>
	</div>
</template>

<script>
import BLiveItem from 'components/live/BLiveItem'
import BLiveRank from 'components/live/BLiveRank'
import { mapGetters } from 'vuex'
export default {
	components: {
		BLiveItem,
		BLiveRank
	},
	computed: {
		...mapGetters([
			'requesting',
			'error',
			'online_total',
			'dynamic',
			'recommend',
			'ranking',
			'preview',
			'recommendAnchor'
		])
	},
	mounted() {
		this.$store.dispatch('live')
	}
}
</script>

<style lang="stylus" scoped>
	.b-live
		.b-l
			float left
			width 700px
			.b-head
				position relative
				height 24px
				white-space nowrap
				.left
					float left
					.b-head-i
						position absolute
						left 0px
						top -8px
						width 40px
						height 39px
						display inline-block
						background url(../../assets/images/icons.png) no-repeat
						background-position -141px -652px
						vertical-align middle
						margin-right 10px
					.b-head-t
						margin-left 46px
						float left
						vertical-align middle
						display inline-block
						font-size 18px
						line-height 24px
						color #222 
						a
							color #222
						h2
							font-size 24px!important
							line-height 24px
							font-weight normal
					.b-head-s
						float left
						margin-top 10px
						color #99a2aa
						margin-left 20px
						display inline-block
						vertical-align bottom
						font-family "Lucida Console",Monaco,monospace
						em
							color #00a1d6
							font-style normal
							font-weight normal
							padding 0
							margin 0
				.right
					float right
					.b-link-more
						float right
						text-align center
						margin-left 10px
						a
							display block
							width 52px
							height 22px
							line-height 22px
							background-color #fff
							border 1px solid #ccd0d7
							color #555
							border-radius 4px
							&:hover
								background-color #ccd0d7
							.b-icon-arrow-r
								display inline-block
								vertical-align middle
								background  url(../../assets/images/icons.png) no-repeat
								width 6px
								height 12px
								margin -2px 0 0 5px
								background-position -478px -218px
				.read-push
					float right
					cursor pointer
					background-color #fff
					border 1px solid #ccd0d7
					border-radius 4px
					height 22px
					padding 0 10px
					&:hover
						background-color #ccd0d7
						.icon-refresh
							transform rotate(360deg)
					&:after
						content ''
						display block
						visibility hidden
						height 0
						clear both
						font-size 0						
					.icon-refresh
						background  url(../../assets/images/icons.png) -475px -89px no-repeat
						display inline-block
						width 12px
						height 13px
						vertical-align top
						transition .2s
						margin-top 5px
					.info
						display inline-block
						vertical-align top
						line-height 22px
						margin-left 5px
						b
							font-weight bold
						em
							font-style normal
							font-weight normal
			.b-body
				margin-right -20px
				&:after
					content ''
					display block
					visibility hidden
					height 0
					clear both
					font-size 0
				.v-list-live
					padding-top 20px
					height 316px
					overflow hidden
					li
						float left
						margin 0 20px 20px 0
						height 148px
						overflow hidden
		.b-r
			float right
			width 260px
			margin-bottom 50px
			min-height 360px
			height 360px
			overflow hidden
		&:after
			content ''
			display block
			visibility hidden
			height 0
			clear both
			font-size 0
</style>