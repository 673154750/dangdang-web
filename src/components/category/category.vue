<template>
  <div class="categroy">
    <!-- 搜索框 -->
    <Search></Search>
    <!-- 左菜单 -->
    <div class="content">
      <div class="l-content wrapper">
        <ul>
          <li v-for="(item,index) in cateList" :key="index">{{item.categroy}}</li>
        </ul>
      </div>
      <div class="r-content"></div>
    </div>
  </div>
</template>
<script>
import { getLeftcate } from '@/api/api.js'
import Search from './components/search.vue'
import BScroll from '@better-scroll/core'
export default {
  components: {
    Search
  },
  data () {
    return {
      cateList: []
    }
  },
  async mounted () {
    this.cateList = await getLeftcate()
    this.$nextTick(() => {
      /* eslint-disable no-new */
      new BScroll('.wrapper')
    }
    )
  }
}
</script>
<style lang="less" scoped>
.categroy {
  height: 100%;
  display: flex;
  flex-direction: column;
  .content {
    height: calc(100% - 80px - 110px);
    .l-content {
      height: 100%;
      ul {
        li {
          height: 94px;
          width: 160px;
          font-size: 28px;
          text-align: center;
          line-height: 94px;
        }
      }
    }
  }
}
</style>
