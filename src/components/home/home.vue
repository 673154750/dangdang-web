<template>
<div class="home">
	
  <!-- 搜索框 -->
    <Search></Search>
    <!-- 轮播图 -->
    <Swiper></Swiper>
    <img class="banner" src="http://img63.ddimg.cn/upload_img/00271/jiangyan/1242-524_02-1566298887.jpg" alt="">
    <!-- 分类 -->
    <Category></Category>
    <!-- 品牌 -->
    <Brand></Brand>
    <!-- 秒杀 -->
    <Seckill></Seckill>
</div>
</template>
<script>
import Search from './components/search.vue'
import Swiper from './components/swiper.vue'
import Category from './components/category.vue'
import Brand from './components/brand.vue'
import Seckill from './components/seckill.vue'
export default {
  components: {
    Search,
    Swiper,
    Category,
    Brand,
    Seckill
  }
}
</script>
<style  scoped>
.home{
  padding-bottom: 220px;
}
  .banner{
    width: 100%;
    /* height:400px; */
  }
</style>>
