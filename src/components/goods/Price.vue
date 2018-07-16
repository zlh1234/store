<template>
  <div class="price">
    <div class="top">
    	<p><i>￥</i>{{goodData.good_price}}</p>
    	<p>{{goodData.good_title}}</p>
    	<div class="t_about">
    		<p>快递:{{goodData.good_freight==0?'免运费':goodData.good_freight+'元'}}</p>
    		<p>月销{{goodData.good_paied}}笔</p>
    		<p>{{goodData.good_address}}</p>
    	</div>
    </div>
    <div class="bottom">
    	<ul>
    		<li>
    			<i>服务</i>
    			<span>不支持七天无理由</span>
    			<i class="iconfont icon-more"></i>
    		</li>
    		<li>
    			<i>参数</i>
    			<span>网络店铺优惠券品牌</span>
    			<i class="iconfont icon-more"></i>
    		</li>
    	</ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'price',
    props:['goodData'],
    data () {
      return {
	  		
      }
    },
    methods:{
			
    }
  }
</script>

<style lang="less" scoped>
  .price{
  	position: relative;
  	top: 0;
  	width: 100%;
  	font-size: .3rem;
  	box-sizing: border-box;
  	background: #EEEEEE;
  	.top{
  		position: relative;
  		width: 100%; 
  		padding: 0 10px 10px 10px;
  		background: white;
  		box-sizing: border-box;
  		&>p:nth-child(1){
  			color: red;
  			i{
  				font-size: 12px;
  			}
  		}
  		&>p:nth-child(2){
  			margin: 10px 0;
  		}
  		.t_about{
  			position: relative;
  			width: 100%;
  			display: flex;
  			p:nth-child(2){
  				flex: 1;
  				text-align: center;
  			}
  			p{
  				color: #8E8E8E;
  				font-size: .2rem;
  			}
  		}
  	}
  	.bottom{
  		position: relative;
  		top: 0;
  		left: 0;
  		margin-top: 10px;
  		background: white;
  		ul{
  			position: relative;
  			width: 100%;
  			box-sizing: border-box;
  			padding: 6px 10px;
  			li{
  				width: 100%;
  				height: .5rem;
  				line-height: .5rem;
  				display: flex;
  				i:first-child{
  					font-size: .19rem;
  					color: #8E8E8E;
  					margin-right: 10px;
  				}
  				span{
  					flex: 1;
  					font-size: .22rem;
  				}
  			}
  		}
  	}
  }
</style>