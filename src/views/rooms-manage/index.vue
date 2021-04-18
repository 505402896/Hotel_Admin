<!--  -->
<template>
  <div class="container">
    <m-header />
    <el-row>
      <el-col :span="10">
        <el-table
          ref="singleTable"
          :data="roomTableData"
          highlight-current-row
          @current-change="handleCurrentChange"
          style="width: 80%;">
          <el-table-column type="index" label="序号"/>
          <el-table-column prop="htype" label="房间类型">
            <template slot-scope="scope">
              <template v-if="scope.row.isEdit">
                <el-select size="small" v-model="roomTypeSelected" placeholder="请选择">
                  <el-option
                    v-for="item in roomType"
                    :key="item.value"
                    :label="item.label">
                  </el-option>
                </el-select>
              </template>
              <template v-else>
                <span>{{ scope.row.htype }}</span>
              </template>
            </template>
          </el-table-column>
          <el-table-column prop="roomNo" label="房间号">
            <template slot-scope="scope">
              <template v-if="scope.row.isEdit">
                <el-input size="small" v-model="scope.row.roomNo" clearable />
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
          <el-table-column prop="peopleNum" label="可住人数">
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
          <el-table-column label="操作">
            <template slot-scope="scope">
              <template v-if="scope.row.isEdit">
                <el-button type="info" icon="el-icon-close" circle @click="cancelRoomType(scope.row)"></el-button>
                <el-button type="success" icon="el-icon-check" circle @click="saveRoomType(scope.row)"></el-button>
              </template>
              <template v-else>
                <el-button type="primary" icon="el-icon-edit" circle @click="editRoomType(scope.row)"></el-button>
                <el-button type="danger" icon="el-icon-delete" circle @click="delRoomType(scope.row)"></el-button>
              </template>
            </template>
          </el-table-column>
        </el-table>
      </el-col>
    </el-row> 
  </div>
</template>

<script>
import mHeader from './module/header'
export default {
  name:'rooms-manage',
  data () {
    return {
      roomType: {},  // 存所有房间类型
      roomTypeSelected: undefined, // 编辑后选中的房间类型
      roomTableData: [
        {
          htype: '大床房',
          roomNo: 201,
          isEdit: false
        }
      ],
      roomTypeTableData: [
        {
          htype: '豪华大床房',
          hprice: '22',
          peopleNum: 2,
          total: 5,
          isEdit: false
        }
      ]
    };
  },

  components: { mHeader },

  computed: {},

  mounted() {},

  methods: {
    handleCurrentChange(val) {
      this.currentRow = val;
    },
    editRoom(row){
      row.isEdit = true;
    },
    delRoom(row){
      console.log('222');
      console.log(row);
    },
    saveRoom(row){

    },
    cancelRoom(row){
      row.isEdit = false;
    },
    editRoomType(row){
      row.isEdit = true;
    },
    delRoomType(row){

    },
    saveRoomType(row){

    },
    cancelRoomType(row){
      row.isEdit = false;
    }
  }
}

</script>
<style scoped>

</style>