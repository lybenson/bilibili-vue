<template>
	<div class="b-section-body">
		<div class="b-l">
			<BRowHead :category="category"></BRowHead>
			<BRowBody :row="row"></BRowBody>
		</div>
		<div class="b-r">
			<BRowRank :category="category" :categoryId="categoryId"></BRowRank>
		</div>
	</div>
</template>

<script>
import BRowHead from 'components/contentRow/BRowHead'
import BRowBody from 'components/contentRow/BRowBody'
import BRowRank from 'components/contentRow/BRowRank'
import { mapGetters } from 'vuex'
export default {
	props: {
		category: {
			type: String
		},
		row: {
			type: Array
		},
		categoryId: {
			type: Number
		}
	},
	computed: {
		...mapGetters([
			'requesting',
			'error',
			'ranks',
			'rank'
		])
	},
	mounted() {
		// console.log(this.categoryId)
		// this.$store.dispatch('getContentRank', this.categoryId)
	},
	components: {
		BRowHead,
		BRowBody,
		BRowRank
	}
}
</script>

<style lang="stylus" scoped>
	.b-section-body
		zoom 1
		.b-l
			float left
			width 700px
			margin-bottom 50px
		.b-r
			float right 
			width 260px
			min-height 360px
			height 360px
			margin-bottom 50px
</style>