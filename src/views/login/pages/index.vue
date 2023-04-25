<script setup>
import { ref } from 'vue'

const message = ref('test')
</script>

<template>
  <div>{{ message }}</div>
</template>

<style scoped lang="less">
div {
  font-size: 25px;
  color: #333;
  text-align: center;
}
</style>
