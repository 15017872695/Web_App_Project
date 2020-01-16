<template>
  <div id="Swiper" :style="{marginTop:BoxHidden?'39.5vw':'0'}">
    <van-swipe :autoplay="3000" indicator-color="white" lazyComponent="true" @change="onChange">
      <van-swipe-item v-for="(image, index) in imagesData" :key="index" v-lazy-container = "{selector:'img',error:'@/assets/logo.png',loading:'@/assets/img/imgLodding.jpg'}" @click="Preview(index)">
        <img v-lazy="image" :data-src="image"/>
      </van-swipe-item>
      <div class="custom-indicator" slot="indicator" v-if="hidenIndicator">
        {{ current + 1 }} / {{images.length}}
      </div>
    </van-swipe>
  </div>
</template>
<script>
import { Swipe, SwipeItem,ImagePreview} from "vant";
export default {
  name: "Swiper",
  components: { [Swipe.name]: Swipe, [SwipeItem.name]: SwipeItem,[ImagePreview.name]:ImagePreview},
  props:{
    BoxHidden:{
      type: Boolean,
      default: true
    },
    hidenIndicator:{
      type: Boolean,
      default: false
    },
    images:{
      type: Array,
      default:null
    }
  },
  data() {
    return {
      current: 0,
      imagesData:this.images
    };
  },
  created() {
    
  },
  methods:{
    onChange(index) {
      this.current = index;
    },
    Preview(index){
      console.log(index)
      // 调用Vant图片预览回调函数
      ImagePreview({
        images: this.imagesData,
        startPosition: index,
        onClose() {
          // do something
        }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
#Swiper {
  width: 100%;
  height: 45vw;
  margin-top: 39.5vw;
  /deep/ .van-swipe{
      width: 100%;
      height: 100%;
      img{ 
          width: 100%;
          height: 100%;
      }
      /deep/ .van-swipe__indicator--active{
          width: 7vw;
          border-radius: 25px;
      }
  }
}
</style>