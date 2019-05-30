<template>
  <div id="app">
    <!-- save the content in the cache -->
    <keep-alive exclude="Detail">
    <!-- 当前路由地址所对应的内容 -->
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

</style>
