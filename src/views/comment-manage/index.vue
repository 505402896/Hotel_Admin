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
      <el-table-column prop="bid" label="订单号"/>
      <el-table-column prop="username" label="用户名"/>
      <el-table-column prop="content" label="评论内容" />
      <el-table-column prop="star" label="评分">
        <template slot-scope="scope">
          <el-rate
            v-model="scope.row.star"
            disabled
            show-score
            text-color="#ff9900"
            score-template="{value}">
          </el-rate>
        </template>
      </el-table-column>
      <el-table-column prop="response" label="酒店回复">
        <template slot-scope="scope">
          <template v-if="scope.row.isEdit">
            <el-input size="small" v-model.trim="scope.row.response" clearable />
          </template>
          <template v-else>
            <span>{{ scope.row.response }}</span>
          </template>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <template v-if="scope.row.isEdit">
            <el-button type="info" icon="el-icon-close" size="mini" @click="cancel(scope.row)">取消</el-button>
            <el-button type="success" icon="el-icon-check" size="mini" @click="save(scope.row)">保存</el-button>
          </template>
          <template v-else>
            <el-button type="primary" icon="el-icon-edit" size="mini" @click="edit(scope.row)">编辑</el-button>
            <el-button type="danger" icon="el-icon-delete" size="mini" @click="del(scope.row)">删除</el-button>
          </template>
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
  name:'comment-manage',
  data () {
    return {
      tableData: [
        {
          bid: '222',
          username: 'wzj',
          content: 'henhao',
          star: 3.5,
          response: '-',
          isEdit: false
        }
      ],
      total: 6,
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
    save(row){

    },
    cancel(row){
      row.isEdit = false;
    },
    edit(row){
      row.isEdit = true;
    },
    del(row){

    }
  }
}

</script>
<style scoped>

</style>