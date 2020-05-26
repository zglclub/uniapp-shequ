<template>
	<view>
		<!-- 顶部选项卡 -->
		<scroll-view scroll-x="true" :scroll-into-view="scrollInto" scroll-with-animation class="scroll-row">
			<view class="scroll-row-item px-3 py-1 font-md " v-for="(item,index) in tablist" :key='index' :id="'tab'+index"
			 :class="tabIndex===index ? 'text-main font-lg font-weight-bold':''" @click="changeTab(index)" style="height: 60rpx;">{{item.name}}</view>
		</scroll-view>
		<divider></divider>
		<!-- 滑块 -->
		<swiper :duration="150" :current="tabIndex" @change="onChangeTab" :style="'height:'+scrollH+'px;'">
			<swiper-item v-for="(item,index) in newList" :key="index">
				<scroll-view scroll-y="true" :style="'height:'+scrollH+'px;'" @scrolltolower="loadmore(index)">
					<!-- 文章列表 -->
					<template v-if="item.list.length>0">
						<block v-for="(item2,index2) in item.list" :key="index2">
							<common-list :item="item2" :index="index2" @follow="follow" @doSupport="doSupport"></common-list>
							<divider></divider>
						</block>
						<!-- 上拉加载 -->
							<load-more :loadmore="item.loadMore"></load-more>
					</template>
					<template v-else>
						<no-thing></no-thing>
					</template>
				</scroll-view>
			</swiper-item>
		</swiper>
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
	import loadMore from '@/components/common/load-more.vue';
	export default {
		components: {
			commonList,
			loadMore
		},
		data() {
			return {
				newList: [],
				tabIndex: 0,
				scrollH: 800,
				scrollInto: "",
				tablist: [{
					name: '关注',
				}, {
					name: '推荐',
				}, {
					name: '体育',
				}, {
					name: '热点',
				}, {
					name: '财经',
				}, {
					name: '娱乐',
				}, {
					name: '军事',
				}, {
					name: '历史',
				}, {
					name: '本地',
				}]
			}
		},
		onLoad() {
			uni.getSystemInfo({
				success: res => {
					this.scrollH = res.windowHeight - uni.upx2px(100);
					// console.log(this.scrollH)
				}
			}),
			this.getDate();
		},
		//监听页面
		onNavigationBarSearchInputClicked() {
			uni.navigateTo({
				url:"/pages/search/search"
			})
		},
		onNavigationBarButtonTap(e) {
			console.log(e);
			if(e.index === 0){
				uni.navigateTo({
					url:'../add-input/add-input',
				})
			}
		},
		methods: {
			loadmore(index){
				//数据验证
				if(this.newList[index].loadMore !=="上拉加载更多..."){
					return;
				}
				this.newList[index].loadMore = "加载中...";
				setTimeout(()=>{
					this.newList[index].list = [...this.newList[index].list,...this.newList[index].list];
					this.newList[index].loadMore = "上拉加载更多...";
				},2000)
			},
			getDate(){
				var arr=[]
				for (let i = 0; i < this.tablist.length; i++) {
					let obj = {
						list:[],
						loadMore:"上拉加载更多..."
					}
					if(i<2){
						obj = {
							list:demo,
							loadMore:"上拉加载更多..."
						}
					}
					arr.push(obj)
				}
				
				this.newList = arr
			},
			follow(e) {
				this.newList[0].list[e].isFollow = !this.newList[0].list[e].isFollow;
				if (!this.newList[0].list[e].isFollow) {
					uni.showToast({
						title: "已取消关注"
					})
				} else {
					uni.showToast({
						title: "关注成功"
					})
				}
				console.log(this.newList[0].list[e]);

			},
			doSupport(e) {
				let item = this.newList[0].list[e.index]
				console.log()
				let msg = e.type === "support" ? "点赞" : "反对";
				if (item.support.type === '') {
					item.support.type = e.type;
					item.support[e.type + '_count']++;
				}
				if (item.support.type === 'support' && e.type === 'unsupport') {
					item.support.support_count++;
					item.support.unsupport_count--;
				} else if (item.support.type === 'unsupport' && e.type === 'support') {
					item.support.support_count--;
					item.support.unsupport_count++;
				}
				item.support.type = e.type;
				uni.showToast({
					title: msg + "成功"
				})
			},
			changeTab(index) {
				if (index === this.tabIndex) {
					return;
				}
				this.tabIndex = index
				this.scrollInto = 'tab' + index;
			},
			// 监听滑动
			onChangeTab(e) {
				this.changeTab(e.detail.current)
			}
		}
	}
</script>

<style>

</style>
