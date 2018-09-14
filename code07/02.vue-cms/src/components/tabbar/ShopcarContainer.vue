<template>
    <div class="shopcar-container">
        <!-- <h3> ShopcarContainer </h3> -->
        <div class="goods-list">
            <!-- 商品列表项区域 -->
			<div class="mui-card" v-for="(item, i) in goodslist" :key="item.id">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<mt-switch v-model="$store.getters.getGoodsSelected[item.id]" 
                        @change="selectedChanged(item.id,$store.getters.getGoodsSelected[item.id])"></mt-switch>
                        <img :src="item.thumb_path">
                        <div class="info">
                            <h1>{{ item.title }}</h1>
                            <p>
                                <span class="price">￥{{ item.price }}</span>
                                <!-- 获取购物车中的商品数量：循环localstorage中的数据，拼接成字符串{{ id:, count }} -->
                                <numbox :initcount="$store.getters.getGoodsCount[item.id]" :goodsid="item.id"></numbox>
                                <!-- 这里的i是删除goodlist中的数据使用，id用来删除store中的数据 -->
                                <a href="#" @click.prevent="remove(item.id, i)">删除</a>
                            </p>
                        </div>
					</div>
				</div>
			</div>            
        </div>
        <!-- 商品结算区域 -->
		<div class="mui-card">
			<div class="mui-card-content">
				<div class="mui-card-content-inner compute">
					<div class="left">
                        <p>总计（不含运费）</p>
                        <p>已勾选商品 <span class="red">{{ $store.getters.getGoodsCountAndAmount.count }}</span> 件，总价 ￥<span class="red">{{ $store.getters.getGoodsCountAndAmount.amount }}</span></p>
                    </div>
                    <mt-button type="danger">去结算</mt-button>
				</div>
			</div>
		</div>    
    </div>
</template>

<script>
import numbox from '../subcomponents/shopcar_numbox.vue'
export default {
    data() {
        return{
            goodslist: [
                {count:5, id:1, title:"小米手机",sell_price:2799, thumb_path:"http://img5.imgtn.bdimg.com/it/u=1042735891,1584539278&fm=27&gp=0.jpg",},
                {count:6, id:2, title:"华为手机",sell_price:2599, thumb_path:"http://img1.imgtn.bdimg.com/it/u=3561270916,1590197137&fm=27&gp=0.jpg",},
                {count:7, id:3, title:"魅族手机",sell_price:3399, thumb_path:"http://img2.imgtn.bdimg.com/it/u=3847568985,1571806341&fm=26&gp=0.jpg",},
                {count:8, id:4, title:"苹果手机",sell_price:6999, thumb_path:"http://img0.imgtn.bdimg.com/it/u=2143796090,1015136008&fm=26&gp=0.jpg",}
            ]
        }
    },
    created() {
        // this.getGoodsList()
    },
    methods:{
        getGoodsList(){
            // 先从store中的car中找到所有商品的ID，拼接出一个用逗号分隔的字符串
            var idArr = [];
            this.$store.state.car.forEach(item => idArr.push(item.id));
            // 当购物车没有商品时，不要发送请求
            if(id.length <= 0){
                return;
            }
            this.$http.get('' + idArr.join(",")).then(result=>{
                if(result.body.status === 0){
                    this.goodslist = result.body.message
                }
            })
        },
        remove(id, index){
            // 点击删除，把商品从store中根据传递的id删除,当前组件中的goodslist中，对应的商品用index删除
            this.goodslist.splice(index, 1)
            this.$store.commit("removeFromCar", id);
        },
        selectedChanged(id, val){
            // 每次点击之后，保存selected状态
            this.$store.commit("updateGoodsSelected", {id, selected:val})
        }
    },
    components: {
        numbox
    }
}
</script>

<style lang="scss" scoped>
.shopcar-container{
    background-color: #eee;
    overflow: hidden;
    .goods-list{
        padding: 0;
        .mui-card-content-inner{
            display: flex;
            align-items: center;
        }
        img{
            width: 60px;
            height: 60px;
        }
        h1{
            font-size: 13px;
        }
        .info{
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            .price{
                color: red;
                font-weight: bold;
            }
            p{
                margin-bottom: 0;
            }
        }
    }
    .compute{
        display: flex;
        justify-content: space-between;
        align-items: center;
        .red{
            color: red;
            font-weight: bold;
            font-size: 16px;
        }
    }
}
</style>
