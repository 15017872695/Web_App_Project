<template>
    <div id="Shop">
        <div class="Shop_Top">
            <img src="../../../assets/img/ShopTopImg.jpg" alt="">
        </div>
        <div id="Shop_AMap">

        </div>
        <div class="dingwei">
            <div class="toolbar">
               <van-search
                    v-model="value"
                    placeholder="请输入搜索关键词"
                    show-action
                    shape="round"
                    @search="onSearch"
                >
                    <div slot="action" @click="onSearch">搜索</div>
                </van-search>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import { Search } from 'vant';
import MapLoader from '@/assets/AMap/index.js'
    export default {
        name: "Shop",
        data() {
            return {
                map: null,
                thisPosition: {
                    location: '',
                    lng: '',
                    lat: ''
                },
                value:''
            }
        },
        components: {[Search.name]:Search},
        mounted: function () {
            this.init()
        },
        methods:{
            // 获取周围信息
            req_post() {
                const that=this;
                const registerUrl="http://restapi.amap.com/v3/batch?key=7168593a2164a8afa9599b39d46ba18d";
                const newUserInfo={
                    "ops": [
                        {
                        "url": "/v3/place/around?offset=10&page=1&key=7168593a2164a8afa9599b39d46ba18d&location="+that.lng+","+that.lat+"&output=json&radius=100000&types=080000"
                        }
                    ]
                };
                axios.post(registerUrl, newUserInfo, {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    method:'POST'
                })
                .then(function (response) {
                    console.log(response)
                    console.log(response['data'][0]['body']['pois'])
                })
                .catch(function (error) {
                    console.log(error);
                });
            },
            init() {
                let that = this;
                MapLoader().then(AMap => {
                    console.log(AMap);
                    const map = new AMap.Map('Shop_AMap', {
                        center: [116.397428,39.90923],//需求的城市的经度和 纬度
                        resizeEnable: true,//自适应大小
                        zoom: 16,//地图缩放级别
                        viewMode: '3D',  //设置地图模式
                        // lang:'en',  //设置地图文字为英文
                    })
                    AMap.plugin(['AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PlaceSearch', 'AMap.Geolocation'], function () {
                        let getlocation = new AMap.Geolocation({
                            timeout:6000,//设置定位超时时间
                            GeolocationFirst:true,//是否使用高精度定位,默认:true
                            maximumAge:0,//定位结果缓存0毫秒，默认:0
                        })
                        map.addControl(new AMap.ToolBar()) //添加工具条插件
                        map.addControl(new AMap.Scale())
                        map.addControl(getlocation)//把定位插件加入地图实例
                        getlocation.getCurrentPosition()//获取当前位置
                        console.log(getlocation.getCurrentPosition())
                    })
                })
            },
            onSearch(){

            },
            onCancel(){

            }
        },
        destroyed() {
            if(!!this.map){
                this.map.destroy();
            }
        }
    }

</script>

<style lang="scss" scoped>
    #Shop{
        margin-top:27vw;
        width: 100%;
        position:fixed;
        padding-bottom: 12vw;
        .Shop_Top{
            width: 100%;
            height: 30vw;
            display: flex;
            img{
                width: 100%;
            }
        }
        #Shop_AMap{
            width: 100%;
            height: 109vw;
            .amap-demo {
                height: 100%;
            }
        }
        .dingwei{
            width: 90%;
            height: 10vw;
            background-color:#fff;
            position: fixed;
            top: 60vw;
            left: 5%;
            border-radius:1vw;
            display:flex;
            align-items: center;
            .toolbar{
                width: 100%;
                height: 100%;
                display:flex;
                align-items: center;
                justify-content: space-around;
                input{
                    width: 70%;
                    height: 100%;
                }
                /deep/ .van-search{
                    padding: 0;
                    width: 100%;
                }
            }
        }
    }
</style>
