<template>
  <div class="simpleHeader" :style="{background:backColor}">
    	<i v-show="isShow" class="iconfont icon-back" @click="back"></i>
    	{{myTitle}}
  </div>
</template>

<script>
  export default {
    name: 'simpleHeader',
    props:{
    	'myTitle':{
    		type:String
    	},
    	'backColor':{
    		'type':String,
    		'default':'transparent'
    	},
    	'isShow':{
    		'type':Boolean,
    		'default':true
    	}
    },
	  data () {
	    return {
	  		
	    }
	  },
	  methods:{
			back(){
				this.$router.go(-1);
			}
	  }
  }
</script>

<style lang="less" scoped>
  .simpleHeader{
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: .8rem;
		line-height: .8rem;
		font-size: .35rem;
		text-align: center;
		border-bottom:1px solid #F0F0F0;
		z-index: 99999;
		i{
			position: absolute;
			left: 0;
			top: 0;
			height: 100%;
			width: 1rem;
			font-size: .55rem;
		}
	}
</style>