<template>
    <div>
        <!-- <h3> HomeContainer </h3> -->
        <!-- 轮播图区域 -->
        <!-- <mt-swipe :auto="4000">
            <mt-swipe-item></mt-swipe-item>
            <mt-swipe-item></mt-swipe-item>
            <mt-swipe-item></mt-swipe-item> -->
            <!-- 在组件中，使用v-for一定要使用key -->
            <!-- <mt-swipe-item v-for="item in LunbotuList" :key="item.url"></mt-swipe-item>
            <img :src="item.img" alt=""> -->
        <!-- </mt-swipe> -->

        <swiper :LunbotuList="this.LunbotuList" :isfull="true"></swiper>
        <ul class="mui-table-view mui-grid-view mui-grid-9">
		    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/newsList">
		            <span class="mui-icon mui-icon-chatbubble"></span>
		            <div class="mui-media-body">News</div></router-link></li>
		    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/photolist">
		            <span class="mui-icon mui-icon-image"></span>
		            <div class="mui-media-body">Images</div></router-link></li>
		    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/goodslist">
		            <span class="mui-icon mui-icon-search"></span>
		            <div class="mui-media-body">Shopping</div></router-link></li>
		    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		            <span class="mui-icon mui-icon-chatboxes"></span>
		            <div class="mui-media-body">Feedback</div></a></li>
		    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		            <span class="mui-icon mui-icon-videocam"></span>
		            <div class="mui-media-body">Video</div></a></li>
		    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		            <span class="mui-icon mui-icon-phone"></span>
		            <div class="mui-media-body">Contact</div></a></li>
		</ul> 
    </div>
</template>

<script>
// 导入轮播图组件
import swiper from '../subcomponents/swiper.vue'


// 发送数据请求
export default {
    data() {
        return{
            // 保存获取到的轮播图数据
            LunbotuList: [
                {url:"http://img5.imgtn.bdimg.com/it/u=2382462933,17260208&fm=26&gp=0.jpg", img:"http://img5.imgtn.bdimg.com/it/u=2382462933,17260208&fm=26&gp=0.jpg"},
                {url:"http://img2.imgtn.bdimg.com/it/u=238512583,2866017013&fm=26&gp=0.jpg", img:"http://img2.imgtn.bdimg.com/it/u=238512583,2866017013&fm=26&gp=0.jpg"},
                {url:"http://img1.imgtn.bdimg.com/it/u=3365386826,2128689369&fm=26&gp=0.jpg", img:"http://img1.imgtn.bdimg.com/it/u=3365386826,2128689369&fm=26&gp=0.jpg"},
                {url:"http://img1.imgtn.bdimg.com/it/u=4253425199,1669195788&fm=26&gp=0.jpg", img:"http://img1.imgtn.bdimg.com/it/u=4253425199,1669195788&fm=26&gp=0.jpg"},
            ]
        };
    },
    created(){
        // this.getLunbotu()
    },
    methods:{
        getLunbotu(){
            this.$http.get("地址").then(result =>{
                // 从远程拿到数据
                if(result.body.staus === 0){
                    // 成功的情况
                    this.LunbotuList - result.body.message;
                    Toast("轮播图加载成功");
                } else{
                    Toast("轮播图加载失败");
                }
            });
        }
    },
    components:{
        swiper
    }
}    

</script>

<style lang="scss" scoped>
.mui-grid-view.mui-grid-9{
    background-color: white;
    border: none;
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell{
    border: none;
}

.mui-table-view.mui-grid-view .mui-table-view-cell .mui-media-body{
    height: 25px;
}
</style>
