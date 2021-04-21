<!--  -->
<template>
  <div class="container">
    <m-header :search.sync="search" :search-val.sync="searchVal"/>
    <el-table
      ref="singleTable"
      :data="tableData"
      highlight-current-row
      v-loading="loading"
      @current-change="handleCurrentChange"
      style="width: 100%;margin:0 auto;">
      <el-table-column type="index" label="序号" />
      <el-table-column prop="username" label="账号" />
      <el-table-column prop="realName" label="真实姓名" />
      <el-table-column prop="idCard" label="身份证" />
      <el-table-column prop="gender" label="性别">
        <template slot-scope="scope">
          <el-tag v-if="scope.row.gender" type="danger" effect="plain">女</el-tag>
          <el-tag v-else type="primary" effect="plain">男</el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="phone" label="手机号" />
    </el-table>
    <pagination :total="total" :current-page.sync="currentPage" />
  </div>
</template>

<script>
import { getUser, getUserByName } from '@/api/user-manage/user'
import mHeader from './module/header'
import Pagination from '@/components/common/Pagination'
export default {
  name:'user-manage',
  data () {
    return {
      tableData: [],
      total: 1,
      currentPage: 1,
      search: undefined,
      searchVal: undefined,
      loading: false
    };
  },

 watch:{
    // 页数发生变化时候改变数据  包括页数为1时
    currentPage: {
      handler(val) {
        this.fetchData();
      },
      immediate: true
    },
    search: {
      handler(val) {
        if(val) {
          this.searchBy()
        }
      }
    }
  },

  components: { mHeader, Pagination },

  computed: {},

  mounted() {},

  methods: {
    handleCurrentChange(val) {
      this.currentRow = val
    },
    async fetchData(){
      try {
        this.loading = true
        const res = await getUser(this.currentPage)
        this.total = res.total
        this.tableData = res.data
      } catch (error) {
        console.log('获取用户信息',error)
      } finally {
        this.loading = false
      }
    },
    async searchBy() {
      try {
        this.loading = true
        if(this.search === 'realName') {
          const res = await getUserByName(this.searchVal)
          this.total = res.total
          this.tableData = res.data
        }
      } catch (error) {
        console.log('由'+this.searchVal+'搜索', error)
      } finally {
        this.searchVal = null
        this.search = null
        this.loading = false
      }
    }
  }
}

</script>
<style scoped>

</style>