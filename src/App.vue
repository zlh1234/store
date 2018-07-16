<template>
  <div id="app">
    <router-view></router-view>
    <footer-nav v-if="isShow"></footer-nav>
  </div>
</template>

<script>
	import Storage from './util/Storage.js'
	import footerNav from '@/components/common/FooterNav'
	import {mapGetters,mapActions} from 'vuex'  
	const routes = ['Home','Category','Message','Cart','User'];
export default {
  name: 'App',
  data(){
  	return {
  		isShow:	true
  	}
  },
  components:{
  	'footer-nav':footerNav
  },
  computed:{
  	...mapGetters([
  		'getUser'
  	])
  },
  methods:{
  	
  },
  created(){
//	let currentUserName = null;//记录用户名

  	this.$store.dispatch('getHomeData');//首页数据
  	this.$store.dispatch('getCategoryData');//分类数据
  	
  	//检查有没有登陆过
  	let currentUser = Storage.get('user');
  	if(currentUser){
  		let {username,password} = JSON.parse(currentUser);
//		currentUserName = username;
  		this.$store.dispatch('login',{username,password}).then(()=>{
  			this.$store.dispatch('getMsgList',username);
  			this.$store.dispatch('getCartList',username);
  		});
//			this.$store.dispatch('getMsgList',currentUserName);
  	}
		
  	let a = routes.indexOf(this.$route.name);//如果当前页面路由在数组中就显示导航栏
		if(a==-1){
			this.isShow = false;
		}else{
			this.isShow = true;
		}
  },
  mounted(){
		
  },
  watch:{
  	'$route'(to,from){
  		let routeName = to.name;
  		let a = routes.indexOf(routeName);
  		if(a==-1){
  			this.isShow = false;
  		}else{
  			this.isShow = true;
  		}
  	}
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  height: 100%;
}
</style>
