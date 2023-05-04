<script setup>
import { ref } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

const message = ref('login')
</script>

<template>
  <div>
    <el-button type="primary">获取 Data</el-button>
  </div>
</template>

<style scoped lang="less">
div {
  font-size: 25px;
  color: #333;
  text-align: center;
}
</style>
