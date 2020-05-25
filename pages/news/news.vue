<template>
	<view>
		<!-- 自定义导航 -->
	<uni-nav-bar right-text="菜单" statusBar>
		
		<view class="flex justify-center align-center w-100">
			<view>关注</view>
			<view>话题</view>
		</view>
	</uni-nav-bar>
	</view>
</template>

<script>
	import uniNavBar from '@/components/uni-ui/uni-nav-bar/uni-nav-bar.vue';
	
	export default {
		components:{
			uniNavBar
		},
		data() {
			return {
				content:'',
				imageList:[],
				showBack:false
			}
		}
	}
</script>

<style>

</style>
