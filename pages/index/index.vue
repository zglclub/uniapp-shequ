<template>
	<view>
		<!-- 顶部选项卡 -->
		<view>
			
		</view>
		<!-- 文章列表 -->
<!-- 		<block v-for="(item,index) in list" :key="index">
			<common-list :item="item" :index="index" @follow="follow" @doSupport="doSupport"></common-list>
			<divider></divider>
		</block>
 -->
	</view>
</template>

<script>
	import commonList from '@/components/common/common-list.vue';
	import divider from '@/components/divider.vue';
	export default {
		components: {
			commonList,
			divider
		},
		data() {
			return {
				list: [{
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
			}
		},
		methods: {
			follow(e) {
				this.list[e].isFollow = !this.list[e].isFollow;
				if (this.list[e].isFollow) {
					uni.showToast({
						title: "已取消关注"
					})
				} else {
					uni.showToast({
						title: "关注成功"
					})
				}
				console.log(this.list[e]);

			},
			doSupport(e) {
				let item = this.list[e.index];
				let msg = e.type === "support" ? "点赞" :"反对";
				if (item.support.type === '') {
					item.support.type = e.type;
					item.support[e.type + '_count']++;
				}
				if (item.support.type === 'support' && e.type==='unsupport') {
					item.support.support_count++;
					item.support.unsupport_count--;
				}else if(item.support.type === 'unsupport' && e.type==='support'){
					item.support.support_count--;
					item.support.unsupport_count++;
				}
				item.support.type = e.type;
				uni.showToast({
					title:msg+"成功"
				})
		 }
		}
	}
</script>

<style>

</style>
