<template>
	<div class="index-nav nav-side" style="opacity: 1; display: block; top: 0px; left: auto; right: 0px;">
		<div class="border"></div>
		<div class="nav-list">
			<div class="n-i sortable">
				<div class="name">直播</div>
			</div>
			<div class="n-i sortable">
				<div class="name">直播</div>
			</div>
			<div class="n-i sortable">
				<div class="name">直播</div>
			</div>
			<div class="n-i sortable">
				<div class="name">直播</div>
			</div>
			<div class="n-i sortable">
				<div class="name">直播</div>
			</div>
			<div class="n-i sortable">
				<div class="name">直播</div>
			</div>
			<div class="n-i sortable">
				<div class="name">直播</div>
			</div>
			<div class="n-i sortable">
				<div class="name">直播</div>
			</div>
			<div class="n-i sortable">
				<div class="name">直播</div>
			</div>
			<div class="n-i sortable">
				<div class="name">直播</div>
			</div>
			<div class="n-i sortable">
				<div class="name">直播</div>
			</div>
			<div class="n-i sortable">
				<div class="name">直播</div>
			</div>
			<div class="n-i sortable">
				<div class="name">直播</div>
			</div>
			<div class="n-i sortable">
				<div class="name">直播</div>
			</div>
		</div>
		<div class="n-i gotop">
		</div>
		<div class="n-i n-i-mlink"></div>
	</div>
</template>

<script>
export default {

}
</script>

<style lang="stylus" scoped>
	.index-nav
		position fixed
		width 48px
		z-index 90
		text-align center
		.nav-list
			position relative
			z-index 250
			background-color #f6f9fa
			border 1px solid #e5e9ef
			overflow hidden
			border-radius 4px
		.n-i
			cursor pointer
			&:first-child
				border-top 0
			.name
				height 32px
				line-height 32px
				transition .1s linear
				transition-property background-color,color
				&:hover
					background-color #00a1d6
					color #fff
</style>