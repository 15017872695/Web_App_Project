<template>
  <div id="ProductDetails">
    <App-Title-Show-Box
      :BoxHidden="TopBoxHidden"
      :selectNavBarBLN="selectNavBarBLN"
    ></App-Title-Show-Box>
    <Swiper
      :BoxHidden="BoxHidden"
      :hidenIndicator="hidenIndicator"
      :images="images"
    ></Swiper>
    <div class="Product-Top-One" v-show="TopOne">
      <i class="iconfont iconreturn" @click="back"></i>
      <i class="iconfont iconmore" @click="showMainNav"></i>
    </div>
    <div class="Product-Top-Two" v-show="TopTwo">
      <i class="iconfont iconreturn" @click="back"></i>
      <div class="selectInfoWapper">
        <span
          v-for="(item, index) in selectInfo"
          :key="index"
          @click="activeIndex(index)"
          :class="Index == index ? 'active' : ''"
          >{{ item }}</span
        >
      </div>
      <i class="iconfont iconmore" @click="showMainNav"></i>
    </div>
    <transition name="fade">
      <div class="main-nav" v-show="showNav">
        <ul>
          <li @click="goHome">
            <i class="iconfont iconshouye"></i>
            <span>首页</span>
          </li>
          <li>
            <i class="iconfont iconsousuo"></i>
            <span>搜索</span>
          </li>
          <li>
            <i class="iconfont iconwode1"></i>
            <span>个人中心</span>
          </li>
        </ul>
      </div>
    </transition>
    <!-- 产品秒杀预告展示 -->
    <div class="ProductMS">
      <div class="ProductMS_left">
        <div>
          <span>秒杀价</span>
          <span>￥149</span>
        </div>
        <div>
          <div class="sg-notice">
            <span class="sg-notice-titleType">
              <img
                src="https://mitem.lenovo.com.cn/product/pd_comp/images/sgClock.png"
                alt="时钟"
              />
            </span>
            <span class="sg-notice-typeName">商城秒杀</span>
          </div>
          <sup class="noPrice">￥169</sup>
        </div>
      </div>
      <div class="ProductMS_right">
        <span>距结束还剩:</span>
        <div class="time">
          <span style="margin-right:1vw;">{{ day }}天</span>
          <em>{{ hour }}</em>
          <i>:</i>
          <em>{{ min }}</em>
          <i>:</i>
          <em>{{ second }}</em>
        </div>
      </div>
    </div>
    <div class="Product_Info">
      <div>ThinkPad T490 英特尔酷睿i5 笔记本电脑 20N2A002CD</div>
      <div>
        八代英特尔酷睿i5-8265U/Windows 10家庭中文版/8GB/512GB
        SSD/WQHD/独显/14.0英寸
      </div>
    </div>
    <div class="Product_YH">
      <div>
        <span>活动</span>
        <div class="Product_YH_Center">
          <p>
            【限时赠好礼】下单赠“女排拼搏2020“主题台历，数量有限，赠完即止，仅限电子发票用户！
          </p>
          <p>
            【福利】天天抽1000元花呗红包（联想APP支付才可以哦），详情点击了解
          </p>
        </div>
        <img
          src="https://p3.lefile.cn/product/adminweb/2018/11/28/3ed4e508-b698-475e-b2a4-2e4545a8daa0.png"
          alt
        />
      </div>
      <div>
        <span>赠送</span>
        <div class="Product_YH_Center">
          <span>ThinkPad双肩包B200</span>
        </div>
        <img
          src="https://p3.lefile.cn/product/adminweb/2018/11/28/3ed4e508-b698-475e-b2a4-2e4545a8daa0.png"
          alt
        />
      </div>
      <div>
        <span>分期</span>
        <div class="Product_YH_Center">
          <span>花呗分期 / 招行分期</span>
        </div>
        <img
          src="https://p3.lefile.cn/product/adminweb/2018/11/28/3ed4e508-b698-475e-b2a4-2e4545a8daa0.png"
          alt
        />
      </div>
      <div>
        <span>已选</span>
        <div class="Product_YH_Center">
          <span>
            <b>未选官方服务</b> i5-8265U/Windows 10家庭中文版/8GB/512GB
            SSD/WQHD/独显/14.0英寸
          </span>
        </div>
        <img
          src="https://p3.lefile.cn/product/adminweb/2018/11/28/3ed4e508-b698-475e-b2a4-2e4545a8daa0.png"
          alt
        />
      </div>
    </div>

    <!-- Vant商品详情快捷导航组件 -->
    <van-goods-action safe-area-inset-bottom>
      <van-goods-action-icon icon="chat-o" text="客服" />
      <van-goods-action-icon
        icon="cart-o"
        text="购物车"
        :info="Arr.length"
        url="/ShoppingCath"
      />
      <van-goods-action-icon
        icon="shop-o"
        text="分享"
        info="3"
        @click="showShare = true"
      />
      <van-goods-action-button
        type="warning"
        text="加入购物车"
        @click="addCommodity"
      />
      <van-goods-action-button
        type="danger"
        text="立即购买"
        @click="addCommodity"
      />
    </van-goods-action>

    <!-- Sku 商品规格 -->
    <van-sku
        v-model="show"
        stepper-title="我要买"
        :sku="sku"
        :goods="goods"
        :goods-id="goodsId"
        :quota="quota"
        :quota-used="quotaUsed"
        :hide-stock="sku.hide_stock"
        show-add-cart-btn
        reset-stepper-on-hide
        :initial-sku="initialSku"
        @buy-clicked="onBuyClicked"
        @add-cart="onAddCartClicked"
      >
        <!-- 自定义 sku-header-price -->
        <template #sku-header-price="props">
          <div class="van-sku__goods-price">
            <span class="van-sku__price-symbol">￥</span
            ><span class="van-sku__price-num">{{ props.price }}</span>
          </div>
        </template>

        <!-- 自定义 sku actions -->
        <template #sku-actions="props">
          <div class="van-sku-actions">
            <van-button square size="large" type="warning" @click="onAddCartClicked">
              加入购物车
            </van-button>
            <!-- 直接触发 sku 内部事件，通过内部事件执行 onBuyClicked 回调 -->
            <van-button
              square
              size="large"
              type="danger"
              @click="props.skuEventBus.$emit('sku:buy')"
            >
              立即购买
            </van-button>
          </div>
        </template>
      </van-sku>

    <!-- 分享面板 -->
    <van-share-sheet
      v-model="showShare"
      title="立即分享给好友"
      :options="options"
      @select="onSelect"
    />
  </div>
