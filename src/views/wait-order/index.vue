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
          <el-tag type="warning">{{ scope.row.status }}</el-tag>
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
import mHeader from './module/header'
import Pagination from '@/components/common/Pagination'
export default {
  name:'wait-order',
  data () {
    return {
      tableData:[
        {
          bid:'2',
          htype:'大床房',
          pname:'王子杰',
          inDay:'2020-1-2',
          outDay:'2021-2-3',
          status: '未入住'
        },
        {
          bid:'2',
          htype:'大床房',
          pname:'王子杰',
          inDay:'2020-1-2',
          outDay:'2021-2-3',
          status: '未入住'
        },
        {
          bid:'2',
          htype:'大床房',
          pname:'王子杰',
          inDay:'2020-1-2',
          outDay:'2021-2-3',
          status: '未入住'
        }
      ],
      total: 67,
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
    checkIn(row){
      // 办理入住
    },
    cancel(row){
      this.$confirm('确认取消订单？')
        .then(_ => {
          
        })
        .catch(_ => {});
    },
    async fetchData(){
      try{
        // 获取数据
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