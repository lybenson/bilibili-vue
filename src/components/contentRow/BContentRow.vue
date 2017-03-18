<template>
	<div class="b-section-body">
		<div class="b-l" style="width: 700px;">
			<BRowHead></BRowHead>
			<BRowBody></BRowBody>
		</div>
		<div class="b-r"></div>
	</div>
</template>

<script>
import BRowHead from 'components/contentRow/BRowHead'
import BRowBody from 'components/contentRow/BRowBody'
export default {
	components: {
		BRowHead,
		BRowBody
	}
}
</script>

<style lang="stylus" scoped>
	.b-section-body
		zoom 1
</style>