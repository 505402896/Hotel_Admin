<!--  -->
<template>
  <div class="container">
    <m-header />
    <el-table
      ref="singleTable"
      :data="tableData"
      highlight-current-row
      @current-change="handleCurrentChange"
      style="width: 100%;margin:0 auto;">
      <el-table-column type="index" label="序号" />
      <el-table-column prop="username" label="账号" />
      <el-table-column prop="realName" label="真实姓名" />
      <el-table-column prop="idCard" label="身份证" />
      <el-table-column prop="gender" label="性别">
        <template slot-scope="scope">
          <el-tag v-if="scope.row.gender" type="danger" effect="plain">女</el-tag>
          <el-tag v-else type="info" effect="plain">男</el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="phone" label="手机号" />
    </el-table>
    <pagination :total="total" :current-page.sync="currentPage" />
  </div>
</template>

<script>
import mHeader from './module/header'
import Pagination from '@/components/common/Pagination'
export default {
  name:'user-manage',
  data () {
    return {
      tableData: [
        {
          username: 'www',
          realName: '王子杰',
          idCard: '2222',
          gender: 1,
          phone: '15858300920'
        }
      ],
      total: 67,
      currentPage: 1
    };
  },

  components: { mHeader, Pagination },

  computed: {},

  mounted() {},

  methods: {
    handleCurrentChange(val) {
      this.currentRow = val;
    },
  }
}

</script>
<style scoped>

</style>