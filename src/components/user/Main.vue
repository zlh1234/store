<template>
  <div class="main">
  	<v-userinfo></v-userinfo>
    <div class="topBar">
    	<ul>
    		<li>
    			<p>{{getUser.user.collect}}</p>
    			<p>收藏夹</p>
    		</li>
    		<li>
    			<p>{{getUser.user.concern}}</p>
    			<p>关注店铺</p>
    		</li>
    		<li>
    			<p>{{getUser.user.track}}</p>
    			<p>足迹</p>
    		</li>
    	</ul>	
    </div>
    
    <div class="midBar">
    	<div class="order" @click="toOrder(9999)">
    		<span>我的订单</span>
    		<span>查看更多订单</span>
    	</div>
    	<div class="func">
    		<ul>
    			<li v-for="(v,i) in menu" :key="i"  @click="toOrder(i)">
    				<img :src="v.imgSrc"/>
    				<span>{{v.title}}</span>
    			</li>
    		</ul>
    	</div>
    </div>
    
    <div class="bottomBar">
    	<div class="bibei">
    		<span>必备工具</span>
    		<span>查看更多工具</span>
    	</div>
    	<ul>
    		<li v-for="(v,i) in bibei" :key="i" @click="handleClick(v)">
    			<img :src="v.imgSrc"/>
    			<span>{{v.title}}</span>
    		</li>
    	</ul>
    </div>
    
    <div class="footer">
    	<p class="logout" @click="logout">退出登陆</p>
    	<!--<p class="logout" @click="test">测试按钮</p>-->
    </div>
  </div>
</template>

<script>
	import { MessageBox,Toast } from 'mint-ui';
	import Storage from '../../util/Storage.js'
	import {mapGetters} from 'vuex'
	import UserInfo from './UserInfo.vue'
	const menu = [
		{
			imgSrc:'/static/img/user/about/1.png',
			title:'待付款'
		},
		{
			imgSrc:'/static/img/user/about/2.png',
			title:'待发货'
		},
		{
			imgSrc:'/static/img/user/about/3.png',
			title:'待收货'
		},
		{
			imgSrc:'/static/img/user/about/4.png',
			title:'待评价'
		}
	];
  const bibei = [
  	{
			imgSrc:'/static/img/user/about/5.png',
			title:'主题换肤'
		},
		{
			imgSrc:'/static/img/user/about/6.png',
			title:'领券中心'
		},
		{
			imgSrc:'/static/img/user/about/7.png',
			title:'闲置换钱'
		},
		{
			imgSrc:'/static/img/user/about/8.png',
			title:'客服小蜜'
		},
		{
			imgSrc:'/static/img/user/about/8.png',
			title:'我的评价'
		},
		{
			imgSrc:'/static/img/user/about/7.png',
			title:'每日打卡'
		},
		{
			imgSrc:'/static/img/user/about/6.png',
			title:'分享有赏'
		},
		{
			imgSrc:'/static/img/user/about/5.png',
			title:'安全中心'
		}
  ];
  export default {
    name: 'v-main',
      data () {
        return {
	  			menu:menu,
	  			bibei:bibei
        }
      },
      computed:{
      	...mapGetters([
      		'getUser'
      	])
      },
      components:{
      	'v-userinfo':UserInfo
      },
      methods:{
				logout(){
					//返回Promise 
					MessageBox.confirm('确定退出吗?').then(action => {
					  Storage.del('user');
					  this.$router.push('/');
					  location.reload();
					},err=>{
						console.log('cancel');
					});
				},
				handleClick(v){
					const {title} = v;
					Toast({
					  message: title,
					  position: 'top',
					  duration: 1000,
					  className:'myToast'
					});
				},
				test(){
					this.$store.dispatch('userTest');
				},
				toOrder(i){//路由到我的订单
					this.$router.push({name:'UserOrder',params:{"is":i}});
				}
     },
     created(){
     	
     }
  }
</script>

<style lang="less" scoped>

	/*flex box*/
	.flexBox(){
		ul{
			position: relative;
			width: 100%;
			display: flex;
			flex-wrap: wrap;
			li{
				width: 25%;
				height: 1.2rem;
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
				box-sizing: border-box;
				img{
					width: .4rem;
					height: .4rem;
				}
				span{
					padding: 5px 0;
					font-size: .24rem;
					color: #333;
				}
			}
		}
	}
	
	/*same Two*/
	.sameTwo(){
		position: relative;
		width: 100%;
		height: .7rem;
		line-height: .7rem;
		border-bottom:1px solid #EEEEEE;
		span{
			margin: 0 .2rem;
  		font-size: .26rem;
  		color: #333;
		}
		span:last-child{
			float: right;
			color: #ACACAC;
			font-size: .2rem;
		}
	}
/*样式开始*/
  .main{
  	position: relative;
  	width: 100%;
  	font-size: .32rem;
  	padding-bottom: 1.8rem;
  	.topBar{
  		position: relative;
  		width: 100%;
  		background: white;
  		ul{
  			position: relative;
  			width: 100%;
  			display: flex;
  			li{
  				flex: 1;
  				height: 1rem;
  				display: flex;
  				flex-direction: column;
  				text-align: center;
  				justify-content: center;
  				font-size: .28rem;
  				color: #333;
  				p{
  					margin-top: .05rem;
  				}
  			}
  		}
  	}
  	.midBar{
  		position: relative;
  		top: 10px;
  		width: 100%;
  		background: white;
  		.order{
  			.sameTwo();
  		}
  		.func{
  			position: relative;
  			width: 100%;
  			.flexBox();
  		}
  	}
  	.bottomBar{
  		position: relative;
  		top: 20px;
  		width: 100%;
  		background: white;
  		.bibei{
  			.sameTwo()
  		}
  		.flexBox();
  	}
  	.footer{
  		position: relative;
  		top: 30px;
  		width: 100%;
  		.logout{
  			width: 90%;
  			height: .8rem;
  			line-height: .8rem;
  			text-align: center;
  			background: #FF2C2C;
  			color: white;
  			margin: 10px auto;
  			border-radius: 5px;
  		}
  	}
  }
</style>