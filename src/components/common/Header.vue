<template>
  <div class="homeHeader">
		<div class="map" @click="handleMap">
			<span>
				<i class="iconfont icon-map"></i>
				莆田
			</span>
		</div>
		<div class="search" @click="handleSearch">
			<span>
				<i class="iconfont icon-search"></i>
				搜索内容
			</span>
		</div>
		<div class="message" @click="handleMessage">
			<i class="iconfont icon-xiaoxi"></i>
		</div>
  </div>
</template>

<script>
  export default {
    name: '',
      data () {
        return {
	  		
        }
      },
      methods:{
				handleMap(){
					console.log('handleMap');
				},
				handleSearch(){
					this.$router.push('/search');
				},
				handleMessage(){
					this.$router.push('/message');
				}
      }
  }
</script>

<style lang="less" scoped>
  .homeHeader{
  		position: fixed;
  		top: 0;
  		left: 0;
  		right: 0;
  		background: white;
  		height: .9rem;
  		font-size: .32rem;
  		z-index: 2;
  		display: flex;
  		border-bottom: 1px solid #CCCCCC;
  		z-index: 999;
  		.map{
  		height: .9rem;
  		line-height: .9rem;
  			padding: 0 .1rem;
  			span{
  				i{
  					font-size: .32rem;
  					margin-right: -1px;
  				}
  			}
  		}
  		.search{
  			flex: 1;
  			width: 100%;
  			margin: 0 .2rem;
  			display: flex;
  			flex-direction: column;
  			justify-content: center;
  			span{
  				i{
  					color: #333;
  					font-size: .32rem;
  				}
  				font-size: .28rem;
  				width: 100%;
  				box-sizing: border-box;
  				display: inline-block;
  				color: #C9C9C9;
  				padding-bottom: .06rem;
  				border-bottom: 1px solid #CCCCCC;
  			}
  		}
  		.message{
  			height: .9rem;
  			line-height: .9rem;
  			padding: 0 .25rem;
  			i{
  				font-size: .55rem;
  			}
  		}
  	}
</style>