<template>
    <div id="Home">
        <div class="HomeAppTitleShowBox">

        </div>
        <footer-Nav-Bar></footer-Nav-Bar>
    </div>
</template>

<script>
// 引入组件
import footerNavBar from '@/components/footerNavBar'

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
        height:14vw;
        background:rgba(0,0,0,0.7);
    }
</style>

