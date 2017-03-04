<template>
	<div class="b_promote">
		<div class="b-l">
			<div class="b-head">
				<span class="b-head-i"></span>
				<span class="b-head-t">
					<h2>推广</h2>
				</span>
				<div class="pmt-list">
					<div class="pmt-link">
						<a href="//www.bilibili.com/blackboard/activity-sharks.html" target="_blank" data-loc-id="1550">最光荣的时刻，就是现在</a>
					</div>
				</div>
			</div>
			<div class="b-body" v-if="promotelist">
				<ul class="rm-list">
					<div>
						<BPromoteItem v-for="item in promotelist" :promoteItem="item"></BPromoteItem>
					</div>
				</ul>
			</div>
		</div>
		<div class="b-r">
			<div class="b-head">
				<div class="index-online">
					<span class="web-online">
						<a href="">
							在线人数:
							<em>12123</em>
						</a>
					</span>
					<i class="s-line"></i>
					<span class="new-video">
						<a href="">
							最新投稿:
							<em>10086</em>
						</a>
					</span>
				</div>
			</div>
			<div class="b-body" v-if="promoteAd.length > 0">
				<div class="index-promote">
					<div class="pmt-item pmt-mid">
						<a :href="promoteAd[0].url" data-target-url="" target="_blank">
							<img :src="promoteAd[0].pic">
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import BPromoteItem from 'components/promote/BPromoteItem'
import { mapGetters } from 'vuex'
export default {
	components: {
		BPromoteItem
	},
	computed: {
		...mapGetters([
			'requesting',
			'error',
			'promotelist',
			'promoteAd'
		])
	},
	mounted() {
		this.$store.dispatch('promote')
	}
}
</script>

<style lang="stylus">
	.b_promote
		.b-l
			float left
			width 700px
			.b-head
				margin 4px 0 6px
				height 24px
				white-space nowrap
				position relative
				.b-head-i
					position absolute
					left 0px
					top -8px
					background  url(../../assets/images/icons.png) no-repeat
					background-position -141px -75px
					width 40px
					height 39px
					display inline-block
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
					h2
						font-size 24px!important
						line-height 24px
						font-weight normal
				.pmt-list
					display inline-block
					vertical-align bottom 
					margin-left 10px
					margin-top 10px
					.pmt-link
						display inline-block
						vertical-align top
						padding 0 10px
						a
							display block
							line-height 16px
							color #6d757a
			.b-body
				margin-right -20px
				clear both
				.rm-list
					padding-top 10px
					height 150px
					overflow hidden
					&:after
						content ''
						display block
						visibility hidden
						height 0
						clear both
						font-size 0
		.b-r
			float right 
			width 260px
			margin-bottom 50px
			height 195px
			min-height 195px
			.b-head
				position relative
				.index-online
					position relative
					height 34px
					padding-top 0 10px 0 10px
					border-radius 4px
					text-align center
					background #e5e9ef
					white-space nowrap
					i.s-line
						display inline-block
						border-left 1px solid #b8c0cc
						height 10px
						line-height 10px
						margin 12px 15px 0
						vertical-align top
					span
						display inline-block
						line-height 34px
						text-align left
						color #6d757a
						a
							color #6d757a
							em
								font-style normal
								font-weight normal
			.b-body
				clear both
				.index-promote
					width 260px
					height 150px
					margin-top 10px
					a
						display block
						width 100%
						height 100%
					.pmt-promote, img
						border-radius 4px
						width 100%
						height 100%

</style>