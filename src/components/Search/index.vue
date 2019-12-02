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
    props:{
        searchVal:{
            type: String,
            default:""
        }
        
    },
    components: {
        [Search.name]: Search
    },
    created() {
        this.value = this.searchVal;
    }
}
</script>
<style lang="scss" scoped>
    #Search{
        width: 100%;
        height: auto;
        border-bottom: 1px solid #eee;
        display:flex;
        justify-content: space-around;
        align-items:center;
        padding: 0 2vw;
        box-sizing: border-box;
        padding:0 3vw;
        box-sizing: border-box;
        i{
            font-size:8vw;
            color: #888;
        }
        /deep/ .van-search{
            width: 80vw;
            height:9vw;
            padding: 0px 12px;
        }
        /deep/ .van-search__content{
            border-radius: 25px;
            height:100%;
            font-size:6vw;
            /deep/ .van-cell div{
                display: flex;
                align-items: center;
                font-size:3.5vw;
            }
            /deep/ .van-icon{
                font-size:4vw;
            }
        }
    }
</style>