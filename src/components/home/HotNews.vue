<template>
  <div class="hotNews">
    <div class="leftImg"></div>
    <div class="news">
    	<swiper v-if="news.length" class="swiper" :options="swiperOption" ref="mySwiper">
		    <swiper-slide class="swiperItem" v-for="(v,i) in news" :key="i" >
		    	<div class="content">
			    	<p v-for="(val,index) in v.newsArr" :key="index">
		    			<span class="newsType">{{ val.news_type }}</span>
		    			<span>{{ val.news_title }}</span>
		    		</p>
		    	</div>
    			<div v-if="v.newImg" class="rightImg" :style="{backgroundImage: 'url('+ v.newImg +')'}"></div>
		    </swiper-slide>
		  </swiper>
    </div>
  </div>
</template>

<script>
  const news = [
		{
			newImg:require('./img/toutiao/1.png'),
			newsArr:[
				{
					news_id:'1',
					news_type:'热评',
					news_title:'SSD价格疯降：240G固态跌至谷底'
				},
				{
					news_id:'2',
					news_type:'热议',
					news_title:'P20买早了，华为新机麒麟'
				}
			]
		},
		{
			newImg:require('./img/toutiao/2.png'),
			newsArr:[
				{
					news_id:'3',
					news_type:'精华',
					news_title:'绝地求生国服要上线了？'
				},
				{
					news_id:'4',
					news_type:'精华',
					news_title:'小米7价格首曝！屏幕指纹+6GB'
				}
			]
		}
	]
  
  export default {
    name: 'hotNews',
      data () {
        return {
	  			news:news,
	  			swiperOption:{
	  				loop:true,
	  				observer:true,
	  				observeParents:true,
	  				direction : 'vertical',
	  				allowTouchMove: false,
	  				autoplay: {
		  				delay: 3000,
	    				stopOnLastSlide: false,
		  				disableOnInteraction: false,
		  			},
		  			preventLinksPropagation : false
		  		}
        }
      },
      methods:{
		
      }
  }
</script>

<style lang="less" scoped>
  .hotNews{
  	position: relative;
  	width: 100%;
  	height: 1.2rem;
  	background: white;
  	display: flex;
  	align-items: center;
  	.leftImg{
  		position: relative;
  		top: 0;
  		left: 0;
  		height: .75rem;
  		width: .75rem;
  		margin-left: .14rem;
  		background: url(img/toutiao/toutiao105-107.png) no-repeat;
  		background-position: center;
  		background-size: 100% 100%;
  	}
  	.news{
  		position: relative;
  		top: 0;
  		left: 0;
  		height: 100%;
  		flex: 1;
  		display: flex;
  		flex-direction: column;
  		margin: 0 .15rem;
  		.swiper{
  			position: absolute;
  			width: 100%;
  			height: 100%;
  			display:flex;
  			flex-direction: column;
  			justify-content: center;
  			padding: 0;
  			.swiperItem{
  				position: relative;
  				height: 100%;
  				display: flex;
  				align-items: center;
  				justify-content: center;
  				margin: 0;
  				.content{
  					width: 100%;
  					height: 100%;
  					overflow:hidden;
  					white-space:nowrap;
  					flex:1;
  					margin: 0 .2rem 0 .1rem;
  					display:flex;
  					flex-direction: column;
  					justify-content: center;
	  				p{
			  			width: 100%;
			  			margin: .06rem 0;
			  			span{
			  				vertical-align: middle;
			  				color: #222;
			  				font-size: .23rem;
			  			}
			  			.newsType{
			  				color: #FB7139;
			  				font-size: .18rem;
			  			}
			  		}
  				}
		  		.rightImg{
			  		position: relative;
			  		height: 100%;
			  		width: 1.5rem;
			  		margin-right: .05rem;
			  		background-repeat: no-repeat;
			  		background-position: center;
			  		background-size: 100% 100%;
			  	}
  			}
  		}
  	}
  }
</style>