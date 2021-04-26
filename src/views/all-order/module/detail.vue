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
          <el-form-item label="订单号">
            {{ form.bid }}
          </el-form-item> 
          <el-form-item label="用户名">
            {{ form.pname }}
          </el-form-item>
          <el-form-item label="手机号">
            {{ form.phone }}
          </el-form-item>
          <el-form-item label="身份证">
            {{ form.pIdentity }}
          </el-form-item>
          <el-form-item label="房间类型">
            {{ form.htype }}
          </el-form-item>
          <el-form-item label="状态">
            <el-tag type="success" v-if="form.state === 0">{{ bookStatusEnum[form.state].L }}</el-tag>
            <el-tag type="primary" v-if="form.state === 1">{{ bookStatusEnum[form.state].L }}</el-tag>
            <el-tag type="info" v-if="form.state === 2">{{ bookStatusEnum[form.state].L }}</el-tag>
          </el-form-item>
          <el-form-item label="入住日期">
            {{ form.inDay + '-' + form.outDay}}
          </el-form-item>
          <el-form-item label="天数">
            {{ form.days + ' 天'}}
          </el-form-item>
          <el-form-item label="总价">
            {{ form.money + ' 元' }}
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
      form: {},
       bookStatusEnum : [
        { L: '待入住', K: 'WAIT_IN', V: 1 },
        { L: '已入住', K: 'WAIT_OUT', V:2 },
        { L: '已退房', K: 'LEAVE', V: 3 }
      ]
    };
  },

  watch: {
    detailRow: {
      handler(val) {
        if(val) {
          this.form = val
        }
      }
    }
  },

  components: {},

  computed: {
    drawerVisible() {
      return this.visible;
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
  .el-form-item{
    .el-input{
      width: 60%;
    }
  }
}
</style>