<!--  -->
<template>
  <div class="container">
    <m-header />
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
      roomType: []
    };
  },

  components: { mHeader },

  computed: {},

  created() {
    this.fetchData()
  },

  mounted() {
    this.$nextTick(() => {
      this.init()
    })
  },

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
          data: [5, 20, 36, 10, 10, 20]
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
        res.book.map(v =>{
          this.roomType.push(v.htype)
        })
        this.roomType = Array.from(new Set(this.roomType))
      } catch (error) {
        console.log('获取数据汇总', error)
      }
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
  height: 400px;
}
</style>