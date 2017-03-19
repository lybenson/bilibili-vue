<template>
	<div class="rank">
		<div class="b-head">
			<ul class="b-slt-tab" data-initialized="true">
				<li v-for="(item, index) in tabTitle" @click="cutTab(index)" :class="{on: tabCount == index}">
					<span class="b-tab-text">{{item}}</span>
				</li>
			</ul>
		</div>
		<div class="b-body">
			<div class="r-list-body">
				<div class="r-list-wrapper" ref="listWrapper">
					<ul class="r-list-live" >
						<BLiveRankItem v-for="(item, index ) in ranklist" :rank="item" :index="index"></BLiveRankItem>
					</ul>
					<ul class="r-list-live">
						<li class="no-data">
							<span>没有数据</span>
						</li>
					</ul>
					<ul class="r-list-live">
						<div class="mini-preview-wrapper">
							<div class="mini-preview-list-wrapper">
								<ul class="mini-preview" ref="miniPreview">
									<li class="preview" v-for="pre in preview">
										<a href="" target="_blank">
											<img :src="pre.pic">
										</a>
									</li>
								</ul>
							</div>
							<div class="s-bottom">
								<div class="info">
									<div class="info-item"  v-for="(pre, index) in preview" :class="{ show: count == index,hide: count !== index }">
										<a class="t" :href="pre.url" :title="pre.title" target="_blank">{{pre.title}}</a>
									</div>
								</div>
								<ul class="slider-bar">
									<li bar :class="{on: count == index}" v-for="(item, index) in preview" @mouseover="cutItem(index)">
										<a></a>
									</li>
								</ul>
							</div>
						</div>
						<div class="live-pmt-live">
							<li v-for="anchor in recommendAnchor">
								<div class="pmt-item"><a class="preview" :href="anchor.link" target="_blank" :title="anchor.title"><img :src="anchor.face" :alt="anchor.link"><p class="title">{{anchor.uname}}</p></a></div>
							</li>
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
	data() {
		return {
			interval: Function,
			count: 0,
			tabCount: 0,
			tabTitle: ['直播排行', '关注的主播', '为你推荐']
		}
	},
	props: {
		ranklist: {
			type: Array
		},
		preview: {
			type: Array
		},
		recommendAnchor: {
			type: Array
		}
	},
	watch: {
		preview() {
			if (this.preview) {
				let size = 100 * this.preview.length
				let width = size + "%"
				this.$refs.miniPreview.style.width = width
				this.startInterval()			
			}
		}
	},
	mounted() { 
	},
	methods: {
		cutItem(index) { 
			this.count = index
			let distance = -100 * this.count
			let left = distance + "%"
			this.$refs.miniPreview.style.marginLeft = left
			clearInterval(this.interval)
			this.startInterval()
		},
		startInterval() {
			//轮播图定时滚动
			this.interval = setInterval(() => {
				this.count ++ 
				if (this.count === this.preview.length) {
					this.count = 0
				}
				let distance = -100 * this.count
				let left = distance + "%"
				if (this.$refs.miniPreview) {
					this.$refs.miniPreview.style.marginLeft = left
				}
			}, 5000)
		},
		cutTab(index) {
			this.tabCount = index
			let distance = -100 * this.tabCount
			let left = distance + "%"
			this.$refs.listWrapper.style.marginLeft = left
		}
	},
	components: {
		BLiveRankItem
	}
}
</script>

<style lang="stylus" scoped>
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
					&:hover
						color #00a1d6
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
					margin-left 000%
					width 780px
					transition .2s
					&:after
						content ''
						display block
						visibility hidden
						font-size 0
						clear both
						height 0
					.r-list-live
						display block
						width 260px
						padding-top 20px
						float left
						.no-data
							text-align center!important
							width 100%!importang
							height 360px
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
									width 100%
									margin-left 0%
									zoom 1
									transition .2s
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
									.show
										display block
									.hide
										display none
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
									&.show
										display block
									&.hide
										display none
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
						.live-pmt-live
							padding-top 10px
							height 102px
							overflow hidden
							li
								float left
								margin 0 0 10px 12px
								&:first-child
									margin-left 0
								.pmt-item
									.preview
										display block
										width 56px
										height 56px
										position relative
										border-radius 4px
										overflow hidden
										&:hover .title
											height 100%
											line-height 22px
											padding 8px 5px
											box-sizing border-box
											word break-all
										img
											width 100%
											height 100%
											display block
										.title
											position absolute
											bottom 0px
											right 0px
											width 100%
											text-align center
											height 18px
											line-height 18px
											color #fff
											background rgba(0,0,0,0.5)
			&:after
				content ''
				display block
				visibility hidden
				font-size 0
				height 0
				clear both

</style>