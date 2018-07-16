<template>
  <div class="details">
    <span>详情</span>
    <div class="content">
    	<p>我是详情页我是详情页</p>
    	<p>我是详情页</p>
    	<p>我是详情页我是详情页我是详情页我是详情页我是详情页详情页我</p>
    	<p>我是详情页我是详情页</p>
    	<p>我是详情页我详情页我是详情页我是详情页</p>
    	<p>我是详情详情页我页</p>
    	<p>我是详情页情情</p>
    	<p>我是详详情页我详情页我情页</p>
    	<p>我是详情页我是详情页我是详情页</p>
    	<p>我是详情页</p>
    	<p>我是详是是情页</p>
    	<p>我情详情页</p>
    	<p>我是详是情页</p>
    	<p>我是详情页我是详情页我是详情页</p>
    	<p>我是是详情页</p>
    	<p>我是详是情页</p>
    	<p>我是详情页我是详情页我是详情页我是详情页我是详情页详情页我</p>
    	<p>我是详情页我是详情页</p>
    	<p>我是详情页我详情页我是详情页我是详情页</p>
    	<p>我是详情详情页我页</p>
    	<p>我是详情页我是详情页我是详情页</p>
    	<p>我是是详情页</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'v-details',
    data () {
      return {
	  		
      }
    },
    methods:{
		
    }
  }
</script>

<style lang="less" scoped>
  .details{
  	position: relative;
  	width: 100%;
  	box-sizing: border-box;
  	background: #EEEEEE;
  	font-size: .25rem;
  	text-align: center;
  	span{
  		position: relative;
  		display: inline-block;
  		margin: 12px 0;
  		color:#878787; 
  		font-size:.2rem; 
  		&::after{
  			content: '';
  			position: absolute;
  			top: 50%;
  			right: -32px;
  			width: 30px;
  			height: 1px;
  			background: #CCCCCC;
  		}
  		&::before{
  			content: '';
  			position: absolute;
  			top: 50%;
  			left: -32px;
  			width: 30px;
  			height: 1px;
  			background: #CCCCCC;
  		}
  	}
  	.content{
  		position: relative;
  		width: 100%;
  		text-align: left;
  		background: white;
  		box-sizing: border-box;
  		padding: 5px 10px;
  		p{
  			line-height: .28rem;
  			color: #333333;
  		}
  	}
  }
</style>