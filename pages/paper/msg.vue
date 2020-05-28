<template>
	<view>
		<template v-if="msgList.length > 0">
			<!-- 消息列表组件 -->
			<block v-for="(item,index) in msgList" :key="index">
				<msg :item="item"></msg>
			</block>
		</template>
		<template v-else>
			<no-thing></no-thing>
		</template>

		<!-- 顶部弹出层 -->
		<uni-popup ref="showpopup" :type="type">
			<view class="popup-content flex justify-center border-bottom font-md p-2"
			 hover-class="bg-light" @click="popupEvent('friend')">
				<text class="iconfont icon-sousuo mr-2"></text>添加好友
			</view>
			<view class="popup-content popup-content flex justify-center border-bottom font-md p-2" hover-class="bg-light"
			 @click="popupEvent('clear')">
				<text class="iconfont icon-shanchu  mr-2"></text>清除缓存
			</view>
		</uni-popup>

	</view>
</template>

<script>
	const demo = [{
			avtar: "/static/default.jpg",
			username: "张三",
			update_time: "1590686679",
			data: "消息消息消息消息消息消息消息消息消息",
			noread: 10
		},
		{
			avtar: "/static/default.jpg",
			username: "张三",
			update_time: "1590686679",
			data: "消息消息消息消息消息消息消息消息消息",
			noread: 15
		}, {
			avtar: "/static/default.jpg",
			username: "张三",
			update_time: "1590686679",
			data: "消息消息消息消息消息消息消息消息消息",
			noread: 99
		}
	]
	import msg from '@/components/msg/msg.vue';
	import noThing from '@/components/no-thing.vue';
	import uniPopup from '@/components/uni-ui/uni-popup/uni-popup.vue';

	export default {
		components: {
			msg,
			noThing,
			uniPopup
		},
		data() {
			return {
				type: 'top',
				topContent: "顶部弹出层",
				msgList: [{
			avtar: "/static/default.jpg",
			username: "张三",
			update_time: "1590686679",
			data: "消息消息消息消息消息消息消息消息消息",
			noread: 10
		},
		{
			avtar: "/static/default.jpg",
			username: "张三",
			update_time: "1590686679",
			data: "消息消息消息消息消息消息消息消息消息",
			noread: 15
		}]
			}
		},
		onNavigationBarButtonTap(e) {
			switch (e.index) {
				case 0:
					this.$refs['showpopup'].close();
					uni.navigateTo({
						url:"/pages/user-list/user-list"
					})

					break;
				case 1:
					this.$refs['showpopup'].open()
					break;
				default:
					break;
			}
		},
		onPullDownRefresh(e) {
			this.refresh()
		},
		methods: {
			refresh() {
				setTimeout(() => {
					this.msgList = demo
					uni.stopPullDownRefresh();
				}, 200)
			},
			popupEvent(e) {
				switch (e) {
					case "friend":
					uni.navigateTo({
						url:"/pages/user-list/user-list"
					})
						break;
					case "clear":
						
						break;
					default:
						break;
				}
				this.$refs['showpopup'].close()
			}
		}
	}
</script>

<style>
	.popup-content {
		/* #ifndef APP-NVUE */
		display: block;
		/* #endif */
		background-color: #fff;
		padding: 15px;
		font-size: 14px;
	}
</style>
