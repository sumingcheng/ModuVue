<script setup>
import { onMounted, ref } from 'vue'
import { getData, getTableData, postData } from '../service-config/http'
import MyFunctionalComponent from './component/MyFunctionalComponent.vue'

const tableData = ref([])

const Gdata = async () => {
  let res = await getData()
  console.log(res)
}

const PData = async () => {
  let res = postData({
    title: 'foo',
    body: 'bar',
    userId: 1
  })
}

const table = async () => {
  tableData.value = await getTableData()
  console.log(tableData.value)
}

onMounted(() => {
  table()
})
</script>

<template>
  <div style="margin: 20px">
    <el-button type="primary" @click="Gdata">获取 Gdata</el-button>
    <el-button type="primary" @click="PData">获取 PData</el-button>
    <el-button type="primary" @click="table">获取 table</el-button>

    <el-table :data="tableData" style="width: 100%; margin-top: 20px" stripe border>
      <el-table-column prop="id" label="id" width="180" />
      <el-table-column prop="name" label="name" width="180" />
      <el-table-column prop="email" label="email" />
      <el-table-column prop="body" label="body" />
    </el-table>
    <!--使用函数组件-->
    <MyFunctionalComponent :name="'Vue 3 User'" />
  </div>
</template>

<style scoped lang="less"></style>
