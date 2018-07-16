<template>
  <div class="banner">
    <swiper v-if="banner.length" class="swiper" :options="swiperOption" ref="mySwiper">
	    <swiper-slide class="swiperItem" v-for="(v,i) in banner" :key="i" >
	    	<img :alt="v.product_name" :data-src="v.product_src" class="swiper-lazy"/>
	    	<div class="swiper-lazy-preloader"></div>
	    </swiper-slide>
	    <div class="swiper-pagination banner-pagination"  slot="pagination"></div>
	  </swiper>
  </div>
</template>

<script>
	import { Toast } from 'mint-ui';
  export default {
    name: 'v-banner',
	  props:['banner'],
	  data () {
	    return {
	  		swiperOption:{
	  			loop : true,
	  			autoplay: {
	  				delay: 3000,
    				stopOnLastSlide: false,
	  				disableOnInteraction: false,
	  			},
	  			lazy: {
				    loadPrevNext: false,
				  },
	  			preventLinksPropagation : false,
	  			pagination: {
				    el: '.banner-pagination',
				    clickable :true
				  },
				  on:{
				  	tap:(e)=>{
				      this.handleClick(this.swiper.realIndex);
						}
				  }
	  		}
	    }
	  },
	  computed:{
	  	swiper:function(){
	  		return this.$refs.mySwiper.swiper
	  	}
	  },
	  methods:{
		  handleClick(v){
//		  	console.log(this.imgList[v]);
				Toast({
				  message: `第${v+1}张`,
				  position: 'top',
				  duration: 1500,
				  className:'myToast'
				});
			}
	  },
	  mounted(){
	  	
	  }
  }
</script>

<style lang="less" scoped>
  .banner{
  	position: relative;
  	.swiper{
  		position: relative;
			width: 100%;
			.swiperItem{
				position: relative;
			}
			img{
				width: 100%;
			}
		}
  }
</style>