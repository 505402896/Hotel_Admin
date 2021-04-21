<!--  -->
<template>
  <div class="header">
    <el-row>
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
      username: undefined
    };
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {
    toSearch(){
      this.$emit('update:search', 'realName')
      this.$emit('update:searchVal', this.username)
    }
  }
}

</script>
<style lang="scss" scoped>
.el-col{
  margin-right: 20px;
}
</style>