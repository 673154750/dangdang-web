<template>
  <div class="nav">
    <ul>
      <router-link to='/home' tag='li'>
        <i class="iconfont zz"></i>
        <span>首页</span>
      </router-link>
      <router-link to='/category' tag='li'>
        <i class="iconfont icon-fenlei"></i>
        <span>分类</span>
      </router-link>
      <router-link to='/buy' tag='li'>
        <i class="iconfont icon-gouwudai"></i>
        <span>值得买</span>
      </router-link>
      <router-link to='/cart' tag='li'>
        <i class="iconfont icon-che"></i>
        <span>购物车</span>
      </router-link>
      <router-link to='mine' tag='li'>
        <i class="iconfont icon-icon_mine"></i>
        <span>我的</span>
      </router-link>
    </ul>
  </div>
</template>
<script>
export default {}
</script>
<style scoped>
 .nav{
     position: fixed;
     bottom: 0;
     left: 0;
     width: 100%;
     height:110px;
     padding-top:15px;
     box-sizing: border-box;
     font-size: 24px;
     background: white;
     z-index: 100;
 }
 .nav ul{
     display: flex;
     /* 弹性布局 */

 }
 .nav ul li{
     flex: 1;
     display: flex;
     flex-direction: column;
     justify-content: center;
     align-items: center;
 }
 .nav ul li i{
     font-size: 40px;
     font-weight: 600;
     font-style: normal;
 }
 .router-link-active{
     color: #ff483e;
 }
</style>
