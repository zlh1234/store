<template>
  <div class="msgList">
    <ul>
    	<li v-for="(v,i) in msgList" :key="i" @click="seeMessage(v)">
    		<div class="avatar">
    			<img :src="v.from_src" width="100%" />
    		</div>
	    	<div class="msg">
	    		<div class="top">
	    			<span class="name">{{v.from_name}}</span>
	    			<span class="time">{{v.msg_list[v.msg_list.length-1].msg_time.split(' ')[0]}}</span>
	    		</div>
	    		<p class="msgInfo">{{v.msg_list[v.msg_list.length-1].msg_info}}</p>
	    		<p class="isRead" v-if="v.isRead">{{v.isRead}}</p>
	    	</div>
    	</li>
    </ul>
    <!--<button @click="handleClick">点击</button>-->
  </div>
</template>

<script>
	import timer from '../../util/timer.js'
	import {mapGetters} from 'vuex'
  export default {
    name: 'msgList',
      data () {
        return {
	  			
        }
      },
      computed:{
      	...mapGetters([
      		'msgList',
      		'getUser'
      	])
      },
      methods:{
				handleClick(){
					
				},
				seeMessage(v){
					this.$router.push({
						path:'/msginfo',
						query:{id:v.id}
					});
				}
      }
  }
</script>

<style lang="less" scoped>
  .msgList{
  	position: relative;
  	left: 0;
  	width: 100%;
  	min-height: 100%;
  	ul{
  		position: relative;
  		width: 100%;
  		li{
  			position: relative;
  			width: 100%;
  			height: 1.2rem;
  			display: flex;
  			justify-content: center;
  			align-items: center;
  			overflow: hidden;
  			.avatar{
  				width: 1.6rem;
  				height: 1rem;
  				line-height: 1rem;
  				text-align: center;
  				margin-left: 10px;
  				img{
  					width: 100%;
  					height: 100%;
  				}
  			}
  			.msg{
  				position: relative;
  				margin-left: 10px;
  				height: 1rem;
  				width: 100%;
  				margin-right: 10px;
  				display: flex;
  				flex-direction: column;
  				justify-content: center;
  				.top{
  					position: relative;
  					width: 100%;
						vertical-align: middle;
  					.name{
  						width: 3rem;
  						float: left;
  						color: #333;
  						font: .32rem "黑体";
	  					overflow: hidden;
							text-overflow:ellipsis;
							white-space: nowrap;
							vertical-align: middle;
  					}
  					.time{
  						float: right;
  						font-size: .24rem;
							color: #969696;
							vertical-align: middle;
  					}
  				}
  				.msgInfo{
  					margin-top: 10px;
  					width: 4rem;
	  				overflow: hidden;
						text-overflow:ellipsis;
						white-space: nowrap;
						color: #969696;
						font-size: .26rem;
  				}
  				.isRead{
  					position: absolute;
  					right: 0;
  					top: 50%;
  					width: .35rem;
  					height: .35rem;
  					line-height: .35rem;
  					text-align: center;
  					font-size: .2rem;
  					color: white;
  					border-radius: 50%;
  					background: red;
  				}
  			}
  		}
  	}
  }
</style>