<template>
	<div class="top-list-wrapper">
		<ul class="top-list" clearfix>
			<BContentTopItem></BContentTopItem>
		</ul>
		<div style="display: none;">昨日</div>
		<div style="display: none;">一周</div>
	</div>
</template>

<script>
import BContentTopItem from 'components/contentTop/BContentTopItem'
export default {
	components: {
		BContentTopItem
	}
}
</script>

<style lang="stylus" scoped>
	.top-list-wrapper
		position relative
		height 240px
		overflow hidden
		margin-left 20px
</style>