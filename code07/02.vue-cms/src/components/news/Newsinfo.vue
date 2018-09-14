<template>
    <div class="newsinfo-container">
        <!-- 大标题 -->
        <h3 class="title">{{ newsinfo.title }}</h3>
        <!-- 子标题 -->
        <p class="subtitle">
            <span>发布时间：{{ newsinfo.add_time | dateFormat('YYYY-MM-DD') }}</span>
            <span>点击：{{ newsinfo.click }}次</span>
        </p>
        <hr>
        <!-- 内容部分 -->
        <div class="content" v-html="newsinfo.content"></div>

        <!-- 评论区域子组件 -->
        <!-- 父组件向子组件传值 -->
        <comment-box :id="this.id"></comment-box>
    </div>
</template>

<script>
// 导入评论子组件
import comment from "../subcomponents/comment.vue"


export default{
    data(){
        return{
            // 将URL地址传递过来的id挂载到data上，方便调用
            id: this.$route.params.id,
            newsinfo:{
                    id:13,
                    title:"房价",
                    click:10,
                    add_time:"2018-08-31T14:25:19.000Z",
                    content:"这里是从服务器返回的html页面"
                }
        }
    },
    created() {
        // this.getNewsInfo();
    },
    methods:{
        getNewsInfo(){
            this.$http.get('').then(result=>{
                if(result.body.status === 0){
                    this.newsinfo = this.body.message[0];
                }else{
                    Toast("获取新闻失败")
                }
            })
        }
    },
    components: {
        "comment-box":comment,
    },
}
</script>

<style lang="scss">
.newsinfo-container{
    padding: 0 4px;
    .title{
        font-size: 16px;
        text-align: center;
        margin: 15px 0;
        color: red;
    }
    .subtitle{
        font-size: 13px;
        color: #226aff;
        display: flex;
        justify-content: space-between;
    }
    .contnet{
        img{
            width: 100%
        }
    }
}
</style>
