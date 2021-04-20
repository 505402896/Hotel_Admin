<!--  -->
<template>
  <div class="header">
    <el-row>
      <el-col :span="6">
        <el-card shadow="always">
          <span>房间类型</span>
          <p>22</p>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="always">
          <span>房间总数</span>
          <p>32</p>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="always">
          <span>用户总数</span>
          <p>222</p>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="always">
          <span>员工总数</span>
          <p>24</p>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
    };
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {}
}

</script>
<style scoped>
.el-card{
  width: 80%;
}
.header{
  margin-bottom: 100px;
}
</style>