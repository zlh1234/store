<template>
  <div class="addcart">
    <div class="icon">
    	<span>
    		<i class="iconfont icon-bukexuanzuo"></i>
    		<i>店铺</i>
    	</span>
    	<span>
    		<i class="iconfont icon-kefu"></i>
    		<i>客服</i>
    	</span>
    	<span @click="collectFn">
    		<i :class="[collect ? 'icon-favoritesfilling' : 'icon-favorite','iconfont']"></i>
    		<i>收藏</i>
    	</span>
    </div>
    
    <div class="btn">
    	<div class="btnBox">
    		<a href="javascript:;" @click="addCart">加入购物车</a>
    		<a href="javascript:;" @click="purchase">立即购买</a>
    	</div>
    </div>
  </div>
</template>

<script>
	import {mapGetters} from 'vuex'
	import {Toast} from 'mint-ui'
  export default {
    name: 'addcart',
    props:['goodData'],
    data () {
      return {
	  		collect:false
      }
    },
    computed:{
    	...mapGetters([
	  		'getUser'
	  	])
    },
    methods:{
			collectFn(){
				this.collect = !this.collect;
			},
			addCart(){
				if(this.getUser.code == 0){//如果还未登陆
					this.$router.push('/login');
				}else{
					let arr = {
						"good_id":this.goodData.good_id,
						"shop_id":this.goodData.shop_id,
						"good_title":this.goodData.good_title,
						"good_src":this.goodData.good_src,
						"good_name":this.goodData.good_name,
						"good_price":this.goodData.good_price,
						"good_freight":this.goodData.good_freight,
						"good_address":this.goodData.good_address,
						"cart_num":1,
						"isSelect":false
					}
					this.$store.dispatch('addCart',arr).then(()=>{
						Toast({
						  message: "操作成功",
						  position: 'middle',
						  duration: 1200,
						  className:'myToast'
						});
					});
				}
			},
			purchase(){
				if(this.getUser.code == 0){//如果还未登陆
					this.$router.push('/login');
				}else{
					let arr = [{
						"good_id":this.goodData.good_id,
						"good_title":this.goodData.good_title,
						"good_src":this.goodData.good_src,
						"good_name":this.goodData.good_name,
						"good_price":this.goodData.good_price,
						"good_freight":this.goodData.good_freight,
	          "good_num":1
					}];
					this.$store.dispatch('purchase',arr).then(()=>{
						Toast({
						  message: "购买成功",
						  position: 'middle',
						  duration: 1200,
						  className:'myToast'
						});
					});
				}
			}
    }
  }
</script>

<style lang="less" scoped>
  .addcart{
  	position: fixed;
  	bottom: 0;
  	left: 0;
  	height: 1rem;
  	width: 100%;
  	background: white;
  	border-top: 1px solid #CCCCCC;
  	box-shadow: 0px -1px 2px rgba(0,0,0,.23);
  	box-sizing: border-box;
  	font-size: .25rem;
  	color: #333333;
  	display: flex;
  	z-index: 99999;
  	.icon{
  		position: relative;
  		display: flex;
  		span{
  			width: .6rem;
  			display: flex;
  			flex-direction: column;
  			justify-content: center;
  			align-items: center;
  			margin-right: 5px;
  			i:first-child{
  				font-size: .36rem;
  				margin-bottom: 2px;
  			}
  			i:last-child{
  				font-size: .16rem;
  			}
  		}
  		span:first-child{
  			i:first-child{
  				color: #E53826;
  			}
  		}
  	}
  	.btn{
  		position: relative;
  		flex: 1;
  		box-sizing: border-box;
  		height: 100%;
  		width: 100%;
  		margin: 0 10px 0 5px;
  		display:flex;
  		align-items: center;
  		.btnBox{
  			width: 100%;
  			border-radius: .35rem;
  			overflow: hidden;
  			display:flex;
  			align-items: center;
  			a{
  				flex: 1;
  				height: .75rem;
  				display: flex;
  				justify-content: center;
  				align-items: center;
  				color:#E5E5E5;
  				&:first-child{
  					background-image:linear-gradient(to right,rgb(253,138,71),rgb(255,119,40));
  				}
  				&:last-child{
  					background-image:linear-gradient(to right,rgb(253,84,52),rgb(254,65,29));
  				}
  			}
  		}
  	}
  }
</style>