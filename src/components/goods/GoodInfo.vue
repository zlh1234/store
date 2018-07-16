<template>
	<div class="goodInfo">
		<div class="info">
			<div class="top" ref="top" :style="{backgroundColor:'rgba(255,255,255,'+topOption.topOpacity+')'}">
				<div class="top1">
					<i class="btn iconfont icon-fanhui" @click="backFn" :style="{backgroundColor:'rgba(0,0,0,'+topOption.btnBackColor+')',color:topOption.btnFontColor}"></i>
					<i class="btn iconfont icon-cart" @click="toCartFn" :style="{backgroundColor:'rgba(0,0,0,'+topOption.btnBackColor+')',color:topOption.btnFontColor}"></i>
				</div>
				<div class="top2" :style="{opacity:topOption.topOpacity}">
					<ul :class="act">
						<li class="actGoods"
							@click="handleClick('actGoods','mainImg')">宝贝</li>
							
						<li class="actComment"
							@click="handleClick('actComment','commentBox')">评价</li>
							
						<li class="actDetail"
							@click="handleClick('actDetail','detailsBox')">详情</li>
							
						<li class="actRecommend"
							@click="handleClick('actRecommend','recommendBox')">推荐</li>
					</ul>
				</div>
				<div class="top3" :style="{opacity:topOption.topOpacity,backgroundImage:'url('+getGoodInfo.data.good_src+')'}"></div>
			</div>
			<div class="main" v-if="getGoodInfo.isOk == 1">
				<div class="img" ref="mainImg">
					<img :src="getGoodInfo.data.good_src" width="100%" />
					<span>1/1</span>
				</div>
				
				<div class="priceBox" ref="priceBox">
					<v-price :goodData="getGoodInfo.data"></v-price>
				</div>

				<!--评论-->
				<div class="commentBox" ref="commentBox">
					<v-comment :goodData="getGoodInfo.data"></v-comment>
				</div>
				
				<!--详情-->
				<div class="detailsBox" ref="detailsBox">
					<v-details></v-details>
				</div>
				
				<!--推荐-->
				<div class="recommendBox" ref="recommendBox">
					<v-recommend></v-recommend>
				</div>
				
				<!--加入购物车块-->
				<v-addcart :goodData="getGoodInfo.data"></v-addcart>
				
			</div>
			<div class="notFound" v-else-if="getGoodInfo.isOk == 0">
				找不到
			</div>
		</div>
	</div>
</template>

<script>
	import { mapGetters } from 'vuex'
	import Price from './Price'
	import Comment from './Comment'
	import Details from './Details'
	import Recommend from './Recommend'
	import AddCart from './AddCart'
	export default {
		name: 'goodInfo',
		data() {
			return {
				topOption: {
					topOpacity: 0, //透明度
					btnBackColor: 0.5, //按钮的背景
					btnFontColor: '#ffffff', //按钮文字颜色
				},
				act:'actGoods'
			}
		},
		components:{
			'v-price' : Price,
			'v-comment' : Comment,
			'v-details' : Details,
			'v-recommend' : Recommend,
			'v-addcart' : AddCart
		},
		computed: {
			...mapGetters([
				'getGoodInfo'
			])
		},
		methods: {
			backFn() {
				this.$router.back();
			},
			toCartFn(){
				this.$router.push('/cart');
			},
			handleClick(v,to){
				let toTop = this.$refs[to].offsetTop - this.$refs.top.offsetHeight;
				if(toTop<0) toTop=0;
				window.scrollTo(0,toTop);
			},
			moveFn(){
				window.onscroll = e => {
					let oTopHeight = this.$refs.top.offsetHeight; //头部的高度
					let commentBox = this.$refs.commentBox.offsetTop-oTopHeight; //评论距离顶部
					let detailsBox = this.$refs.detailsBox.offsetTop-oTopHeight; //详情距离顶部
					let recommendBox = this.$refs.recommendBox.offsetTop-oTopHeight; //推荐距离顶部
					let currentTop = document.documentElement.scrollTop || document.body.scrollTop;
					let num = parseInt(this.$refs.mainImg.offsetHeight / 2); //图片
					let nowNumber = currentTop / num;
					if(currentTop >= num) {
						this.topOption = {
							topOpacity : 1,
							btnBackColor : 0,
							btnFontColor : '#333333'
						}
					} else {
						this.topOption = {
							topOpacity : nowNumber,
							btnBackColor : 0.5 - nowNumber,
							btnFontColor : '#ffffff'
						}
					}
					
					//判断到达哪个模块
					if(currentTop >= commentBox && currentTop < detailsBox){
						this.act = 'actComment';
					}else if(currentTop >= detailsBox && currentTop < recommendBox){
						this.act = 'actDetail';
					}else if(currentTop >= recommendBox){
						this.act = 'actRecommend';
					}else{
						this.act = 'actGoods';
					}
				}
			}
		},
		created() {
			this.$store.dispatch('search', {
				v: this.$route.query.k
			});
		},
		mounted() {
			window.scrollTo(0, 0);
			setTimeout(()=>{
				this.moveFn();
			},20);
		}
	}
</script>

<style lang="less" scoped>
	.goodInfo {
	    position: relative;
	    top: 0;
	    left: 0;
	    width: 100%;
	    z-index: 1;
	    .info {
	        position: relative;
	        left: 0;
	        top: 0;
	        .top {
	            position: fixed;
	            top: 0;
	            left: 0;
	            font-size: 16px;
	            height: 1.1rem;
	            width: 100%;
	            padding: 2px 0;
	            z-index: 3;
	            .top1 {
	                position: relative;
	                width: 100%;
	                height: .6rem;
	                i {
	                    display: inline-block;
	                    width: .6rem;
	                    height: 100%;
	                    line-height: .6rem;
	                    text-align: center;
	                    border-radius: 50%;
	                    margin: 2px 10px;
	                    font-size: 14px;
	                    &:nth-child(2) {
	                        float: right;
	                    }
	                }
	            }
	            .top2 {
	                position: relative;
	                width: 100%;
	                ul {
	                    width: 100%;
	                    display: flex;
	                    li {
	                        flex: 1;
	                        text-align: center;
	                        color: #333333;
	                    }
	                    &.actGoods .actGoods,&.actComment .actComment,&.actDetail .actDetail,&.actRecommend .actRecommend{
	                        color: #E53826;
	                    }
	                }
	            }
	            .top3 {
	                position: absolute;
	                left: 50%;
	                top: 2px;
	                width: .6rem;
	                height: .7rem;
	                margin-left: -.3rem;
	                background-repeat: no-repeat;
	                background-size: 100%;
	            }
	        }
	        .main {
	            position: relative;
	            width: 100%;
	            z-index: 2;
	            .img{
	                position: relative;
	                width: 100%;
	                span{
	                    position: absolute;
	                    right: 20px;
	                    bottom: 20px;
	                    width: 40px;
	                    height: 20px;
	                    line-height: 20px;
	                    border-radius: 8px;
	                    background: rgba(0,0,0,.5);
	                    text-align: center;
	                    font-size: 12px;
	                    color: white;
	                }
	            }
	            .priceBox{
	                position: relative;
	                width: 100%;
	            }
	            .commentBox{
	                position: relative;
	                width: 100%;
	            }
	            .detailsBox{
	                position: relative;
	                width: 100%;
	            }
	            .detailsBox{
	                position: relative;
	                width: 100%;
	            }
	            .recommendBox{
	                position: relative;
	                width: 100%;
	            }
	        }
	        .notFound{
	            position: relative;
	            top: 1.5rem;
	            font-size: 22px;
	            color: red;
	        }
	    }
	}
</style>