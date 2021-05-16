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
      <el-table-column prop="htype" label="房间类型">
        <template slot-scope="scope">
          <template v-if="scope.row.changeType">
            <el-select size="small" v-model="roomTypeSelected" placeholder="请选择">
              <el-option
                v-for="item in roomType"
                :key="item.key"
                :value="item.value"
                :label="item.label">
              </el-option>
            </el-select>
          </template>
          <template v-else>
            <span>{{ scope.row.htype }}</span>
          </template>
        </template>
      </el-table-column>
      <el-table-column prop="pname" label="用户名" />
      <el-table-column prop="inDay" label="入住日期" min-width="150" />
      <el-table-column prop="outDay" label="退房日期" min-width="150">
        <template slot-scope="scope">
          <template v-if="scope.row.changeOutDate">
            <el-date-picker
              size="small"
              v-model="scope.row.outDay"
              value-format="yyyy-MM-dd" 
              type="date"
              placeholder="选择日期">
            </el-date-picker>
          </template>
          <template v-else>
            <span>{{ scope.row.outDay }}</span>
          </template>
        </template>
      </el-table-column>
      <el-table-column prop="status" key="status" label="状态">
        <template>
          <el-tag type="danger">已入住</el-tag>
        </template>
      </el-table-column>
      <el-table-column label="操作" min-width="200">
        <template slot-scope="scope">
          <template v-if="scope.row.changeType || scope.row.changeOutDate">
            <el-button type="info" size="small" icon="el-icon-close"  @click="cancel(scope.row)">取消</el-button>
            <el-button type="success" size="small" icon="el-icon-check" @click="save(scope.row)">保存</el-button>
          </template>
          <template v-else>
            <el-button type="warning" size="small" @click="changeType(scope.row)">更换</el-button> 
            <el-button type="success" size="small" @click="keepIn(scope.row)">续住</el-button>
            <el-button type="primary" size="small" @click="checkOut(scope.row)">退房</el-button>
          </template>
        </template> 
      </el-table-column>
    </el-table>
    <pagination :total="total" :current-page.sync="currentPage"/>
  </div>
</template>

<script>
import { getInBook, editBook, checkOut } from '@/api/order-manage/in-order'
import { getAllRoomType } from '@/api/room-manage/roomType'
import mHeader from './module/header'
import Pagination from '@/components/common/Pagination'
export default {
  name: 'in-order',
  data () {
    return {
      tableData: [],
      roomType: [],  // 存所有房间类型
      roomTypeSelected: undefined, // 编辑后选中的房间类型
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
        this.fetchData()
      },
      immediate: true
    }
  },

  mounted() {},

  methods: {
    handleCurrentChange(val) {
      this.currentRow = val;
    },
    async checkOut(row){
      // 退房
      try {
        let date = new Date()
        let year = date.getFullYear()
        let month = date.getMonth() + 1
        let day = date.getDate()
        let currentDay = year + '-' + month + '-' + day
        const data = {
          bid: row.bid,
          outDay: currentDay
        }
        const res = await checkOut(data)
        this.$notify({
            title: '成功',
            message: res.message,
            type: 'success'
          })
      } catch (error) {
        console.log('退房操作', error);
      } finally {
        this.fetchData()
      }
    },
    keepIn(row){
      // 续住
      row.changeOutDate = true;
    },
    changeType(row){
      // 更换房型
      row.changeType = true;
    },
    async save(row){
      try {
        if(this.roomTypeSelected) {
        let htype = this.roomType[this.roomTypeSelected-1].label
        let hid = this.roomType[this.roomTypeSelected-1].key
        let data = {
          bid: row.bid, 
          htype: htype,
          hid: hid 
        }
        let res = await editBook(data)
        this.$notify({
            title: '成功',
            message: res.message,
            type: 'success'
          })
      } else {
        let data = {
          bid: row.bid,
          outDay: row.outDay
        }
        let res = await editBook(data)
        this.$notify({
            title: '成功',
            message: res.message,
            type: 'success'
          })
      }     
      } catch (error) {
        console.log('编辑订单', error);
      } finally {
        row.changeOutDate = false
        row.changeType = false
        await this.fetchData()
      }
    },
    cancel(row){
      row.changeType = false;
      row.changeOutDate = false;
    },
    async fetchData() {
      try {
        const res = await getInBook(this.currentPage)
        this.total = res.total
        this.tableData = res.data.map(v => {
          v.changeOutDate = false
          v.changeType = false
          v.inDay = v.inDay.substring(0, 10)
          v.outDay = v.outDay.substring(0, 10)
          return v
        })
      } catch (error) {
        console.log('获取已入住订单', error)
      } finally {
        this.roomType = []
        let index = 1
        const data = await getAllRoomType()
        data.data.map(v => {
          let type = {
            value: index,
            label: v.htype,
            key: v.hid
          }
          // 存储所有房间类型
          this.roomType.push(type)
          index++
          return v
        })
      }
    }
  }
}

</script>
<style scoped>
</style>