<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Demo />
    <m-card imgSrc="moocui.png" summary="从零搭建vue组件库">
      <template v-slot:footer>
        <div class="footer-wrapper">
          <div class="level">中级 - 528人报名</div>
          <div class="price">399</div>
        </div>
      </template>
    </m-card>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.footer-wrapper {
  display: flex;
  padding: 10px;
  justify-content: space-between;
  font-size: 12px;
  color: gainsboro;
}
</style>
