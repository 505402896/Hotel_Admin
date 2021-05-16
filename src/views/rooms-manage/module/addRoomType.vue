<!--  -->
<template>
  <div>
    <el-dialog
      title="新增房型"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose">
      <el-form
        ref="form"
        :model="form"
        label-width="80">
          <el-form-item label="房间类型">
            <el-input size="small" prop="htype" v-model.trim="form.htype"></el-input>
          </el-form-item> 
          <el-form-item label="房间价格">
            <el-input size="small" prop="hprice" v-model.number="form.hprice"></el-input>
          </el-form-item>
          <el-form-item label="可住人数">
            <el-input-number 
                size="small"
                prop="peopleNum"
                v-model="form.peopleNum" 
                controls-position="right" 
                :min="1" :max="6" />
          </el-form-item>
          <el-form-item label="详细描述">
            <el-input
              type="textarea"
              :rows="2"
              placeholder="请输入内容"
              v-model="form.hdetail">
            </el-input>
          </el-form-item>
          <el-form-item label="房间图片">
            <el-upload
              class="upload-demo"
              ref="upload"
              :action="`http://121.196.145.100:8081/api/hotel/addRoomType`"
              accept="image/*"
              :limit="1"
              :data="form"
              :on-preview="handlePreview"
              :on-remove="handleRemove"
              :on-change="handleChange"
              :file-list="fileList"
              list-type="picture"
              :auto-upload="false">
              <el-button slot="trigger" size="small" type="danger">选取文件</el-button>
            </el-upload>
          </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="handleClose">取 消</el-button>
        <el-button type="danger" @click="add">增 加</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { addRoomType } from '@/api/room-manage/roomType'
export default {
  props: {
    visible: {
      type: Boolean,
      default: undefined
    }
  },
  data () {
    return {
      form: {},
      file: {},
      fileList: []
    };
  },

  components: {},

  computed: {
    dialogVisible(){
      return this.visible
    }
  },

  mounted() {},

  methods: {
    handleClose(){
      this.$emit('update:visible', false)
    },
    async add(){
      this.$refs.upload.submit()
      this.$notify({
        title: '成功',
        message: '添加成功',
        type: 'success'
      });
      this.handleClose()
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    handleChange(file) {
      this.file = file
    }
  }
}

</script>
<style scoped>
.el-input{
  width: 60%;
}
</style>