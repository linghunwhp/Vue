<template>
    <div>
        <h1>这是account组件</h1>
        <router-link to="/account/login">login</router-link>
        <router-link to="/account/register">register</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
    
</script>

<style lang="scss" scoped>
/* 普通的style标签只支持普通css，如果想启用scss或less,需要为style设置lang属性 */
/* 组件中定义的样式，style建议都使用scoped标签，设置本身作用域 */ 
body{
    div{
font-style: italic;
    }
} 
</style>
