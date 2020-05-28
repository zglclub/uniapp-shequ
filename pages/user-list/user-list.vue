<template>
	<view>
		<!-- tab切换 -->
		<!-- tab切换 -->
		<view class="flex justify-center align-center py-2">
			<block v-for="(item,index) in tabBars" :key="index">
				<view class="flex-1  flex justify-center align-center" :class="tabIndex === index ? 'font-lg font-weight-bold text-main':'font-md'"
				 @click="changeTab(index)">{{item.name}}
					<text v-if="item.num>0" class="ml-2 font-small">{{item.num}}</text>
				</view>
			</block>
		</view>

		<swiper :duration="150" :current="tabIndex" @change="onChangeTab" :style="'height:'+scrollH+'px;'">
			<swiper-item v-for="(item,index) in newList" :key="index">
				<scroll-view scroll-y="true" :style="'height:'+scrollH+'px;'" @scrolltolower="loadmore(index)">
					<!-- 文章列表 -->
					<template v-if="item.list.length>0">
						<block v-for="(item2,index2) in item.list" :key="index2">
							<friends :item2="item2"></friends>
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
			avatar: "/static/default.jpg",
			username: "昵称",
			sex: 1,
			age: 24,
			isFollow: true
		},
		{
			avatar: "/static/default.jpg",
			username: "昵称",
			sex: 0,
			age: 24,
			isFollow: false
		}, {
			avatar: "/static/default.jpg",
			username: "昵称",
			sex: 2,
			age: 24,
			isFollow: true
		}
	]
	import commonList from '@/components/common/common-list.vue';
	import loadMore from '@/components/common/load-more.vue';
	
	import friends from '@/components/msg/friends.vue';

	export default {
		components: {
			commonList,
			loadMore,
			friends
		},
		data() {
			return {
				newList: [],
				scrollH: 600,
				tabIndex: 0,
				tabBars: [{
						name: '互关',
						num: 0
					},
					{
						name: '关注',
						num: 5
					},
					{
						name: '粉丝',
						num: 10
					}
				]
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
		onNavigationBarSearchInputClicked() {
			uni.navigateTo({
				url: "../search/search"
			})
		},
		onNavigationBarButtonTap() {
			uni.navigateBack({
				delta: 1
			})
		},
		methods: {
			changeTab(index) {
				this.tabIndex = index
			},
			onChangeTab(e) {
				this.changeTab(e.detail.current)
			},
			loadmore(index) {
				//数据验证
				if (this.newList[index].loadMore !== "上拉加载更多...") {
					return;
				}
				this.newList[index].loadMore = "加载中...";
				setTimeout(() => {
					this.newList[index].list = [...this.newList[index].list, ...this.newList[index].list];
					this.newList[index].loadMore = "上拉加载更多...";
				}, 2000)
			},
			getDate() {
				var arr = []
				for (let i = 0; i < this.tabBars.length; i++) {
					let obj = {
						list: [],
						loadMore: "上拉加载更多..."
					}
					if (i < 2) {
						obj = {
							list: demo,
							loadMore: "上拉加载更多..."
						}
					}
					arr.push(obj)
				}

				this.newList = arr
			}
		}
	}
</script>

<style>

</style>
