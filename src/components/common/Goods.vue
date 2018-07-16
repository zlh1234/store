<template>
  <div class="goods">
  	<div class="headerTitle">
  		<h3>{{ isType == 1 ?'为你推荐':'今日热卖'}}</h3>
  		<p>{{goodsList.smallTitle}}</p>
  	</div>
		<ul>
			<li v-for="(v,i) in goodsList.list" :key="i" @click="handleClick(v)">
				<div class="imgBox">
					<img v-lazy="v.good_src" />
				</div>
				<p>{{v.good_title}}</p>
				<div class="price">
					<i>￥</i>
					<span class="goodPrice">{{v.good_price}}</span>
					<span class="paied">{{v.good_paied}}人付款</span>
				</div>
			</li>
		</ul>
  </div>
</template>

<script>
	/*
	 * 商品页
	 * isType 1--为你推荐  2--今日热卖
	 * goodList --商品列表
	 */
  export default {
    name: 'goods',
    props:['goodsList','isType'],
      data () {
        return {
	  		
        }
      },
      methods:{
				handleClick({good_id}){
					const { name } = this.$route;
					if(name=='GoodInfo'){
						this.$store.dispatch('search', {v: good_id});
						window.scrollTo(0,0);
					}else{
						this.$router.push({path:'/goodinfo',query:{k:good_id}});
					}
				}
      }
  }
</script>

<style lang="less" scoped>
  .goods{
  	position: relative;
  	top: 0;
  	left: 0;
  	margin-top: 10px;
  	width: 100%;
  	.headerTitle{
  		position: relative;
  		width: 100%;
  		height: .9rem;
  		background: white;
  		display: flex;
  		flex-direction: column;
  		align-items: center;
  		justify-content: center;
  		h3{
  			font-family: "黑体";
  			font-size: .32rem;
  			position: relative;
  			font-weight: 400;
  			letter-spacing: 1px;
  			color: #333;
  			&::before{
  				content: '';
  				position: absolute;
  				top: .12rem;
  				left: -1.84rem;
  				width: 1.8rem;
  				height: 1px;
  				background: #DADADA;
  			}
  			&::after{
  				content: '';
  				position: absolute;
  				top: .12rem;
  				right: -1.84rem;
  				width: 1.8rem;
  				height: 1px;
  				background: #DADADA;
  			}
  		}
  		p{
  			font-size: .2rem;
  			color: #9F9F9F;
  			margin-top: 5px;
  		}
  	}
  	ul{
  		position: relative;
  		width: 100%;
  		clear: both;
  		overflow:hidden;
  		_zoom:1;
  		li{
  			position: relative;
  			width: 49.5%;
  			height: 3.8rem;
  			background: white;
  			float: left;
  			display: flex;
  			flex-direction: column;
  			vertical-align: top;
  			font-size: 0;
  			box-sizing: border-box;
  			margin-top: .07rem;
  			&:nth-child(odd){
  				margin-right: 1%;
  			}
  			&:nth-child(1){
  				margin-top: 0;
  			}
  			&:nth-child(2){
  				margin-top: 0;
  			}
  			.imgBox{
  				width: 100%;
  				height: 2.6rem;
  				overflow: hidden;
  				img{
  					width: 100%;
  				}
  			}
  			p{
  				display: -webkit-box;
  				-webkit-box-orient: vertical;
  				-webkit-line-clamp: 2;
  				overflow: hidden;
  				font-size: .24rem;
  				line-height: .26rem;
  				color: #333;
  				margin: .1rem .1rem;
  				letter-spacing: 1px;
  			}
  			.price{
  				position: absolute;
  				left: 0;
  				bottom: 0;
  				margin: .1rem 0 .15rem .1rem;
  				i{
  					font-size: .16rem;
  					color: #FF5218;
  				}
  				.goodPrice{
  					font-size: .32rem;
  					color: #FF5218;
  				}
  				.paied{
  					font-size: .22rem;
  					color: #969696;
  					margin-left: .1rem;
  				}
  			}
  		}
  	}
  }
</style>