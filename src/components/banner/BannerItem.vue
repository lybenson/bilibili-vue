<template>
	<li class="banner-item">
		<a href="" class="b-link" target="_blank">
			<img :src="bannerLink">
		</a>
	</li>
</template>
<script>
export default {
	props: {
		bannerLink: {
			type: String,
			required: true
		}
	}
}
</script>

<style lang="stylus" scoped>
	.banner-item
		width 440px
		height 220px
		float left
		overflow hidden
		.b-link
			color #fff
			width 100%
			height 100%
			img
				width 100%
				height 100%
</style>