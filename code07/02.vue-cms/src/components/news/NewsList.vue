<template>
    <div>
        <!-- <h3>新闻资讯列表页面</h3> -->
        <!-- 由于没有数据库API接口，v-for的newsList为测试使用 -->
        <ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media" v-for="item in newsList" :key="item.id">
					<router-link :to="'/home/newsinfo/' + item.id">
						<img class="mui-media-object mui-pull-left" :src="item.img_url">
						<div class="mui-media-body">
							<h1>{{ item.title }}</h1>
							<p class='mui-ellipsis'>
                                <span>发表时间：{{ item.add_time | dateFormat }}</span>
                                <span>点击：{{ item.click }}次</span>
                            </p>
						</div>
					</router-link>
				</li>
			</ul>
    </div>
</template>

<script>
export default {
    data(){
        return{
            // 新闻列表
            newsList:[
                {
                    id:13,
                    title:"房价",
                    add_time:"2018-08-31T14:25:19.000Z",
                    abstract:"",
                    click:10,
                    img_url:"http://f.hiphotos.baidu.com/image/pic/item/e824b899a9014c08bbd92197077b02087bf4f426.jpg",
                },
                {
                    id:14,
                    title:"油价",
                    add_time:"2018-08-31T14:25:19.000Z",
                    abstract:"",
                    click:11,
                    img_url:"http://d.hiphotos.baidu.com/image/h%3D300/sign=a1f5c4ef13178a82d13c79a0c602737f/6c224f4a20a446232a249b419522720e0cf3d722.jpg",
                },
                {
                    id:15,
                    title:"放假",
                    add_time:"2018-08-31T14:25:19.000Z",
                    abstract:"",
                    click:12,
                    img_url:"http://b.hiphotos.baidu.com/image/pic/item/8718367adab44aed17d742c6be1c8701a18bfb73.jpg",
                },       
                {
                    id:16,
                    title:"大盘",
                    add_time:"2018-08-31T14:25:19.000Z",
                    abstract:"",
                    click:13,
                    img_url:"http://d.hiphotos.baidu.com/image/pic/item/37d12f2eb9389b50acbd416a8835e5dde7116e4c.jpg",
                },               
                {
                    id:17,
                    title:"股市",
                    add_time:"2018-08-31T14:25:19.000Z",
                    abstract:"",
                    click:14,
                    img_url:"http://a.hiphotos.baidu.com/image/pic/item/f2deb48f8c5494ee80802d3b20f5e0fe99257e75.jpg",
                }
            ]
        }
    },
    created() {
        // this.getNewsList()
    },
    methods:{
        getNewsList(){
            this.$http.get('').then(result=>{
                if(result.body.status === 0){
                    // 如果获取成功
                    this.newsList= result.body.message;
                }else{
                    Toast('获取新闻列表失败！')
                }
            })
        }
    }
}
</script>

<style lang="scss" scoped>
.mui-table-view{
    li{
        h1{            
            font-size: 14px;
        }    
        .mui-ellipsis{
            font-size: 12px;
            color: #226aff;
            // 主轴两端对齐
            display: flex;
            justify-content: space-between;
        }
    }
}
</style>
