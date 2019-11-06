<template>
    <div id="footerNavBar">
        <ul>
            <template v-for="(item,index) in NavBarData">
                <li :style="activeIndex==index ? 'color:#F93722;' : ''" @click="goRoute(index,item.path)">
                    <i :class="item.icon"></i>
                    <span>{{item.title}}</span>
                </li>
            </template>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "footerNavBar",
        data() {
            return {
                NavBarData:[
                    {name:'Home',path:'/Home',title:'首页',icon:'iconfont iconshouye'},
                    {name:'Classify',path:'/Classify',title:'分类',icon:'iconfont iconfen_lei'},
                    {name:'ShoppingCath',path:'/ShoppingCath',title:'购物车',icon:'iconfont icongouwuche'},
                    {name:'My',path:'/My',title:'我的',icon:'iconfont iconwode'},
                ],
                activeIndex:0
            }
        },
        created() {
            
        },
        methods: {
            goRoute(index,path){
                console.log(index)
                console.log(path)
                if(path==this.$route.path){
                    this.activeIndex = index;
                }
                this.$router.push(path)
            }
        }
    }
</script>

<style scoped>
    #footerNavBar{
        width:100%;
        height:12vw;
        font-size:3vw;
        position: fixed;
        bottom: 0;
        z-index: 100;
        background:#fff;
        box-shadow: 0 0 3px #eee;
    }
    #footerNavBar>ul{
        width:100%;
        height:100%;
        display:flex;
        align-items:center;
        justify-content: space-around;
    }
    #footerNavBar>ul>li{
        flex:1;
        height:100%;
        display:flex;
        align-items:center;
        justify-content:center;
        flex-direction: column;
    }
</style>
