<template>
	<view>
		<!-- 热门分类 -->
		<view class="">
			<view class=" flex align-center justify-between px-2">
				<text class="font-md">热门分类</text>
				<view class="text-light-muted">
					<text class="text-secondary" @click="openMore">更多</text>
					<text class="iconfont icon-jinru"></text>
				</view>
			</view>
			<view class="flex align-center py-3 px-2 border-bottom justify-center">
				<view v-for="(item,index) in hotCate" 
				class="bg-light mx-1 px-2 rounded animated" 
				hover-class="jello" :key="index" @click="openDetail(item)">{{item.name}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:['hotCate'],
		data() {
			return {
				
			}
		},
		methods: {
			openMore(){
				this.$emit('openMore')
			},
			openDetail(item){
				this.$emit('itemContent')
			}
		}
	}
</script>

<style>

</style>
