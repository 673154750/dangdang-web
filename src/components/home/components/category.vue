<template>
    <div class="category">
        <ul>
            <li v-for= "(item,index) in clist" :key="index">
                <img :src="item" alt="">
            </li>
        </ul>

    </div>
</template>
<script>
import {getCateList} from '@/api/api.js'
export default {
  // 局部data模型要用函数的方式，不能直接用对象的形式;(若为对象，可能存在多处共享这个对象)
  data () {
    return {
      clist: []
    }
  },
  created () {
    getCateList().then((data) => {
      this.clist = data
    })
  }

}
</script>
<style lang="less" scoped>
    .category{
        ul{
            display: flex;
            flex-wrap: wrap;
            li{
                width: 20%;
                img{
                    width: 100%;
                }
            }
        }
    }
</style>
