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
      <el-table-column type="index" label="序号"/>
      <el-table-column prop="bid" label="订单号" />
      <el-table-column prop="htype" label="房间类型" />
      <el-table-column prop="pname" label="用户名" />
      <el-table-column prop="inDay" label="入住日期" />
      <el-table-column prop="outDay" label="退房日期" />
      <el-table-column prop="status" key="status" label="状态">
        <template>
          <el-tag type="warning">未入住</el-tag>
        </template>
      </el-table-column>
      <el-table-column label="操作" min-width="200">
        <template slot-scope="scope">
          <el-button type="success" icon="el-icon-edit" size="mini" @click="checkIn(scope.row)">入住</el-button>
          <el-button type="danger" icon="el-icon-delete" size="mini" @click="cancel(scope.row)">取消</el-button>
        </template> 
      </el-table-column>
    </el-table>
    <pagination :total="total" :current-page.sync="currentPage"/>
  </div>
</template>

<script>
import { getWaitInBook, checkIn } from '@/api/order-manage/waitIn-order'
import { delBook } from '@/api/order-manage/all-order'
import mHeader from './module/header'
import Pagination from '@/components/common/Pagination'
export default {
  name:'wait-order',
  data () {
    return {
      tableData:[],
      total: 1,
      currentPage: 1
    };
  },
  components: { mHeader, Pagination },

  computed: {},

  watch:{
    // 页数发生变化时候改变数据  包括页数为1时
    currentPage: {
      handler(){
        this.fetchData();
      },
      immediate: true
    }
  },

  mounted() {},

  methods: {
    handleCurrentChange(val) {
      this.currentRow = val;
    },
    async checkIn(row){
      try {
        const data = {
          bid: row.bid
        }
        const res = await checkIn(data)
        this.$notify({
          title: "成功",
          message: res.message,
          type: "success"
        })
      } catch (error) {
        console.log('办理入住', error)
      } finally {
        await this.fetchData()
      }
    },
    async cancel(row){
      try {
        const res = await delBook(row.bid)
        this.$notify({
          title: "成功",
          message: res.message,
          type: "success"
        })
      } catch (error) {
        console.log('取消订单', error);
      }
    },
    async fetchData(){
      try{
        const res = await getWaitInBook(this.currentPage)
        this.total = res.total
        this.tableData = res.data
      }catch(error){
        console.log('wait-order', error);
      }finally{

      }
    }
  }
}

</script>
<style scoped>

</style>