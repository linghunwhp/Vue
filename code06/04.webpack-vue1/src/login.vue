<template>
    <div>
        <h1>登录组件，通过.vue文件定义出来--{{ msg }}</h1>
    </div>
</template>

<script>
    export default{
        data(){
            // 组件中的data必须是function
            return{
                msg:'123'
            }
        },
        methods:{
            show(){
                console.log('调用login.vue中的show方法')
            }
        }
    }
</script>

<style >
    
</style>
