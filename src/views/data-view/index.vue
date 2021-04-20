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
import mHeader from './module/header'
export default {
  data () {
    return {
      myChartR: null,
      myChartL: null
    };
  },

  components: { mHeader },

  computed: {},

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
              {value:75, name:'WeChat'},
              {value:25, name:'Web'}
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
          text: 'ECharts 入门示例'
        },
        tooltip: {},
        color: ['#34bfa3'],
        legend: {
          data: ['销量']
        },
        xAxis: {
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {},
        series: [{
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
        }]
      });
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