<template>
  <div class="category">
    <div class="titleImg" :style="{backgroundImage:'url('+categoryList.category_title_img+')'}">
    	<h3>{{categoryList.category}}</h3>
    </div>
 		<ul ref="oUl">
 			<li v-for="(v,i) in categoryList.list"
 				:class="{'biger':i==showBiger,'between':showBiger==categoryList.list.length}"
 				@click="handleClick(v)"
 				>
    		<div class="top">
    			<p>{{v.category_title}}</p>
    			<p class="smallTitle">{{v.category_small_title}}</p>
    			<span v-if="i==showBiger" class="tuijian">精品推荐</span>
    		</div>
    		<!--<div class="img" :style="{backgroundImage:'url('+ v.category_src +')'}"></div>-->
    		<img width="90%" v-lazy="v.category_src"/>
    	</li>
 		</ul>
  
  </div>
</template>

<script>
	/*
	 * 分类 置顶 (手机数码/服饰衣帽)
	 * 布局 上2  下3(下等分)
	 * showType  left--上 左偏宽   	right--上 右偏宽   	half上 等分
	 */
	import { Toast } from 'mint-ui';
  export default {
    name: 'category',
  	props:['showType','categoryList'],
      data () {
        return {
	  			
        }
      },
      computed:{
      	showBiger(){
      		switch(this.showType){
      			case 'left':
      				return 0
      			case 'right':
      				return 1
      			case 'half':
      				return this.categoryList.list.length
      		}
      	}
      },
      methods:{
				getCurrentAttr(el,target){
					try{
						return window.getComputedStyle(el)[target]
					}catch(e){
						return el.currentStyle[target];
					}
				},
				handleClick({category_title}){
					Toast({
					  message: category_title,
					  position: 'top',
					  duration: 1000,
					  className:'myToast'
					});
				}
      },
      mounted(){
      	let _this = this;
      	window.onscroll=function(e){
      		let scroll = document.documentElement.scrollTop||document.body.scrollTop;
//    		console.log(scroll);
      		let el = _this.getCurrentAttr(document.documentElement,'fontSize')
      		let currentFontSize = el.replace('px','');
//    		console.log(_this.$refs.oUl.getBoundingClientRect().top-(parseInt(currentFontSize*0.7)));
					
      	}
      }
  }
</script>

<style lang="less" scoped>
  .category{
  	position: relative;
  	width: 100%;
  	margin-top: 10px;
  	background: white;
  	.titleImg{
  		position: relative;
  		width: 100%;
  		height: .75rem;
  		line-height: .75rem;
  		overflow: hidden;
  		background-repeat: no-repeat;
  		background-position: center;
  		background-size: cover;
  		h3{
  			font-family: "黑体";
  			font-weight: 400;
  			font-size: .35rem;
  			margin-left: .2rem;
  			letter-spacing: 1px;
  			color: #333;
  		}
  	}
  	ul{
  		position: relative;
  		width: 100%;
  		overflow: hidden;
  		_zoom:0;
  		li{
  			position: relative;
  			float: left;
  			width: 33.3%;
  			height: 3rem;
  			overflow: hidden;
  			box-sizing: border-box;
  			padding: 2px;
  			.top{
  				position: relative;
  				width: 100%;
  				box-sizing: border-box;
  				padding: .1rem 0;
  				padding-left: .1rem;
  				z-index: 3;
  				background:white;
  				p:first-child{
  					font-size: .3rem;
  				}
  				.smallTitle{
  					margin-top: 5px;
  					font-size: .24rem;
  					color: #9F9F9F;
  				}
  			}
  			img{
  				position: absolute;
	  			bottom: 5px;
  				width: 100%;
  				z-index: 2;
  			}
  			&:nth-child(1).between{
  				width: 50%;
  				img{
  					position: absolute;
  					top: 1rem;
  				}
  			}
  			&:nth-child(2).between{
  				width: 50%;
  				img{
  					position: absolute;
  					top: 1rem;
  				}
  			}
  			&.biger{
  				position: relative;
  				width: 66.6%;
  				.top{
  					width: 40%;
  					float: left;
  					.tuijian{
  						display: inline-block;
  						margin-top: 5px;
  						font-size: .25rem;
  						background: #6585D2;
  						color: white;
  						padding: .1rem .03rem;
  					}
  				}
	  			img{
	  				position: absolute;
	  				bottom: 5px;
						width: 56%;
						float: left;
					}
  			}
  			&:nth-child(1){
  				.top{
  					p:first-child{
  						color: #DA16E0;
	  				}
  				}
  			}
  			&:nth-child(2){
  				.top{
  					p:first-child{
  						color: #7F99DA;
  						
	  				}
  				}
  			}
  			&:nth-child(3){
  				.top{
  					p:first-child{
  						color: #00B8E5;
	  				}
  				}
  			}
  			&:nth-child(4){
  				.top{
  					p:first-child{
  						color: #E5AD06;
	  				}
  				}
  			}
  			&:nth-child(5){
  				.top{
  					p:first-child{
  						color: #06E53F;
	  				}
  				}
  			}
  		}
  	}
  }
</style>