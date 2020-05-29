<template>

	<view>
		<!-- 时间 -->
		<view class="py-2 flex justify-center align-center font-sm text-light-muted">{{shortTime}}</view>
		<view class="flex align-start px-2 my-2"
		:style="isSelf ? 'flex-direction:row-reverse;':''">
			<image :src="item.avater" style="width: 100rpx; height: 100rpx;" 
			class="rounded-circle" mode=""></image>
			<view class="bg-light p-2 mx-2 rounded " 
			style="max-width: 400rpx; min-width: 100rpx;"> {{item.data}}</view>
		</view>
	</view>
</template>

<script>
	import $T from 'common/css/time.js';
	const uid = 1;
	export default {
		props: {
			item:Object,
			index:Number,
			preTime:String
		},
		computed:{
			
			isSelf(){
				return uid === this.item.user_id;
			},
			shortTime(){
				return $T.getChatTime(this.item.create_time,this.preTime)
				
			}
		},
		methods:{
			
		}
	}
</script>

<style>
</style>
