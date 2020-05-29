<template>
	<view>
		<!-- 底部 -->
		<view style="height: 100rpx;" class="fixed-bottom flex align-center border-top bg-white">
			<input type="text" class="flex-1 rounded ml-2 bg-light" v-model="content" style="padding: 5rpx;" value="" placeholder="文明发言" @confirm="submit" />
			<view class="iconfont icon-fabu flex justify-center font-lg animated" hover-class="jello text-main" style="width: 100rpx;" @click="submit"></view>
		</view>
		<!-- 聊天列表 -->

		<scroll-view scroll-y="true" style="position: absolute;left: 0;top: 0;right: 0;bottom: 100rpx;" :scroll-into-view="scrollInto" scroll-with-animation>
			<!-- 左边气泡 -->

			<block v-for="(item,index) in list" :key="index">
							<view :id="'chat_'+index">
								
								<user-chat-list :item="item" :index="index" :preTime="index >0 ? 'list[index-1].create_time':'0'"></user-chat-list>
							</view>
				
			</block>
		</scroll-view>
	</view>
</template>

<script>

	import userChatList from '@/components/user-chat/user-chat-list.vue';
	
	export default {
		components:{
			userChatList
		},
		data() {
			return {
				scrollInto:'',
				content:'',
				scrollH: 500,
				list:[{
					user_id:2,
					avater:'/static/default.jpg',
					username:'zhang',
					data:'你在干嘛',
					type:'text',
					create_time:'1590769150'
				},
			{
				user_id:1,
				avater:'/static/default.jpg',
				username:'zhang',
				data:'你在干嘛',
				type:'text',
				create_time:'1590769150'
			},
			{
				user_id:1,
				avater:'/static/default.jpg',
				username:'zhang',
				data:'你在干嘛',
				type:'text',
				create_time:'1590769150'
			},{
					user_id:2,
					avater:'/static/default.jpg',
					username:'zhang',
					data:'你在干嘛',
					type:'text',
					create_time:'1590769150'
				},
			{
				user_id:1,
				avater:'/static/default.jpg',
				username:'zhang',
				data:'你在干嘛',
				type:'text',
				create_time:'1590769150'
			},{
					user_id:2,
					avater:'/static/default.jpg',
					username:'zhang',
					data:'你在干嘛',
					type:'text',
					create_time:'1590769150'
				},
			{
				user_id:1,
				avater:'/static/default.jpg',
				username:'zhang',
				data:'你在干嘛',
				type:'text',
				create_time:'1590769150'
			},{
					user_id:2,
					avater:'/static/default.jpg',
					username:'zhang',
					data:'你在干嘛',
					type:'text',
					create_time:'1590769150'
				},
			{
				user_id:1,
				avater:'/static/default.jpg',
				username:'zhang',
				data:'你在干嘛',
				type:'text',
				create_time:'1590769150'
			},{
					user_id:2,
					avater:'/static/default.jpg',
					username:'zhang',
					data:'你在干嘛',
					type:'text',
					create_time:'1590769150'
				},
			{
				user_id:1,
				avater:'/static/default.jpg',
				username:'zhang',
				data:'你在干嘛',
				type:'text',
				create_time:'1590769150'
			}]
			}
		},
		computed:{

		},
		onLoad() {
			
		},
		onReady() {
			this.pageToBottom()
		},
		methods: {
			//发送数据
			submit(){
				let obj = {
				user_id:1,
				avater:'/static/default.jpg',
				username:'zhang',
				data:this.content,
				type:'text',
				create_time:(new Date()).getTime()
			}
			if(this.content=== ""){
				return uni.showModal({
					title:'消息不能为空',
					icon:'none'
				});
				
			}
				this.list.push(obj)
				this.content = '',
				this.pageToBottom();
			},
			pageToBottom(){
				let lastIndex = this.list.length-1;
				if(lastIndex < 0){
					return;
				}
				this.scrollInto = 'chat_'+lastIndex
			}
		}
	}
</script>

<style>

</style>
