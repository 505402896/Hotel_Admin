<!--  -->
<template>
  <div class="header">
    <el-row>
      <el-col :span="6">
        <el-card shadow="hover">
          <span>房间类型</span>
          <p>{{ data.hotelTotal }}</p>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="hover">
          <span>房间总数</span>
          <p>{{ data.roomTotal }}</p>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="hover">
          <span>用户总数</span>
          <p>{{ data.userTotal }}</p>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="hover">
          <span>员工总数</span>
          <p>24</p>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  props: {
    headData: {
      type: Object,
      default: undefined
    }
  },
  data () {
    return {
    };
  },

  components: {},

  computed: {
    data() {
      return this.headData
    }
  },

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