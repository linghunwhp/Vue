<template>
    <div>
        <!-- <h3> HomeContainer </h3> -->
        <!-- 轮播图区域 -->
        <mt-swipe :auto="4000">
            <mt-swipe-item></mt-swipe-item>
            <mt-swipe-item></mt-swipe-item>
            <mt-swipe-item></mt-swipe-item>
            <!-- 在组件中，使用v-for一定要使用key -->
            <!-- <mt-swipe-item v-for="item in LunbotuList" :key="item.url"></mt-swipe-item>
            <img :src="item.img" alt=""> -->
        </mt-swipe>

        <ul class="mui-table-view mui-grid-view mui-grid-9">
		    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		            <span class="mui-icon mui-icon-home"></span>
		            <div class="mui-media-body">Home</div></a></li>
		    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		            <span class="mui-icon mui-icon-email"><span class="mui-badge">5</span></span>
		            <div class="mui-media-body">Email</div></a></li>
		    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		            <span class="mui-icon mui-icon-chatbubble"></span>
		            <div class="mui-media-body">Chat</div></a></li>
		    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		            <span class="mui-icon mui-icon-location"></span>
		            <div class="mui-media-body">location</div></a></li>
		    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		            <span class="mui-icon mui-icon-search"></span>
		            <div class="mui-media-body">Search</div></a></li>
		    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		            <span class="mui-icon mui-icon-phone"></span>
		            <div class="mui-media-body">Phone</div></a></li>
		</ul> 
    </div>
</template>

<script>
// 发送数据请求
export default{
    data(){
        return{
            // 保存获取到的轮播图数据
            LunbotuList:[]
        }
    },
    created(){
        this.getLunbotu()
    },
    methods:{
        // getLunbotu(){
        //     this.$http.get("地址").then(result =>{
        //         // 从远程拿到数据
        //         if(result.body.staus === 0){
        //             // 成功的情况
        //             this.LunbotuList - result.body.message;
        //             Toast("轮播图加载成功");
        //         } else{
        //             Toast("轮播图加载失败");
        //         }
        //     });
        // }
    }
}    

</script>

<style lang="scss" scoped>
.mint-swipe{
    height: 200px;
    .mint-swipe-item{
        &:nth-child(1){
            background-color: red;
        }
        &:nth-child(2){
            background-color: blue;
        }
        &:nth-child(3){
            background-color: cyan;
        }
        img{
            height: 100%;
            width: 100%;
        }
    }
}
</style>
