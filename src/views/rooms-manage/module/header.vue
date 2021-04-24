<!--  -->
<template>
  <div class="header">
    <el-row>
      <el-col :span="10">
        <el-button type="primary" icon="el-icon-plus" size="small" @click="addRoom">新增</el-button>
      </el-col>
      <el-col :span="14">
        <el-button type="primary" icon="el-icon-plus" size="small" @click="addRoomType">新增</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  props: {
    visible: {
      type: Boolean,
      default: undefined
    },
    addRoomRow: {
      type: Boolean,
      default: undefined
    }
  },
  data () {
    return {
    };
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {
    addRoom(){
      this.$emit('update:addRoomRow', true)
    },
    addRoomType(){
      this.$emit('update:visible', true)
    }
  }
}

</script>
<style lang="scss" scoped>
</style>