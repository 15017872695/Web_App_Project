 <template>
     <div id="CommunityNavBar">
         <ul>
             <li>
                 <img src="@/assets/img/board2x1.png" alt="">
                 <span>版块</span>
             </li>
             <li>
                 <img src="@/assets/img/signIn2x.png" alt="">
                 <span>签到</span>
             </li>
             <li>
                 <img src="@/assets/img/mall2x.png" alt="">
                 <span>积分乐园</span>
             </li>
             <li>
                 <img src="@/assets/img/tongcheng.png" alt="">
                 <span>同城联萌</span>
             </li>
         </ul>
     </div>
 </template>
 <script>
 export default {
     name: "CommunityNavBar",
     data() {
         return {

         }
     }
 }
 </script>
 <style lang="scss" scoped>
    #CommunityNavBar{
        width: 100%;
        height: 30vw;
        background-color:#fff;
        box-shadow: 0 3vw 10vw #ccc;
        ul{
            width: 100%;
            height: 100%;
            display: flex;
            flex-wrap: nowrap;
            justify-content: space-around;
            align-items: center;
            li{
                width: 10vw;
                height: 20vw;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: space-between;
                flex: 1;
                font-size: 3.5vw;
                img{
                    width: 45%;
                    margin-bottom:2vw;
                }
            }
        }
    }
 </style>