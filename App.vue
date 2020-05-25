<script>
	export default {
		onLaunch: function() {
			console.log('App Launch 1')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	@import "./common/css/uni.css";
	/*每个特效公共css */
	@import "./common/css/animate.css";
	/*每个页面封装公共css */
	@import "./common/css/free.css";
	/*每个图标封装公共css */
	@import "./common/css/icon.css";
	/*全局页面公共css */
	@import "./common/css/common.css";
	
</style>
