<template>
    <div id="Search">
        <i class="iconfont iconmanage"></i>
        <van-search placeholder="请输入搜索关键词" v-model="value" disabled/>
        <i class="iconfont iconmessage"></i>
    </div>
</template>
<script>
import { Search } from 'vant';
export default {
    name: "Search",
    data(){
        return{
            value:''
        }
    },
    components: {
        [Search.name]: Search
    }
}
</script>
<style lang="scss" scoped>
    #Search{
        width: 100%;
        height: 6vh;
        border-bottom: 1px solid #eee;
        display:flex;
        justify-content: space-around;
        align-items:center;
        padding: 0 2vw;
        box-sizing: border-box;
        padding:3.5vh 3vw;
        box-sizing: border-box;
        i{
            font-size:8vw;
            color: #888;
        }
        /deep/ .van-search{
            width: 80vw;
            height:5vh;
            padding: 0px 12px;
        }
        /deep/ .van-search__content{
            border-radius: 25px;
            height:100%;
            /deep/ .van-cell div{
                display: flex;
                align-items: center;
            }
        }
    }
</style>