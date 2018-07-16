<template>
  <div class="main">
    <v-maintop :sideList="homeData.data.side"></v-maintop>
    <v-categorytop :categoryList="homeData.data.cate_1" showType="right"></v-categorytop>
    <v-categorytop :categoryList="homeData.data.cate_2" showType="half"></v-categorytop>
    <v-goods :goodsList="homeData.data.goods" isType="2"></v-goods>
  </div>
</template>

<script>
	import {mapGetters} from 'vuex'
	import MainTop from './mainTop.vue'
	import Goods from '../../common/Goods.vue'
	import CategoryTop from './CategoryTop.vue'
  export default {
    name: 'homeMain',
      data () {
        return {
	  			
        }
      },
	    computed:{
	    	...mapGetters([
		  		'homeData'
		  	])
	    },
      components:{
      	'v-goods':Goods,
      	'v-maintop':MainTop,
      	'v-categorytop':CategoryTop
      },
      methods:{
		
      }
  }
</script>

<style lang="less" scoped>
  .main{
  	position: relative;
  	top: 10px;
  	ul{
  		position: relative;
  		top: 0;
  		left: 0;
  		display: flex;
  		flex-wrap: wrap;
  		background: white;
  		li{
  			position: relative;
  			width: 50%;
  			height: 2rem;
  			box-sizing: border-box;
  			padding: 5px;
  			clear: both;
  			border-top: .5px solid #EDEDED;
  			border-right: .5px solid #EDEDED;
  			&:nth-child(2n){
  				border-right: none;
  				border-right: 0px solid #EDEDED;
  			}
  			&:nth-child(1){
  				border-top: none;
  				border-top: 0px solid #EDEDED;
  			}
  			&:nth-child(2){
  				border-top: none;
  				border-top: 0px solid #EDEDED;
  			}
  			.mainFloat{
  				width: 50%;
  				float: left;
  			}
  			.left{
  				position: relative;
  				top: 0;
  				left: 0;
  				width: 50%;
  				height: 100%;
  				display: flex;
  				flex-direction: column;
  				.warp{
  					position: relative;
  					width: 100%;
  					box-sizing: border-box;
  					padding-left:.12rem;
  					.img{
  						position: relative;
  						top: 0;
  						left: 0;
  						width: 100%;
  						height: .5rem;
  						background-repeat: no-repeat;
  						background-position: -0.22rem -0.06rem;
  						background-size: cover;
  					}
  					p{
  						font-size: .22rem;
  						color: #969696;
  					}
  				}
  				.mainImg{
  					position: relative;
  					width: 100%;
  					height: 100%;
  					flex: 1;
  					background-repeat: no-repeat;
  					background-position: center bottom;
  					background-size: cover;
  				}
  			}
  			.right{
  				position: relative;
  				top: 0;
  				left: 0;
  				height: 100%;
  				background-repeat: no-repeat;
  				background-size: cover;
  				background-position: center bottom;
  			}
  		}
  	}
  }
</style>