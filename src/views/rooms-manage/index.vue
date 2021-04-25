<!--  -->
<template>
  <div class="container">
    <m-header :visible.sync="addRoomTypeVisible" :add-room-row.sync="addRoomRow" />
    <el-row v-loading="loading">
      <el-col :span="10">
        <el-table
          ref="singleTable"
          :data="roomTableData"
          highlight-current-row
          @current-change="handleCurrentChange"
          style="width: 90%;">
          <el-table-column type="index" label="序号"/>
          <el-table-column prop="htype" label="房间类型">
            <template slot-scope="scope">
              <template v-if="scope.row.isEdit">
                <el-select size="small" v-model="roomTypeSelected" placeholder="请选择">
                  <el-option
                    v-for="item in roomType"
                    :key="item.key"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </template>
              <template v-else>
                <span>{{ scope.row.htype }}</span>
              </template>
            </template>
          </el-table-column>
          <el-table-column prop="roomNo" label="房间号" width="100">
            <template slot-scope="scope">
              <template v-if="scope.row.isEdit">
                <el-input size="small" v-model.number="scope.row.roomNo" clearable />
              </template>
              <template v-else>
                <span>{{ scope.row.roomNo }}</span>
              </template>
            </template>
          </el-table-column>
          <el-table-column label="操作">  
            <template slot-scope="scope">
              <template v-if="scope.row.isEdit">
                <el-button type="info" icon="el-icon-close" circle @click="cancelRoom(scope.row)"></el-button>
                <el-button type="success" icon="el-icon-check" circle @click="saveRoom(scope.row)"></el-button>
              </template>
              <template v-else>
                <el-button type="primary" icon="el-icon-edit" circle @click="editRoom(scope.row)"></el-button>
                <el-button type="danger" icon="el-icon-delete" circle @click="delRoom(scope.row)"></el-button>
              </template>
            </template>
          </el-table-column>
        </el-table>
        <pagination :total="totalRoom" :current-page.sync="currentPageRoom" />
      </el-col>
      <el-col :span="14">
        <el-table
          ref="singleTable"
          :data="roomTypeTableData"
          highlight-current-row
          @current-change="handleCurrentChange"
          style="width: 100%;margin:0 auto;">
          <el-table-column type="index" label="序号"/>
          <el-table-column prop="htype" label="房间类型">
            <template slot-scope="scope">
              <template v-if="scope.row.isEdit">
                <el-input size="small" v-model="scope.row.htype" clearable />
              </template>
              <template v-else>
                <span>{{ scope.row.htype }}</span>
              </template>
            </template>
          </el-table-column>
          <el-table-column prop="hprice" label="房间价格">
            <template slot-scope="scope">
              <template v-if="scope.row.isEdit">
                <el-input size="small" v-model="scope.row.hprice" clearable />
              </template>
              <template v-else>
                <span>{{ scope.row.hprice + ' 元' }}</span>
              </template>
            </template>
          </el-table-column>
          <el-table-column prop="peopleNum" label="可住人数" width="140">
            <template slot-scope="scope">
              <template v-if="scope.row.isEdit">
                <el-input-number 
                size="small"
                v-model="scope.row.peopleNum" 
                controls-position="right" 
                :min="1" :max="6" />
              </template>
              <template v-else>
                <span>{{ scope.row.peopleNum }}</span>
              </template>
            </template>
          </el-table-column>
          <el-table-column prop="total" label="房间总数"/>
          <el-table-column label="操作" min-width="120">
            <template slot-scope="scope">
              <template v-if="scope.row.isEdit">
                <el-button type="info" icon="el-icon-close" circle @click="cancelRoomType(scope.row)"></el-button>
                <el-button type="success" icon="el-icon-check" circle @click="saveRoomType(scope.row)"></el-button>
              </template>
              <template v-else>
                <el-button type="success" icon="el-icon-view" circle @click="detailRoomType(scope.row)"></el-button>
                <el-button type="primary" icon="el-icon-edit" circle @click="editRoomType(scope.row)"></el-button>
                <el-button type="danger" icon="el-icon-delete" circle @click="delRoomType(scope.row)"></el-button>
              </template>
            </template>
          </el-table-column>
        </el-table>
        <pagination :total="totalType" :current-page.sync="currentPageType" />
      </el-col>
    </el-row> 
    <type-form :visible.sync="detailTypeVisible" :detailRow="detailTypeRow" />
    <add-room-type :visible.sync="addRoomTypeVisible" />
  </div>
</template>

