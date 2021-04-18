<!--  -->
<template>
  <div class="pagination">
    <el-pagination
      layout="prev, pager, next"
      :total="totals"
      :current-page.sync="page"
      @current-change="handleCurrentChange">
    </el-pagination>
  </div>
</template>

<script>
export default {
  props: {
    total: {
      type: Number,
      default: undefined
    },
    currentPage: {
      type: Number,
      default: undefined
    }
  },
  data () {
    return {
      page: undefined // 当前页数
    };
  },

  components: {},

  computed: {
    totals(){
      return this.total;
    }
  },

  mounted() {},

  methods: {
    // 页数变动时触发
    handleCurrentChange(){
      this.$emit('update:currentPage',this.page);
    }
  }
}

</script>
<style lang="scss" scoped>
.pagination{
  margin-top: 20px;
}
</style>