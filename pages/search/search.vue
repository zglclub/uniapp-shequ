<template>
	<view>
		<template v-if="searchList.length === 0">
			<!-- 搜索页面 -->
			<view class="px-2 py-1 font-md">搜索历史</view>
			<view class="flex flex-wrap" >
				<view class="border rounded mx-2 my-1 font px-2" hover-class="bg-light" v-for="(item,index) in list" 
				:key="index" @click="clickSearchHistory(item)">{{item}}</view>
			</view>
		</template>
		<template v-else>
			<!-- 搜索列表 -->
			<view>
				<block v-for="(item,index) in searchList" :key="index">
					
					<common-list :item="item" :index="index"></common-list>
					
				</block>
				
			</view>
		</template>
	</view>
	
</template>

<script>
	const demo = [{
									username: "昵称1",
									userpic: "/static/default.jpg",
									newstime: "2020-05-24 上午 11：31",
									isFollow: false,
									title: "这是一个标题",
									titlepic: "/static/demo/banner2.jpg",
									support: {
										type: "support",
										support_count: 1,
										unsupport_count: 5
									},
									comment_count: 4,
									share_num: 2
								},
								{
									username: "昵称2",
									userpic: "/static/default.jpg",
									newstime: "2020-05-24 上午 11：31",
									isFollow: false,
									title: "这是一个标题",
									titlepic: "",
									support: {
										type: "unsupport",
										support_count: 1,
										unsupport_count: 5
									},
									comment_count: 4,
									share_num: 0
								},
								{
									username: "昵称1",
									userpic: "/static/default.jpg",
									newstime: "2020-05-24 上午 11：31",
									isFollow: false,
									title: "这是一个标题",
									titlepic: "/static/demo/banner2.jpg",
									support: {
										type: "",
										support_count: 0,
										unsupport_count: 0
									},
									comment_count: 4,
									share_num: 2
								}
								]
	import commonList from '@/components/common/common-list.vue';
	//import commonList from '/components/common/common-list.vue';
	export default {
		components:{
			commonList
		},
		data() {
			return {
				searchtext:"",
				list:['学习uniapp','thinkphp 开发后台','laravel 入门实战','前端开发','tp6低层源码'],
				searchList:""
			}
		},
		onNavigationBarSearchInputChanged(e) {
			console.log(e.text);
			this.searchContent = e.text
		},
		onNavigationBarButtonTap(e) {
			if(e.index === 0){
				this.searchEvent()
			}
			//可能含有多个图标
			console.log(e.index)
		},
		onBackPress(){
			console.log('返回');
		},
		methods: {
			clickSearchHistory(item){
				this.searchtext = item;
				this.searchEvent()
			},
			searchEvent(){
				uni.hideKeyboard();
				uni.showLoading({
					title:'加载中'
				})
				setTimeout(()=>{
					this.searchList= demo;
					uni.hideLoading();
				},2000)
			}
		}
	}
</script>

<style>
</style>
