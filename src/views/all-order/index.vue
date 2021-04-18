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
        <template slot-scope="scope">
          <el-tag type="danger">{{ scope.row.status }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column label="操作" min-width="200">
        <template slot-scope="scope">
          <el-button type="primary" icon="el-icon-view" size="mini" @click="showDetail(scope.row)">详细</el-button>
          <el-button type="danger" icon="el-icon-delete" size="mini" @click="del(scope.row)">删除</el-button>
        </template> 
      </el-table-column>
    </el-table>
    <m-detail :visible.sync="detailVisible" :detailRow="detailRow"/>
    <pagination :total="total" :current-page.sync="currentPage"/>
  </div>
</template>

<script>
import mHeader from './module/header'
import mDetail from './module/detail'
import Pagination from '@/components/common/Pagination'
export default {
  name:'all-order',
  data () {
    return {
      detailVisible: false,
      detailRow: undefined,
      tableData:[
        {
          bid:'2',
          htype:'大床房',
          pname:'王子杰',
          inDay:'2020-1-2',
          outDay:'2021-2-3',
          status: '已入住'
        },
        {
          bid:'2',
          htype:'大床房',
          pname:'王子杰',
          inDay:'2020-1-2',
          outDay:'2021-2-3',
          status: '已入住'
        },
        {
          bid:'2',
          htype:'大床房',
          pname:'王子杰',
          inDay:'2020-1-2',
          outDay:'2021-2-3',
          status: '已入住'
        }
      ],
      total: 67,
      currentPage: 1
    };
  },
  components: { mHeader, mDetail, Pagination },

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
    showDetail(row){
      this.detailVisible = true;
      this.detailRow = row;
    },
    del(row){
      this.$confirm('确认删除？')
        .then(_ => {
          
        })
        .catch(_ => {});
    },
    async fetchData(){
      try{
        // 获取数据
      }catch(error){
        console.log('all-order', error);
      }finally{

      }
    }
  }
}

</script>
<style scoped>

</style>