<template>
    <view class="music-head">
        <view class="music-head-icon" v-if="icon">
            <text class="iconfont iconzuojiantou-copy" @click="handleToBack()"></text> |
            <text class="iconfont iconshouye" @click="handleToHome()"></text>
        </view>
        {{title}}
    </view>
</template>

<script>
    export default {
        props: ['title','icon'],
        data() {
            return {

            }
        },
        
        methods:{
            // 返回上一页
            handleToBack(){
                uni.navigateBack()
            },
            
            // 返回首页
            handleToHome(){
                uni.navigateTo({
                    url:'/pages/index/index'
                })
            }
        }
    }
</script>

<style scoped>
    .music-head {
        height: 75px;
        text-align: center;
        line-height: 80px;
        font-size: 16px;
        color: black;
        overflow: hidden;
        position: relative;
    }

    .music-head-icon {
        width: 97px;
        height: 31px;
        background: rgba(0, 0, 0, 0.4);
        border-radius: 15px;
        position: absolute;
        left: 10px;
        top: 25px;
        line-height: 31px;
        display: flex;
        justify-content: space-evenly;
        color: white;
    }

    .music-head-iconBlack {
        color: black;
        background: white;
        border: 1px black solid;
    }
</style>