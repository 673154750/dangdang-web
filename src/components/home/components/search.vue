<template>
  <div class="search">
    <img class="logo" src="../images/logo.png" alt />
    <div class="inp">
      <img src="../images/search.png" alt />
      <input type="text" placeholder="搜索商品" />
    </div>
    <img class="menu" src="../images/category.png" alt />
  </div>
</template>

<style scoped>
.search {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
}
.search .logo {
  width: 60px;
  height: 60px;
}
.search .inp {
  flex: 1;
  background: #e8ecf0;
  margin: 0 30px;
  display: flex;
  align-items: center;
  border-radius: 30px;
  padding: 0 10px;
}
.search .inp img {
  width: 40px;
  height: 40px;
  margin: 0 20px;
}
.inp input {
  height: 56px;
  flex: 1;
  background: transparent;
  border:none;
}
.menu {
  width: 50px;
  height: 50px;
}
</style>
