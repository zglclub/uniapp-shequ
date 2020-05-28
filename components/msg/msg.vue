<template>
	<view class="flex align-center p-2 border-bottom border-light-secondary" hover-class="bg-light">
		<image :src="item.avtar" style="width: 80rpx;height: 80rpx;" class="rounded-circle mr-2" mode=""></image>
		<view class="flex flex-column  flex-1">
			<view class="flex justify-between align-center">
				<text class="font-md">{{item.username}}</text>
				<text class="text-secondary font">{{item.update_time | formatTime()}}</text>
			</view>
			<view class="flex align-center justify-between">
				<text class="text-secondary text-ellipsis" style="max-width: 500rpx;">{{item.data}}</text>
				<uni-badge :text="item.noread" type="error"></uni-badge>
			</view>
		</view>
	</view>
</template>

<script>
	import uniBadge from '@/components/uni-ui/uni-badge/uni-badge.vue';
	import $T from '@/common/css/time.js';
	export default {
		components: {
			uniBadge
		},
		props: {
			item: Object
		},
		//过滤器
		filters: {
			formatTime: function(value) {
				return $T.gettime(value);
			}
		}
	}
</script>

<style>
</style>
