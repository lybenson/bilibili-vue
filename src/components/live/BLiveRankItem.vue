<template>
	<li class="live-item">
		<div class="r-item r-ranking">
			<div class="lv-num" :class="{n: index === 0 || index === 1 || index === 2}">{{index + 1}}</div>
			<a href="" class="preview" target="_blank" :title="rank.uname">
				<img :src="rank.face" :alt="rank.uname">
			</a>
			<a href="" target="_blank" :title="rank.uname">
				<div class="r-i">
					<p class="r-i-t">
						<span class="u-name">{{rank.uname}}</span>
						<span class="u-online">
							<i class="b-icon b-icon-live-online"></i><em>{{online}}万</em>
						</span>
						<div class="r-i-st">
							{{rank.title}}
						</div>
					</p>
				</div>
			</a>
		</div>
	</li>
</template>

<script>
export default {
	props: {
		rank: {
			type: Object
		},
		index: {

		}
	},
	computed: {
		online() {
			return (this.rank.online / 10000).toFixed(1)
		}
	}
}
</script>

<style lang="stylus" scoped>
	.live-item
		margin 0 0 14px 0
		.r-item
			overflow hidden
			position relative
			&.r-ranking
				padding-left 25px
			.lv-num
				position absolute
				color #fff
				height 18px
				line-height 17px
				top 0px
				left 0px
				font-size 12px
				min-width 12px
				text-align center
				background-color #b8c0cc
				border-radius 4px
				z-index 20
				padding 0 3px 0 3px
				font-weight bolder
				&.n
					background-color #f25d8e
			.preview
				display block
				float left
				position relative
				margin-right 12px
				img
					display block
			img
				width 40px
				height 40px
				border-radius 20px
			.r-i
				float left
				width 180px
				&:hover 
					.u-name
						color #00a1d6
			.r-i-t
				line-height 16px
				overflow hidden
				.u-name
					max-width 115px
					float left
					white-space nowrap
					text-overflow ellipsis
					color #222
				.u-online
					max-width 60px
					float right
					color #99a2aa
					line-height 16px
					overflow hidden
					white-space nowrap
					text-overflow ellipsis
					.b-icon
						display inline-block
						width 12px
						height 12px
						vertical-align top
						margin-right 5px
						margin-top 2px
						font-style normal
						font-weight normal
						&.b-icon-live-online
							background url(../../assets/images/live-eye.png)
					em
						font-style normal
						font-weight normal
			.r-i-st
				margin-top 4px
				color #99a2aa
				overflow hidden
				white-space nowrap
				text-overflow ellipsis
				max-width 190px
				height 16px
				line-height 16px

</style>