<!--  -->
<template>
    <div class="header">
      <el-row>
        <el-col :span="24">
          <el-radio-group v-model="selectItem" size="small">
            <el-radio-button label="all">全部</el-radio-button>
            <el-radio-button label="replied">已回复</el-radio-button>
            <el-radio-button label="unreply">未回复</el-radio-button>
          </el-radio-group>
        </el-col>
      </el-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      selectItem: 'all'
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