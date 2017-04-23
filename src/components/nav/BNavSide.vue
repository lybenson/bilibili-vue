<template>
	<div class="nav-side" :class="{customizing: isSort}" ref="navSide">
		<transition name="fade">
			<div v-if="isSort">
				<div class="tip"></div>
				<div class="custom-bg"></div>
			</div>
		</transition>
		<div class="nav-list" ref="list">
			<template v-for="(item, index) in data">
				<div v-if="isDrag && index === replaceItem && replaceItem <= dragId" class="n-i sotrable">
					<div class="name"></div>
				</div>
				<div class="n-i sotrable" :class="[{'on': current===index && !isSort}, {'drag': isDrag && current === index}]"  @click="setEnable(index)" @mousedown="dragStart($event, index)" :style="dragStyles">
					<div class="name">{{item.name}}</div>
				</div>
				<div v-if="isDrag && index === replaceItem && replaceItem > dragId" class="n-i sotrable">
					<div class="name"></div>
				</div>
			</template>
			<li v-if="isDrag && replaceItem === data.length" :class="['sortable-item']">
				<div class="sortable-item-name"></div>
			</li>

			<div class="n-i customize" @click="sort">
				<i class="n-icon-sort"></i>
				<p>排序</p>
			</div>
		</div>
		<div class="n-i gotop" >
			<div class="s-line"></div>
			<div class="btn_gotop" @click="scrollToTop(time)"></div>
		</div>
	</div>
</template>

<script>
import scrollMixin from './smooth-scroll.js'
import { mapGetters } from 'vuex'
export default {
	mixins: [scrollMixin],
	data() {
		return {
			current: 0, //当前选中条目的序号
			data: [], //数据(name,element,offsetTop,height)
			time: 800, //动画时间
			height: 32, //单个元素的高度
			isSort: false, //排序模式
			scrollTop: 0, //距离页面的顶部距离
			dragId: 0, //拖拽元素序号
			isDrag: false,  //当前是否在拖拽
			offsetX: 0, //鼠标在要拖拽的元素上的X坐标上的偏移
			offsetY: 0, //鼠标在要拖拽的元素上的Y坐标上的偏移
			x: 0, //被拖拽的元素在其相对的元素上的X坐标上的偏移
			y: 0  //被拖拽的元素在其相对的元素上的Y坐标上的偏移
		}
	},
	props: {
		options: {
			type: Object
		}
	},
	watch: {
		//监听options的变化
		options: {
			deep: true,
			handler(newVal, oldVal) {
				this.initData()
			}
		},
		rows() {
			console.log('rows 变化')
			if (this.rows && this.rows.length > 0) {
				console.log('rows存在:' + this.rows[0])
				this.init()
			}
		}
	},
	computed: {
		...mapGetters([
			'requesting',
			'error',
			'rows',
			'sortKeys',
			'sortIds'
		]),
		//  偏移值
		offset() {
			return this.options.offset || 100
		},
		// 拖拽的元素的position会变为absolute,dragStyles用来设置其位置,鼠标运动时会调用,从而实现跟随鼠标运动
		dragStyles() { 
			return {
				left: `${this.x}px`,
				top: `${this.y}px`
			}
		},
		//当被拖拽的元素运动到其他元素的位置时,会使得replaceItem发送变化
		replaceItem() {
			let id = Math.floor(this.y / this.height)
			if (id > this.data.length - 1)
				id = this.data.length
			if (id < 0)
				id = 0
			return id
		}
	},
	mounted() {
		if (!this.rows || this.rows.length === 0) {
			console.log('rows不存在')
			return
		}
		this.init()
	},
	methods: {
		/** 初始化 */
		init() {
			this.initData() //初始化
			this.bindEvent()
			this._screenHeight = window.screen.availHeight
			this._left = this.$refs.list.getBoundingClientRect().left
			this._top = this.$refs.list.getBoundingClientRect().top
		},
		/** 绑定事件 */
		bindEvent() {
			document.addEventListener('scroll', this.scroll, false) 
			document.addEventListener('mousemove', this.dragMove, false)
			document.addEventListener('mouseup', this.dragEnd, false)
			document.addEventListener('mouseleave', this.dragEnd, false)
		},
		/** 初始化data */
		initData() {
			//将this.options.items转化成新的数组this.data
			this.data = Array.from(this.options.items, (item) => {
				let element = document.getElementById(item.b_id)
				if (!element) {
					console.error(`can not find element of name is ${item.b_id}`)
					return
				}
				let offsetTop = this.getOffsetTop(element)
				return {
					name: item.name,
					element: element,
					offsetTop: offsetTop,
					height: element.offsetHeight
				}
			}) 
		},
		setEnable(index) {
			if (index === this.current) {
				return false
			}
			this.current = index
			let target = this.data[index].element
			this.scrollToElem(target, this.time, this.offset || 0).then(() => {
			})
		},
		//获取元素距离顶部的距离
		getOffsetTop(element) {
			let top, clientTop, clientLeft, scrollTop, scrollLeft,
			doc = document.documentElement,
			body = document.body
			if (typeof element.getBoundingClientRect !== "undefined") {
				top = element.getBoundingClientRect().top;
			} else {
				top = 0
			}
			clientTop = doc.clientTop || body.clientTop || 0
			scrollTop = window.pageYOffset || doc.scrollTop
			return (top + scrollTop - clientTop)
		},
		//进入排序模式
		sort() {
			this.isSort = !this.isSort
			this.$emit('change')
		},
		/** 得到鼠标位置 */
		getPos(e) {
			this.x = e.clientX - this._left - this.offsetX
			this.y = e.clientY - this._top - this.offsetY
		},
		/** 滚动事件 */
		scroll(e) {
			this.scrollTop = window.pageYOffset || (document.documentElement.scrollTop + document.body.scrollTop)
			if (this.scrollTop >= 300) {
				this.$refs.navSide.style.top = "0px"
				this.init()
			} else {
				this.$refs.navSide.style.top = "240px"
				this.init()
			}
			console.log('距离顶部' + this.scrollTop)
			for (let i = 0; i < this.data.length; i++) {
				if (this.scrollTop >= this.data[i].offsetTop - this.offset) {
					this.current = i
				}
			}
		},
		/** 拖拽开始 */
		dragStart(e, i) {
			if (!this.isSort)
				return false
			this.current = i
			this.isDrag = true
			this.dragId = i
			this.offsetX = e.offsetX
			this.offsetY = e.offsetY
			this.getPos(e)
		},
		/** 拖拽中 */
		dragMove(e) {
			if (this.isDrag) {
				this.getPos(e)
			}
			e.preventDefault()
		},
		/** 拖拽结束 */
		dragEnd(e) {
			if (this.isDrag) {
				this.isDrag = false
				if (this.replaceItem !== this.dragId) {
					this.options.items.splice(this.replaceItem, 0, this.options.items.splice(this.dragId, 1)[0])
				}
				else {
					this.setEnable(this.dragId, true)
				}
			}
		}
	}
}
</script>

