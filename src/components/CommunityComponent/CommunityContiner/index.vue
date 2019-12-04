 <template>
     <div id="CommunityContiner">
         <ul>
             <li v-for="(item,index) in listData" :key="index">
                 <div>
                     <img :src="item.imgUrl" alt="Community Continer">
                 </div>
                 <div>
                     <div>{{item.orderName}}</div>
                     <div>
                         <span>{{item.Name}}</span>
                         <span>
                             <img src="../../../assets/img/chakan.png" alt="">{{item.ck}}
                             <img src="../../../assets/img/xinxi.png" alt="">{{item.xx}}
                         </span>
                     </div>
                 </div>
             </li>
         </ul>
     </div>
 </template>
 <script>
 export default {
     name: "CommunityContiner",
     data() {
         return {
             listData:[
                 {imgUrl:require('../../../assets/img/0.jpg'),orderName:'联想Y9000X首发次顶配 一次不错的体验',Name:'feying1900',ck:518,xx:14},
                 {imgUrl:require('../../../assets/img/1.jpg'),orderName:'【12.6黑FUN礼】小黑家族什么值得买',Name:'Think官方活动',ck:518,xx:14},
                 {imgUrl:require('../../../assets/img/2.jpg'),orderName:'【0元试用】王者荣耀机器人+联想Z6 Pro5G版开放申领！',Name:'联想会员中心助手',ck:518,xx:14},
                 {imgUrl:require('../../../assets/img/3.jpg'),orderName:'数字化转型必修课：掌握顶尖企业架构5大方法论！',Name:'联想商用服务',ck:518,xx:14},
                 {imgUrl:require('../../../assets/img/4.jpg'),orderName:'11.29日直播丨快点，不贵~挑战5G极限价！',Name:'潘大掌柜',ck:518,xx:14},
                 {imgUrl:require('../../../assets/img/5.jpg'),orderName:'小新Pro13的故事，需要你来演绎——招募斜杠青年',Name:'多弗朗超哥',ck:518,xx:14},
             ]
         }
     }
 }
 </script>
 <style lang="scss" scoped>
    #CommunityContiner{
        width: 100%;
        height: auto;
        background-color:#FEFEFE;
        margin-top: 7vw;
        ul{
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            flex-wrap: nowrap;
            justify-content: space-around;
            align-items: center;
            li{
                width: 100%;
                height: auto;
                border-bottom: 1px solid #ccc;
                display:flex;
                flex-direction: row;
                padding: 3vw;
                box-sizing: border-box;
                align-items: center;
                div:nth-child(1){
                    width: 40vw;
                    height: 30vw;
                    display: flex;
                    margin-right: 3vw;
                    img{
                        width: 100%;
                    }
                }
                div:nth-child(2){
                    width: 60vw;
                    height: 30vw;
                    display: flex;
                    flex-direction: column;
                    div{
                        width: 100%;
                        display: flex;
                        flex-direction: row;
                        flex-wrap:nowrap;
                        align-items: center;
                        justify-content: space-between;
                        span{
                            display: flex;
                            align-items: center;
                            font-size: 3vw;
                            color: #ccc;
                            img{
                                width: 20%;
                            }
                        }
                        span:nth-child(2){
                            justify-content: flex-end;
                        }
                    }
                    div:nth-child(1){
                        font-size: 4vw;
                        display: -webkit-box;
                        -webkit-box-orient: vertical;
                        -webkit-line-clamp: 2;
                        overflow: hidden;
                    }
                }
            }
        }
    }
 </style>