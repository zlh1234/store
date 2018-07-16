<template>
  <div class="message">
  	<div class="header">
  		<div class="wrap">
  			<div @click="slideTo(0)" class="messageTitle">消息</div><div @click="slideTo(1)" ref="haoyou">好友</div>
  			<p class="line" ref="line"></p>
  		</div>
  	</div>
  	<div v-if="getUser.code" class="content">
  		<swiper class="swiper" :options="swiperOption" ref="mySwiper">
		    <swiper-slide class="swiperItem">
		    	<v-msglist></v-msglist>
		    </swiper-slide>
		    <swiper-slide class="swiperItem">
		    	<p>你好没有好友哦</p>
		    </swiper-slide>
	  	</swiper>
  	</div>
  </div>
</template>

<script>
	import MsgList from './MsgList'
	import {mapGetters} from 'vuex'
  export default {
    name: 'message',
	  data () {
	    return {
	  		swiperOption:{
	  			preventLinksPropagation : false,
	  			resistanceRatio : 0,//边缘时不能拖动
				  on:{
				   	progress: (e)=>{
							this.move(e)
			    	},
			    	transitionStart:(e)=>{
			    		this.transitionStart();
			    	}
				  }
	  		}
	    }
	  },
	  components:{
	  	'v-msglist':MsgList
	  },
	  computed:{
	  	...mapGetters([
	  		'getUser',
	  		'msgList'
	  	]),
	  	swiper:function(){
	  		return this.$refs.mySwiper.swiper
	  	}
	  },
	  methods:{
	  	slideTo(i){
	  		if(this.getUser.code){
	  			this.swiper.slideTo(i);
	  		}
	  	},
			move(e){
				let currentFontSize = this.$refs.haoyou.offsetWidth;
				let line = this.$refs.line;
				line.style.transition = '0s';
				line.style.left = parseInt(currentFontSize)*e+'px';
			},
			transitionStart(){
				let line = this.$refs.line;
				line.style.transition = '0.3s';
			}
	  },
		created(){
			setTimeout(()=>{
				if(this.getUser.code == 0){//如果还未登陆
					this.$router.replace('/login');
				}else{
					if(this.msgList.length==0){//如果已经登陆了但是聊天列表还未获取
						let currentUserName = this.getUser.user.username;
						this.$store.dispatch('getMsgList',currentUserName);
					}
				}
			},20);
		}
  }
</script>

<style lang="less" scoped>
	@fs:.35rem;
	@headerHeight:0.9rem;
  .message{
  	position: relative;
  	height: 100%;
  	width: 100%;
  	font-size: @fs;
  	.header{
  		position: fixed;
  		left: 0;
  		top: 0;
  		width: 100%;
  		height: @headerHeight;
  		border-bottom: 1px solid #CCCCCC;
  		display: flex;
  		justify-content: center;
  		box-sizing: border-box;
  		.wrap{
  			position: relative;
  			left: 0;
  			top: 0;
  			width: 2rem;
  			display: flex;
  			height: @headerHeight;
  			line-height: @headerHeight;
  			div{
  				position: relative;
  				display: block;
  				height: 100%;
  				width: 1.5rem;
  				text-align: center;
  				z-index: 2;
  			}
  			.line{
  				position: absolute;
  				left: 0;
  				bottom: .1375rem;
  				width: 1rem;
  				height: 2px;
  				background: #FA4013;
  				z-index: 1;
  			}
  		}
  	}
  	.content{
  		position: absolute;
  		top: .9rem;
  		bottom: 1.1rem;
  		left: 0;
  		right: 0;
  		.swiper{
  			position: relative;
  			width: 100%;
  			min-height: 100%;
  			height: 100%;
  			.swiperItem{
  				position: relative;
  				width: 100%;
  				min-height: 100%;
  				height: 100%;
  				overflow: auto;
  			}
  		}
  	}
  }
</style>