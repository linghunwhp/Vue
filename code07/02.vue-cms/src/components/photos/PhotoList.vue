<template>
    <div>
        <!-- <h3>图片分享页面</h3> -->
        <!-- 顶部滑动条区域 -->
        <div id="slider" class="mui-slider">
			<div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
				<div class="mui-scroll">
					<a :class="['mui-control-item', item.id == 0 ? 'mui-active' : '']" v-for="item in casts" :key="item.id" 
					@click="getPhotoListByCateId(item.id)">
						{{ item.title }}
					</a>
				</div>
			</div>
        </div>

		<!-- 图片列表区域 -->
		<ul class="photo-list">
			<router-link v-for="item in imgList" :key="item.id" :to="'/home/photoinfo/' + item.id" tag="li">
				<img v-lazy="item.img_url">
				<div class="info">
					<h1 class="info-title">{{ item.title }}</h1>
					<div class="info-body">{{ item.abstract }}</div>
				</div>
			</router-link>
		</ul>
    </div>
</template>

<script>
// 1、导入mui.min.js包
import mui from '../../lib/mui/js/mui.min.js'
// 2、初始化滑动控件
// mui('.mui-scroll-wrapper').scroll({
//     deceleration: 0.0005 //flick减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值是0.0006
// })

export default {
    data(){
        return{
			// 所有的图片分类数组
			casts:[
				{title: "全部", id: 0},
				{title: "家居生活", id: 15},
				{title: "摄影设计", id: 16},
				{title: "明星名人", id: 17},
				{title: "广告摄影", id: 18}
			],
			imgList:[
				{ id: 10, title: "家居生活用品日用百货专业版全屏海报", img_url: "http://img3.imgtn.bdimg.com/it/u=3841471671,3000524800&fm=26&gp=0.jpg", abstract: "简约大气清新雅致家居生活用品日用百货专业版智能版全屏海报图片"},
				{ id: 11, title: "智能家居是大家梦想的家庭生活，只是梦想往往是丰富的", img_url: "http://img5.imgtn.bdimg.com/it/u=1886076676,710976781&fm=26&gp=0.jpg", abstract: "智能家居是大家梦想的家庭生活，只是梦想往往是丰富的"},
				{ id: 12, title: "北欧极简家居,过更轻松舒适生活", img_url: "http://img3.imgtn.bdimg.com/it/u=2701380491,1776145754&fm=26&gp=0.jpg", abstract: "北欧极简家居,过更轻松舒适生活"},							
				{ id: 13, title: "欧式家具", img_url: "http://img2.imgtn.bdimg.com/it/u=3415674189,2732256627&fm=26&gp=0.jpg", abstract: "欧式家具"},
				{ id: 14, title: "家居-家居生活图片-装修图片库-家天下", img_url: "http://img1.imgtn.bdimg.com/it/u=2662842970,1528815723&fm=26&gp=0.jpg", abstract: "家居-家居生活图片-装修图片库-家天下"},
				{ id: 15, title: "智能家居生活体验馆", img_url: "http://img0.imgtn.bdimg.com/it/u=3524102383,531949595&fm=26&gp=0.jpg", abstract: "智能家居生活体验馆"},											
			]
		};
	},
	created() {
		// this.getAllCategory()
		// 默认进入页面，默认请求所有页面
		// this.getPhotoListByCateId(0)
	},
	// 组件中的DOM结构被渲染好并放到页面中，之后会执行这个钩子函数
	// 如果要操作元素，最好在mounted中，英文这时候的DOM元素是最新的
	mounted() {
		// 2、初始化滑动组件，初始化时机很重要
		mui('.mui-scroll-wrapper').scroll({
    		deceleration: 0.0005 //flick减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值是0.0006
		})
	},
    methods:{
		getAllCategory(){
			// 获取所有图片分类
			this.$http.get('').then(result=>{
				if(result.body.status === 0){
					// 手动拼接出一个最完整的图片分类列表
					this.casts = result.body.message
				}else{
					alert('获取所有图片种类失败！')
				}
			})
		},
		getPhotoListByCateId(cateId){
			// 根据分类Id,获取图片列表
			this.$http.get("" + cateId).then(result=>{
				if(result.body.status === 0){
					this.imgList = this.body.message;
				}else{
					alert("获取图片列表失败！");
				}
			})
		}
    }
}
</script>

<style lang="scss" scoped>
*{
	touch-action: pan-y;
}

.photo-list{
	list-style: none;
	margin: 0;
	padding: 10px;
	padding-bottom: 0;
	li{
		background-color: #ccc;
		text-align: center;
		margin-bottom: 10px;
		box-shadow: 0 0 9px #999;
		position: relative;

		img{
			width: 100%;
			vertical-align: middle;
		}
		
		img[lazy="loading"]{
			width: 40px;
			height: 300px;
			margin: auto;
		}

		.info{
			color: white;
			text-align: left;
			position: absolute;
			bottom: 0;
			background-color: rgba(0,0,0,0.4);
			max-height: 84px;
			.info-title{
				font-size: 14px;
			}
			.info-body{
				font-size: 13px;
			}
		}
	}
}



</style>
