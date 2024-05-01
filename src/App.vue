<template>
  <div id="app">
    <Nav-list></Nav-list>
    <router-view/>
  </div>
</template>

<script>
import NavList from '@/common/navList.vue'
export default {
  name: 'App',
  components: {
    NavList
  }
}
</script>

<style>
@import url("./assets/reset.css");
@import url("./assets/common.css");
html,body{
  height:100%;
}
#app{
  height: 100%;
}
</style>
