<!--  -->
<template>
  <div class="header">
    <el-row>
      <el-col :span="4">
        <el-input placeholder="根据订单号搜索" size="small" clearable v-model="bid"/>
      </el-col>
      <el-col :span="2">
        <el-button type="success" icon="el-icon-search" size="small">搜索</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      bid: undefined,
      username: undefined,
      status: undefined,
      bookStatusEnum : [
        { L: '待入住', K: 'WAIT_IN', V: 1 },
        { L: '已入住', K: 'WAIT_OUT', V:2 },
        { L: '已退房', K: 'LEAVE', V: 3 }
      ]
    };
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {}
}

</script>
<style lang="scss" scoped>
.el-row{
  margin: 20px auto;
  margin-top: 80px;
  .el-col{
    margin-right: 20px;
  }
}
</style>