<!--  -->
<template>
  <div class="slider-bar">
    <el-row class="tac">
        <el-col :span="24">
            <el-menu 
            router 
            class="el-menu-vertical-demo" 
            @open="handleOpen" 
            @close="handleClose" 
            :collapse="isCollapse"
            active-text-color="#00a1d6"
            :default-active="currentPath"
            >
               <img @click="showNav" class="logo" :src="isCollapse ? require('@/assets/image/icon45.png') : require('@/assets/image/iconFont596.png') " alt="">
                <el-submenu index="1">
                    <template slot="title">
                      <i class="el-icon-s-order"></i>
                      <span slot="title">订单管理</span>
                    </template>
                    <el-menu-item-group>
                      <el-menu-item index="/layout/all-order">全部订单</el-menu-item>
                      <el-menu-item index="/layout/wait-order">未入住订单</el-menu-item>
                      <el-menu-item index="/layout/in-order">已入住订单</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
                <el-menu-item index="/layout/user-manage">
                  <i class="el-icon-user"></i>
                  <span slot="title">用户管理</span>
                </el-menu-item>
                <el-menu-item index="/layout/comment-manage">
                  <i class="el-icon-s-comment"></i>
                  <span slot="title">评论管理</span>
                </el-menu-item>
                <el-menu-item index="/layout/rooms-manage">
                  <i class="el-icon-s-home"></i>
                  <span slot="title">房间管理</span>
                </el-menu-item>
                <el-divider />
                <el-menu-item @click="logout">
                  <i class="el-icon-setting"></i>
                  <span slot="title">注销</span>
                </el-menu-item>
            </el-menu>
        </el-col>
      </el-row>
  </div>
</template>

<script>
export default {
  name:'SliderBar',
  data () {
    return {
        isCollapse: false,
        logoPath: '@/assets/image/iconFont596.png'
    };
  },

  components: {},

  computed: {
    currentPath(){
      return this.$route.path;
    }
  },

  mounted() {},

  methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      showNav(){
        this.isCollapse = !this.isCollapse
      },
      logout(){
        this.$router.replace('/')
      }
  }
}

</script>
<style lang="scss" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 100vh;
  }
.slider-bar{
    height: 100vh;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 999;
    .logo{
        max-width: 100%;
        min-width: 50px;
        min-height: 50px;
        cursor: pointer;
    }
}
.el-menu--collapse{
    height: 100vh;
}
</style>