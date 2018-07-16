<template>
  <div class="login">
    <v-header myTitle="登录"></v-header>
    <div class="main">
    	
    	<div class="input">
    		<i class="iconfont icon-account"></i>
    		<input v-model="username" type="text" placeholder="用户名" />
    	</div>
    	<div class="input">
    		<i class="iconfont icon-password"></i>
    		<input v-model="password" type="password" placeholder="密码" />
    	</div>
    	<p v-show="!getUser.code" class="error">{{getUser.msg}}</p>
    	<div class="loginBtn">
    		<p @click="login">登陆</p>
    	</div>
    </div>
  </div>
</template>

<script>
	import SimpleHeader from '../common/SimpleHeader'
	import {mapGetters} from 'vuex'
  export default {
    name: 'Login',
	  data () {
	    return {
	  		username:'zlh',
	  		password:'123456'
	    }
	  },
	  computed:{
	  	...mapGetters([
	  		'getUser'
	  	])
	  },
	  components:{
	  	'v-header':SimpleHeader
	  },
	  methods:{
			login(){
				const user = {username:this.username,password:this.password};
				this.$store.dispatch('login',user);
				setTimeout(()=>{
					if(this.getUser.code){
						this.$router.push('/');
  					location.reload();
					}
				},20)

			}
	  },
	  created(){
				
	  }
  }
</script>

<style lang="less" scoped>
  .login{
  	position: relative;
  	top: 0;
  	left: 0;
  	width: 100%;
  	min-height: 100%;
  	font-size: .35rem;
  	.main{
  		position: absolute;
  		top: .8rem;
  		left: 0;
  		bottom: 0;
  		width: 100%;
  		box-sizing: border-box;
  		padding-top: 2rem;
  		overflow: auto;
  		.input{
  			position: relative;
  			width: 80%;
  			height: .7rem;
				border: 1px solid #CCCCCC;
  			border-radius: 8px;
  			display: flex;
  			align-items: center;
  			margin: 10px auto;
  			i{
  				padding: 0 5px;
  			}
  			input{
  				width: 100%;
  				height: 100%;
  			}
  		}
  		.error{
  			position: relative;
  			width: 80%;
  			margin: 0 auto;
  			color: red;
  			font-size: .28rem;
  		}
  		.loginBtn{
				position: relative;
				top: 5px;
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
  	}
  }
</style>