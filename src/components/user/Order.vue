<template>
  <div class="order">
    <v-header myTitle="我的订单" backColor="#FFF9F9"></v-header>
    <div class="main">
    	<div class="mainNav">
    		<ul ref="navChild">
    			<li @click="toSlide(0)">全部</li>
    			<li @click="toSlide(1)">待付款</li>
    			<li @click="toSlide(2)">待发货</li>
    			<li @click="toSlide(3)">待收货</li>
    			<li @click="toSlide(4)">待评价</li>
    		</ul>
    		<div class="line" ref="line"></div>
    	</div>
    	<div class="content">
				<swiper class="swiper" :options="swiperOption" ref="mySwiper">
					<swiper-slide class="swiperItem">
						<v-orderlist :getOrder="getOrder" isType="9999"></v-orderlist>
					</swiper-slide>
					<swiper-slide class="swiperItem">
						<v-orderlist :getOrder="getOrder" isType="0"></v-orderlist>
					</swiper-slide>
					<swiper-slide class="swiperItem">
						<v-orderlist :getOrder="getOrder" isType="1"></v-orderlist>
					</swiper-slide>
					<swiper-slide class="swiperItem">
						<v-orderlist :getOrder="getOrder" isType="2"></v-orderlist>
					</swiper-slide>
					<swiper-slide class="swiperItem">
						<v-orderlist :getOrder="getOrder" isType="3"></v-orderlist>
					</swiper-slide>
				</swiper>
    	</div>
    </div>
  </div>
</template>

<script>
	import SimpleHeader from '../common/SimpleHeader'
	import OrderList from './OrderList'
	import {mapGetters} from 'vuex'
  export default {
    name: 'order',
      data () {
        return {
	  			swiperOption:{
		  			preventLinksPropagation : false,
		  			resistanceRatio : 0,//边缘时不能拖动
		  			autoHeight: true,
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
      computed:{
      	...mapGetters([
      		'getOrder'
      	]),
      	swiper:function(){
		  		return this.$refs.mySwiper.swiper
		  	}
      },
		  components:{
		  	'v-header':SimpleHeader,
		  	'v-orderlist':OrderList
		  },
      methods:{
      	toSlide(i){
      		this.swiper.slideTo(i);
      	},
				move(e){
					let navChild = this.$refs.navChild.getElementsByTagName('li').length-1;
					let line = this.$refs.line;
					line.style.transition = '0s';
					line.style['left'] = parseInt(line.offsetWidth)*parseInt(navChild)*e +'px';
				},
				transitionStart(){
					let line = this.$refs.line;
					line.style.transition = '0.3s';
				}
      },
      created(){
      	/*
      	 * 接收路由发送的  is 参数
      	 * 9999->所有订单
      	 * 0->待付款		1->待发货		2->待收获		3->交易成功
      	 * 查询数据是 type也是对应0 1 2 3
      	*/
				this.$store.dispatch('getOrder');
      },
      mounted(){
      	const is = this.$route.params.is || -1;
      	if(is!=9999){
      		this.swiper.slideTo(is+1,0,false);
      	}
      }
  }
</script>

<style lang="less" scoped>
  .order{
  	position: absolute;
  	width: 100%;
  	height: 100%;
  	font-size: .32rem;
  	z-index: 1;
  	.main{
  		position: absolute;
  		width: 100%;
  		height: 100%;
  		.mainNav{
  			position: relative;
  			top: .8rem;
  			width: 100%;
  			height: .6rem;
  			background: white;
  			ul{
  				position: relative;
  				width: 100%;
  				height: 100%;
  				border-bottom: 1px solid #ECECEB;
  				li{
  					float: left;
						width: 1.1rem;
						height: 100%;
						line-height: .6rem;
						font-size: .26rem;
  					text-align: center;
  					font-family: "微软雅黑";
  					color: #333333;
  				}
  			}
  			.line{
  				position: relative;
  				left: 0;
  				bottom: 3px;
  				width: 1.1rem;
  				height: 3px;
  				background: #FA4013;
  				transform:translateX(0px);
  			}
  		}
  		.content{
  			position: absolute;
	  		top: 1.44rem;
	  		bottom: 0;
	  		width: 100%;
	  		overflow: auto;
	  		.swiper{
	  			min-height: 100%;
	  		}
  		}
  	}
  }
</style>