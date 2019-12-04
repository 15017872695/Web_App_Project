<template>
    <div id="ConsultContiner">
        <ul>
            <li v-for="(item,index) in dataList" :key="index">
                <h3>{{item.name}}</h3>
                <p>{{item.time}}</p>
                <img :src="item.imgUrl" alt="">
                <div>
                    <span>阅读全文 &nbsp;&nbsp;></span>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name: "ConsultContiner",
    data(){
        return {
            dataList:[
                {name:'感恩35年相伴，“善行者”联想在路上',time:'2019-10-14 10:48:2',imgUrl:require('../../../assets/img/zx0.jpg')},
                {name:'感恩35年相伴，“善行者”联想在路上',time:'2019-10-14 10:48:2',imgUrl:require('../../../assets/img/zx1.jpg')},
                {name:'感恩35年相伴，“善行者”联想在路上',time:'2019-10-14 10:48:2',imgUrl:require('../../../assets/img/zx2.jpg')},
                {name:'感恩35年相伴，“善行者”联想在路上',time:'2019-10-14 10:48:2',imgUrl:require('../../../assets/img/zx3.jpg')},
            ]
        }
    }
}
</script>
<style lang="scss" scoped>
    #ConsultContiner{
        width: 100%;
        height: 100%;
        ul{
            li{
                background-color:#fff;
                display:flex;
                flex-direction:column;
                margin-bottom: 2.5vw;
                h3{
                    font-size: 4.5vw;
                    padding: 2vw;
                    box-sizing: border-box;
                }
                p{
                    font-size: 3vw;
                    padding: 2vw;
                    padding-top: 0;
                    box-sizing: border-box;
                }
                div{
                    width: 100%;
                    height: 12vw;
                    display:flex;
                    justify-content: flex-end;
                    align-items: center;
                    padding: 2vw;
                    box-sizing: border-box;
                    color: #ff7108;
                    font-size: 3.5vw;
                }
            }
        }
    }
</style>