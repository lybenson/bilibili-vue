<template>
	<div class="rank">
		<div class="b-head">
			<div class="left">
				<span class="b-head-t">
					<h3>排行</h3>
				</span>
				<ul class="b-slt-tab" v-show="categoryId !== 13">
					<li :class="{on: !isOrigin}" type="hot" @mouseover="hot">
						<span class="b-tab-text">全部</span>
					</li>
					<li  :class="{on: isOrigin}" class="hot_original" @mouseover="original">
						<span class="b-tab-text">原创</span>
					</li>
				</ul>
			</div>
			<div class="right">
				<div class="b-slt">
					<span class="txt">{{selectedTitle}}</span><div class="b-slt-arrow"></div>
					<ul class="list">
						<li :class="{selected: isSelected1}" data-value="3" data-source="/index/catalogy/1-3day.json" @click="selectedItem1">三日</li>
						<li :class="{selected: isSelected2}" data-value="7" data-source="/index/catalogy/1-week.json" @click="selectedItem2">一周</li>
					</ul>
				</div>
			</div>
		</div>
		<BRowRankBody :categoryId="categoryId" :isOrigin="isOrigin" :isWeek="isWeek"></BRowRankBody>
	</div>
</template>

<script>
import BRowRankBody from 'components/contentRow/BRowRankBody'
import axios from 'axios'
export default {
	props: {
		categoryId: {
			type: Number
		}
	},
	data() {
		return {
			isSelected1: true,
			isSelected2: false,
			selectedTitle: '三日',
			isOrigin: false, //全部还是原创
			isWeek: false //三日排行or一周排行
		}
	},
	components: {
		BRowRankBody
	},
	methods: {
		selectedItem1() {
			this.selectedTitle = '三日'
			this.isSelected1 = true
			this.isSelected2 = false
			this.isWeek = false
		},
		selectedItem2() {
			this.selectedTitle = '一周'
			this.isSelected1 = false
			this.isSelected2 = true
			this.isWeek = true
		},
		hot() {
			this.isOrigin = false
		},
		original() {
			this.isOrigin = true
		}
	}
}
</script>

<style lang="stylus" scoped>
	.rank
		.b-head
			position relative
			.left
				float left
			.b-head-t
				font-size 18px
				height 24px
				line-height 24px
				vertical-align middle
				display inline-block
				color #222
				h3
					font-size 18px!important
					font-weight normal
			.b-slt-tab
				padding-left 20px
				position relative
				vertical-align middle
				display inline-block
				li
					position relative
					padding 1px 0 2px
					border-radius 0
					border-bottom 1px solid transparent
					float left
					height 20px
					line-height 20px
					margin-left 12px
					cursor pointer
					text-align center
					transition .2s
					transition-property border, color
					&:before
						content ''
						display none
						position absolute
						left 50%
						margin-left -3px
						bottom 0
						width 0
						height 0
						border 3px dashed #00a1d6
						border-top 0
						border-left-color transparent
						border-right-color transparent
					&:first-child
						margin-left 0!important
					&.on
						background-color transparent
						border-color #00a1d6
						color #00a1d6
					&.on:before
						display block
			.right
				float right
				.b-slt
					position relative
					display inline-block
					vertical-align middle
					background-color #fff
					cursor default
					padding 0 7px
					height 22px
					line-height 22px
					user-select none
					border solid 1px #ccd0d7
					transition .1s border linear
					border-radius 4px
					&:hover
						border solid 1px #ccd0d7
						border-radius 4px 4px 0 0 
						box-shadow rgba(0,0,0,0.16) 0 2px 4px
					.txt
						display inline-block
						text-align center
						white-space nowrap
						overflow hidden
						text-overflow ellipsis
						vertical-align top
					.b-slt-arrow
						background  url(../../assets/images/icons.png) -475px -157px no-repeat
						display inline-block
						vertical-align middle
						width 12px
						height 6px
						margin-left 5px
						margin-top -1px
					.list
						left -1px
						right auto
						display none
						position absolute
						background #fff
						border 1px solid #ccd0d7
						border-top 0
						top 22px
						max-height 540px
						overflow-x hidden
						overflow-y auto
						z-index 5000
						border-radius 0 0 4px 4px
						min-width 100%
						li
							cursor pointer
							margin 0
							padding 3px 7px 3px 7px
							white-space nowrap
							overflow hidden
							text-overflow ellipsis
							transition .1s background-color
							&.selected
								display none
							&:hover
								background-color #e5e9ef
				&:hover .list
					display block
</style>