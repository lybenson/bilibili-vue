<template>
	<div class="rank">
		<div class="b-head">
			<ul class="b-slt-tab" data-initialized="true">
				<li>
					<span class="b-tab-text">直播排行</span>
				</li>
				<li class="on">
					<span class="b-tab-text">关注的主播</span>
				</li>
				<li>
					<span class="b-tab-text">为你推荐</span>
				</li>
			</ul>
		</div>
		<div class="b-body">
			<div class="r-list-body">
				<div class="r-list-wrapper">
					<ul class="r-list-live" >
						<BLiveRankItem v-for="(item, index ) in ranklist" :rank="item" :index="index"></BLiveRankItem>
					</ul>
					<ul class="r-list-live" style="display: none;">
						<li class="no-data">
							<span>没有数据</span>
						</li>
					</ul>
					<ul class="r-list-live">
						<div class="mini-preview-wrapper">
							<div class="mini-preview-list-wrapper">
								<ul class="mini-preview">
									<li class="preview">
										<a href="" target="_blank">
											<img src="//i0.hdslb.com/bfs/live/1caac895c488aae25d4d187184d04d62f204fb78.jpg">
										</a>
									</li>
									<li class="preview">
										<a href="" target="_blank">
											<img src="//i0.hdslb.com/bfs/live/863a784bded94e7435560b3f1505b5393c6ef40f.jpg">
										</a>
									</li>
									<li class="preview">
										<a href="" target="_blank">
											<img src="//i0.hdslb.com/bfs/live/adaca7f86f590fbc79d5a09f31a4a05092c45bcf.jpg">
										</a>
									</li>
								</ul>
							</div>
							<div class="s-bottom">
								<div class="info">
									<div class="info-item">
										<a class="t" href="//live.bilibili.com/hd/valentinesDay2nd" title="对象？你尽管抢，抢到算我输" target="_blank">对象？你尽管抢，抢到算我输</a>
									</div>
									<div class="info-item" style="display: none;">
										<a class="t" href="//live.bilibili.com/hd/valentinesDay2nd" title="对象？你尽管抢，抢到算我输" target="_blank">对象？你尽管抢，抢到算我输</a>
									</div>
									<div class="info-item" style="display: none;">
										<a class="t" href="//live.bilibili.com/hd/valentinesDay2nd" title="对象？你尽管抢，抢到算我输" target="_blank">对象？你尽管抢，抢到算我输</a>
									</div>
								</div>
								<ul class="slider-bar">
									<li bar class="on">
										<a></a>
									</li>
									<li bar class="on">
										<a></a>
									</li>
									<li bar>
										<a></a>
									</li>
								</ul>
							</div>
						</div>
						<div class="live-pmt-live">
							
						</div>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import BLiveRankItem from 'components/live/BLiveRankItem'
export default {
	props: {
		ranklist: {
			type: Array
		}
	},
	components: {
		BLiveRankItem
	}
}
</script>

<style lang="stylus">
	.rank
		.b-head
			position relative
			.b-slt-tab
				padding-left 0
				position relative
				display inline-block
				vertical-align middle
				li
					float left
					position relative
					padding 1px 0 2px
					border-bottom 1px solid transparent
					height 20px
					line-height 20px
					cursor pointer
					text-align center
					margin-left 15px
					&:first-child
						margin 0
					&.on
						background-color transparent
						border-color #00a1d6
						color #00aid6
						.b-tab-text
								color #00a1d6
						&:before
							content ''
							display block
							position absolute
							left 50%
							margin-left -3px
							bottom 0
							width 0
							height 0
							border 3px dashed #00a1d6
							border-bottom-style solid
							border-top 0
							border-left-color transparent
							border-right-color transparent
			&:after
				content ''
				display block
				visibility hidden
				font-size 0
				height 0
				clear both
		.b-body
			clear both
			.r-list-body
				zoom 1
				overflow hidden
				&:after
					content ''
					display block
					visibility hidden
					height 0
					font-size 0
					clear both
				.r-list-wrapper
					margin-left -100%
					width 200%
					&:after
						content ''
						display block
						visibility hidden
						font-size 0
						clear both
						height 0
					.r-list-live
						display block
						width 50%
						padding-top 20px
						float left
						.no-data
							text-align center!important
							width 100%!importang
							height 100%!important
							padding 0!important
							margin 0!important
							line-height 100px!important
							color #99a2aa!important
							float none!important
							span
								display inline-block
								vertical-align middle
								height 20px
								line-height 20px
							&:before
								content ''
								display inline-block
								vertical-align middle
								width 20px
								height 20px
								background url(../../assets/images/state.png) no-repeat center -598px
								margin-right 5px	
						.mini-preview-wrapper
							position relative
							width 260px
							overflow hidden
							border-radius 4px
							.mini-preview-list-wrapper
								overflow hidden
								border-radius 4px
								.mini-preview
									width 300%
									margin-left -200%
									zoom 1
									&:after
										content ''
										height 0
										display block
										clear both
										font-size 0
									li
										width 260px
										height 248px
										float left
										overflow hidden
							.s-bottom
								position absolute
								bottom 0px
								left 0px
								width 100%
								border-radius 0 0 4px 4px
								.info
									padding 5px 10px 2px
									line-height 20px
									background rgba(0,0,0,0.6)
									a.t
										display block
										color #fff
										overflow hidden
										white-space nowrap
										text-overflow ellipsis
								.slider-bar
									overflow hidden
									text-align center
									background rgba(0,0,0,0.74)
									li
										display inline-block
										vertical-align top
										cursor pointer
										height 6px
										padding 9px 0
										margin 0 2px
										a
											display block
											width 10px
											height 6px
											background-color #fff
											border-radius 5px
											transition .2s
										&.on 
											a
												width 30px
												background-color #f25d8e

			&:after
				content ''
				display block
				visibility hidden
				font-size 0
				height 0
				clear both

</style>