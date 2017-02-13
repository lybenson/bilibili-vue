<template>
	<div class="menu">
		<div class="menu-wrapper">
			<ul class="nav-menu">
				<BMenuItem v-for="i in itemNum"></BMenuItem>
			</ul>
			<div class="menu-r"></div>
		</div>
	</div>
</template>

<script>
import BMenuItem from 'components/common/BMenuItem'
export default {
	data() {
		return {
			itemNum: [1, 2, 3, 4, 5]
		}
	},
	components: {
		BMenuItem
	}
}
</script>

<style lang="stylus" scoped>
	.menu
		width 100%
		background #fff
		.menu-wrapper
			position relative
			width 980px
			margin 0 auto
			padding 6px 0
			z-index 100
			.nav-menu
				zoom 1
				display inline-block
				vertical-align top
				height 50px
			.menu-r
				position absolute
				right 0px
				top 0px
				height 50px
				padding 6px 0
</style>