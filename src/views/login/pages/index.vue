<script setup>
import { reactive, toRefs } from 'vue'
import { getData, getTableData, postData } from '../service-config/http'

const state = reactive({
  tableData: []
})

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
  state.tableData = await getTableData()
  console.log(state.tableData)
}
</script>

<template>
  <div style="margin: 20px">
    <el-button type="primary" @click="Gdata">获取 Gdata</el-button>
    <el-button type="primary" @click="PData">获取 PData</el-button>
    <el-button type="primary" @click="table">获取 table</el-button>

    <el-table :data="state.tableData" style="width: 100%; margin-top: 20px" stripe border>
      <el-table-column prop="id" label="id" width="180" />
      <el-table-column prop="name" label="name" width="180" />
      <el-table-column prop="email" label="email" />
      <el-table-column prop="body" label="body" />
    </el-table>
  </div>
</template>

<style scoped lang="less"></style>
