<template>
  <div class="menu">
		<swiper :options="swiperOption" class="swiper">
			<swiper-slide v-for="(v,i) in menuList" :key="i" class="swiperItem">
				<ul>
					<li v-for="(val,index) in v" :key="index" @click="handleClick(val)">
						<!--<img :src="val.menu_icon" :alt="val.menu_title"/>-->
						<div v-bind:style="{backgroundImage:'url('+val.menu_icon+')'}"></div>
						<p>{{val.menu_title}}</p>
					</li>
				</ul>
			</swiper-slide>
			<div class="swiper-pagination menu-pagination" slot="pagination"></div>
		</swiper>
  </div>
</template>

<script>
	import { Toast } from 'mint-ui';
  export default {
    name: '',
    props:['menuList'],
	  data () {
	    return {
	  		swiperOption:{
	  			preventLinksPropagation : false,
	  			resistanceRatio : 0,//边缘时不能拖动
	  			pagination: {
				    el: '.menu-pagination',
				    clickable :true
				  }
	  		}
	    }
	  },
	  computed:{
	  	
	  },
	  methods:{
			handleClick({menu_title}){
				Toast({
				  message: menu_title,
				  position: 'top',
				  duration: 1000,
				  className:'myToast'
				});
			}
	  },
		mounted(){
			
		}
  }
</script>

<style lang="less" scoped>
  .menu{
  	position: relative;
		width: 100%;
		background: white;
  	.swiper{
  		position: relative;
			width: 100%;
  		.swiperItem{
  			position: relative;
				width: 100%;
				ul{
					position: relative;
					width: 100%;
					display: flex;
					flex-wrap: wrap;
					li{
						margin: .15rem 0;
						width: 25%;
						display: flex;
						flex-direction: column;
						justify-content: center;
						align-items: center;
						div{
							width: .8rem;
							height: .8rem;
							background-position: center;
							background-size: cover;
						}
						p{
							margin-top: 4px;
							font-size: .24rem;
							color: #333;
						}
					}
				}
  		}
  	}
  }
</style>