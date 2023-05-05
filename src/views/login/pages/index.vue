<script setup>
import { ref } from 'vue'
import { useStore } from 'vuex'
import { getData } from '@views/login/service-config/http'

const store = useStore()

const message = ref('login')

async function data() {
  let res = await getData()
  console.log(res)
}
</script>

<template>
  <div>
    <el-button type="primary" @click="data">获取 Data</el-button>
  </div>
</template>

<style scoped lang="less">
div {
  font-size: 25px;
  color: #333;
  text-align: center;
}
</style>
