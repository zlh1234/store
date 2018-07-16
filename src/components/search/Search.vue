<template>
  <div class="search">
    <div class="header">
    	<i class="iconfont icon-back" @click="back"></i>
    	<div class="input">
    		<input type="text" v-focus name="search" id="search" placeholder="输入搜索内容" />
    		<i class="iconfont icon-saoyisao"></i>
    	</div>
    	<a href="javascript:;">搜索</a>
    </div>
    
    <div class="main">
    	<v-tab></v-tab>
    </div>
  </div>
</template>

<script>
	import Tab from './Tab'
  export default {
    name: 'search',
    data () {
      return {
	  		
      }
    },
    components:{
    	'v-tab':Tab
    },
    directives: {
		  focus: {
		    // 指令的定义
		    inserted: function (el) {
		      el.focus()
		    }
		  }
		},
    methods:{
			back(){
				this.$router.back();
			}
    }
  }
</script>

<style lang="less" scoped>
  .search{
  	position: relative;
  	width: 100%;
  	min-height: 100%;
  	font-size: .25rem;
  	background: #FAFAFA;
  	.header{
  		position: relative;
  		top: 0;
  		left: 0;
  		height: .8rem;
  		width: 100%;
  		display: flex;
  		align-items: center;
  		background: #F7F5F4;
  		line-height: .8rem;
  		&>i{
  			padding: 0 8px;
  			font-size: .3rem;
  		}
  		.input{
  			padding: 0 8px;
  			height: .55rem;
  			background: #FFFFFF;
  			line-height: .55rem;
  			border-radius: 20px;
  			flex: 1;
  			display: flex;
  			input{
  				color: #888888;
  				padding: 0 5px;
  				flex: 1;
  			}
  			i{
  				padding: 0 5px;
  			}
  		}
  		a{
  			display: block;
  			height: .45rem;
  			line-height: .45rem;
  			padding: 0 10px;
  			border-radius: 20px;
  			background-image:linear-gradient(to right,rgb(253,138,71),rgb(253,84,52));
  			color: white;
  			margin: 0 10px;
  		}
  	}
  	.main{
  		position: relative;
  		width: 100%;
  	}
  }
</style>