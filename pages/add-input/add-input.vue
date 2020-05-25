<template>
	<view>
		<!-- 自定义导航 -->
		<uni-nav-bar left-icon="back"  statusBar :border="true"  @clickLeft="back">
			<view class="flex justify-center align-center w-100">
				所有人可见
				<text class="iconfont icon-shezhi"></text>
			</view>
		</uni-nav-bar>
		<!-- 文本域组件 -->
		<textarea v-model="content" class="font-sm px-2 w-100" value="" placeholder="说一句话吧~" />
		
		
		<!-- 多图上传 -->
		<upload-images :show="show" ref="uploadImage" :list="imageList" @change="changeImages" ></upload-images>

		
		<!-- 底部操作条 -->
		<view class="fixed-bottom bg-white flex align-center justify-between" style="85rpx">

					<view class="iconfont icon-caidan footer-btn animated" hover-class="jello"></view>
					<view class="iconfont icon-huati footer-btn animated" hover-class="jello"></view>
					<view class="iconfont icon-tupian footer-btn animated" hover-class="jello" @click="iconClickEvent('uploadImage')"></view>
		
	
					<view class="text-white bg-main ml-auto flex justify-center align-center rounded mr-2 animated" style="width: 140rpx;height: 60rpx;" hover-class="jello">发送</view>
				
		</view>
		
	</view>
</template>

<script>

	import uniNavBar from '@/components/uni-ui/uni-nav-bar/uni-nav-bar.vue';
	import uploadImages from '@/components/common/upload-images.vue';
	export default {
		components:{
			uniNavBar,
			uploadImages
		},
		data() {
			return {
				content:'',
				imageList:[],
				showBack:false
			}
		},
		computed:{
			show(){
				return this.imageList.length>0
			}
			
		},
		onLoad() {
			uni.getStorage({
				key:'add-input',
				success:(res)=>{
					let result = JSON.parse(res.data)
					this.content = result.content
					this.imageList = result.imageList
					console.log(this.imageList);
				}
			})
		},
		methods: {
			iconClickEvent(e){
				switch(e){
					case 'uploadImage':
						this.$refs.uploadImage.chooseImage()
					break;
				}
			
			},
			store(){
				uni.setStorage({
					key:'add-input',
					data:JSON.stringify({
						content:this.content,
						imageList:this.imageList,
					}),
				  success:function() {
						
					}
				})
			},
			changeImages(e){
				this.imageList = e;
			},
			back() {
				if((this.content !== '' || this.imageList.length>0 ) && !this.showBack){
					uni.showModal({
						content: '是否要保存草稿',
						showCancel: true,
						cancelText: '不保存',
						confirmText: '保存',
						success: res => {
							if(res.confirm){
								console.log('保存')
								this.store();
							}else{
							uni.removeStorage({
								key:'add-input'
							});
							}
							uni.navigateBack({delta: 1});
						}
					});
					this.showBack = true;
					return true
				}
				uni.navigateBack({delta: 1});
			}
			
		}
	}
</script>

<style>
.footer-btn{
	width: 86rpx;
	height: 86rpx;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 50rpx;
}
</style>
