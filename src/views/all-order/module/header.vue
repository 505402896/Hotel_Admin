<!--  -->
<template>
  <div class="header">
    <el-row>
      <el-col :span="4">
        <el-input placeholder="根据订单号搜索" size="small" clearable v-model="bid"/>
      </el-col>
      <el-col :span="4">
        <el-input placeholder="根据用户名搜索" size="small" clearable v-model="username"/>
      </el-col>
      <el-col :span="4">
        <el-select v-model="status" size="small" filterable clearable placeholder="根据订房状态搜索">
          <el-option
            v-for="item in bookStatusEnum"
            :key="item.K"
            :label="item.L"
            :value="item.V">
          </el-option>
        </el-select>
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
.el-col{
  margin-right: 20px;
}
</style>