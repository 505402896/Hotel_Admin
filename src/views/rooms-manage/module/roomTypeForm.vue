<!--  -->
<template>
  <div class="detail">
    <el-drawer
      title="详情"
      :visible.sync="drawerVisible"
      size="30%"
      :before-close="handleClose"
      >
      <el-form
        ref="form"
        :model="form"
        label-width="80">
          <el-form-item label="房间类型">
            {{ form.htype }}
          </el-form-item> 
          <el-form-item label="房间价格">
            {{ form.hprice }}
          </el-form-item>
          <el-form-item label="可住人数">
            {{ form.peopleNum }}
          </el-form-item>
          <el-form-item label="房间总数">
            {{ form.total }}
          </el-form-item>
          <el-form-item label="详细描述">
            {{ form.hdetail }}
          </el-form-item>
          <el-form-item label="房间图片">
            <img class="roomPic" :src="imgPath" alt="">
          </el-form-item>
      </el-form>
    </el-drawer>
  </div>
</template>

<script>
export default {
  props: {
    visible: {
      type: Boolean,
      default: undefined
    },
    detailRow: {
      type: Object,
      default: () => {}
    }
  },
  data () {
    return {
      form: {}
    };
  },

  watch: {
    detailRow: {
      handler(val) {
        this.form = val
      }
    }
  },

  components: {},

  computed: {
    drawerVisible() {
      return this.visible
    },
    imgPath(){
      return this.$imgPath+this.form.hpic
    }
  },

  mounted() {},

  methods: {
    handleClose() {
      this.$emit('update:visible', false);
    }
  }
}

</script>
<style lang="scss" scoped>
.el-form{
  padding: 20px;
  overflow: hidden;
  .el-form-item{
    .el-input{
      width: 60%;
    }
  }
  .roomPic{
    width: 100%;
  }
}
</style>