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
      <el-col :span="2">
        <el-button type="success" icon="el-icon-search" size="small" @click="toSearch">搜索</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  props: {
    search: {
      type: String,
      default: undefined
    },
    searchVal: {
      type: String,
      default: undefined
    }
  },
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

  methods: {
    toSearch() {
      if(this.bid) {
        this.$emit('update:search', 'bid')
        this.$emit('update:searchVal',this.bid)
      } else if (this.username) {
        this.$emit('update:search', 'realName')
        this.$emit('update:searchVal',this.username)
      }
    }
  }
}

</script>
<style lang="scss" scoped>
.el-col{
  margin-right: 20px;
}
</style>