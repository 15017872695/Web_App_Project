
<template>
  <div id="Recommend">
    <ul lazyComponent="true">
      <li v-for="(item,index) in shoppingData" :key="index">
        <div>
          <img v-lazy="item.imgUrl" :data-src="item.imgUrl" alt />
        </div>
        <p>{{item.spName}}</p>
        <p>¥ {{item.price}}</p>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "Recommend",
  data() {
    return {
      shoppingData: [
        {
          imgUrl: require("../../../assets/img/ImgRecommend1.jpg"),
          spName: "联想Z6 Pro 8GB+128GB 黑色",
          price: "2999"
        },
        {
          imgUrl: require("../../../assets/img/ImgRecommend2.jpg"),
          spName: "拯救者 Y7000P 2019 英特尔酷睿i7 15.6英寸专业电竞本 黑色",
          price: "9599"
        },
        {
          imgUrl: require("../../../assets/img/ImgRecommend3.jpg"),
          spName: "联想Z5 Pro GT 855版 6GB+128GB 碳纤黑",
          price: "1798"
        },
        {
          imgUrl: require("../../../assets/img/ImgRecommend4.jpg"),
          spName: "联想Z5s 6GB+64GB 星夜灰",
          price: "948"
        },
        {
          imgUrl: require("../../../assets/img/ImgRecommend5.jpg"),
          spName: "拯救者 Y7000 英特尔酷睿i5 15.6英寸游戏笔记本 黑色",
          price: "5299"
        },
        {
          imgUrl: require("../../../assets/img/ImgRecommend6.jpg"),
          spName: "拯救者 Y7000P 2019 英特尔酷睿i7 15.6英寸专业电竞本 黑色",
          price: "8999"
        },
        {
          imgUrl: require("../../../assets/img/ImgRecommend7.jpg"),
          spName: "ThinkPad X390 4G版 英特尔酷睿i5 笔记本电脑 20Q0A00BCD",
          price: "7299"
        },
        {
          imgUrl: require("../../../assets/img/ImgRecommend8.jpg"),
          spName: "thinkplus自然光谱台灯智雅版",
          price: "1899"
        },
        {
          imgUrl: require("../../../assets/img/ImgRecommend9.jpg"),
          spName:
            "ThinkPad X1 Carbon2019 LTE版英特尔酷睿i5笔记本电脑20QDA00PCD",
          price: "10299"
        },
        {
          imgUrl: require("../../../assets/img/ImgRecommend10.jpg"),
          spName: "ThinkPad X1 Carbon 2019 英特尔酷睿i5 笔记本电脑 20QD0020CD",
          price: "9999"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
#Recommend {
  width: 100%;
  background: #fff;
  ul {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    li {
      width: 50%;
      height: 68vw;
      border-bottom: 1px solid #eee;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding: 2vw;
      box-sizing: border-box;
      font-size: 4vw;
      div {
        display: flex;
        justify-content: center;
        align-items: center;
      }
      img {
        width: 90%;
      }
      p:nth-child(2) {
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
        margin-top: 2vw;
      }
      p:nth-child(3) {
        color: #f4364c;
        font-weight: bold;
        margin-top: 2vw;
      }
    }
    li:nth-child(odd) {
      border-right: 1px solid #eee;
    }
  }
}
</style>