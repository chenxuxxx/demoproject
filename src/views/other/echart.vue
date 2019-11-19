<template>
  <div class="echart">
    <div id="treeRadial"></div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      dataIndex: 10000,
      indicator: [
        { name: '销售（sales）', max: 6500 },
        { name: '管理（Administration）', max: 16000 },
        { name: '信息技术（Information Techology）', max: 30000 },
        { name: '客服（Customer Support）', max: 38000 },
        { name: '研发（Development）', max: 52000 },
        { name: '市场（Marketing）', max: 25000 }]
    }
  },
  created () {
    this.$nextTick(() => {
      this.drawTreeRadial()
    })
  },
  methods: {
    drawTreeRadial () {
      let myTreeRadial = this.$echarts.init(document.getElementById('treeRadial'))
      let option = {
        title: {
          text: '基础雷达图'
        },
        tooltip: {
          trigger: 'item',
          color: 'red',
          formatter: (params, ticket, callback) => {
            console.log(params)
            console.log(this.dataIndex)
            // var showHtm=""
            if (this.dataIndex !== 10000) {
              return `<div>${params.data.name}</br>
                   ${this.indicator[this.dataIndex].name}: ${params.data.value[this.dataIndex]}</div>`
            }
          }
        },
        legend: {
          data: ['预算分配（Allocated Budget）', '实际开销（Actual Spending）']
        },
        radar: {
          // shape: 'circle',
          name: {
            textStyle: {
              color: '#fff',
              backgroundColor: '#999',
              borderRadius: 3,
              padding: [3, 5]
            }
          },
          indicator: this.indicator
        },
        series: [{
          name: '预算 vs 开销（Budget vs spending）',
          type: 'radar',
          // areaStyle: {normal: {}},
          data: [
            {
              value: [4300, 10000, 28000, 35000, 50000, 19000],
              name: '预算分配（Allocated Budget）',
              symbolSize: 20
            },
            {
              value: [5000, 14000, 28000, 31000, 42000, 21000],
              name: '实际开销（Actual Spending）',
              symbolSize: 10
            }
          ]
        }]
      }
      myTreeRadial.setOption(option)
      myTreeRadial.on('mouseover', (params) => {
        console.log(params)
        let isSelectedDot = params.event.target.__dimIdx
        // console.log(isSelectedDot)
        if (isSelectedDot === undefined) {
          this.dataIndex = 10000
        } else {
          this.dataIndex = isSelectedDot
          console.log(this.dataIndex)
        }
        // 做鼠标滑过拐点的操作
      })
      window.addEventListener('resize', () => { myTreeRadial.resize() })
    }
  }
}
</script>
<style lang="less" scoped>
.echart {
  width: 300px;
  height: 300px;
  #treeRadial {
    width: 100%;
    height: 100%;
  }
}
</style>
