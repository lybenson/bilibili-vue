<template>
	<div class="content">
		<div class="container-top-wrapper">
			<div class="container-top">
				<div class="b-l">
					<Banner></Banner>
				</div>
				<div class="b-r">
					<BContentTop></BContentTop>
				</div>
			</div>
		</div>
		<!-- 推广 -->
		<div class="container-row">
			<BPromote></BPromote>
		</div>
		<!-- 直播 -->
		<div class="container-row">
			
		</div>
		<!-- 各分类具体内容 -->
		<div>
			
		</div>
	</div>
</template>

<script>
import Banner from 'components/banner/Banner'
import BContentTop from 'components/contentTop/BContentTop'
import BPromote from 'components/promote/BPromote'
export default {
	components: {
		Banner,
		BContentTop,
		BPromote
	}
}
</script>

<style lang="stylus" scoped>
	.content
		zoom 1
		.container-top
			padding 0
			margin-bottom 20px
			margin 0 auto
			zoom 1
			width 980px
			.b-l
				float left
				width 440px
			.b-r
				float right
				width 540px
				height auto
		.container-row
			margin 0 auto
			zoom 1
			width 980px
</style>