<template>
    <div class="cmt-container">
        <h3>发表评论</h3>
        <hr>
        <textarea placeholder="请输入评论内容（最多120字）" id="" cols="20" rows="5" maxlength="120" v-model="msg"></textarea>

        <mt-button type="primary" size="large" @click="postComment">提交评论</mt-button>

        <div class="cmt-list">
            <div class="cmt-item" v-for="(item, i) in commentsList" :key="item.add_time">
                <div class="cmt-title">
                    第{{ i+1 }}楼&nbsp;&nbsp;用户：{{ item.user_name }}&nbsp;&nbsp;发表时间：{{ item.add_time | dateFormat }}
                </div>
                <div class="cmt-body">
                    {{ item.content === undefined ? '此用户很懒，什么也没留下' : item.content }}
                </div>
            </div>
        </div>

        <mt-button type="danger" size="large" plain @click="getMore">加载更多</mt-button>
    </div>
</template>

<script>
export default {
    data(){
        return{
            // 默认展示第一页数据
            pageIndex: 1,
            // 所有的评论数据
            commentsList:[
                {
                    user_name:"zs",
                    add_time:"2018-08-31T07:02:30.000Z",
                    content:"走过路过不要错过"
                },                
                {
                    user_name:"ls",
                    add_time:"2018-08-31T07:02:31.000Z",
                    content:"李四到此一游"
                },                
                {
                    user_name:"ww",
                    add_time:"2018-08-31T07:02:32.000Z",
                    content: undefined
                },                
                {
                    user_name:"mtl",
                    add_time:"2018-08-31T07:02:33.000Z",
                    content:"猥琐浪，别发育"
                },                
                {
                    user_name:"tq",
                    add_time:"2018-08-31T07:02:34.000Z",
                    content:"你瞅啥"
                }
            ],
            // 评论输入的内容
            msg:''
        }
    },
    created() {
        // this.getComments()
    },
    methods:{
        // 获取评论
        getComments(){
            this.$http.get("api/getcomments/" + this.$route.params.id, + "?pageindex=").then(result=>{
                if(result.body,status === 0){
                    // this.commentsList = result.boyd.message
                    // 当加载更多时，不覆盖原来的数据，拼接到后面
                    this.commentsList = this.commentsList.concat(result.body.message)
                }else{
                    alert("获取评论失败！")
                }
            })
        },
        // 加载更多
        getMore(){
            this.pageIndex += 1
            // this.getComments()
        },
        // 发表评论
        // 参数1：请求的URL地址
        // 参数2：提交给服务器的数据对象{ content:this.msg }
        // 参数3：定义提交的时候，表单中数据的格式{ emulateJSON:true }，可以在全局设置
        postComment(){
            // 检验评论是否为空
            if(this.msg.trim().length === 0){
                return alert("评论内容不能为空！");
            }

            var cmt = { 
                user_name: '匿名用户',
                add_time: Date.now(),
                content: this.msg.trim(),
            }
            this.commentsList.unshift(cmt)
            this.msg = ""

            // this.$http.post('api/postcomment/' + this.id, {
            //     content:this.msg.trim()
            // }).then(function(reuslt){
            //     if(result.body.status === 0){
            //         // 成功提交
            //         var cmt = { 
            //             user_name: '匿名用户',
            //             add_time: Date.now(),
            //             content: this.msgt.trim()
            //         }
            //         this.commentsList.unshift(cmt)
            //         this.msg = ""
            //     }else{
            //         // 失败进行提示
            //         return Toast("发表评论失败")
            //     }
            // })
        }
    },
    props:["id"]
}
</script>

<style lang="scss" scoped>
.cmt-container{
    h3{
        font-size: 18px;
        text-align: center;
        color: #226aff;
    }
    textarea{
        font-size: 14px;
        height: 85px;
        margin: 0;
    }
    .cmt-list{
        margin-top: 5px 0;
        .cmt-item{
            font-size: 13px;
            .cmt-title{
                line-height: 30px;
                background-color: #ccc;
            }
            .cmt-body{
                line-height: 35px;
                text-indent: 2em;
            }
        }
    }
}
</style>
