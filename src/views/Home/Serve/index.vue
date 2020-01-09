<template>
  <div id="Serve">
    <Search></Search>
    <div class="Serve_Continer">
      <van-button type="primary">服务</van-button>
      <!-- 要生成海报的-->
      <div class="creat-give-poster" ref="creatGivePoster">
        <p class="player-bottom-panel-title">赠送成功</p>
        <p class="player-bottom-panel-tip center">快扫码支持</p>
        <vue-qr
          :logo-src="config.logo"
          :text="config.value"
          :size="100"
          :margin="0"
          class="player-bottom-panel-qrcode center"
        />
      </div>

      <!-- 生成海报的-->
      <div class="share-give-poster">
        <img class="poster-img" :src="imgUrl" />
      </div>
    </div>
  </div>
</template>

<script>
import { Button } from "vant";
import Search from "../../../components/common/Search";
import VueQr from "vue-qr"; //生成二维码插件
import html2canvas from "html2canvas"; //html转换为图片插件
export default {
  name: "Serve",
  data() {
    return {
      value: "搜索帖子、用户",
      //二维码参数
      config: {
        value:
          "https://mactivity.lenovo.com.cn/sales/nhj.html?pmf_source=P0000001096M0000", //显示的值、跳转的地址
        logo: require("@/assets/img/logo.svg") //中间logo的地址
      },
      imgUrl: "" //最后转化出来的图片base64地址
    };
  },
  components: {
    [Button.name]: Button,
    Search,
    VueQr
  },
  mounted() {
    setTimeout(_ => {
      this.getPoster();
    }, 500);
  },
  methods: {
    // 生成海报
    getPoster() {
      let shareContent = this.$refs.creatGivePoster; //需要截图的包裹的（原生的）DOM 对象
      let width = shareContent.offsetWidth; //获取dom 宽度
      let height = shareContent.offsetHeight; //获取dom 高度
      let canvas = document.createElement("canvas"); //创建一个canvas节点
      let scale = 1; //定义任意放大倍数 支持小数
      canvas.width = width * scale; //定义canvas 宽度 * 缩放
      canvas.height = height * scale; //定义canvas高度 *缩放
      canvas.getContext("2d").scale(scale, scale); //获取context,设置scale
      let opts = {
        scale: scale, // 添加的scale 参数
        canvas: canvas, //自定义 canvas
        // logging: true, //日志开关，便于查看html2canvas的内部执行流程
        width: width, //dom 原始宽度
        height: height,
        useCORS: true, // 【重要】开启跨域配置
        backgroundColor: null
      };

      html2canvas(shareContent, opts).then(canvas => {
        var context = canvas.getContext("2d");
        // 【重要】关闭抗锯齿
        context.mozImageSmoothingEnabled = false;
        context.webkitImageSmoothingEnabled = false;
        context.msImageSmoothingEnabled = false;
        context.imageSmoothingEnabled = false;

        // 【重要】默认转化的格式为png,也可设置为其他格式
        let imgUrl = canvas.toDataURL("image/png");
        this.imgUrl = imgUrl;
        console.log("生成海报");
      });
    }
  }
};
</script>

<style scoped>
.Serve_Continer{
  width: 100%;
  margin-top:39vw;
}
</style>

