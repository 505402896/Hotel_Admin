<!--  -->
<template>
  <div class="nav">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item class="title">首页</el-breadcrumb-item>
      <el-breadcrumb-item class="title">{{ $route.meta.name }}</el-breadcrumb-item>
      <span class="user">
        <el-avatar :size="40" src="@/assets/image/genshin.jpg'"></el-avatar>
          <span class="username">超级管理员</span>
      </span>
    </el-breadcrumb>
    
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

  methods: {
  }
}

</script>
<style lang="scss" scoped>
@import '@/assets/css/base.scss';
.nav{
  width: 100%;
  height: 50px;
  position: fixed;
  top: 0;
  padding-left: 200px;
  background-color: $blue-color;
}
.el-breadcrumb  /deep/  .el-breadcrumb__inner 
  {
    line-height: 50px;
    font-size: 14px;
    margin-left: 20px;
    color: #fff !important;				
  }
.el-avatar{
  position: absolute;
  right: 150px;
  margin-top: 5px;
}
.username{
  position: absolute;
  right: 75px;
  font-size: 14px;
  color: #fff;
  line-height: 50px;
}
</style>