<template>
<div class="seckill">
    <img src="http://img62.ddimg.cn/upload_img/00707/mobile/mao_title.jpg" alt="">
    <div class="clock">
        <i>{{leftTime.hours}}</i>
        <span>时</span>
        <i>{{leftTime.minutes}}</i>
        <span>分</span>
        <i>{{leftTime.seconds}}</i>
        <span>秒</span>
    </div>
    <div class="good">
    <ul ref="myul" >
        <li ref="myli" v-for="(item,index) in skill" :key="index">
            <img :src="item.img" alt="">
            <p>{{item.name}}</p>
            <p>￥{{item.secPrice}}</p>
            <p>￥{{item.rPrice}}.00</p>
        </li>
    </ul>
    </div>

</div>
</template>
<script>
import {TimeDown} from '@/utils/utils.js'
import {getSeckill} from '@/api/api.js'
export default {
  data () {
    return {
      leftTime: {
        hours: '',
        minutes: '',
        seconds: ''
      },
      timer: null,
      skill: []
    }
  },
  created () {
    // getSeckill().then((data) => {
    //   console.log(data)
    //   this.skill = data
    // })
    // es7，终极结局异步问题
    // this.skill = await getSeckill()

    // var time = TimeDown('2019-08-24 15:40')
    // console.log(time)
    this.timer = setInterval(() => {
      this.leftTime = TimeDown('2019-08-26 22:40')
      // console.log(this.leftTime)
    }, 1000)
  },

  // 元素挂载完毕，可以获取到数据，将获取数据的代码移到mounted
  async mounted () {
    this.skill = await getSeckill()
    console.log(this.skill)
    this.$nextTick(() => {
      // 此时元素还没有渲染出来，要放在$nextTick()方法中
      var ulLenght = this.$refs.myli[0].offsetWidth * this.skill.length
      this.$refs.myul.style.width = ulLenght + 'px'
    })
  },
  destroyed () {
    clearInterval(this.timer)
  }
}
</script>
<style lang="less" scoped>
.seckill{
  width:100%;
    img{
        width:100%;
    }
    .clock{
      display: flex;
      width: 100%;
      height:48px;
      justify-content:center;
      font-size: 26px;
      i{
        display: inline-block;
        height: 35px;
        width: 35px;
        background: black;
        border-radius: 10px;
        margin: 0 10px;
        color:white;
        font-style: normal;
        text-align: center;
        line-height: 35px;;
        &:last-of-type{
          background: red;
        }
      }
    }
    .good{
      width:100%;
      overflow-x: auto;
      ul{
        // padding-left: 20px;
        margin-left: 20px;

        li{
          width:212px;
          display: inline-block;
          img{
            width: 160px;
            height: 160px;
          }
          p{
            font-size: 24px;
            width:160px;
            // height: 88px; //不能设高度，否则会多余显示
            overflow: hidden;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            white-space: wrap;
            text-overflow: ellipsis; //text-overflow 属性规定当文本溢出包含元素时发生的事情。ellipsis显示省略符号来代表被修剪的文本。
            -webkit-box-orient: vertical;//从上向下垂直排列子元素。
          }
          p:nth-of-type(2){
            color: red;
            font-size: 32px;
            width: 160px;
            height: 40px;
          }
          p:nth-of-type(3){
            color: #999;
            font-size: 24px;
            text-decoration:line-through;

          }
        }
      }
    }
}
</style>