<style lang="stylus" scoped>
	.nav-side
		position fixed
		width 48px
		text-align center
		top 240px
		left auto
		right 0px
		z-index 1000
		&.customizing
			z-index 10010
			.n-i.sotrable
				cursor move
		.nav-list
			position relative
			background-color #f6f9fa
			border 1px solid #e5e9ef
			overflow hidden
			border-radius 4px
			z-index 233
			.n-i
				cursor pointer
				&:first-child
					border-top 0
				&.on
					.name
						background-color #00a1d6
						color #fff
				&.customize
					padding 8px 0
					border-top 1px solid #e5e9ef
					.n-icon-sort
						display block
						margin 0 auto 4px
						background url(../../assets/images/icons.png) -663px -151px no-repeat
						height 18px
						width 18px
				&.drag
					position absolute
					height 32px
					width 100%
					background-color #00a1d6
					color #fff
				.name
					height 32px
					line-height 32px
					transition .1s linear
					transition-property background-color, color
					&:hover
						background-color #00a1d6
						color #fff
		.gotop
			cursor pointer
			border 0
			position relative
			z-index 50
			.s-line
				border-left 1px solid #ddd
				border-right 1px solid #ddd
				height 9px
				width 30px
				margin 0 auto
			.btn_gotop
				height 48px
				background #f6f9fa url(../../assets/images/icons.png) -648px -72px no-repeat
				border 1px solid #e5e9ef
				overflow hidden
				border-radius 4px
		.tip
			background url(http://p1.bqimg.com/567571/f0b9b188ab580a2b.png) 0 0 no-repeat
			position absolute
			left -117px
			top 0px
			width 117px
			height 333px
			z-index 10
			transition all .3s
		.custom-bg
			position absolute
			top -15px
			left -130px
			height 100%
			width 200px
			padding-bottom 35px
			box-sizing content-box
			background rgba(255,255,255,0.8)
			border-radius 4px
			z-index 5
			transition all .3s
		.fade-enter-actice, .fade-leave-active
			transition opacity .3s
		.fade-enter, .fade-leave-active
			.tip
				top 50px
				opacity 0
			.custom-bg
				top 150px
				left -70px
				height 100px
				width 100px
				opacity 0
</style>