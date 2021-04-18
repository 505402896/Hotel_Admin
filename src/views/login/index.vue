<!--  -->
<template>
  <div class="container">
    <el-form ref="form" class="form" label-width="80px">
        <div class="title">
          <span>酒店后台管理系统</span>
        </div>
      <el-form-item>
         <el-input prefix-icon="el-icon-user" v-model="username" placeholder="请输入账号" clearable />
      </el-form-item>
      <el-form-item>
        <el-input prefix-icon="el-icon-lock" v-model="password" placeholder="请输入密码" show-password />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" size="large" class="btn-login" @click="login" >登录</el-button>
      </el-form-item>
    </el-form>
    <div class="bear"></div>
    <div class="bg">
      <div class="bg1"></div>
      <div class="bg2"></div>
    </div>
  </div>
</template>

<script>
export default {
    name:'Login',
  data () {
    return {
      username: undefined,
      password: undefined
    };
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {
    login(){
      this.$router.replace('/Layout')
    }
  }
}

</script>
<style lang="scss" scoped>
.title{
  width: 150px;
  height: 40px;
  margin: 20px auto;
  line-height: 40px;
  span{
    font-family: "微软雅黑";
    font-weight: bold;
    font-size: 18px;
  }
}
.el-input{
  width: 250px;
}
.btn-login{
  width: 250px;
  margin-top: 20px;
}
.container{
  position: relative;
  background-color: #ccc;
  overflow: hidden;
  .bear {
    position: absolute;
    bottom: 0px;
    overflow: hidden;
    width: 200px;
    height: 100px;
    z-index: 999;
    background: url('../../assets/image/bear.png');
    animation: move 3s ease forwards, bear .5s steps(8) infinite;
  }
  .form {
    position: absolute;
    width: 400px;
    height: 300px;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    z-index: 3;
    background-color: rgba($color: #fff, $alpha: 0.4);
    // filter: blur(2px); 
    animation: fade-in 5s ease;
    .el-form-item{
      margin: 20px auto;
    }
  }  
}
.bg {
  margin-top: calc( 100vh - 700px );
  height: 700px;
  .bg1 {
    position: absolute;
    left: 0;
    // top: 600px;
    bottom: 0; 
    width: 3480px;
    height: 300px;
    z-index: 2;
    background: url('../../assets/image/bg1.png') repeat-x;
    animation: bg1 10s linear infinite;
    animation-delay: 1s;
  }
  .bg2 {
    position: absolute;
    left: 0;
    // top: 500px;
    bottom: 0;
    width: 3480px;
    height: 400px;
    z-index: 1;
    background: url('../../assets/image/bg2.png') repeat-x;
    animation: bg2 20s linear infinite;
    animation-delay: 1s;
  }
}

@keyframes fade-in {  
  0% {opacity: 0;}/*初始状态 透明度为0*/  
  40% {opacity: 0.5;}/*过渡状态 透明度为0*/  
  100% {opacity: 1;}/*结束状态 透明度为1*/  
}  
@keyframes bear {
  0% {
      background-position: 0 0;
  }
  100% {
      background-position: -1600px 0;
  }
}
@keyframes move {
  0% {
      left: 0;
  }
  100% {
      left: 50%;
      transform: translateX(-50%);
  }
}
@keyframes bg {
  0% {
      transform: scale(1.5);
  }
  100% {
      transform: scale(1);
  }
}
@keyframes bg1 {
  0% {
      background-position: 0 0;
  }
  100% {
      background-position: -3840px 0;
  }
}
@keyframes bg2 {
  0% {
      background-position: 0 0;
  }
  100% {
      background-position: -3840px 0;
  }
}
</style>