<template>
  <div class="cart">
  	<div class="header">
  		<span>购物车<i>({{getCart.data.length}})</i></span>
  		<a href="javascript:;" @click="handleClick">{{getCart.isType ? '完成' : '管理'}}</a>
  	</div>
  	<div class="content">
  		<v-cartlist></v-cartlist>
  	</div>
  	<div class="footerBar">
  		<span @click="selectAll">
  			<i :class="[getCart.isAll?'icon-yigouxuan':'icon-weigouxuan','iconfont']"></i>
  			全选
  		</span>
  		<div class="m_right" v-show="!getCart.isType">
  			合计:<span><i>￥</i>{{getCart.total}}</span>
  			<a class="btn" href="javascript:;" @click="accounts">结算({{getCart.selectNum}})</a>
  		</div>
  		<div class="delete" v-show="getCart.isType">
  			<a @click="deleteFn" class="delbtn" href="javascript:;">删除</a>
  		</div>
  	</div>
  </div>
</template>

<script>
	import {Toast} from 'mint-ui'
	import { mapGetters } from 'vuex'
	import CartList from './CartList'
  export default {
    name: 'cart',
    data () {
      return {
      	
      }
    },
    computed:{
    	...mapGetters([
    		'getCart',
    		'getUser'
    	])
    },
    components:{
    	'v-cartlist':CartList
    },
    methods:{
			handleClick(){
				this.$store.commit('changeType');
			},
			selectAll(){
				this.$store.dispatch('selectAll');
			},
			deleteFn(){
				this.$store.dispatch('deleteFn');
			},
			accounts(){
				this.$store.dispatch('accounts').then(()=>{
					Toast({
					  message: "购买成功",
					  position: 'middle',
					  duration: 1200,
					  className:'myToast'
					});
				});
			}
    },
    created(){
    	window.scrollTo(0,0);
			setTimeout(()=>{
      		if(this.getUser.code == 0){//如果还未登陆
						this.$router.replace('/login');
					}
      },20);
    }
  }
</script>

<style lang="less" scoped>
  .cart{
  	position: relative;
  	width: 100%;
  	height: 100%;
  	box-sizing: border-box;
  	font-size: .25rem;
  	color: #333333;
  	background: #ECECEB;
  	.header{
  		position:fixed;
  		top: 0;
  		left: 0;
  		width: 100%;
  		height: .8rem;
  		line-height: .8rem;
  		background-image: linear-gradient(to right,#F85338,#F83D1F);
  		z-index: 2;
  		text-align: center;
  		span{
  			font-size: .3rem;
  			color: white;
  			i{
  				font-size: .22rem;
  			}
  		}
  		a{
  			position: absolute;
  			right: 0;
				padding: 0 10px;
				color: white;
				font-size: .22rem;
  		}
  	}
  	.content{
  		position: absolute;
  		width: 100%;
  		box-sizing: border-box;
  		padding-top: .8rem;
	  	padding-bottom: 1.9rem;
	  	overflow: auto;
  		background: #ECECEB;
	  	z-index: 1;
  	}
  	.footerBar{
  		position: fixed;
  		bottom: 1.1rem;
  		left: 0;
  		height: .8rem;
  		width: 100%;
  		background: white;
  		box-sizing: border-box;
  		padding: 0 10px;
  		display: flex;
  		justify-content: space-between;
  		align-items: center;
  		z-index: 999;
  		& > span{
  			color: #909090;
  			margin-right: 10px;
  			i{
  				font-size: .28rem;
						&.icon-yigouxuan{
							color: #333333;
						}
  			}
  		}
  		.m_right{
  			position: relative;
  			color: #333333;
  			span{
  				color: #E53826;
  				i{
  					font-size: .2rem;
  				}
  			}
  			a{
  				display: inline-block;
  				padding: .15rem .22rem;
  				color: white;
  				border-radius: 10px;
  				margin-left: 10px;
  				background-image: linear-gradient(to right,#F85338,#F83D1F);
  			}
  		}
  		.delete{
  			position: relative;
  			color: #333333;
  			a{
  				display: inline-block;
  				padding: .1rem .18rem;
  				color: #F85338;
  				border: 1px solid #F85338;
  				border-radius: 10px;
  			}
  		}
  	}
  }
</style>