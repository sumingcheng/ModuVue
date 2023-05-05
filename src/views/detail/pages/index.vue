<script setup>
import { ref } from 'vue'

const count = ref(0)
const increment = () => {
  count.value++
}
</script>

<template>
  <div>
    {{ count }}
    <el-button type="primary" @click="increment">+</el-button>
  </div>
</template>

<style scoped lang="less">
div {
  font-size: 25px;
  color: #333;
  text-align: center;
}
</style>
