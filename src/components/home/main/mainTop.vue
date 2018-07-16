<template>
  <div class="mainTop">
    <ul>
    	<li v-for="(v,i) in sideList" :key="i" @click="handleClick(v)">
    		<div class="mainFloat left">
    			<div class="warp">
    				<div class="img"
    					:style="{backgroundImage: 'url('+ v.side_title_src +')'}"
    					></div>
    				<p v-if="v.side_type" class="title">{{ v.side_title }}</p>
    				<p v-else>00:07:10</p>
    			</div>
    			<div class="mainImg"
    				:style="{backgroundImage: 'url('+ v.side_left_src +')'}"></div>
    		</div>
    		<div class="mainFloat right"
    			:style="{backgroundImage: 'url('+ v.side_right_src +')'}"></div>
    	</li>
    </ul>
  </div>
</template>

<script>
	/*
	 * 置顶推荐(淘抢购)
	 */
	import { Toast } from 'mint-ui';
  export default {
    name: '',
    props:['sideList'],
      data () {
        return {
	  		
        }
      },
      methods:{
				handleClick({side_header}){
					Toast({
					  message: side_header,
					  position: 'top',
					  duration: 1000,
					  className:'myToast'
					});
				}
      }
  }
</script>

<style lang="less" scoped>
  .mainTop{
  	position: relative;
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
  			height: 2.2rem;
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
  					width: 80%;
  					height: 80%;
  					flex: 1;
  					background-repeat: no-repeat;
  					background-position: center bottom;
  					background-size: cover;
  					margin-top: 5px;
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