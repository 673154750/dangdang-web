<template>
  <swiper class="sw" :options="swiperOption">
    <swiper-slide v-for="(slide, index) in swiperSlides" :key="index">
        <img class="s-img" :src="slide"/>
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
import {getSliders} from '@/api/api.js'
export default {
  name: 'carrousel',
  created () {
    getSliders().then((data) => {
      this.swiperSlides = data
    })
  },
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        },
        autoplay: true
      },
      swiperSlides: []
    }
  }
}
</script>
<style lang="less" scoped>

    .s-img{
        width: 100%;
    }
</style>
