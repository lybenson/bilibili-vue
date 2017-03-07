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
					<ul class="r-list-live">
						<BLiveRankItem v-for="item in ranklist" :rank="item"></BLiveRankItem>
					</ul>
					<ul class="r-list-live"></ul>
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
									
								</div>
								<ul class="slider-bar">
									<li class="on"></li>
									<li class="on"></li>
									<li class="on"></li>
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
		.b-body
			clear both
			.r-list-body
				zoom 1
				overflow hidden
				.r-list-wrapper
					margin-left 0%
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

</style>