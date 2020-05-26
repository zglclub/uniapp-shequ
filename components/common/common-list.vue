<template>
	<view class="p-2">
		<view>
			<!-- 头像昵称| 关注按钮 -->
			<view class="flex justify-between align-center">
				<view class="flex align-center">
					<view>
						<!-- 头像 -->
						<image class="rounded-circle mr-2" :src="item.userpic" @click="openSpace" style="width: 65rpx;height: 65rpx;" lazy-load></image>
					</view>
					<view>
						<view class="font" style="line-height: 1.5;">{{item.username}}</view>
						<view class="font-small text-light-muted" style="line-height: 1.5;">{{item.newstime}}</view>
					</view>
				</view>
				
				<view class="flex justify-center align-center rounded text-white bg-main animated" v-if="!item.isFollow" @click="follow" style="height:50rpx;width:90rpx;" hover-class="pulse">
					未关注
				</view>
			</view>
		</view>
		<!-- 标题 -->
		<view class="font my-1" @click="openDetail">
			{{item.title}}
		</view>
		<!-- 图片 -->
		<view @click="openDetail">
			<image class="rounded w-100" v-if="item.titlepic" :src="item.titlepic" style="height: 355rpx;margin-top: 6rpx;" lazy-load></image>
		</view>
		<!-- 图标按钮 -->
		<view class="flex justify-center align-center">
			<view class="flex justify-center align-center flex-1 animated faster" 
			hover-class="jello text-main" @click="doSupport('support')" :class="item.support.type === 'support' ? 'support-active':''">
				<text class="iconfont icon-dianzan2 mr-2"></text>
				<text>{{item.support.support_count >0 ? item.support.support_count:"点赞"}}</text>
			</view>
			<view class="flex justify-center align-center flex-1 animated faster" 
			hover-class="jello text-main" @click="doSupport('unsupport')" :class="item.support.type === 'unsupport' ? 'support-active':''">
				<text class="iconfont icon-cai mr-2"></text>
				<text>{{item.support.unsupport_count>0 ? item.support.unsupport_count:"反对"}}</text>
			</view>
			<view class="flex justify-center align-center flex-1 animated faster" hover-class="jello text-main" @click="openDetail()">
				<text class="iconfont icon-pinglun2 mr-2"></text>
				<text>{{item.comment_count>0 ? item.comment_count:"评论"}}</text>
			</view>
			<view class="flex justify-center align-center flex-1 animated faster" hover-class="jello text-main" @click="openDetail()">
				<text class="iconfont icon-fenxiang mr-2"></text>
				<text>{{item.share_num>0 ? item.share_num:"分享"}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			item: Object,
			index: Number
		},
		methods:{
			openSpace:function(){
				console.log("点击头像");
			},
			follow(){
				this.$emit('follow',this.index)
				// console.log(this.item.isFollow);
			},
			openDetail(){
				console.log("进入详情页");
			},
			doSupport(type){
				this.$emit('doSupport',{index:this.index,type:type});
			}
		}
	}
</script>

<style>
.support-active{
	color: #FF4A6A;
}
</style>
