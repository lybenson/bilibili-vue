<template>
	<div class="b-head">
		<span class="b-head-i" :class="category"></span>
		<span class="b-head-t">
			<a href="" :title="title">
				<h2>{{title}}</h2>
			</a>
		</span>
		<ul class="b-slt-tab">
			<li class="on" data-source="/index/ding.json" data-type-jsonp="json" push="">
				<span class="b-tab-text">有新动态</span>
			</li>
			<li data-source="/index/ranking.json" data-type-jsonp="json" class="">
				<span class="b-tab-text">最新投稿</span>
			</li>
		</ul>
		<div class="b-link-more">
			<a href="/video/music.html">
				更多<i class="b-icon b-icon-arrow-r"></i>
			</a>
		</div>
		<div class="read-push" style="display: block;">
			<span class="icon-refresh"></span>
			<span class="info">
				<b>4865</b>
				<em>条新动态</em>
			</span>
		</div>
		<div class="pmt-list pmt-inline">
			<i class="pmt-icon"></i>
			<div class="pmt-link">
				<a href="//www.bilibili.com/video/av8977179/" target="_blank" data-loc-id="1558">一个人的恋爱循环
				</a>
				<a></a>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		category: {
			type: String
		}
	},

	// douga 动画,bangumi 番剧, music 音乐,dance 舞蹈,game 游戏,technology  科技,life 生活,kichiku 鬼畜,fashion 时尚,ad 广告,ent  娱乐, movie 电影, teleplay TV剧
	computed: {
		title() {
			let title = '未知标题';
			if (this.category) {
				switch(this.category) {
					case 'douga':
						title = '动画'	
						break
					case 'bangumi':
						title = '番剧'	
						break
					case 'music':
						title = '音乐'	
						break
					case 'dance':
						title = '舞蹈'	
						break
					case 'game':
						title = '游戏'	
						break
					case 'technology':
						title = '科技'	
						break
					case 'life':
						title = '生活'	
						break
					case 'kichiku':
						title = '鬼畜'	
						break
					case 'fashion':
						title = '时尚'	
						break
					case 'ad':
						title = '广告'	
						break
					case 'ent':
						title = '娱乐'	
						break
					case 'movie':
						title = '电影'	
						break
					case 'teleplay':
						title = 'TV剧'	
						break
					default:
						title ="未知标题"
				}
			}
			return title
		}
	},
}
</script>

<style lang="stylus" scoped>
	.b-head
		height 24px
		white-space nowrap
		position relative
		.b-head-i
			position absolute
			left 0px
			top -8px
			background url(../../assets/images/icons.png) no-repeat
			width 40px
			height 39px
			display inline-block
			&.douga
				background-position -141px -908px
			&.bangumi
				background-position -141px -140px
			&.music
				background-position -141px -266px
			&.dance
				background-position -141px -461px
			&.game
				background-position -141px -203px
			&.technology
				background-position -141px -525px
			&.life
				background-position -141px -970px
			&.kichiku
				background-position -141px -332px
			&.fashion
				background-position -141px -718px
			&.ad
				background-position -141px -1228px
			&.ent
				background-position -141px -1032px
			&.movie
				background-position -141px -396px
			&.teleplay
				background-position -141px -845px
		.b-head-t
			float left
			margin-left 46px
			vertical-align middle
			display inline-block
			font-size 18px
			line-height 24px
			color #222
			a
				color #222
			h2
				font-size 24px!important
				line-height 24px
				font-weight normal
		.b-slt-tab
			position relative
			display inline-block
			vertical-align middle
			margin-left 20px
			float left
			li
				float left
				height 20px
				line-height 20px
				cursor pointer
				text-align center
				transition .2s
				transition-property border, color
				padding 1px 0 2px
				position relative
				border-radius 0
				border-bottom 1px solid transparent
				margin-left 24px
				&:first-child
					margin-left 0!important
				&.on
					background-color transparent
					border-color #00a1d6
					color #00a1d6
					&:before
						content ''
						display block
						position absolute
						left 50%
						margin-left -3px
						bottom 0px
						width 0
						height 0
						border 3px dashed #00a1d6
						border-bottom-style solid
						border-top 0
						border-left-color transparent
						border-right-color transparent
		.b-link-more
			float right
			text-align center
			margin-left 10px
			a
				display block
				width 52px
				height 22px
				line-height 22px
				background-color #fff
				border 1px solid #ccd0d7
				color #555
				border-radius 4px
				.b-icon-arrow-r
					display inline-block
					vertical-align middle
					background url(../../assets/images/icons.png) no-repeat
					width 6px
					height 12px
					margin -2px 0 0 5px
					background-position -478px -218px
		.read-push
			float right
			cursor pointer
			background-color #fff
			border 1px solid #ccd0d7
			border-radius 4px
			height 22px
			padding 0 10px
			.icon-refresh
				background url(../../assets/images/icons.png) -475px -89px no-repeat
				display inline-block
				width 12px
				height 13px
				vertical-align: top
				transition .2s
				margin-top 5px
			.info
				display inline-block
				vertical-align top
				line-height 22px
				margin-left 5px
				b
					font-weight bold
				em
					font-style normal
					font-weight normal
		.pmt-list
			display inline-block
			vertical-align bottom
			&.pmt-inline
				margin-left 40px
				margin-top 3px
				max-width 214px
				overflow hidden
				float left
			.pmt-icon
				display inline-block
				vertical-align top
				background url(../../assets/images/icons.png) -665px -1113px no-repeat
				width 14px
				height 14px
				margin-top 1px
			i
				font-style normal
				font-weight normal
			.pmt-link
				vertical-align top
				height auto
				display inline-block
				padding 0 0 0 8px
				border 0
				a
					max-width 192px
					overflow hidden
					white-space nowrap
					text-overflow ellipsis
					display block
					line-height 16px
					color #6d757a
</style>