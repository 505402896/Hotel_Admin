<!--  -->
<template>
  <div class="container">
    <m-header :head-data="headData"/>
    <el-row>
      <el-col :span="12">
        <div class="left" />
      </el-col>
      <el-col :span="12">
        <div class="right" />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { getDataView } from '@/api/data-view/data-view'
import mHeader from './module/header'
export default {
  data () {
    return {
      myChartR: null,
      myChartL: null,
      hotelTotal: undefined,
      roomTotal: undefined,
      userTotal: undefined,
      weChatTotal: undefined,
      webTotal: undefined,
      headData: {},
      roomType: [],
      roomTypeSum: []
    };
  },

  components: { mHeader },

  computed: {},

  created() {
    this.fetchData()
  },

  mounted() {},

  methods: {
    init(){
      this.myChartL = this.$echarts.init(document.querySelector('.left'))
      this.myChartL.setOption({
        color: ['#07C160','#00a1d6'],
        legend: {
          orient: 'vertical',
          left: 'left',
        },
        series : [
          {
            name: '访问来源',
            type: 'pie',
            radius: '55%',
            // roseType: 'angle',  南丁格尔图
            data:[
              {value: this.weChatTotal, name:'WeChat'},
              {value: this.webTotal, name:'Web'}
            ],
             emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      })
      // 基于准备好的dom，初始化echarts实例
      this.myChartR = this.$echarts.init(document.querySelector('.right'))
      this.myChartR.setOption({
        title: {
          text: '房间预定统计'
        },
        tooltip: {},
        color: ['#34bfa3'],
        legend: {
          data: ['销量']
        },
        xAxis: {
          data: this.roomType
        },
        yAxis: {},
        series: [{
          name: '次数',
          type: 'bar',
          data: this.roomTypeSum
        }]
      });
    },
    async fetchData() {
      try {
        const res = await getDataView()
        this.weChatTotal = res.weChatTotal
        this.webTotal = res.webTotal
        this.hotelTotal = res.hotelTotal
        this.roomTotal = res.roomTotal
        this.userTotal = res.userTotal
        this.headData = {
          'hotelTotal': res.hotelTotal,
          'roomTotal': res.roomTotal,
          'userTotal': res.userTotal
        }
        this.roomType = this.changeRoomType(res.book)
        this.roomTypeSum = this.changeRoomTypeSum(res.book)
        this.$nextTick(() => {
          this.init()
        })
      } catch (error) {
        console.log('获取数据汇总', error)
      }
    },
    changeRoomType(data) {
      let roomType = []
      data.map(v => {
        roomType.push(v.htype)
      })
      return Array.from(new Set(roomType))
    },
    changeRoomTypeSum(data) {
      let roomType = []
      let roomTypeSum = []
      data.map(v => {
        roomType.push(v.htype)
      })
      let json = {};
      for (let i=0;i < roomType.length; i++){
        //判断数组中的元素，在json中是否存在属性值。
        if (json[roomType[i]]) {
          json[roomType[i]] += 1;
        } else {
          json[roomType[i]] = 1;
        }
      }
      for(let j in json) {
        roomTypeSum.push(json[j])
      }
      return roomTypeSum
    }
  }
}

</script>
<style scoped>
.container{
  position: relative;
}
.left,.right{
  width: 50%;
  height: 500px;
}
</style>