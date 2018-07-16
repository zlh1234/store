<template>
  <div class="footerNav">
		<ul>
			<li>
				<router-link tag="div" to="/">
					<i class="iconfont icon-shouye"></i>
					<p>首页</p>
				</router-link>
			</li>
			
			<li>
				<router-link tag="div" to="/category">
					<i class="iconfont icon-fenlei"></i>
					<p>分类</p>
				</router-link>
			</li>
			
			<li class="message">
				<router-link tag="div" to="/message">
					<i class="iconfont icon-xiaoxi"></i>
					<p>消息</p>
					<i class="isRead" v-show="msgIsRead">{{msgIsRead}}</i>
				</router-link>
			</li>
			
			<li>
				<router-link tag="div" to="/cart">
					<i class="iconfont icon-cart"></i>
					<p>购物车</p>
				</router-link>
			</li>
			
			<li>
				<router-link tag="div" to="/user">
					<i class="iconfont icon-account"></i>
					<p>我的</p>
				</router-link>
			</li>
		</ul>
  </div>
</template>

<script>
	/*
	 * 底部导航栏
	 */
	import {mapGetters} from 'vuex'
  export default {
    name: '',
      data () {
        return {
	  		
        }
      },
      computed:{
      	...mapGetters([
      		'msgList',
      		'msgIsRead'
      	])
      },
      methods:{
		
      }
  }
</script>

<style lang="less" scoped>
  .footerNav{
  	position: fixed;
  	bottom: 0;
  	left: 0;
  	right: 0;
  	height: 1.1rem;
  	border-top:1px solid #CCCCCC;
  	box-sizing: border-box;
  	font-size: 0.24rem;
  	background: white;
  	z-index: 99999;
  	ul{
  		position: relative;
  		top: 0;
  		left: 0;
  		height: 100%;
  		display: flex;
  		li{
  			flex: 1;
  			height: 100%;
  			display: flex;
  			justify-content: center;
  			align-content: center;
  			div{
  				width: 100%;
  				display:flex;
  				flex-direction: column;
  				justify-content: center;
  				align-items: center;
	  			i{
	  				font-size: 0.45rem;
	  			}
  				p{
  					margin-top: 0.08rem;
  				}
	  			&.router-link-exact-active{
		  			i{
		  				color: red;
		  			}
	  				p{
		  				color: red;
	  				}
	  			}
  			}
  			&.message{
					position: relative;
					.isRead{
						position: absolute;
						width: .3rem;
						height: .3rem;
						line-height: .3rem;
						border-radius: 50%;
						text-align: center;
						background: red;
						top: .1rem;
						right: .2rem;
						color: white;
						font-size: .2rem;
					}
				}
  		}
  	}
  }
</style>