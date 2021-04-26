<!--  -->
<template>
  <div class="container">
    <m-header :search.sync="search" :search-val.sync="searchVal" />
    <el-table
      ref="singleTable"
      :data="tableData"
      highlight-current-row
      v-loading="loading"
      @current-change="handleCurrentChange"
      style="width: 100%;margin:0 auto;"
    >
      <el-table-column type="index" label="序号" />
      <el-table-column prop="bid" label="订单号" />
      <el-table-column prop="htype" label="房间类型" />
      <el-table-column prop="pname" label="用户名" />
      <el-table-column prop="inDay" label="入住日期" />
      <el-table-column prop="outDay" label="退房日期" />
      <el-table-column prop="state" key="state" label="状态">
        <template slot-scope="scope">
          <el-tag type="success" v-if="scope.row.state === 0">{{
            bookStatusEnum[scope.row.state].L
          }}</el-tag>
          <el-tag type="primary" v-if="scope.row.state === 1">{{
            bookStatusEnum[scope.row.state].L
          }}</el-tag>
          <el-tag type="info" v-if="scope.row.state === 2">{{
            bookStatusEnum[scope.row.state].L
          }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column label="操作" min-width="200">
        <template slot-scope="scope">
          <el-button
            type="primary"
            icon="el-icon-view"
            size="mini"
            @click="showDetail(scope.row)"
            >详细</el-button
          >
          <el-button
            type="danger"
            icon="el-icon-delete"
            size="mini"
            @click="del(scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <m-detail :visible.sync="detailVisible" :detailRow="detailRow" />
    <pagination :total="total" :current-page.sync="currentPage" />
  </div>
</template>

<script>
import { getBook, delBook, getBookById, getBookByRealName } from "@/api/order-manage/all-order";
import mHeader from "./module/header";
import mDetail from "./module/detail";
import Pagination from "@/components/common/Pagination";
export default {
  name: "all-order",
  data() {
    return {
      detailVisible: false,
      detailRow: undefined,
      search: undefined,
      searchVal: undefined,
      tableData: [],
      bookStatusEnum: [
        { L: "待入住", K: "WAIT_IN", V: 1 },
        { L: "已入住", K: "WAIT_OUT", V: 2 },
        { L: "已退房", K: "LEAVE", V: 3 },
      ],
      total: 1,
      currentPage: 1,
      loading: false,
    };
  },
  components: { mHeader, mDetail, Pagination },

  computed: {},

  watch: {
    // 页数发生变化时候改变数据  包括页数为1时
    currentPage: {
      handler() {
        this.fetchData();
      },
      immediate: true,
    },
    search: {
      handler(val) {
        if (val) {
          this.searchBy();
        }
      },
    },
  },

  mounted() {},

  methods: {
    handleCurrentChange(val) {
      this.currentRow = val;
    },
    showDetail(row) {
      this.detailVisible = true;
      this.detailRow = row;
    },
    async del(row) {
      try {
        const res = await delBook(row.bid);
        this.$notify({
          title: "成功",
          message: res.message,
          type: "success",
        });
      } catch (error) {
        console.log("删除订单", error);
      } finally {
        await this.fetchData();
      }
    },
    async fetchData() {
      try {
        this.loading = true;
        const res = await getBook(this.currentPage);
        this.total = res.total;
        this.tableData = res.data;
      } catch (error) {
        console.log("获取全部订单信息", error);
      } finally {
        this.loading = false;
      }
    },
    async searchBy() {
      try {
        this.loading = true;
        if (this.search === 'bid') {
          const res = await getBookById(this.searchVal);
          this.total = res.total;
          this.tableData = res.data
        } else if(this.search === 'realName') {
          const res = await getBookByRealName(this.searchVal);
          this.total = res.total;
          this.tableData = res.data
        }
      } catch (error) {
        console.log("由" + this.searchVal + "搜索", error);
      } finally {
        this.searchVal = null;
        this.search = null;
        this.loading = false;
      }
    },
  },
};
</script>
<style scoped></style>
