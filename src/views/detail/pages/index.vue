<script setup>
import { ref } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

const update = () => {
  store.dispatch('detail/updateSystemTimeAsync')
}
</script>

<template>
  <div>
    <div>{{ store.state.detail.systemTime }}</div>
    <el-button type="primary" @click="update">更新当前时间</el-button>
  </div>
</template>

<style scoped lang="less">
div {
  font-size: 25px;
  color: #333;
  text-align: center;
}
</style>
