<template>
    <div class="goods-list">
        <!-- <h3>商品列表</h3> -->
        <!-- <router-link class="goods-item" v-for="item in goodlist" :key="item.id" :to="'/home/goodsinfo/' + item.id" tag="div">
            <img :src="item.img_url" alt="" >
            <h1 class="title">{{item.title}}</h1>
            <div class="info">
                <p class="price">
                    <span class="now">￥{{ item.sell_price }}</span>
                    <span class="old">￥{{ item.market_price }}</span>
                </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>剩余{{ item.stock_quantity }}件</span>
                </p>
            </div>
        </router-link> -->

       <!-- 网页跳转方式：标签跳转 和 编程式跳转 -->
       <!-- 方式1：使用a标签跳转 -->
       <!-- 方式2：使用windows.location.href，编程式跳转 -->
        <div class="goods-item" v-for="item in goodlist" :key="item.id" @click="goDetail(item.id)">
            <img :src="item.img_url" alt="" >
            <h1 class="title">{{item.title}}</h1>
            <div class="info">
                <p class="price">
                    <span class="now">￥{{ item.sell_price }}</span>
                    <span class="old">￥{{ item.market_price }}</span>
                </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>剩余{{ item.stock_quantity }}件</span>
                </p>
            </div>
        </div>

        <mt-button type="danger" size="large" @click="getMore">加载更多</mt-button>
    </div>
</template>

