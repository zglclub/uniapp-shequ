<template>
	<view class="flex p-2 align-center border-bottom text-light-muted">
		<image :src="item2.avatar" style="width: 100rpx;height: 100rpx;" class="rounded mr-2" mode=""></image>
		<view class=" flex flex-column flex-1">
			<text class="font-md text-dark">{{item2.username}}</text>
			<view class="flex align-center">
				<uni-badge :text="item2.age" 
				:type="item2.sex===1?'error':'primary'" size="small">
					
					<text v-if="item2.sex > 0" class="font-smaller iconfont  text-white  mr-1 "
					:class="item2.sex===1?'icon-nv':'icon-nan'" style="margin-right: 5rpx;"></text>
				</uni-badge>
			</view>
		</view>
		<view class="uni-icon uni-icon-checkbox-filled" :class="item2.isFollow ?'text-light-muted':'text-main'"></view>
	</view>
</template>

<script>
	import uniBadge from '../uni-ui/uni-badge/uni-badge.vue';
	export default {
		components:{
			uniBadge
		},
		props: {
			item2: Object,
			index:Number
		}
	}
</script>

<style>
</style>
