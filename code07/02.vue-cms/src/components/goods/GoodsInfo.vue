<template>
    <div class="goodsinfo-container">
        <!-- <h3>商品详情</h3> -->

        <transition @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter">
            <div class="ball" v-show="ballFlag" ref="ball"></div>
        </transition>

        <div class="mui-card">
			<div class="mui-card-content">
				<div class="mui-card-content-inner">
					<swiper :LunbotuList="LunbotuList" :isfull="false"></swiper>
				</div>
			</div>
		</div>
		<div class="mui-card">
			<div class="mui-card-header">{{ goodsinfo.title }}</div>
			<div class="mui-card-content">
				<div class="mui-card-content-inner">
                    <p class="price">
                        市场价：<del>￥{{ goodsinfo.market_price }}</del>&nbsp;&nbsp;销售价：<span>￥{{ goodsinfo.sell_price }}</span>
                    </p>
                    <p>
                        购买数量：<numbox @getcount="getSelectedCount" :max="goodsinfo.stock_quantity"></numbox>
                    </p>
                    <p>
                        <mt-button type="primary" size="small">立即购买</mt-button>
                        <!-- 按钮属于goodsinfo页面，数字属于numbox组件，需要父子组件传值 -->
                        <mt-button type="danger" size="small" @click="addToShopcar">加入购物车</mt-button>
                    </p>
				</div>
			</div>
		</div>
		<div class="mui-card">
			<div class="mui-card-header">商品参数</div>
			<div class="mui-card-content">
				<div class="mui-card-content-inner">
                    <p>商品货号：{{ goodsinfo.goods_no }}</p>
                    <p>库存情况：{{ goodsinfo.stock_quantity }}件</p>
                    <p>上架时间：{{ goodsinfo.add_time | dateFormat('YYYY-MM-DD') }}</p>
				</div>
			</div>
			<div class="mui-card-footer">
                <mt-button type="primary" size="large" plain @click="getDesc(id)">图文介绍</mt-button>
                <mt-button type="danger" size="large" plain @click="getComm(id)">商品评论</mt-button>
            </div>
		</div>
    </div>
</template>

<script>
import swiper from '../subcomponents/swiper.vue'
import numbox from '../subcomponents/goodesinfo_numbox.vue'

export default {
    data(){
        return{
            id: this.$route.params.id,
            LunbotuList:[
                {url:"http://img5.imgtn.bdimg.com/it/u=1042735891,1584539278&fm=27&gp=0.jpg",img:"http://img5.imgtn.bdimg.com/it/u=1042735891,1584539278&fm=27&gp=0.jpg"},
                {url:"http://img1.imgtn.bdimg.com/it/u=3561270916,1590197137&fm=27&gp=0.jpg",img:"http://img1.imgtn.bdimg.com/it/u=3561270916,1590197137&fm=27&gp=0.jpg"},
                {url:"http://img2.imgtn.bdimg.com/it/u=3847568985,1571806341&fm=26&gp=0.jpg",img:"http://img2.imgtn.bdimg.com/it/u=3847568985,1571806341&fm=26&gp=0.jpg"},
                {url:"http://img0.imgtn.bdimg.com/it/u=2143796090,1015136008&fm=26&gp=0.jpg",img:"http://img0.imgtn.bdimg.com/it/u=2143796090,1015136008&fm=26&gp=0.jpg"}
            ],
            goodsinfo:{
                id:1,
                title:"小米8 探索版 透明",
                add_time:Date.now(),
                goods_no:"Mi 26554923655",
                stock_quantity:20,
                market_price:2699,
                sell_price:2599
            },
            // 控制小球隐藏和出现
            ballFlag: false,
            // 用户添加的商品数量
            selectedCount: 1
        }
    },
    created(){
        // this.getLunbotu()
        // this.getGoodsInfo()
    },
    methods:{
        getLunbotu(){
            this.$http.get('' + this.id).then(result=>{
                if(result.body.status === 0){
                    // 循环轮播图数组每一项，为item添加img属性
                    result.body.message.forEach(item => {
                        item.img = item.src
                    });
                    this.LunbotuList = result.body.message
                }
            })
        },
        getGoodsInfo(){
            this.$http.get('' + this.id).then(result=>{
                if(result.body.status === 0){
                    this.goodsinfo = result.body.message
                }
            })
        },
        getDesc(id){
            this.$router.push({ name:"goodsdesc", params:{id} })
        },
        getComm(id){
            this.$router.push({ name:"goodscomm", params:{id} })
        },
        addToShopcar() {
            this.ballFlag = !this.ballFlag;
            // {id:商品id, count：购买数量, price：商品单价, selected:false/true }
            // 拼接出保存到vuex数据仓库中的对象
            var goodsinfo = { id: this.id, count: this.selectedCount, price: this.goodsinfo.sell_price, selected:true };
            this.$store.commit('addToCar', goodsinfo);
        },
        beforeEnter(el){
            el.style.transform = "translate(0, 0)";
        },
        enter(el, done){
            el.offsetWidth;
            // 小球动画优化：
            // 1、动画不稳定的原因：小球最终位置写死，限制在了某一分辨率下的某一位置
            // 2、当分辨率或者滚动一定距离之后，问题将出现
            // 3、动态计算最终位置，思路：先得到徽标的横纵坐标，再得到小球的横纵坐标，求差值
            // 4、如何获取元素位置 domObject.getBoundingClientRect() 获取距离左边和顶部的距离

            // 获取小球在页面中的距离
            const ballPosition = this.$refs.ball.getBoundingClientRect();
            // 获取徽标位置
            const badgePosition = document.getElementById("badge").getBoundingClientRect();
            const xDist = badgePosition.left - ballPosition.left;
            const yDist = badgePosition.top - ballPosition.top;

            el.style.transform = `translate(${xDist}px, ${yDist}px)`;
            el.style.transition = 'all 0.8s cubic-bezier(.4, -0.3, 1, .68)';
            done()
        },
        afterEnter(el){
            this.ballFlag = !this.ballFlag;
        },
        getSelectedCount(count1){
            // 当子组件把选中的数量传递给父组件时，保存到父组件
            this.selectedCount = count1;
        }
    },
    components: {
        swiper,
        numbox
    },
}
</script>

<style lang="scss" scoped>
.goodsinfo-container{
    background-color: #eee;
    // 顶部有一条白条
    overflow: hidden;

    .now_price{
        color:red;
        font-size: 16px;
        font-weight: bold;
    }

    .mui-card-footer{
        // 两个按钮上下排列
        display: block;
        button{
            margin: 15px 0;
        }
    }

    .ball{
        width: 15px;
        height: 15px;
        border-radius: 50%;
        background-color: red;
        position: absolute;
        z-index: 99;
        top:390px;
        left:148px;        
    }
}
</style>
