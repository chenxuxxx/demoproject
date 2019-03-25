<template>
  <div class="table">
    <div>表格组件</div>
    <Table border
           ref="selection"
           :columns="columns4"
           :data="data1"></Table>
    <Button @click="handleSelectAll(true)">全选</Button>
    <Button @click="handleSelectAll(false)">取消全选</Button>
    <!-- 点击调整 -->
    <button @click="handler">点我跳转到静态文件</button>
  </div>
</template>
<script>
export default {
  data () {
    return {
      columns4: [
        {
          type: 'selection',
          width: 60,
          align: 'right'
        },
        {
          title: 'Name',
          key: 'name',
          width: 160,
          align: 'center'
        },
        {
          title: 'Age',
          key: 'age',
          align: 'center'
        },
        {
          title: 'Address',
          key: 'address',
          align: 'center'
        }
      ],
      data1: [
        {
          name: 'John Brown',
          age: 18,
          address: 'New York No. 1 Lake Park',
          date: '2016-10-03'
        },
        {
          name: 'Jim Green',
          age: 24,
          address: 'London No. 1 Lake Park',
          date: '2016-10-01'
        },
        {
          name: 'Joe Black',
          age: 30,
          address: 'Sydney No. 1 Lake Park',
          date: '2016-10-02'
        },
        {
          name: 'Jon Snow',
          age: 26,
          address: 'Ottawa No. 2 Lake Park',
          date: '2016-10-04'
        }
      ]
    }
  },
  methods: {
    handleSelectAll (status) {
      this.$refs.selection.selectAll(status)
    },
    handler () {
      // window.open('static/魏夕亚.docx')
      // window.open('static/logo.png')
      window.open('static/IMG_20180602_180757.jpg')
    }
  }
}
</script>
<style lang="less" scoped>
.table {
  width: 500px;
  height: 500px;
}
</style>
