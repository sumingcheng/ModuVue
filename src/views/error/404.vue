<template>
  <div class="page-404">
    <h1 class="title">404</h1>
    <div class="desc">Sorry, the page you visited does not exist.</div>
    <router-link to="/">Go Back Home</router-link>
  </div>
</template>

<script>
export default {
  name: '404'
}
</script>

<style lang="less">
.page-404 {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;

  .title {
    font-size: 10rem;
    font-weight: 600;
    line-height: 1;
    margin-bottom: 2rem;
    color: #343541;
    text-shadow: 3px 3px 0 rgba(0, 0, 0, 0.4);
  }

  .desc {
    font-size: 2rem;
    font-weight: 400;
    line-height: 1.5;
    text-align: center;
    margin-bottom: 2rem;
    color: #333;
  }

  a {
    font-size: 1.5rem;
    font-weight: 500;
    color: #fff;
    background-color: #343541;
    padding: 1rem 2rem;
    border-radius: 0.5rem;
    text-decoration: none;
    transition: all 0.2s ease-in-out;

    &:hover {
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    }
  }
}
</style>
