<template>
  <div class="cartList">
    <ul>
  			<li v-for="v in getCart.data">
  				<div class="m_header">
						<i @click="shopSelect(v)" :class="[v.isSelect?'icon-yigouxuan':'icon-weigouxuan','iconfont']"></i>
  					<span class="title">
  						<i class="iconfont icon-bukexuanzuo"></i>
  						{{v.good_name}}
  						<i class="iconfont icon-more"></i>
  					</span>
  				</div>
  				<div class="m_body" @click="toGoodInfo(v)">
  					<div class="m_body_left">
  						<img :src="v.good_src" :alt="v.good_name" width="100%"/>
  					</div>

  					<div class="m_body_right">
  						<p>{{v.good_title}}</p>
  						<div class="price">
  							<span><i>￥</i>{{v.good_price}}</span>
  							<div class="cart_num">
  								<a href="javascript:;" @click.stop="minus(v.good_id)">-</a>
  								<span>{{v.cart_num}}</span>
  								<a href="javascript:;" @click.stop="add(v.good_id)">+</a>
  							</div>
  						</div>
  					</div>
  				</div>
  			</li>
  		</ul>
  </div>
</template>

<script>
	import { mapGetters } from 'vuex'
  export default {
    name: 'cartList',
    data () {
      return {
	  		
      }
    },
    computed:{
    	...mapGetters([
    		'getCart'
    	])
    },
    methods:{
			shopSelect({shop_id}){
				this.$store.dispatch('shopSelect',shop_id);
			},
			add(good_id){
				this.$store.dispatch('addCartNum',good_id);
			},
			minus(good_id){
				this.$store.dispatch('minusCartNum',good_id);
			},
			toGoodInfo({good_id}){
				this.$router.push({path:'/goodinfo',query:{k:good_id}});
			}
    }
  }
</script>

<style lang="less" scoped>
  .cartList{
  	position: relative;
  	width: 100%;
  	height: 100%;
  	ul{
  		position: relative;
  		width: 100%;
			padding: 0 10px;
			box-sizing: border-box;
			li{
				position: relative;
				width: 100%;
				padding: 10px;
				background: white;
				margin: 10px 0;
				box-sizing: border-box;
				border-radius: 10px;
				.m_header{
					position: relative;
					width: 100%;
					padding: 5px 0 10px 0;
					& > i{
						color: #909090;
						margin: 2px;
						&.icon-yigouxuan{
							color: #333333;
						}
					}
					.title{
						i:last-child{
							color: #BBBBBB;
						}
					}
				}
				.m_body{
					position: relative;
					width: 100%;
					display: flex;
					margin-top: 8px;
					.m_body_left{
						position: relative;
						width: 1.5rem;
						overflow: hidden;
					}
					.m_body_right{
						position: relative;
						flex: 1;
						box-sizing: border-box;
						margin-left: 10px;
						&>p{
							overflow : hidden;
							text-overflow: ellipsis;
							display: -webkit-box;
							-webkit-line-clamp: 2;
							-webkit-box-orient: vertical;
						}
						.price{
							position: absolute;
							bottom: 2px;
							width: 100%;
							display: flex;
							&>span{
								flex: 1;
								&>i{
									font-size: .2rem;
								}
								color: #E53826;
							}
							.cart_num{
								border: 1px solid #CCCCCC;
								font-size: .22rem;
								color: #666666;
								a{
									float: left;
									display: inline-block;
									width: .35rem;
									height: .32rem;
									line-height: .32rem;
									text-align: center;
									color: #666666;
								}
								span{
									float: left;
									display: inline-block;
									width: .42rem;
									height: .32rem;
									line-height: .32rem;
									text-align: center;
									border-left: 1px solid #CCCCCC;
									border-right: 1px solid #CCCCCC;
								}
							}
						}
					}
				}
			}
  	}
  }
  	  	
</style>