<template>
    <div class="photoinfo-container">
        <!-- <h3>图片详情标签</h3> -->
        <h3>{{ photoinfo.title }}</h3>
        <p class="subtitle">
            <span>发表时间：{{ photoinfo.add_time }}</span>
            <span>点击：{{ photoinfo.click }}次</span>
        </p>

        <hr>
        <!-- 缩略图区域 -->
        <div class="thumbs">
            <!-- <img class="preview-img" v-for="(item, index) in thumbs" :src="item.src" height="100" @click="$preview.open(index, thumbs)" :key="item.src"> -->
            <vue-preview :slides="thumbs"></vue-preview>
        </div>
        

        <!-- 图片内容区域 -->
        <div class="content" v-html="photoinfo.content">

        </div>

        <!-- 放置评论子组件 -->
        <cmt-box :id="id"></cmt-box>
    </div>
</template>

<script>
// 1、导入评论子组件
import comment from '../../components/subcomponents/comment.vue'
// 2、注册评论子组件

export default {
    data(){
        return{
            id: this.$route.params.id,
            photoinfo:{
                id: 10,
                title: "家居生活用品日用百货专业版全屏海报",
                click: 3,
                add_time: Date.now(),
                content:"家居生活用品日用百货专业版全屏海报"
            },
            // 缩略图数组
            thumbs:[
                {
                    src: 'https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_b.jpg',
                    msrc: 'https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_m.jpg',
                    alt: 'picture1',
                    title: 'Image Caption 1',
                    w: 600,
                    h: 400
                },
                {
                    src: 'https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_b.jpg',
                    msrc: 'https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_m.jpg',
                    alt: 'picture2',
                    title: 'Image Caption 2',
                    w: 600,
                    h: 400
                },
                {
                    src: 'https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_b.jpg',
                    msrc: 'https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_m.jpg',
                    alt: 'picture3',
                    title: 'Image Caption 3',
                    w: 600,
                    h: 400
                },
                {
                    src: 'https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_b.jpg',
                    msrc: 'https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_m.jpg',
                    alt: 'picture4',
                    title: 'Image Caption 4',
                    w: 600,
                    h: 400
                },

            ]
        }
    },
    created() {
        // this.getPhotoInfo()
        // this.getThumbs()
    },
    methods:{
        // 获取图片详情
        getPhotoInfo(){
            this.$http.get('' + this.id).then(result=>{
                if(result.body.status === 0){
                    this.photoinfo = this.body.message
                }else{
                    alert("获取图片详情失败！");
                }
            })
        },
        // 获取缩略图
        getThumbs(){
            this.$http.get('' + this.id).then(result=>{
                if(result.body.status === 0){
                    this.body.message.forEach(item => {
                        // 循环每个图片数据，补全宽和高再将完整数据保存到thumbs数组中
                        item.w = 600;
                        item.h = 400;
                    });
                    this.thumbs = this.body.message
                }else{
                    alert("获取图片缩略图失败！");
                }
            })
        }
    },
    components: {
        'cmt-box': comment,
    },
}
</script>

<style lang="scss" scoped>
.photoinfo-container{
    padding: 3px;
    h3{
        color: #26A2FF;
        font-size: 15px;
        text-align: center;
        margin: 15px 0;
    }
    .subtitle{
        display: flex;
        justify-content: space-between;
    }
    .content{
        font-size: 13px;
        line-height: 30px;
    }
    .thumbs{
        img{
            margin: 10px;
            box-shadow: 0 0 8px #999;
        }
    }
}
</style>
