<template>
	<div class="b-body">
		<div class="r-list-body">
			<div class="r-list-wrapper" ref="listWrapper">
				<ul class="rlist" v-if="rank.hot">
					<li :class="{on: index === 0}" v-for="(item, index) in rank.hot.list">
						<i class="number" :class="{n: index === 0 || index === 1 || index === 2}">
							{{index + 1}}
						</i>
						<div class="preview">
						<!-- :alt="item.title" -->
							<a href="/video/av9211860/" :title="item.title" target="_blank">
								<img data-img="" :src="item.pic" loaded="loaded"  style="opacity: 1;">
								</a>
						</div>
						<a class="rl-info" href="/video/av9211860/" :title="item.title + item.pts" target="_blank">	
							<div class="title t">{{item.title}}
							</div>
							<div class="i">
								<b class="pts" :title="item.pts">综合评分：{{item.pts}}
								</b>
							</div>
						</a>
					</li>
				</ul>
				<ul class="rlist" v-if="rank.hot_original">
					<li :class="{on: index === 0}" v-for="(item, index) in rank.hot.list">
						<i class="number" :class="{n: index === 0 || index === 1 || index === 2}">
							{{index + 1}}
						</i>
						<div class="preview">
						<!-- :alt="item.title" -->
							<a href="/video/av9211860/" :title="item.title" target="_blank">
								<img data-img="" :src="item.pic" loaded="loaded"  style="opacity: 1;">
								</a>
						</div>
						<a class="rl-info" href="/video/av9211860/" :title="item.title + item.pts" target="_blank">	
							<div class="title t">{{item.title}}
							</div>
							<div class="i">
								<b class="pts" :title="item.pts">综合评分：{{item.pts}}
								</b>
							</div>
						</a>
					</li>
				</ul>
			</div>
		</div>
		<div class="more-link">
			<a href="/ranking#!/all/1/1/7/" target="_blank">查看更多</a>
		</div>
	</div>
</template>

<script>
import { contentrankApi } from 'api'
export default {
	data(){
		return {
			threeDayData: {},
			weekData: {},
			rank: {}
		}
	},
	props: {
		categoryId: {
			type: Number
		},
		isOrigin: {
			type: Boolean
		},
		isWeek: {
			type: Boolean
		}
	},
	watch: {
		isOrigin(val, oldVal) {
			console.log(this.isWeek)
			if (val) {
				console.log('isOrigin')
				this.$refs.listWrapper.style.marginLeft = '-100%'
			} else {
				this.$refs.listWrapper.style.marginLeft = '0%'
			}
		},
		isWeek(val, oldVal) {
			console.log("change")
			this.getrankData()
		}
	},
	mounted() {
		this.getrankData()
	},				
	methods: {
		getrankData() {
			//防止重复请求
			if (this.isWeek && JSON.stringify(this.weekData) !== '{}') {
				this.rank = this.weekData
				return
			} 
			if (!this.isWeek && JSON.stringify(this.threeDayData) !== '{}') {
				this.rank = this.threeDayData
				return
			} 

			let param = {
				categoryId: this.categoryId
			}
			if (this.isWeek) {
				contentrankApi.contentrankweek(param).then((response) => {
					this.weekData = response
					this.rank = this.weekData
				})
			} else {
				contentrankApi.contentrank(param).then((response) => {
					this.threeDayData = response
					this.rank = this.threeDayData
				})
			}
		}
	}
}
</script>

<style lang="stylus" scoped>
	.b-body
		clear both
		i
			font-style normal
			font-weight bold
		.r-list-body
			zoom 1
			overflow hidden
			.r-list-wrapper
				width 200%
				margin-left 0%
				overflow hidden
				transition .2s
				.rlist
					padding-bottom 15px
					padding-top 20px
					min-height 278px
					max-height 278px
					width 50%
					float left
					overflow hidden
					li
						overflow hidden
						margin-top 20px
						position relative
						padding-left 25px
						img
							display block
							max-width 80px
							height 50px
							margin 0 auto
						&:first-child
							margin 0
						.number
							position absolute
							color #fff
							height 18px
							line-height 17px
							top 0
							left 0
							font-size 12px
							min-width 12px
							text-align center
							background-color #b8c0cc
							z-index 20
							border-radius 4px
							padding 0 3px 0 3px
							font-weight bloder
							&.n
								background-color #f25d8e
						.preview
							margin-right 5px
							width 80px
							height 50px
							float left
							display none
							border-radius 4px
							overflow hidden
						.rl-info
							float left
						.t
							line-height 17px
							height 18px
							word-wrap break-word
							word-break break-all
							overflow hidden
							color #222
						.i
							margin-top 5px
							display none
							overflow hidden
							b
								padding-left 13px
								display block
								font-family "microsoft yahei",simhei
								line-height 12px
								color #99a2aa
								height 12px
								float left
								&.pts
									padding 0
						&.on
							.t
								height 36px
								line-height 18px
								margin-top -3px
								width 150px
								padding 0
							.i
								display block
							.preview
								display block
						&:hover
							.t
								color #00a1d6
		.more-link
			text-align right
			height 24px
			line-height 24px
			a
				display block
				width auto
				margin 0
				background-color #e5e9ef
				text-align center
				border 1px solid #e0e6ed
				height 22px
				line-height 22px
				color #222
				border-radius 4px
				transition .2s
				&:after
					content ''
					display inline-block
					width 6px
					height 12px
					background url(../../assets/images/icons.png) -478px -218px no-repeat
					vertical-align middle
					margin -2px 0 0 5px
				&:hover
					background-color #ccd0d7
</style>