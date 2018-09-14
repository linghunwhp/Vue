<template>
    <div class="goodscomm-container">
        <!-- <span>商品评论</span> -->
        <cmtbox :id="$route.params.id"></cmtbox>
        <hr>
    </div>
</template>

<script>
import cmtbox from '../subcomponents/comment.vue'

export default {
    components:{
        cmtbox
    }
}
</script>

<style lang="scss" scoped>
</style>
