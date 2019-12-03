<template>
    <div id="FinishGoods">
        <div class="FinishGoods-title">
            扫尾货
        </div>
        <div class="FinishGoods-Continer">
            <div class="FinishGoods-TopImg">
                <img src="@/assets/img/FinishGoods1.jpg" alt="">
                <img src="@/assets/img/FinishGoods2.jpg" alt="">
            </div>
            <div class="FinishGoods-BottomSP">
               <ul>
                   <li>
                        <img src="@/assets/img/FinishGoods3.jpg" alt="">
                        <p>联想Z6 Pro 8GB+128GB 黑色</p>
                        <p>¥<span>2299</span></p>
                   </li>
                   <li>
                        <img src="@/assets/img/FinishGoods4.jpg" alt="">
                        <p>ThinkPad T490 英特尔酷睿i5 笔记本电脑 20N2A00QCD</p>
                        <p>¥<span>8999</span></p>
                   </li>
                   <li>
                        <img src="@/assets/img/FinishGoods5.jpg" alt="">
                        <p>联想 小新平板 8英寸 8804F WIFI版 香槟金</p>
                        <p>¥<span>1399</span></p>
                   </li>
               </ul>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "FinishGoods"
}
</script>
<style lang="scss" scoped>
    #FinishGoods{
        width: 100%;
        height: auto;
        border-bottom: 2vw solid #eee;
        .FinishGoods-title{
            width: 100%;
            height: 13vw;
            font-size: 4.5vw;
            font-weight: bold;
            display: flex;
            align-items: center;
            padding: 0 4vw;
            box-sizing: border-box;
        }
        .FinishGoods-Continer{
            width: 100%;
            height: 80vw;
            div {
                width: 100%;
                display: flex;
            }
            .FinishGoods-TopImg{
                width: 100%;
                height: 33vw;
                overflow: hidden;
                img:nth-child(1){
                    width: 60%;
                    margin-right: 1vw;
                }
                img:nth-child(2){
                    width: 40%;
                }
            }
            .FinishGoods-BottomSP{
                // margin-top: 1vw;
                ul{
                    width: 100%;
                    display: flex;
                    flex-wrap:nowrap;
                    li{
                        flex: 1;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        font-size: 4vw;
                        border-right: 1px solid #eee;
                        padding: 1vw;
                        box-sizing: border-box;
                        p:nth-child(2){
                            display: -webkit-box;
                            -webkit-box-orient: vertical;
                            -webkit-line-clamp: 1;
                            overflow: hidden;
                            margin-top: 1vw;
                        }
                        p:nth-child(3){
                            color: #f4364c;
                        }
                    }
                }
            }
        }
    }
</style>