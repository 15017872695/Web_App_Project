<template>
    <div id="Home">
        <div class="HomeAppTitleShowBox">
            <div class="DelectTop">
                <van-icon name="cross" />
            </div>
            <div>
                <van-button type="primary">主要按钮</van-button>
            </div>
            <div></div>
        </div>
        <footer-Nav-Bar></footer-Nav-Bar>
    </div>
</template>

<script>
// 引入组件
import footerNavBar from '@/components/footerNavBar'
import { Button } from 'vant';
    export default {
        name: "Home",
        data() {
            return {
                
            }
        },
        // 注册组件
        components:{
            footerNavBar,
        }
    }

</script>

<style scoped>
    #Home{
        width:100%;
        height:100%;
    }
    .HomeAppTitleShowBox{
        width:100%;
        height:15vw;
        background:rgba(0,0,0,1);
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 5px 5px;
        box-sizing:border-box;
    }
    .DelectTop{
        width: 7vw;
        height: 4vh;
    }
</style>