</template>
<script>
import Swiper from "@/components/common/Swiper";
import AppTitleShowBox from "@/components/common/AppTitleShowBox";
import {
  GoodsAction,
  GoodsActionIcon,
  GoodsActionButton,
  Toast,
  ShareSheet,
  Sku,
  Button
} from "vant";
// 引入状态管理器
import store from "@/store/index";
export default {
  name: "ProductDetails",
  props: {},
  components: {
    Swiper,
    AppTitleShowBox,
    [GoodsAction.name]: GoodsAction,
    [GoodsActionIcon.name]: GoodsActionIcon,
    [GoodsActionButton.name]: GoodsActionButton,
    [ShareSheet.name]: ShareSheet,
    [Sku.name]: Sku,
    [Button.name]: Button,
  },
  data() {
    return {
      BoxHidden: false,
      TopBoxHidden: true,
      hidenIndicator: true,
      selectNavBarBLN: false,
      images: [
        "https://p4.lefile.cn/product/adminweb/2019/04/28/nZxBfBxlvRccpN5nhd4tI6bqy-8504.jpg",
        "https://p4.lefile.cn/product/adminweb/2019/04/28/XmVH6M7xtgiSFpXGbaKbKYOV1-0641.jpg",
        "https://p1.lefile.cn/product/adminweb/2019/04/28/gbZBhMTVkWByyrjhpdaL5LW2X-3294.jpg",
        "https://p1.lefile.cn/product/adminweb/2019/04/28/Hz3aDmG0Lj5pnc2gIqgJqJM3P-7874.jpg",
        "https://p4.lefile.cn/product/adminweb/2019/04/28/JKl4MFnPoItmuWXyfNyWAZSy6-1469.jpg",
        "https://p1.lefile.cn/product/adminweb/2019/04/28/YweeNTy7caTAm00BS0CKeQDS3-3441.jpg",
        "https://p3.lefile.cn/product/adminweb/2019/04/28/QAZ2e64r7kPG6LXHNeBjju0qh-5501.jpg",
      ],
      TopOne: false,
      TopTwo: true,
      showNav: false,
      selectInfo: ["商品", "详情", "配置", "评价"],
      Index: 0,
      curStartTime: "2020-10-1",
      hour: "00",
      min: "00",
      second: "00",
      day: "00",
      Arr: null,
      showShare: false,
      options: [
        [
          { name: "微信", icon: "wechat" },
          { name: "微博", icon: "weibo" },
          { name: "QQ", icon: "qq" },
        ],
        [
          { name: "复制链接", icon: "link" },
          { name: "分享海报", icon: "poster" },
          { name: "二维码", icon: "qrcode" },
        ],
      ],

      show: false,
      sku: {
        // 所有sku规格类目与其值的从属关系，比如商品有颜色和尺码两大类规格，颜色下面又有红色和蓝色两个规格值。
        // 可以理解为一个商品可以有多个规格类目，一个规格类目下可以有多个规格值。
        tree: [
          {
            k: "颜色", // skuKeyName：规格类目名称
            k_s: "s1", // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
            v: [
              {
                id: "1", // skuValueId：规格值 id
                name: "红色", // skuValueName：规格值名称
                imgUrl: "https://img.yzcdn.cn/2.jpg", // 规格类目图片，只有第一个规格类目可以定义图片
                previewImgUrl: "https://img.yzcdn.cn/2.jpg", // 用于预览显示的规格类目图片
              },
              {
                id: "2",
                name: "蓝色",
                imgUrl: "https://img.yzcdn.cn/2.jpg",
                previewImgUrl: "https://img.yzcdn.cn/2.jpg",
              },
            ],
            largeImageMode: true, //  是否展示大图模式
          },
        ],
        // 所有 sku 的组合列表，比如红色、M 码为一个 sku 组合，红色、S 码为另一个组合
        list: [
          {
            id: 2259, // skuId
            s1: "1", // 规格类目 k_s 为 s1 的对应规格值 id
            s2: "2", // 规格类目 k_s 为 s2 的对应规格值 id
            price: 100, // 价格（单位分）
            stock_num: 110, // 当前 sku 组合对应的库存
          },
        ],
        price: "1.00", // 默认价格（单位元）
        stock_num: 227, // 商品总库存
        collection_id: 2261, // 无规格商品 skuId 取 collection_id，否则取所选 sku 组合对应的 id
        none_sku: false, // 是否无规格商品
        messages: [
          {
            // 商品留言
            datetime: "0", // 留言类型为 time 时，是否含日期。'1' 表示包含
            multiple: "0", // 留言类型为 text 时，是否多行文本。'1' 表示多行
            name: "留言", // 留言名称
            type: "text", // 留言类型，可选: id_no（身份证）, text, tel, date, time, email
            required: "1", // 是否必填 '1' 表示必填
            placeholder: "", // 可选值，占位文本
          },
        ],
        hide_stock: false, // 是否隐藏剩余库存
      },
      goods: {
        // 默认商品 sku 缩略图
        picture: "https://img.yzcdn.cn/2.jpg",
      },
      messageConfig: {
        // 图片上传回调，需要返回一个promise，promise正确执行的结果需要是一个图片url
        uploadImg: () => {
          return new Promise((resolve) => {
            setTimeout(
              () =>
                resolve(
                  "https://img.yzcdn.cn/upload_files/2017/02/21/FjKTOxjVgnUuPmHJRdunvYky9OHP.jpg!100x100.jpg"
                ),
              1000
            );
          });
        },
        // 最大上传体积 (MB)
        uploadMaxSize: 3,
        // placeholder 配置
        placeholderMap: {
          text: "xxx",
          tel: "xxx",
        },
        initialMessages: {
          留言: "留言信息",
        },
      },
      goodsId: 1,
      quota: 0,
      quotaUsed: 0,
      initialSku: {
        // 键：skuKeyStr（sku 组合列表中当前类目对应的 key 值）
        // 值：skuValueId（规格值 id）
        s1: "1",
        s2: "1",
        // 初始选中数量
        selectedNum: 3,
        // 初始选中的商品属性
        // 键：属性id
        // 值：属性值id列表
        selectedProp: {
          123: [1222],
        },
      },
    };
  },
  created() {
    if (store.getters.shoppingData.length) {
      this.Arr = JSON.parse(store.getters.shoppingData);
    } else {
      this.Arr = { shoppingData: [] };
    }
    console.log(this.Arr);
  },
  watch: {
    Arr(nowValue, newValue) {
      console.log(newValue);
      return newValue;
    },
  },
  mounted() {
    this.countTime();
  },
  methods: {
    back() {
      this.$router.go(-1); //返回上一层
    },
    showMainNav() {
      this.showNav = !this.showNav;
    },
    goHome() {
      this.$router.push("/ShoppingMall");
    },
    activeIndex(index) {
      console.log(index);
      this.Index = index;
    },
    // 倒计时
    countTime() {
      // 获取当前时间
      let date = new Date();
      let now = date.getTime();
      // 设置截止时间
      let endDate = new Date(this.curStartTime); // this.curStartTime需要倒计时的日期
      let end = endDate.getTime();
      // 时间差
      let leftTime = end - now;
      // 定义变量 d,h,m,s保存倒计时的时间
      if (leftTime >= 0) {
        // 天
        this.day = Math.floor(leftTime / 1000 / 60 / 60 / 24);
        // 时
        let h = Math.floor((leftTime / 1000 / 60 / 60) % 24);
        this.hour = h < 10 ? "0" + h : h;
        // 分
        let m = Math.floor((leftTime / 1000 / 60) % 60);
        this.min = m < 10 ? "0" + m : m;
        // 秒
        let s = Math.floor((leftTime / 1000) % 60);
        this.second = s < 10 ? "0" + s : s;
      } else {
        this.day = 0;
        this.hour = "00";
        this.min = "00";
        this.second = "00";
      }
      // 等于0的时候不调用
      if (
        Number(this.hour) === 0 &&
        Number(this.day) === 0 &&
        Number(this.min) === 0 &&
        Number(this.second) === 0
      ) {
        return;
      } else {
        // 递归每秒调用countTime方法，显示动态时间效果,
        setTimeout(this.countTime, 1000);
      }
    },
    // 分享面板选择
    onSelect(option) {
      Toast(option.name);
      this.showShare = false;
    },
    // 加入购物车
    addCommodity() {
      this.show = true;
    },
    onAddCartClicked() {
      let item = {
        name: "ThinkPad T490 英特尔酷睿i5 笔记本电脑 20N2A002CD",
        info:
          "八代英特尔酷睿i5-8265U/Windows 10家庭中文版/8GB/512GB SSD/WQHD/独显/14.0英寸",
        oldPrice: 169,
        newPrice: 149,
        imgUrl: this.images[0],
        ID: 16,
        sum: 1,
        checkBln: true,
      };
      console.log(this.Arr);
      this.Arr.shoppingData.push(item);
      // 提交actions
      store.dispatch("ADD_COMMODITY", this.Arr.shoppingData);
      Toast("加入购物车成功");
    },
    onBuyClicked() {
      Toast("立即购买");
    },
  },
};
</script>
<style scoped lang="scss">
/* 可以设置不同的进入和离开动画 */
/* 设置持续时间和动画函数 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active, 2.1.8 版本以下 */ {
  opacity: 0;
}
#ProductDetails {
  width: 100%;
  height: auto;
  background: #eee;
  padding-bottom: 13vw;
  #Swiper {
    height: 103vw;
    margin-top: 0 !important;
    position: relative;
    /deep/ .custom-indicator {
      position: absolute;
      bottom: 0;
      right: 3vw;
      color: #4a4a4a;
      font-size: 4.5vw;
    }
  }
  .Product-Top-One,
  .Product-Top-Two {
    width: 100%;
    height: 13vw;
    position: fixed;
    top: 0;
    background: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 4vw;
    box-sizing: border-box;
    z-index: 9999;
    .iconfont {
      font-size: 5vw;
      color: #fff;
      background-color: #999;
      opacity: 0.7;
      border-radius: 50%;
      width: 6vw;
      height: 6vw;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    i:nth-child(2) {
      font-size: 6vw !important;
    }
    .selectInfoWapper {
      display: flex;
      span {
        margin-right: 3vw;
        font-size: 4vw;
        padding-bottom: 2vw;
      }
      .active {
        border-bottom: 0.5vw solid red;
      }
    }
  }
  .Product-Top-Two {
    z-index: 9998;
    .iconfont {
      font-size: 6vw;
      color: #000;
      background-color: #fff;
      opacity: 1;
      border-radius: 0;
      width: auto;
      height: auto;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    i:nth-child(2) {
      font-size: 8vw !important;
    }
  }
  .main-nav {
    width: 100%;
    height: 10vw;
    background: rgba(255, 255, 255, 0.8);
    position: fixed;
    top: 13vw;
    color: #000;
    display: flex;
    z-index: 1000;
    ul {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      li {
        width: 20vw;
        font-size: 3vw;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 20px;
        .iconfont {
          margin-right: 5px;
        }
      }
    }
  }
  #AppTitleShowBox {
    position: relative;
    margin-top: 13vw;
  }
  .ProductMS {
    width: 100%;
    height: 14vw;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  .ProductMS_left,
  .ProductMS_right {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    font-size: 3vw;
  }
  .ProductMS_left {
    flex: 2;
    background: linear-gradient(to right, #f72d91, #f4364c);
    color: #fff;
    padding: 0 5vw;
    box-sizing: border-box;
    div {
      display: flex;
    }
    > div:nth-child(1) > span:nth-child(2) {
      font-size: 5vw;
      font-weight: bold;
    }
    > div:nth-child(1) > span:nth-child(1) {
      margin-bottom: 1vw;
    }
    > div:nth-child(1),
    > div:nth-child(2) {
      align-items: flex-end;
    }
    .noPrice {
      font-size: 3vw;
      text-decoration: line-through;
      margin-left: 1vw;
    }
    .sg-notice {
      width: 18vw;
      height: 3vw;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid #fff;
      border-radius: 5vw;
      margin-bottom: 1vw;
      .sg-notice-titleType {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        width: 5vw;
        background: #fff;
        border-top-left-radius: 5vw;
        border-bottom-left-radius: 5vw;
        flex: 1;
      }
      .sg-notice-typeName {
        transform: scale(0.7);
        display: flex;
        width: 13vw;
      }
      img {
        width: 2vw;
        height: 2vw;
        margin-left: 0.5vw;
      }
    }
  }
  .ProductMS_right {
    flex: 1;
    background: #f6d0d4;
    align-items: center;
    color: #f4364c;
    font-size: 3.5vw;
    > span {
      transform: scale(0.8);
    }
    .time {
      width: 100%;
      display: flex;
      justify-content: center;
      font-size: 3vw;
      em {
        color: #fff;
        background: #f4364c;
        width: 5vw;
        display: flex;
        justify-content: center;
      }
      i {
        font-weight: bold;
      }
    }
  }
  .Product_Info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 2vw;
    box-sizing: border-box;
    background: #fff;
    > div:nth-child(1) {
      font-size: 4.5vw;
      font-weight: bold;
    }
    > div:nth-child(2) {
      font-size: 2vw;
      color: #4a4a4a;
      margin-top: 2vw;
    }
  }
  .Product_YH {
    width: 100%;
    height: auto;
    margin-top: 2vw;
    background: #fff;
    padding: 3vw;
    box-sizing: border-box;
    > div {
      display: flex;
      width: 100%;
      height: auto;
      border-bottom: 1px solid #eee;
      justify-content: space-between;
      align-items: center;
      font-size: 3.5vw;
      padding: 3vw 0;
      .Product_YH_Center {
        width: 75vw;
      }
      img {
        width: 7vw;
        height: 7vw;
      }
      p {
        overflow: hidden;
        text-overflow: ellipsis;
        -o-text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
        word-break: break-all;
        color: #f4364c;
      }
    }
  }
}
</style>
