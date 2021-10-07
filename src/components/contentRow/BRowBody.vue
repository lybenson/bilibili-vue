<template>
  <div class="b-body">
    <ul class="vidbox v-list">
      <BRowItem
        v-for="(item, index) in row"
        :key="index"
        :item="item"
      />
    </ul>
  </div>
</template>

<script>
import BRowItem from 'components/contentRow/BRowItem'
export default {
  components: {
    BRowItem
  },
  props: {
    row: {
      type: Array
    }
  }
}
</script>

<style lang="stylus" scoped>
.b-body
  margin-right -20px
  clear both
  .v-list
    width 100%
    height 316px
    overflow hidden
    padding-top 20px
</style>