<script>
export default {
    data(){
        return{
            pageindex:1,
            goodlist:[
                {id: 1, title:"小米手机", add_time:"", abstract:"性价比最高的手机", click: 10, img_url:"http://img5.imgtn.bdimg.com/it/u=1042735891,1584539278&fm=27&gp=0.jpg", sell_price: 2699, market_price: 2799, stock_quantity: 50},
                {id: 2, title:"华为手机", add_time:"", abstract:"我是机皇", click: 9, img_url:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAHsApgMBEQACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAAAQMEBQYCBwj/xABPEAABAwIDAwYICQgGCwAAAAABAAIDBBEFEiEGMbEHE0FRYXEUIjIzcnOBkRUjJDR1obLB0TdCUlNVgpTSFzZDYpPwFkRkZYOSoqOkwuH/xAAaAQEAAgMBAAAAAAAAAAAAAAAAAQQDBQYC/8QALREBAAICAQMCBQQBBQAAAAAAAAECAxEEITFBBRITgaHB8CJRYXGxFDKR0fH/2gAMAwEAAhEDEQA/APcUCXCBUAgEAgEAgEAgEAgEAgEAgEAgEAgEAUGZxepq6PEcOngqZQyfEm08sTjdjmOa7o6CCAbiyDTIIk9bzUhY2CaUjeYwLD3kIGziEoJAw2tPaOb/AJkHXh8lrmgqx7GfzIEOIkb6Kq/5W/zIAYl/slWP+GPxQOQV0c8hjDZY3gXyyMLb9x3FBIkdkY52/KL2QYTC9va+rnrhJg2aGmrJabNDMLnI62ax336gEF1Btpg7yG1EslI8mwFREWXPuTQu6aspqoXp545dL+I4HTuQSEAgEAgEAgEAgQ7kGTxqV0sWBSSWD3YvCSBuBs5BrCggUg8Z19bZfshBPG5Bkdt9usO2Pkp462nnnknY57WxkDQEDp70HWx22FFtfTyz0VPPAInZXNlt1X6Cg0THRv8AIc13ToUDD2/LYz3cQgnVHmJPRPBB5Ts0LNxe3Ti9Wf8AuuCmEJdW7M0tvodCgxO0TKrD6zPBHUwMY0ESwaMBN99tL9qDjD+UHaOhcGtxHnGgHSZmYGw3dig29j5PdoKjaXZyPEauJkc3OvjcGbjlNrole1NZFTkNeHucehrboGRitLYGUywi17zROa0fvEW+tBIhq6efzE8UnoPB4IHboFQCBHaNKDB1j3mpwkZyWHForC+gsP8A6UG8KCtw9+YOJ/SH2Qgsb6IPG+XCkkrsdwiKnYXzCmkc0Zg3c7XfZRMxEblMRtYcjtN4LDiMDo3RyiUCZpdfx8uuo9iR1hEvSaenihN4w4Ei2ryeJUjl/wA8jvrewHZ0/cgl1HmJPQPBB8/4yxr4agGWeN3wvXlroXEG/OnqXi82iOjNgpS8zF1Oyrx6J0UdFjT5pJDljhqGhxceq7tVj+P7YmbR2WJ4cTEe23fxp3imCbYunlnloIaoOADjSzACw08km/R1KpX1fiTOrW1/cT/4x34Oas9I2oqiCtp2k1tDPTEG1pG2uey+9X8OTHmjeO0T81TJFsc6vEx8nvHIic2wsZ66qb7S9kNRiZtUt7XN4FEn4TpdBT47tHs5hVZBQ41PGyacExtkp3PHtIBA9qC1bTU+Rr6cva1wBbzczg0juvZBNgvzYu4ut0neUDqBCARY7kGGxSFlPiGFxRizGYuxrR1ABBuSgqcOs0zNBJAksCe4ILG+iCj2h2ZwnHnxSYpTxSuiBaxz2gkX6BdAYBs9h2BMeMNibG2XxiGAAHt0QXIQMyH5ZD3/AHFBLn0hkPU08EHgtXTxVVXIyo50QMxTEXPMRs4HnHBuvRqVV5mW2PHuvdc4XGtnyagzsjhYk2nqKmtJkMUQbTZ3kuDLkG99L936S1nqPKmcFYjz3XePxrYc14t3js9Kjw+ExZhce2y5K2WY3MS92vbelXjlDFNC6CZ+aGVrmuaSNdO1W+Hl1eLT48rOHcxpO5Dv6hx3N/lc+v7y79zUxqWkxRzvhSJubxSRp7HIJsQ0QeUcsNC6rqZJWNkc6Cma7xADYFz9/Zp0KJmITD03Bw52EYdLnIvSREt6PIClC0g82EDqAQZDaCAMrsLmzE5sYi8W27R1+AQa4oKTC3XEpO/nTwCCzvogq8Wg8ImgDp+bjbq5tjfeLH3hSO8GjdDS82ZRIGu0sD4o6Br3KBYhAy8E1URAvY/V/koJdQLwSD+6eCDwioqBB4bcgF2K1lr+ueqXNjcQ3fot4i94n+PuawmvlhxuHM1+SVjw420B0I7un6lqeRii+CZ/ZuuTWZvXp3ifz/LcQ4g51MzUG46u1c7kw6ivz/yozhj3yq6+rzkXKy4celzDj0vOQ3+oMJ66qc/9ZXfw42e7S4pl+EYrgZs7bHp8lylCZFuQV+L4Tg+ISNbicEMrnCwEg6FJtZtjbDCyKNobGxoa1o3ADQBQH6fzYQOoEKDLbRedwn6ai4PQakoKaibkknb1SngEE8HRAXPWgRB01Bxf5Sz/AD0hBKl80/0Sg8AryOcrG5Wl3wtVkEjUfHP3e9Uub2j5t76Dji2a1p8Cop5oGySTSBjzHcNafcFrI1PR1FL1tMe39z1FjjycsrWtAbZoa2wsFX5PF92rQwXwU3qsomLY/T0sbppX7tco3leuPwrXnWlfk58fFpu8vRuQs35PaVxFiaic2/fK6ZxLR4swnFYHgmzXi4vp5LkFhDuQM1lE2plDywkhtgcwFtVO0aSX+T7FCT1P5sIHUAgyu0XnsJ+mY+D0GpO5BT0+k0/rTwCCYDogLoC6BWlBwfnDO8cQgmTeaf6JQeA1bGOOKOz2ljxSqc1vW3npM3u0VDnTP6Y8Tv8A58fdu/Q8sUzzE+YQqmbPTk3J0C19a/qddGonoZZsxiON4a+rw+Z8c0LiyIX0f1j39PevWT1HDxssY8kdJ7/w0HqPvtaJpbVvzutcZ2fdgVJQiola+SpjzOHNghrmkdd7796x4OT/AKiZtXt4+sfZYxxx+bS2LJX/AG+fP9/m2+5Cvyd0nr5vtldC41qMW+eQ+m3g5BKh3BA8g5f5KB6n82EDqAQZbaMfHYT9MxcHINQdxQU8RtPP608AglA6IBAIOmoOT5+PvHEIJk3mZPRKD55r5JmV9aacF0hxSqaGgA5iah4AsVT5kVmIi3bq2np2Ob0y2r3jTQUWxz5cgxLPCb/GRDKHe21w32LmuR6nOOZrSOv7/nWfm3FObauOPbO/7aaGKGmhbBTxMhjYLNYxtre5aXJlvkvNrzuWDrafdadqnbjC58Ylweigc6MRwPc9/S3MRa3uW74vLpxcXuv31H3n7sGG819816bnS35CRbk6o/XzfbK7BoWpxb55D6Y4FBJh3BA8gSTyUD1N5sIHUAgy20Z+UYSP98xcHoNQdxQUo0qZvWfcEEoHRAt0BdB01ByT8oj7xxCCbN5l/olB4C7CK/GMSxGLDzGMmKVHOOc6xa01Ely3TU2BVHm5sWOa/E87/JbLgZbY65Pb3nXf5vTaappJHiiqKky1UTMpmzNHOAaXNtL216Fzubh4sueKY+seJ3ER08efHb6vcfGrT4k11Ez26omI19JhU9K7PBVE5nSs50NLQLW01vqdyni+lY/decltzTrrXTpHaZ/NpnLkvXURqJ8s3XY3WHaOqa88/K20jaeKIkthsLW11tfq7l6nhY+Rw45Nra3Ouv77ZceWlLfBmNa8tFyFfk6o7fr5vtldY0kdmnxj53D6Y4FSJMPkhA+g5k8lA9S+bQPIAoMptIflOE/TEXByDVHcUFIfnMvp/cEEhp0QLdAt0HTSg5/1mPvHEIJ83mX+ieCDyPY91O3E9pPCGZyK2YxtzZbu8Im6Vp/Vr0r8Obxvv9lzhxebzFZRNtasRjwvDnsdLGwvyvcLn+67r6VRw46Tl1Mfpnx0dDhx3jj3jXWO3f8Av5bVuFYrS1VOKqalfHMP7PxXA9oIUZ+Llx2mldTWfo88f38isRqY/v8AOqZiuNSVwFJSNdGxrQXvOjnb9D2D8F44vCjFX3Xjc/n52ZePxafGt8WN6+/1a/kI/JzReum+2V1Tj2nxfWrj7HN4FBJh8kIHkHMm5A/S+a9qB5AIMntEb1OE/TMX/ug1Z3IKbITPIbfnX+oIHww23FAuU9RQKGO6kDgYepA3kIqIyRpccQgmVRy00p6mHgg+dq+pmp8WxJkVQIc2JVDnEm17VEv4qvmiIvTJNdzDNj1NLVmdbS2bTYfTDERXMZV880hurX5TY69HWFj49MOKJrWs/wAbiNr2TJnz1x290V9u9xEz230+kddq6gxqgj8Ee5jZGRj4xgI3W7VgzYPfGoXsufLfFamO+pnXXt5MVOOULKidzhHEZDeO9hYX3Kxjw4/9LNJj9e+/8MNeVycXLxzfJ+iK6nr3n/v7betchP5OaL1032yrbRtRigLqxtugt+9BJiFmjRA8O4oEc0uG5A7TAtYQetA8gRxsL9SDI42cxwV5/OxeE/U9Brigpqh1S5pZSTshkuDnfFnFra6XHFAlJ8Ixyk1VdDOy1g1tNzZB675j26WQSuef1oFEzutB02Z3X9SBA8unYCeriEEms+ayjrYUHy9tJUxHH8WidIwOZiFULEgf2zz0oMviINTUmSKGGJuUNIbK3xiPzt/SgblhzwQsZDG17M2d/PNJfc6aX0tuQJzRFNkMLRJnvzgmHk23WvbtQfSfIUCOTqjB3ieb7ZQafFXFlRI5ps7K08UEctq5JWytxOpZHcHmWMjt2i5aTr39KCwE7z0uQLzzulx96CXSuzRXve53oHkCHcgwctW/EsZwrCaKJ8r6SvE9XIB4tO1jXaOPQ4kgAb9boN4UGdxKhr5q176TE/Boza0fgzX206ygY+DsY/bo/gWfiiQMOxf9uD+CZ+KHQvwbi/7cH8Ez8UOjoYbjH7d/8Jn4odE7CaSrp6pzq6uNXdtmfEtjDfdvRC3kAcwg6giyDwLFeTmGbFa2WSoqHOkne43jDtS4k69Pep0I39GtL+tn/wAFqnQP6NaT9bP/AITU0BvJrRte0vkqXNvq0Rtbf2poe3bH09FSbP0lNhlL4LTRNLWw3Jym+up1NzrftXkN7UYezE42wufLFk152BxZIL9AcNw01QVrNk6ZzQZK3F5NPzsSm+5yjQdbsfhRHjxVMnrKyZ3FykOf6GbPOFpMHpJPWtz8bqNC+w6jp6CkjpqSCOCFmjI42hrW9wUiSgQ7kFBNRtpcToqym+Lkmn5ucN0ErS0+UOkggEHeoS0BUoQpad7ycknNuuNcodxQJHSytd8ZUc4OrmwOCBzwcdf1IFEHb9SDrme36kA2LK8FA8RcIK2fCo5ZC/KLkkn3oGzg0V9GqdhPgaKw8UIF+Bov0R3oLCipxTQCJu4ElQOpIhI45ukIENLCXZzG0uuDchA7YdSBUAgECHcgg1gGai7KgcCoSnqUObaoFsgLIBAIBAqAQCAQCAQCAQCAQCAQf//Z", sell_price: 3299, market_price: 3399, stock_quantity: 100}, 
                {id: 3, title:"魅族手机", add_time:"", abstract:"我最轻", click: 8, img_url:"http://img2.imgtn.bdimg.com/it/u=4177572583,3975300389&fm=27&gp=0.jpg", sell_price: 2499, market_price: 2599, stock_quantity: 150},
                {id: 4, title:"苹果手机", add_time:"", abstract:"我最贵", click: 7, img_url:"http://img5.imgtn.bdimg.com/it/u=2040931904,502219863&fm=27&gp=0.jpg", sell_price: 6899, market_price: 6999, stock_quantity: 200},
                {id: 5, title:"oppo手机", add_time:"", abstract:"我性价比最低", click: 6, img_url:"http://img3.imgtn.bdimg.com/it/u=1651769625,760629744&fm=27&gp=0.jpg", sell_price: 3399, market_price: 3499, stock_quantity: 300},
            ]
        }
    },
    created() {
        // this.getGoodsList
    },
    methods:{
        getGoodsList(){
            this.$http.get('' + this.pageindex).then(result=>{
                if(result.body.message === 0){
                    this.goodlist = this.goodlist.concat(this.result.body.message)
                }
            })
        },
        getMore(){
            this.pageindex++;
            this.getGoodsList();
        },
        goDetail(id){
            // 区分this.$route 和 this.router 这两个对象
            // 其中：this.$route 是路由【参数对象】，所有路由中的参数，prams，query都属于它
            // 其中：this.$router 是一个路由【导航对象】，用它可以方便的使用JS代码，实现路由的前进、后退、跳转到新地址

            // 使用JS形式进行路由导航
            // 传递参数
            // this.$router.push('/home/goodsinfo/' + id)
            // 传递对象
            // this.$router.push({path:"/home/goodsinfo/" + id})
            // 传递命名的路由
            this.$router.push({name: "goodsinfo", params:{id} })
        }
    }
    
}
</script>

<style lang="scss" scoped>
.goods-list{
    display: flex;
    flex-wrap: wrap;
    padding: 8px;
    justify-content: space-between;
    

    .goods-item{
        width: 49%;
        border: 1px solid #ccc;
        box-shadow: 0 0 8px #ccc;
        margin: 4px 0;
        padding: 2px;

        // 修改成纵向布局，防止某一项较高时，其他展示不正常
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        min-height: 225px;
        
        img{
            width: 100%;
        }
        .title{
            font-size: 14px;
        }
        .info{
            background-color: #eee;
            p{
                margin: 0;
                padding: 5px;
            }
            .price{
                .now{
                    color: red;
                    font-weight: bold;
                    font-size: 16px;
                }
                .old{
                    text-decoration: line-through;
                    font-size: 12px;
                    margin-left: 10px;
                }
            }
            .sell{
                display: flex;
                justify-content: space-between;
                font-size: 13px;
            }
        }
    }
}
</style>