<script>
import { getHotel, editRoomType, delRoomType } from '@/api/room-manage/roomType'
import { getRoom, addRoom, delRoom } from '@/api/room-manage/room'
import addRoomType from './module/addRoomType'
import typeForm from './module/roomTypeForm'
import mHeader from './module/header'
import pagination from '@/components/common/Pagination'
export default {
  name:'rooms-manage',
  data () {
    return {
      roomType: [],  // 存所有房间类型
      roomTypeSelected: undefined, // 编辑后选中的房间类型
      loading: false,
      addRoomRow: false,
      totalType: 1,
      totalRoom: 1,
      currentPageRoom: 1,
      currentPageType: 1,
      detailTypeVisible: false,
      addRoomTypeVisible: false,
      detailTypeRow: undefined,
      roomTableData: [],
      roomTypeTableData: []
    };
  },

  watch:{
    // 页数发生变化时候改变数据  包括页数为1时
    currentPageType: {
      handler(val) {
        this.fetchDataType()
      },
      immediate: true
    },
    currentPageRoom: {
      handler(val) {
        this.fetchDataRoom()
      },
      immediate: true
    },
    addRoomTypeVisible: {
      handler(val) {
        if(!val) {
          this.fetchDataType()
        }
      }
    },
    addRoomRow: {
      handler(val) {
        if(val) {
          this.addRow()
        }
      }
    }
  },

  components: { mHeader, pagination, typeForm, addRoomType },

  computed: {},

  mounted() {},

  methods: {
    handleCurrentChange(val) {
      this.currentRow = val
    },
    addRow() {
      const newVal = {
        rid: undefined,
        hid: undefined,
        htype: undefined,
        roomNo: undefined,
        isEdit: true
      }
      this.roomTableData.push(newVal)
    },
    editRoom(row) {
      row.isEdit = true
    },
    async delRoom(row) {
      try {
        const data = {
          hid: row.hid,
          rid: row.rid
        }
        await delRoom(data)
      } catch (error) {
        console.log('删除房间', error);
      } finally {
        await this.fetchDataRoom()
        await this.fetchDataType()
        this.$notify({
          title: '成功',
          message: '删除成功',
          type: 'success'
        })
      }
    },
    async saveRoom(row) {
      row.hid = this.roomTypeSelected
      row.htype = this.roomType[this.roomTypeSelected - 1].label
      
      // 提交到后台
      const data = {
        hid: row.hid,
        htype: row.htype,
        roomNo: row.roomNo
      }
      try {
        const res = await addRoom(data)
        this.$notify({
          title: '成功',
          message: res.message,
          type: 'success'
        })
      } catch (error) {
        console.log('增加房间', error);
      } finally {
        row.isEdit = false
        this.addRoomRow = false
        await this.fetchDataType()
        await this.fetchDataRoom()
      }
    },
    cancelRoom(row) {
      if(this.addRoomRow) {
        this.roomTableData.pop()
        this.addRoomRow = false
      }
      row.isEdit = false
    },
    editRoomType(row) {
      row.isEdit = true
    },
    async delRoomType(row){
      try {
        await delRoomType(row.hid)
        this.$notify({
          title: '成功',
          message: '删除成功',
          type: 'success'
        })
        await this.fetchDataType()
      } catch (error) {
        console.log('删除房型', error);
      } finally {
        
      }
    },
    async saveRoomType(row){
      // 提交到后端 更改
      const data = {
        hid: row.hid,
        htype: row.htype,
        hprice: row.hprice,
        peopleNum: row.peopleNum
      }
      try {
        const res = editRoomType(data)
      } catch (error) {
        console.log('编辑房型', error);
      } finally {
        row.isEdit = false
        this.fetchDataType()
      }
    },
    detailRoomType(row){
      this.detailTypeVisible = true
      this.detailTypeRow = row
    },
    cancelRoomType(row){
      row.isEdit = false;
    },
    async fetchDataType(){
      try {
        this.loading = true
        const res = await getHotel(this.currentPageType)
        this.totalType = res.total
        this.roomType = []
        let index = 1
        this.roomTypeTableData = res.data.map(v => {
          let type = {
            value: index,
            label: v.htype,
            key: v.hid
          }
          // 存储所有房间类型
          this.roomType.push(type)
          index++
          v.isEdit = false
          return v
        })
      } catch (error) {
        console.log('获取客房信息', error)
      } finally {
        this.loading = false
      }
    },
     async fetchDataRoom(){
      try {
        this.loading = true
        const res = await getRoom(this.currentPageRoom)
        this.totalRoom = res.total
        this.roomTableData = res.data.map(v => {
          v.isEdit = false
          return v
        })
      } catch (error) {
        console.log('获取客房信息', error)
      } finally {
        this.loading = false
      }
    }
  }
}

</script>
<style scoped>

</style>