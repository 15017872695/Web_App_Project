<template>
  <div id="Shop">
    <div class="Shop_Top">
      <img src="../../../assets/img/ShopTopImg.jpg" alt />
    </div>
    <div id="Shop_AMap"></div>
    <div class="dingwei">
      <div class="toolbar">
        <van-search
          v-model="value"
          placeholder="请输入搜索关键词"
          show-action
          shape="round"
          @search="onSearch"
          @input="onSearch"
        >
          <div slot="action" @click="onSearch">搜索</div>
        </van-search>
      </div>
    </div>
    <div id="panel" v-show="hidePanel"></div>
  </div>
</template>

<script>
import axios from "axios";
import { Search,Dialog } from "vant";
import MapLoader from "@/assets/AMap/index.js";
var placeSearch;
export default {
  name: "Shop",
  data() {
    return {
      map: null,
      thisPosition: {
        location: "",
        lng: "",
        lat: ""
      },
      value: "",
      hidePanel: false,
      rectangle:''
    };
  },
  components: { [Search.name]: Search, [Dialog.Component.name]: Dialog.Component },
  mounted: function() {
    this.init();
  },
  methods: {
    // 获取周围信息
    req_post() {
      console.log(this.rectangle)
      const that = this;
      const registerUrl = "http://restapi.amap.com/v3/batch?key=7168593a2164a8afa9599b39d46ba18d";
      // types参数意义：070000理发店，080000网吧
      const newUserInfo = {
        "ops": [
            {
                "url": `/v3/place/around?offset=10&page=1&key=7168593a2164a8afa9599b39d46ba18d&location=${that.rectangle}&output=json&radius=100000&types=070000`
            },
            {
                "url": `/v3/place/around?offset=10&page=1&key=7168593a2164a8afa9599b39d46ba18d&location=${that.rectangle}&output=json&radius=100000&types=070000`
            }
        ]
      };
      axios
        .post(registerUrl, newUserInfo, {
          headers: {
            "Content-Type": "application/json"
          },
          method: "POST"
        })
        .then(function(response) {
          console.log(response);
          console.log(response["data"][0]["body"]["pois"]);
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    init() {
      let that = this;
      MapLoader().then(AMap => {
        console.log(AMap);
        const map = new AMap.Map("Shop_AMap", {
          center: [116.397428, 39.90923], //需求的城市的经度和 纬度
          resizeEnable: true, //自适应大小
          zoom: 16, //地图缩放级别
          viewMode: "3D" //设置地图模式
          // lang:'en',  //设置地图文字为英文
        });
        AMap.plugin(
          [
            "AMap.Scale",
            "AMap.OverView",
            "AMap.ToolBar",
            "AMap.MapType",
            "AMap.PlaceSearch",
            "AMap.Geolocation",
            "AMap.Autocomplete",
            "AMap.CitySearch"
          ],
          function() {
            let getlocation = new AMap.Geolocation({
              enableHighAccuracy: true,//是否使用高精度定位，默认:true
              maximumAge: 0,           //定位结果缓存0毫秒，默认：0
              convert: true,           //自动偏移坐标，偏移后的坐标为高德坐标，默认：true
              timeout: 6000, //设置定位超时时间
              GeolocationFirst: true, //是否使用高精度定位,默认:true
              maximumAge: 0, //定位结果缓存0毫秒，默认:0
              zoomToAccuracy: true, //定位成功后是否自动调整地图视野到定位点
              buttonOffset: new AMap.Pixel(10, 20),//定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
              showMarker: true,        //定位成功后在定位到的位置显示点标记，默认：true
              showCircle: true,        //定位成功后用圆圈表示定位精度范围，默认：true
              panToLocation: true,     //定位成功后将定位到的位置作为地图中心点，默认：true
            });
            map.addControl(new AMap.ToolBar()); //添加工具条插件
            map.addControl(new AMap.Scale());
            // 在图面添加鹰眼控件，在地图右下角显示地图的缩略图
            map.addControl(new AMap.OverView({ isOpen: true }));

            // 在图面添加类别切换控件，实现默认图层与卫星图、实施交通图层之间切换的控制
            map.addControl(new AMap.MapType());

            // 在图面添加定位控件，用来获取和展示用户主机所在的经纬度位置
            // map.addControl(new AMap.Geolocation());
            map.addControl(getlocation); //把定位插件加入地图实例
            getlocation.getCurrentPosition();
            

            // 直接获取当前位置信息↓
            var citySearch = new AMap.CitySearch();
            citySearch.getLocalCity(function(status, result) {
                if (status === "complete" && result.info === "OK") {
                    // 查询成功，result即为当前所在城市信息
                    console.log(result)
                    that.rectangle = result.rectangle.split(';')[1];

                    Dialog.alert({
                        title: '当前位置', 
                        message: result.province+'-'+result.city
                    }).then(() => {
                    // on close
                    });

                    that.req_post();
                }
            });
          }
        );
        AMap.service(["AMap.PlaceSearch"], function() {
          placeSearch = new AMap.PlaceSearch({
            pageSize: 0, // 单页显示结果条数
            pageIndex: 1, // 页码
            citylimit: false, //是否强制限制在设置的城市内搜索
            map: map, // 展现结果的地图实例
            panel: "panel", // 结果列表将在此容器中进行展示。
            autoFitView: true, // 是否自动调整地图视野使绘制的 Marker点都处于视口的可见范围
            renderStyle: "default"
          });
        });
        AMap.event.addListener(
          placeSearch,
          "selectChanged",
          this.selectAddress
        );
      });
    },
    onSearch() {
      if (this.value == "") {
        this.hidePanel = false;
        return false;
      }
      placeSearch.search(this.value);
      this.hidePanel = true;
      var autoOptions = {
        //city 限定城市，默认全国
        city: "深圳"
      };
      var autoComplete = new AMap.Autocomplete(autoOptions);
      autoComplete.search(this.value, function(status, result) {
        // 搜索成功时，result即是对应的匹配数据
        console.log(result);
      });
    },
    onCancel() {},
    selectAddress(e) {
      //这里获得点选地点的经纬度
      let location = e.selected.data.location;
      console.log("lng", location.lng);
      console.log("lat", location.lat);
      // Do Something
      this.hidePanel = false;
    },
    onComplete(data) {
      // document.getElementById('status').innerHTML='定位成功'
      var str = [];
      str.push("定位结果：" + data.position);
      str.push("定位类别：" + data.location_type);
      if (data.accuracy) {
        str.push("精度：" + data.accuracy + " 米");
      } //如为IP精确定位结果则没有精度信息
      str.push("是否经过偏移：" + (data.isConverted ? "是" : "否"));
      console.log(str);
      alert("定位成功" + str);
      // document.getElementById('result').innerHTML = str.join('<br>');
    },
    //解析定位错误信息
    onError(data) {
      console.log("定位失败");
      console.log(data.message);
      alert("定位失败" + data.message);
      // document.getElementById('status').innerHTML='定位失败'
      // document.getElementById('result').innerHTML = '失败原因排查信息:'+data.message;
    }
  },
  destroyed() {
    if (!!this.map) {
      this.map.destroy();
    }
  }
};
</script>

<style lang="scss" scoped>
#Shop {
  margin-top: 27vw;
  width: 100%;
  height: 82%;
  position: fixed;
  padding-bottom: 12vw;
  .Shop_Top {
    width: 100%;
    height: 30vw;
    display: flex;
    img {
      width: 100%;
    }
  }
  #Shop_AMap {
    width: 100%;
    height: 80%;
    .amap-demo {
      height: 100%;
    }
  }
  .dingwei {
    width: 90%;
    height: 10vw;
    background-color: #fff;
    position: fixed;
    top: 60vw;
    left: 5%;
    border-radius: 1vw;
    display: flex;
    align-items: center;
    border-top-left-radius: 5vw;
    border-bottom-left-radius: 5vw;
    .toolbar {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: space-around;
      border-radius: 5vw;
      input {
        width: 70%;
        height: 100%;
      }
      /deep/ .van-search__content--round{
        border-radius: 0;
        border-top-left-radius: 5vw;
        border-bottom-left-radius: 5vw;
      }
      /deep/ .van-search {
        padding: 0;
        width: 100%;
        border-radius: 5vw;
        padding-left: 0.5vw;
      }
      /deep/ .van-search__action{
        color:rgb(44, 186, 230);
      }
    }
  }
}
#panel {
  position: absolute;
  background-color: white;
  max-height: 50%;
  overflow-y: auto;
  top: 44vw;
  right: 5vw;
  width: 89vw;
}
/deep/ .amap-overviewcontrol {
  width: 34vw !important;
  height: 35vw !important;
  bottom: 8vw !important;
}
/deep/ .amap-maptypecontrol {
  top: 43vw;
  right: 5vw;
}
/deep/ .amap-overview-map {
}
/deep/ .amap-geolocation-con {
  bottom: 10vw !important;
}
</style>
