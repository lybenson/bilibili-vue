<template>
	<li class="m-i" :class="classes">
		<a class="i-link" href="">
			<em>{{item.title}}</em>
			<div class="v-num" v-if="showNum">
				<span class="addnew_1">{{item.num}}</span>
			</div>
		</a>
		<ul></ul>
	</li>
</template>

<script>
export default {
	data() {
		return {
			classes: {
				home: this.item.home,
				sequare: this.item.sequare,
				live: this.item.live
			}
		}
	},
	props: {
		item: {
			type: Object,
			required: true
		}
	},
	computed: {
		showNum() {
			if (this.item.home || this.item.sequare || this.item.live) {
				return false
			}
			return true
		}
	}
}
</script>

<style lang="stylus">
	.m-i
		float left
		position relative
		font-size  14px
		display block
		height 50px	
		&.home
			padding 0 12px 0 0
			width auto
			margin 0
			a.i-link
				padding 0
				background url(../../assets/images/icons.png) -658px -1170px no-repeat
				em
					padding-left 0
					padding-right 0
					margin 0
		&.sequare
			margin 0 12px 0 14px
			em
				padding-left 22px
				padding-right 0
				padding-top 0
				height 50px
				margin 0!important
				font-size 16px
				background url(../../assets/images/icons.png) -664px -518px no-repeat
		&.live
			margin-left 16px
			em
				padding-left 22px
				padding-right 0
				padding-top 0
				height 50px
				margin 0!important
				font-size 16px
				background url(../../assets/images/icons.png) -664px -904px no-repeat
		a
			color #222
			display block
			&.i-link
				position relative
				z-index 10
				font-size 14px
			em
				line-height 50px
				font-style normal
				font-weight normal
				display inline-block
				vertical-align middle
				margin 0 11px
				height 42px
				padding-top 8px
		.v-num
			position absolute
			top 8px
			left 0px
			height 14px
			width 100%
			text-align center
			span
				position static
				display inline-block
				vertical-align top
				top auto
				margin-left 0
				background-color #ffafc9
				color #fff
				border-radius 4px
				height 12px
				text-align center
				font-family Calibri,Arial,Helvetica,sans-serifsans-serif
				font-size 11px
				min-width 18px
				padding 1px 3px
</style>