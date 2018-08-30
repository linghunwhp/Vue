<template>
    <div>
        <h1>这是App组件</h1>
        <!-- 当引用所有组件的时候，直接能用css,是全局注册 -->
        <mt-button type="default" @click="show">default</mt-button>
        <router-link to="/account">Account</router-link>
        <router-link to="/goodlist">Goodlist</router-link>

        <mybtn>按需导入的button</mybtn>
        
        <!-- 使用MUI导入的组件 -->
        <button type="button" class="mui-btn mui-btn-royal">
		紫色
		</button>
        <router-view></router-view>
    </div>
</template>

<script>
// 导入toast.js组件
import {Toast} from "mint-ui"

export default{
    data(){
        return{
            toastInstance: null
        };
    },
    created(){
        this.getList()
    },
    methods:{
        getList(){
            // 模拟获取列表的AJAX方法，获取数据之前，立即弹出Toast提示客户，真正加载数据
            this.show();
            setTimeout(()=>{
                // 模拟三秒延迟，自动关闭
                this.toastInstance.close();  
            },3000)
        },
        show(){
            this.toastInstance = Toast({
                message:'提示',
                // duration:1000,
                position:'top',
                iconClass:"glyphicon glyphicon-heart", // 使用bootstrap和mint-ui联合设置图标
                className:'mytoast' //自定义类            
            })
        }
    }
}
</script>

<style>

</style>
