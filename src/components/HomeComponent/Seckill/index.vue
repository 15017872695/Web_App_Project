<template>
  <div id="Seckill">
    <div class="Seckill-title">
      <div>
        <span>限时秒杀</span>
        <span>0点场</span>
        <div>
          <em>{{day }}</em>
          <i>:</i>
          <em>{{hour}}</em>
          <i>:</i>
          <em>{{min}}</em>
          <i>:</i>
          <em>{{second}}</em>
        </div>
      </div>
      <div>
        下一场
        <span>23:59</span>
      </div>
    </div>
    <div class="Seckill-Continer">
      <ul>
        <li>
          <div>
            <img src="@/assets/img/sekillImg1.jpg" alt />
          </div>
          <span>¥1999</span>
          <span>¥2199</span>
        </li>
        <li>
          <div>
            <img src="@/assets/img/sekillImg2.jpg" alt />
          </div>
          <span>¥4499</span>
          <span>¥4699</span>
        </li>
        <li>
          <div>
            <img src="@/assets/img/sekillImg3.jpg" alt />
          </div>
          <span>¥5299</span>
          <span>¥5499</span>
        </li>
        <li>
          <div>
            <img src="@/assets/img/sekillImg4.jpg" alt />
          </div>
          <span>¥999</span>
          <span>¥1199</span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
    name:"Seckill",
    data() {
        return {
            curStartTime: '2019-12-5',
            hour: '00',
            min: '00',
            second: '00',
        }
    },
    created() {
        this.countTime()
    },
    methods:{
        // 倒计时
        countTime () {
        // 获取当前时间
        let date = new Date()
        let now = date.getTime()
        // 设置截止时间
        let endDate = new Date(this.curStartTime) // this.curStartTime需要倒计时的日期
        let end = endDate.getTime()
        // 时间差
        let leftTime = end - now
        // 定义变量 d,h,m,s保存倒计时的时间
        if (leftTime >= 0) {
            // 天
            this.day = Math.floor(leftTime / 1000 / 60 / 60 / 24)
            // 时
            let h = Math.floor(leftTime / 1000 / 60 / 60 % 24)
            this.hour = h < 10 ? '0' + h : h
            // 分
            let m = Math.floor(leftTime / 1000 / 60 % 60)
            this.min = m < 10 ? '0' + m : m
            // 秒
            let s = Math.floor(leftTime / 1000 % 60)
            this.second = s < 10 ? '0' + s : s
        } else {
            this.day = 0
            this.hour = '00'
            this.min = '00'
            this.second = '00'
        }
        // 等于0的时候不调用
        if (Number(this.hour) === 0 && Number(this.day) === 0 && Number(this.min) === 0 && Number(this.second) === 0) {
                return
            } else {
            // 递归每秒调用countTime方法，显示动态时间效果,
                setTimeout(this.countTime, 1000)
            }
        }
    }
}
</script>
<style lang="scss" scoped>
#Seckill {
  width: 100%;
  height: auto;
  border-bottom: 2vw solid #eee;
  .Seckill-title {
    width: 100%;
    height: 13vw;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 3.5vw;
    box-sizing: border-box;
    div {
      display: flex;
      align-items: center;
    }
    div:nth-child(1) {
      span:nth-child(1) {
        font-size: 4.5vw;
        font-weight: bold;
        color: #f4364c;
        margin-right: 3vw;
      }
      span:nth-child(2) {
        font-size: 3vw;
        color: #4a4a4a;
        margin-right: 3vw;
      }
      div {
        display: flex;
        em {
          width: 5vw;
          height: 4vw;
          background-color: #f4364c;
          color: #fff;
          border-radius: 1vw;
          box-sizing: border-box;
          font-size: 2.5vw;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        i {
          color: #f4364c;
          margin: 0 1vw;
          font-weight: bold;
        }
      }
    }
    div:nth-child(2) {
      font-size: 3vw;
      color: #888;
      span {
        margin-left: 2vw;
      }
    }
  }
  .Seckill-Continer {
    width: 100%;
    overflow: hidden;
    ul {
      width: 100%;
      height: auto;
      overflow-x: scroll;
      display: -webkit-box; //实现横列的web布局 可以使用flaot、display
      -webkit-box-orient: horizontal; /* 横排显示*/
      // flex-wrap: nowrap;
      padding-left: 1px;
      box-sizing: border-box;
      margin-bottom: 5vw;
      overflow-y: hidden;
      li {
        width: 32vw;
        height: 46vw;
        margin-right: 3vw;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        div {
          border: 1px solid #ccc;
          border-radius: 1vw;
          width: 32vw;
          height: 32vw;
          display: flex;
          justify-content: center;
          align-items: center;
          img {
            width: 80%;
            border-radius: 1vw;
          }
        }
        span:nth-child(2) {
          color: #f4364c;
          font-size: 4vw;
        }
        span:nth-child(3) {
          color: #808080;
          font-size: 3vw;
          text-decoration: line-through;
        }
      }
    }
    ul::-webkit-scrollbar{
      display: none;
    }
  }
}
</style>