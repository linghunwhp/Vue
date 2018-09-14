<template>
    <!-- 异步获取max值，不知道什么时刻得到max数值 -->
    <!-- 使用watch属性监听父组件，不管watch触发几次，最后一次肯定是合法的max数值 -->
    <div class="mui-numbox" data-numbox-min='1' :data-numbox-max='max'>
		<button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
		<input id="test" class="mui-input-numbox" type="number" value="1" @change="countChanged" ref="numbox"/>
		<button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
	</div>
</template>

<script>
import mui from '../../lib/mui/js/mui.min.js'

export default {
    mounted() {
        // 初始化数字选择框
        mui(".mui-numbox").numbox();
    },
    methods:{
        countChanged(){
            // 当文本框数据发生变化的时候数据改变
            this.$emit('getcount', parseInt(this.$refs.numbox.value));
        }
    },
    props:["max"],
    watch:{
        // 监听max属性变化
        max: function(newVal, oldVal) {
            mui(".mui-numbox").numbox().setOption("max", newval);
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
