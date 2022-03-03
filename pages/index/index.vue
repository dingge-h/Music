<template>
    <view class="index">
        <musichead title="网易云音乐" :icon="false"></musichead>
        <view class="container">
            <scroll-view scroll-y="true">
                <view class="index-search" @click="handleToSearch()">
                    <text class="iconfont iconsearch"></text>
                    <input type="text" value="" placeholder="搜索歌曲" />
                </view>
                <view class="index-list">
                    <block v-for="(item,index) in topList" :key = "index">
                        <view class="index-list-item">
                            <view class="index-list-img">
                                <image :src="item.coverImgUrl" mode=""></image>
                                <text>{{ item.updateFrequency }}</text>
                            </view>
                            <view class="index-list-text">
                                <block v-for="(musicItem , index) in item.tracks" :key="index">
                                    <view>{{ index + 1 }}.{{musicItem.first}} - {{musicItem.second}}</view>
                                </block>
                            </view>
                        </view>
                    </block>
                </view>
            </scroll-view>
        </view>
    </view>
</template>

<script>
    import '@/common/iconfont.css'
    import musichead from '../../components/musichead.vue'
    import {topList} from '../../common/api.js'
    export default {
        components: {musichead},
        data() {
            return {
                topList:[]
            }
        },
        methods: {
            
        },
        
        onLoad() {
            topList()
            .then(res=>{
                if(res.length){
                	setTimeout(()=>{
                		this.topList = res;
                	},2000);
                }
            })
            .catch(err=>{
                console.log(err)
            })
        }
    }
</script>

<style>
    .index-search {
        display: flex;
        background: #f7f7f7;
        height: 73rpx;
        margin: 70rpx 30rpx 30rpx 30rpx;
        border-radius: 50rpx;
        align-items: center;
    }

    .index-search text {
        margin: 0 27rpx;
    }

    .index-search input {
        font-size: 26rpx;
        flex: 1;
    }

    .index-list {
        margin: 0 30rpx;
    }

    .index-list-item {
        display: flex;
        margin-bottom: 35rpx;
    }

    .index-list-img {
        width: 212rpx;
        height: 212rpx;
        margin-right: 20rpx;
        border-radius: 15rpx;
        overflow: hidden;
        position: relative;
    }

    .index-list-img image {
        width: 100%;
        height: 100%;
    }

    .index-list-img text {
        position: absolute;
        font-size: 22rpx;
        color: white;
        bottom: 15rpx;
        left: 15rpx;
    }

    .index-list-text {
        flex: 1;
        font-size: 24rpx;
        line-height: 68rpx;
    }
</style>