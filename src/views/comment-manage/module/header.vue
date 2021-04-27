<!--  -->
<template>
    <div class="header">
      <el-row>
        <el-col :span="24">
          <el-radio-group v-model="selectItem" size="small">
            <el-radio-button label="0">全部</el-radio-button>
            <el-radio-button label="1">已回复</el-radio-button>
            <el-radio-button label="2">未回复</el-radio-button>
          </el-radio-group>
        </el-col>
      </el-row>
  </div>
</template>

<script>
export default {
  props: {
    status: {
      type: Number,
      default: undefined
    }
  },
  data () {
    return {
      selectItem: 0
    };
  },

  watch: {
    selectItem: {
      handler(val) {
        this.$emit('update:status', Number(val))
      }
    }
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {}
}

</script>
<style lang="scss" scoped>
.el-col{
  margin-right: 20px;
}
</style>