<template>
  <div class="brand">
    <img src="http://img61.ddimg.cn/upload_img/00528/000000/biaoti-101-1523330132.jpg" alt />
    <swiper class="bw" :options="swiperOption">
      <swiper-slide v-for="(item, index) in blist" :key="index">
        <ul>
          <li v-for="(ite,index) in item.imgs" :key="index">
            <img :src="ite" alt />
          </li>
        </ul>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import { getBrand } from '@/api/api.js'
export default {
  name: 'carrousel',
  created () {
    getBrand().then(data => {
      this.blist = data
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
      blist: []
    }
  }
}
</script>
<style lang="less" scoped>
.brand {
  position: relative;
  width: 100%;
  img {
    width: 100%;
    // height: 82px;
  }
  .bw {
    padding-top:20px;
    .swiper-pagination {
      position: absolute;
      height: 20px;
      top: 0px;
      left: 0px;
    //   .swiper-pagination-bullet{
    //     //   display: block;
    //     //   float: left;
    //   }
    }
    ul {
      display: flex;
      flex-wrap: wrap;
      li {
        width: 20%;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
}
</style>
