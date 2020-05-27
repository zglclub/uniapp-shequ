<template>
	<view>
		<!-- 自定义导航 -->
		<uni-nav-bar :statusBar="true" :border="false" :flexd="true" @clickRight="onOpenRightEvent">
			<view class="flex justify-center align-center w-100">
				<view v-for="(item,index) in tabBars" :key="index" :class="index === tabIndex ? 'font-lg font-weight-bold text-main mx-2':'font-md text-light-muted'"
				 @click="changeTab(index)">{{item.name}}</view>
			</view>
			<text slot="right" class="iconfont icon-fatie_icon"></text>
		</uni-nav-bar>
		<divider></divider>
		<!-- 关注页	 -->
		<!-- current 是获取swiper-item索引 -->
		<swiper class="swiper" :duration="150" :style="'height:'+scrollH+'px;'" :current="tabIndex" @change="onChangeTab">
			<!-- 关注 -->

			<swiper-item>
				<scroll-view scroll-y="true" :style="'height:'+scrollH+'px;'" @scrolltolower="loadmoreEvent()">
					<block v-for="(item2,index2) in newList" :key="index2">
						<common-list :item="item2" :index="index2" @doSupport="doSupport"></common-list>
						<divider></divider>
					</block>
					<load-more :loadmore="loadMore"></load-more>
				</scroll-view>
			</swiper-item>
			<!-- 话题 -->
			<swiper-item>
				<scroll-view scroll-y="true" :style="'height:'+scrollH+'px;'">
					<!-- 热门分类 -->
					<hot-cate :hotCate="hotCate" @openMore="openMore"></hot-cate>
					<!-- 搜索框 -->
					<!-- <uni-search-bar @confirm="" @input="" :radius="100" disable/> -->
					<view class="p-2">
						<view class="bg-light rounded flex justify-center align-center font-smaller text-secondary">
							<text class="iconfont icon-sousuo mr-2">搜索话题</text>
						</view>
					</view>
					<!-- 轮播图 -->
					<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" class="px-2 pb-2">
						<swiper-item class="flex justify-between rounded ">
							<image src="../../static/demo/banner3.jpg" class="w-100" style="height: 300rpx;" mode=""></image>
						</swiper-item>
						<swiper-item class="flex justify-between rounded ">
							<image src="../../static/demo/banner2.jpg" class="w-100" style="height: 300rpx;" mode=""></image>
						</swiper-item>
						<swiper-item class="flex justify-between rounded ">
							<image src="../../static/demo/banner1.jpg" class="w-100" style="height: 300rpx;" mode=""></image>
						</swiper-item>
					</swiper>
					<divider></divider>
					<!-- 最近更新 -->
					<view class="font-md p-2">最近更新</view>
					<block v-for="(item,index) in topicList" :key="index">
						<topic-list :item="item" :index="index"></topic-list>

					</block>

				</scroll-view>
			</swiper-item>
		</swiper>
	</view>
</template>
<script>
	import commonList from '@/components/common/common-list.vue';
	import uniNavBar from '@/components/uni-ui/uni-nav-bar/uni-nav-bar.vue';
	import loadMore from '@/components/common/load-more.vue';
	import hotCate from '@/components/news/hot-cate.vue';
	import uniSearchBar from '@/components/uni-ui/uni-search-bar/uni-search-bar.vue';
	import topicList from '@/components/news/topic-list.vue';

	export default {
		components: {
			uniNavBar,
			commonList,
			loadMore,
			uniSearchBar,
			hotCate,
			topicList
		},
		data() {
			return {
				hotCate: [{
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
				}],
				loadMore: '上拉加载更多...',
				newList: [{
						username: "昵称1",
						userpic: "/static/default.jpg",
						newstime: "2020-05-24 上午 11：31",
						isFollow: true,
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
						isFollow: true,
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
						isFollow: true,
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
				],
				scrollH: 700,
				content: '',
				tabIndex: 0,
				isActive: false,
				tabBars: [{
					name: '关注'
				}, {

					name: '话题'
				}],
				topicList: [{
					cover: "/static/demo/topicpic/1.jpeg",
					title: "话题名称",
					desc: "话题描述",
					today_count: 10,
					news_count: 0
				}, {
					cover: "/static/demo/topicpic/1.jpeg",
					title: "话题名称",
					desc: "话题描述",
					today_count: 10,
					news_count: 0
				}, {
					cover: "/static/demo/topicpic/1.jpeg",
					title: "话题名称",
					desc: "话题描述",
					today_count: 10,
					news_count: 0
				}]
			}
		},
		onLoad() {
			uni.getSystemInfo({
				success: res => {
					this.scrollH = res.windowHeight - res.statusBarHeight - 44;
					console.log(this.scrollH)
				}
			})
		},
		methods: {
			openMore() {
				uni.navigateTo({
					url:"../../pages/topic-nav/topic-nav"
				})
			},
			onOpenRightEvent() {
				uni.navigateTo({
					url: "../add-input/add-input"
				})
			},
			changeTab(e) {
				this.tabIndex = e
			},
			// 监听滑动
			onChangeTab(e) {
				this.changeTab(e.detail.current)
			},
			doSupport(e) {
				let item = this.newList[e.index]
				console.log()
				let msg = e.type === "support" ? "点赞" : "反对";
				if (item.support.type === '') {
					item.support.type = e.type;
					item.support[e.type + '_count']++;
				}
				if (item.support.type === 'support' && e.type === 'unsupport') {
					item.support.support_count--;
					item.support.unsupport_count++;
				} else if (item.support.type === 'unsupport' && e.type === 'support') {
					item.support.support_count++;
					item.support.unsupport_count--;
				}
				item.support.type = e.type;
				uni.showToast({
					title: msg + "成功"
				})
			},
			loadmoreEvent() {
				//数据验证
				if (this.loadMore !== "上拉加载更多...") {
					return;
				}
				this.loadMore = "加载中...";
				setTimeout(() => {
					this.newList = [...this.newList, ...this.newList];
					this.loadMore = "上拉加载更多...";
				}, 2000)
			}
		}
	}
</script>

<style>

</style>
