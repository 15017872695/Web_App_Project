<template>
    <div id="NewBooking">
        <div class="NewBooking-title">
            新品预约
        </div>
        <div class="NewBooking-continer">
            <ul>
                <li>
                    <div>
                        <span>已预约49977人</span>
                        <img src="@/assets/img/newBooking1.jpg" alt />
                    </div>
                    <span>联想Z6 Pro 5G版 8GB+256GB 深蓝色</span>
                    <div>
                        <span>预约价</span>
                        <span>¥3299.00</span>
                    </div>
                </li>
                <li>
                    <div>
                        <span>已预约49977人</span>
                        <img src="@/assets/img/newBooking2.jpg" alt />
                    </div>
                    <span>联想个人云存储T1 4TB 单盘版(4TB*1）</span>
                    <div>
                        <span>预约价</span>
                        <span>¥1799</span>
                    </div>
                </li>
                <li>
                    <div>
                        <span>已预约49977人</span>
                        <img src="@/assets/img/newBooking3.jpg" alt />
                    </div>
                    <span>联想YOGA内胆包/工牌卡包套装 故宫文创联名版-丹景红</span>
                    <div>
                        <span>预约价</span>
                        <span>¥269</span>
                    </div>
                </li>
                <li>
                    <div>
                        <span>已预约49977人</span>
                        <img src="@/assets/img/newBooking2.jpg" alt />
                    </div>
                    <span>联想个人云存储T1 无盘版</span>
                    <div>
                        <span>预约价</span>
                        <span>¥999</span>
                    </div>
                </li>
                 <li>
                    <div>
                        <span>已预约49977人</span>
                        <img src="@/assets/img/newBooking2.jpg" alt />
                    </div>
                    <span>联想个人云存储T1 4TB 单盘版(4TB*1）</span>
                    <div>
                        <span>预约价</span>
                        <span>¥2899</span>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    name:"NewBooking",
    data(){
        return {

        }
    },

}
</script>
<style lang="scss" scoped>
    #NewBooking{
        width: 100%;
        height: auto;
        border-bottom: 2vw solid #eee;
        .NewBooking-title{
            width: 100%;
            height: 13vw;
            font-size: 4.5vw;
            font-weight: bold;
            display: flex;
            align-items: center;
            padding: 0 4vw;
            box-sizing: border-box;
        }
        .NewBooking-continer {
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
                li {
                    width: 32vw;
                    height: 46vw;
                    margin-right: 3vw;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: space-between;
                    div:nth-child(1){
                        border: 1px solid #ccc;
                        border-radius: 1vw;
                        width: 32vw;
                        height: 32vw;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        position: relative;
                        span{
                            color: #fff;
                            background-color:#f69;
                            border-top-left-radius: 1vw;
                            top: 0;
                            position: absolute;
                            left: 0;
                            padding:0 1vw;
                            box-sizing: border-box;
                            text-align: center;
                            font-size: 3vw;
                        }
                        img {
                            width: 80%;
                            border-radius: 1vw;
                        }
                    }
                    span:nth-child(2) {
                        font-size: 4vw;
                        display: -webkit-box;
                        -webkit-box-orient: vertical;
                        -webkit-line-clamp: 1;
                        overflow: hidden;
                    }
                    div:nth-child(3) {
                        font-size: 3vw;
                        align-items: center;
                        display: flex;
                        -webkit-box-orient: vertical;
                        -webkit-line-clamp: 1;
                        overflow: hidden;
                        span:nth-child(2){
                            color: #f4364c;
                            margin-left: 2vw;
                        }
                    }
                }
            }
            ul::-webkit-scrollbar{
                display: none;
            }
        }
    }
</style>