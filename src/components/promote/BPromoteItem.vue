<template>
	<li>
		<div class="v">
			<a class="preview cover-preview" :href="promoteItem.url" target="_blank">
				<div class="border"></div>
				<img :src="promoteItem.pic">

				<!-- 背景图随鼠标运动变化 -->
				<div class="back">
					<div style=""></div>
				</div>
				<!-- 进度条 -->
				<div class="fore">
					<span data-loading=false></span>
					<div class="bar">
						<div style="width: 50%"></div>
					</div>
				</div>
				<!-- 时间 -->
				<div class="x">
					<b class="x2">70.41</b>
				</div>
				<div class="fake_danmu_gen_shared">弹幕</div>
			</a>
			<a href="" target="_blank" title="[帝国的黎明]">
				<div class="t">{{promoteItem.name}}</div>
			</a>
		</div>
	</li>
</template>

<script>
export default {
	props: {
		promoteItem: {
			type: Object
		}
	}
}
</script>

<style lang="stylus" scoped>
li
	float left
	width 160px
	margin-bottom 20px
	margin-right 20px
	.v
		position relative
		width 160px
		height 148px
		font-size 12px
		overflow hidden
		.preview
			width 160px
			height 100px
			display block
			overflow hidden
			text-align center
			transition .2s all linear
			box-sizing border-box
			z-index 0
			border-radius 4px
			.boeder
				position absolute
				width 158px
				height 98px
				border 1px solid #e5e9ef
				top 0px
				left 0px
				z-index 1
				transition .2s all linear
			img
				width 100%
				height 100%
				display block
				margin 0 auto
				outline 0
		.t
			height 40px
			margin-bottom 8px
			padding-top 8px
			line-height 20px
			transition .2s all linear
			color #222
			word-wrap break-word
			word-break break-all
			overflow hidden
			text-align left
		&:hover .t
			color #00a1d6
</style>