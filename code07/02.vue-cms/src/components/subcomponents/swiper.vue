<template>
    <div>
        <mt-swipe :auto="4000">
            <!-- <mt-swipe-item></mt-swipe-item>
            <mt-swipe-item></mt-swipe-item>
            <mt-swipe-item></mt-swipe-item> -->
            
            <!-- 谁使用轮播图组件，谁向其传递这个LunbotuList数组 -->
            <!-- 父组件向子组件传值 -->
            <!-- 在组件中，使用v-for一定要使用key -->
            <mt-swipe-item v-for="item in LunbotuList" :key="item.url">
                <img :src="item.img" alt="" :class="{'full': isfull}">
            </mt-swipe-item>
        </mt-swipe>
    </div>
</template>

<script>
export default {
    props: ["LunbotuList", "isfull"]
}
</script>

<style lang="scss" scoped>
.mint-swipe{
    height: 200px;
    .mint-swipe-item{
        text-align: center;
        // &:nth-child(1){
        //     background-color: red;
        // }
        // &:nth-child(2){
        //     background-color: blue;
        // }
        // &:nth-child(3){
        //     background-color: cyan;
        // }
        img{
            height: 100%;
            // width: 100%;
        }
    }
}

.full{
    // 轮播图宽度，首页需要100%，商品信息页面不需要
    width: 100%;
}
</style>
