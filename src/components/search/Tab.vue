<template>
  <div class="tab">
    <div :class="['tabBar',isShow]">
    		<a href="javascript:;" class="quanbu" @click="handleClick('quanbu')" ref="quanbu">全部</a>
    		<a href="javascript:;" class="tianmao" @click="handleClick('tianmao')" ref="tianmao">天猫</a>
    		<a href="javascript:;" class="dianpu" @click="handleClick('dianpu')" ref="dianpu">店铺</a>
    </div>
    <div class="historical">
    	<div class="historicalHeader">
    		<p>历史搜索</p>
    		<i class="iconfont icon-delete" @click="deleteFn"></i>
    	</div>
    	<div class="aBtn">
    		<a v-for="v in historical" href="javascript:;">{{v}}</a>
    	</div>
    </div>
    
    <div class="recommend">
    	<div class="recommendHeader">
    		<p>搜索发现</p>
    		<i class="iconfont icon-browse"></i>
    	</div>
    	<div class="one aBtn" v-if="isShow=='quanbu'">
    		<a v-for="v in recommend[0]" href="javascript:;">{{v}}</a>
    	</div>
    	<div class="two aBtn" v-else-if="isShow=='tianmao'">
    		<a v-for="v in recommend[1]" href="javascript:;">{{v}}</a>
    	</div>
    	<div class="three aBtn" v-else>
    		<a v-for="v in recommend[2]" href="javascript:;">{{v}}</a>
    	</div>
    </div>
  </div>
</template>

<script>
	import { MessageBox,Toast } from 'mint-ui';
  export default {
    name: 'tab',
    data () {
      return {
      	isShow:'quanbu',
	  		historical:['联通流量','福建移动流量','极迅加速器','前端开发','视频教程','猫眼电影','火柴人steam'],
	  		recommend:[
	  			['小米8','iphoneX','nvme固态硬盘','水果风干机 家用','Xbox手柄','神州电脑','太阳镜','弹力鞋','方便面'],
	  			['荣耀10','三星手机','跑步机','mp3','一魔耳机','零食大包','鲜花','民谣吉他','洗发水'],
	  			['男士夏季衬衫','SCARPA越野徒步鞋','三叶草','安踏','全球购','家具','联想笔记本','天王表','面膜']
	  		]
      }
    },
    methods:{
			handleClick(v){
				this.isShow = v;
			},
			deleteFn(){
				MessageBox.confirm('确定删除吗?').then(action => {
				  this.historical = [];
				},err=>{
					console.log('cancel');
				});
			}
    }
  }
</script>

<style lang="less" scoped>
  .tab{
  	position: relative;
  	width: 100%;
  	color: #333333;
  	.tabBar{
  		position: relative;
  		width: 100%;
  		display: flex;
  		height: .7rem;
  		background: #F7F5F4;
  		a{
  			flex: 1;
  			width: 100%;
  			height: 100%;
  			text-align: center;
  			line-height: .7rem;
  		}
  	}
  	.historical{
  		position: relative;
  		width: 100%;
  		font-size: .2rem;
  		.historicalHeader{
  			position: relative;
  			width: 100%;
  			height: .6rem;
  			line-height: .6rem;
  			display: flex;
  			p{
  				flex: 1;
  				margin-left: 10px;
  			}
  			i{
  				padding: 0 10px;
  			}
  		}
  		.aBtn{
  			position: relative;
  			width: 100%;
  			padding: 0 10px;
  			box-sizing: border-box;
  			a{
  				display: inline-block;
  				margin-right: 10px;
  				margin-bottom: 6px;
  				padding: 8px 12px;
  				background: #E0E0E0;
  				border-radius: 20px;
  			}
  		}
  	}
  	.recommend{
  		position: relative;
  		width: 100%;
  		font-size: .2rem;
  		.recommendHeader{
  			position: relative;
  			width: 100%;
  			height: .6rem;
  			line-height: .6rem;
  			display: flex;
  			p{
  				flex: 1;
  				margin-left: 10px;
  			}
  			i{
  				padding: 0 10px;
  			}
  		}
  		.aBtn{
  			position: relative;
  			width: 100%;
  			padding: 0 10px;
  			box-sizing: border-box;
  			a{
  				display: inline-block;
  				margin-right: 10px;
  				margin-bottom: 6px;
  				padding: 8px 12px;
  				background: #E0E0E0;
  				border-radius: 20px;
  			}
  		}
  	}
  }
  .quanbu .quanbu,.tianmao .tianmao,.dianpu .dianpu{color: rgb(253,84,52);}
</style>