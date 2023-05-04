<template>
  <div class="error-page">
    <h1 class="error-title">500：服务器错误</h1>
    <p class="error-desc">很抱歉，服务器发生错误，请稍后再试。</p>
    <button class="error-button" @click="goBack">返回</button>
  </div>
</template>

<script>
export default {
  name: '500',
  methods: {
    goBack() {
      window.history.back()
    }
  }
}
</script>

<style scoped>
.error-page {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
}

.error-title {
  font-size: 6rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 1rem;
}

.error-desc {
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 2rem;
}

.error-button {
  padding: 1.5rem 4rem;
  font-size: 1.5rem;
  font-weight: bold;
  color: #fff;
  background-color: #343541;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: 0.3s ease;
}

.error-button:hover {
  background-color: rgba(0, 0, 0, 0.2);
}
</style>
