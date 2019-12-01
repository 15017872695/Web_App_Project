<template>
    <div id="ShoppingMall">
        <Search></Search>
        <md-button  type="primary" plain>商城</md-button>
    </div>
</template>

<script>
import { Button } from 'mand-mobile'
import Search from '@/components/Search'
    export default { 
        name: "ShoppingMall",
        data() {
            return {
                value:'联想钜惠不停'
            }
        },
        components: {
            [Button.name]: Button,
            Search
        },
    }

</script>

<style scoped lang="scss">
    #ShoppingMall{
        display: flex;
        flex-direction: column;
    }
</style>
