<template>
	<view>
		<view>
			<topic-header :info="topicInfo"></topic-header>
			<divider></divider>
				<view class="px-2 flex align-center border-bottom  py-2" hover-class="bg-light" v-for="(item,index) in hotTitle" :key='index'>
					<text class="iconfont icon-xihuan text-main mr-2"></text>
					<text class="font text-dark text-ellipsis"> {{item.title}}</text>
				</view>
			<divider></divider>
			<!-- tab切换 -->
			<view class="flex justify-center align-center py-2">
				<block v-for="(item,index) in tabBars" :key="index">
					<view class="flex-1  flex justify-center align-center" :class="tabIndex === index ? 'font-lg font-weight-bold text-main':'font-md'"
					 @click="changeTab(index)">{{item.name}}</view>
				</block>
			</view>
			<template v-if="listData.length>0">
				<block v-for="(item,index) in listData" :key="index">
					<common-list :item="item" :index="index"></common-list>
					<divider></divider>
				</block>
				<!-- 上拉加载 -->
				 <load-more :loadmore="loadtext"></load-more>
			</template>
			<template v-else>
				<no-thing></no-thing>
			</template>
		</view>
	</view>
</template>

<script>
	const demo1 = [{
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
	const demo2 = [{
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
		}
	]
	import topicHeader from '@/components/topic-detail/topic-header.vue';
	import commonList from '@/components/common/common-list.vue'
	import noThing from '@/components/no-thing.vue';
	import loadMore from '@/components/common/load-more.vue';
	export default {
		components: {
			topicHeader,
			commonList,
			noThing,
			loadMore
		},
		data() {
			return {
				loadtext1:'上拉加载更多',
				loadtext2:'上拉加载更多',
				tabBars: [{
						name: "默认"
					},
					{
						name: "最新"
					}
				],
				tabIndex: 0,
				topicInfo: {},
				hotTitle: [{
						title: "Thinkphp实战商城社区学习1"
					},
					{
						title: "Thinkphp实战商城社区学习2"
					}
				],
				list1: demo1,
				list2: demo2
			}
		},
		computed: {
			listData() {
				return this['list' + (this.tabIndex + 1)]
			},
			// 当前上拉加载
			loadtext(){
				if(this.tabIndex ===0){
					return this.loadtext1
				}
				return this.loadtext2
			}
		},
		methods: {
			changeTab(index) {
				this.tabIndex = index;
			},
			loadmore(){
				let index = this.tabIndex
				if(this.loadtext !== "上拉加载更多")return;
				//加载中
				this['loadtext'+(index + 1)] = "加载中"
				//请求数据
				setTimeout(()=>{
					this['list' + (index + 1)] = [...this['list' + (index + 1)],...this['list' + (index + 1)]]
					this['loadtext'+(index + 1)] = "上拉加载更多"
				},2000)
			}
		},
		onLoad(e) {

			this.topicInfo = JSON.parse(e.detail);
		},
		// 触底事件
		onReachBottom(){
			console.log('上拉加载更多');
			this.loadmore();
		}
	}
</script>

<style>

</style>
