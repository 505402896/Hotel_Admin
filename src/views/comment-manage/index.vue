<!--  -->
<template>
  <div class="container">
    <m-header :status.sync="status"/>
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
      <el-table-column prop="reply" label="酒店回复">
        <template slot-scope="scope">
          <template v-if="scope.row.isEdit">
            <el-input size="mini" v-model.trim="scope.row.reply" clearable />
          </template>
          <template v-else>
            <span>{{ scope.row.reply }}</span>
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
import { getComment, getCommented, getUnComment, delComment, editComment } from '@/api/comment-manage/comment'
import mHeader from './module/header'
import Pagination from '@/components/common/Pagination'
export default {
  name:'comment-manage',
  data () {
    return {
      tableData: [],
      total: 1,
      currentPage: 1,
      status: 0   //0 为全部 1 为已回复 2 为未回复
    };
  },

  components: { mHeader, Pagination },

  computed: {},

   watch: {
    // 页数发生变化时候改变数据  包括页数为1时
    currentPage: {
      handler() {
        this.fetchData()
      },
      immediate: true,
    },
    status: {
      handler() {
        this.fetchData()
      }
    }
  },

  mounted() {},

  methods: {
    handleCurrentChange(val) {
      this.currentRow = val
    },
    async save(row){
      try {
        const data = {
          cid: row.cid,
          reply: row.reply
        }
        const res = await editComment(data)
        this.$notify({
          title: "成功",
          message: res.message,
          type: "success",
        });
      } catch (error) {
        console.log('编辑评论', error)
      } finally {
        await this.fetchData()
      }
    },
    cancel(row){
      row.isEdit = false
    },
    edit(row){
      row.isEdit = true
    },
    async del(row){
      try {
        const res = await delComment(row.cid)
        this.$notify({
          title: "成功",
          message: res.message,
          type: "success",
        });
      } catch (error) {
        console.log('删除评论', error)
      } finally {
        await this.fetchData()
      }
    },
    async fetchData() {
      try {
        const res = this.status === 0 ? await getComment(this.currentPage) 
        : (this.status === 1 ? await getCommented(this.currentPage) : await getUnComment(this.currentPage))
        this.tableData = res.data.map(v => {
          v.star = v.star / 2
          v.isEdit = false
          return v
        })
      } catch (error) {
        console.log('查询评论', error)
      } 
    }
  }
}

</script>
<style scoped>

</style>