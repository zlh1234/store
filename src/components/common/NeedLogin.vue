<template>
  <div class="needLogin">
    <p @click="toLogin">请先登陆哦</p>
  </div>
</template>

<script>
  export default {
    name: 'needLogin',
    props:{
    	path:{
    		type:String,
    		required:true
    	}
    },
	  data () {
	    return {
	  		
	    }
	  },
	  methods:{
			toLogin(){
				this.$router.push(this.path);
			}
	  }
  }
</script>

<style lang="less" scoped>
  .needLogin{
		position: absolute;
		top: 2rem;
		left: 0;
		width: 100%;
		text-align: center;
		p{
			width: 80%;
			height: 40px;
			background: #FF2C2C;
			color: white;
			line-height: 40px;
			text-align: center;
			margin: 0 auto;
			border-radius: 5px;
		}
	}
</style>