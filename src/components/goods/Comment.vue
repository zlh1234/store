<template>
  <div class="comment">

    <div class="top">
    	<div class="commontTitle">
    		<p>宝贝评价({{goodData.good_commont}})</p>
    		<a href="javascript:;">查看全部 ></a>
    	</div>
    	<div class="commontContent">
    		<p><i class="iconfont icon-comments"></i>{{goodData.good_commontName}}</p>
    		<p>{{goodData.good_commontContent}}</p>
    	</div>
    </div>
    <div class="bottom">
    	<div class="wenda">
    		<p>暂无问答</p>
    		<div class="content">
    			<p><span>问大家</span></p>
    			<p>宝贝好不好，问问已买过的人</p>
    			<a href="javascript:;">去提问</a>
    		</div>
    	</div>
    </div>
    <div class="shop">
    	<div class="title">
    		<p><i class="iconfont icon-bukexuanzuo"></i>{{goodData.good_name}}</p>
    		<a href="javascript:;">全部宝贝</a>
    		<a href="javascript:;">进店逛逛</a>
    	</div>
    	<div class="content">
    		<p>宝贝描述<i>4.8</i></p>
    		<p>卖家服务<i>4.7</i></p>
    		<p>物流服务<i>4.9</i></p>
    		<p>品质保证<i>4.9</i></p>
    	</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'comment',
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
  .comment{
  	position: relative;
  	width: 100%;
  	box-sizing: border-box;
  	background: #EEEEEE;
  	font-size: .25rem;
  	overflow: auto;
  	.top{
  		position: relative;
  		width: 100%;
  		background: white;
  		padding: 10px;
			margin-top: 10px;
  		box-sizing: border-box;
  		.commontTitle{
  			position: relative;
  			width: 100%;
  			display: flex;
  			padding: 5px 0 20px 0;
  			p{
  				flex: 1;
  			}
  			a{
  				font-size: .2rem;
  				color: #E53826;
  			}
  		}
  		.commontContent{
  			position: relative;
  			width: 100%;
  			padding-bottom: 10px;
  			border-bottom: 1px solid #E2E2E2;
  			p:first-child{
  				width: 100%;
  				height: .4rem;
  				font-size: .2rem;
  				color:#8E8E8E;
  				i{
  					color: #FF422E;
  					margin: 0 3px;
  					font-size: .2rem;
  				}
  			}
  			p:last-child{
  				width: 100%;
  				font-size: .22rem;
  			}
  		}
  	}
  	.bottom{
  		position: relative;
  		width: 100%;
  		background: white;
  		padding: 0 10px;
  		box-sizing: border-box;
  		.wenda{
  			position: relative;
  			width: 100%;
  			p{
  				padding: 5px 0 15px 0;
  			}
  			.content{
  				position: relative;
  				width: 100%;
  				display: flex;
  				font-size: 0.22rem;
  				p:nth-child(1){
  					span{
	  					background-image: linear-gradient(to right,#EA5849,#E53826);
	  					color: white;
	  					padding: 2px;
  					}
  				}
  				p:nth-child(2){
  					flex: 1;
  					color:#8E8E8E;
  					margin-left: 5px;
  				}
  				a{
  					font-size: .2rem;
  					color: #E53826;
  				}
  			}
  		}
  	}
  	.shop{
  		position: relative;
  		width: 100%;
  		background: white;
  		padding: 10px 10px 20px 10px;
  		margin-top: 10px;
  		box-sizing: border-box;
  		.title{
  			position: relative;
  			display: flex;
  			align-items: center;
  			height: .8rem;
  			p{
  				flex: 1;
  				color: #333333;
  				i{
  					margin: 0 4px;
  					color: #E53826;
  				}
  			}
  			a{
  				display: inline-block;
  				margin-left: .28rem;
  				font-size: .2rem;
  				color: #E53826;
					&:last-child{
						padding: 5px 8px;
						background: #E53826;
						color: white;
  					border-radius: .2rem;
					}
  			}
  		}
  		.content{
  			position: relative;
  			margin-top: .1rem;
  			width: 100%;
  			display: flex;
  			p{
  				flex: 1;
  				text-align: center;
  				font-size: .2rem;
  				color:#8E8E8E;
  				i{
  					margin-left: 2px;
  					color: #FF422E;
  				}
  			}
  		}
  	}
  }
</style>