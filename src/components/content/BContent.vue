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
			<BLive></BLive>
		</div>
		<!-- 各分类具体内容 -->
		<div class="container-row"  v-for="(row, index) in rows" :id="getContentRowId(index)"> 
			<BContentRow :category="sortKeys[index]" :categoryId="sortIds[index]" :row="row"></BContentRow>
		}
		</div>
	</div>
</template>

<script>
import Banner from 'components/banner/Banner'
import BContentTop from 'components/contentTop/BContentTop'
import BPromote from 'components/promote/BPromote'
import BLive from 'components/live/BLive'
import BContentRow from 'components/contentRow/BContentRow'

import { mapGetters } from 'vuex'
export default {
	computed: {
		...mapGetters([
			'requesting',
			'error',
			'rows',
			'sortKeys',
			'sortIds'
		])
	},
	props: ['items'],
	mounted() {
		this.$store.dispatch('getContentRows')
		console.log(JSON.stringify(this.items) + '=======')
	},
	methods: {
		getContentRowId(index) {
			if (index > this.items.length-1) {
				return '123456'
			}
			// console.log(index + '=== ' +this.items[index].b_id)
			// return '123456'
			return this.items[index].b_id
		}
	},
	components: {
		Banner,
		BContentTop,
		BPromote,
		BLive,
		BContentRow
	}
}
</script>

<style lang="stylus" scoped>
	.content
		zoom 1
		.container-top-wrapper
			&:after
				content ''
				display block
				visibility hidden
				height 0
				clear both
				font-size 0
		.container-top
			padding 0
			margin 0 auto
			margin-bottom 20px
			zoom 1
			width 980px
			&:after
				content ''
				display block
				visibility hidden
				height 0
				clear both
				font-size 0
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
			&:after
				content ''
				display block
				visibility hidden
				height 0
				clear both
				font-size 0
</style>