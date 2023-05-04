<script setup>
import { ref } from 'vue'
import { useStore } from 'vuex'
// import svg from '@/../public/webpack.svg'

const store = useStore()

const message = ref('login')
</script>

<template>
  <div>
    <div>{{ message + store.state.root }}</div>
  </div>
</template>

<style scoped lang="less">
div {
  font-size: 25px;
  color: #333;
  text-align: center;
}

img {
  width: 100px;
  height: 100px;
}
</style>
