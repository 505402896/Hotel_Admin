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
            <template>
              <el-tag type="danger">{{ form.status }}</el-tag>
            </template>
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
      form: {
        bid: 222,
        inDay: '2020-3-8',
        outDay: '2031-3-2',
        days: '4',
        status: '已入住',
        pname: '姚思佳',
        phone: '1222222',
        pIdentity: '223444',
        money: '34',
        htype: '豪华大床房'
      }
    };
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