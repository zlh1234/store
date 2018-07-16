<template>
  <div class="home" v-if="homeData.isOk">
  	<!--头部-->
  	<v-homeheader></v-homeheader>
		<main>
			<!--轮播图-->
			<v-banner :banner="homeData.data.banner"></v-banner>
			<!--菜单-->
			<v-menu :menuList="homeData.data.menu"></v-menu>
			<!--淘宝头条-->
			<v-hotnews></v-hotnews>
			<!--主体内容-->
			<v-main></v-main>
			<br />
		</main>
  </div>
</template>

<script>
	import { Indicator } from 'mint-ui';
	import {mapGetters} from 'vuex'
	import Header from '../common/Header'
	import Banner from './Banner'
	import Menu from './Menu'
	import HotNews from './HotNews'
	import Main from './main/Main'
  export default {
    name: 'Home',
    components:{
    	'v-homeheader':Header,
    	'v-banner':Banner,
    	'v-menu':Menu,
    	'v-hotnews':HotNews,
    	'v-main':Main
    },
    computed:{
    	...mapGetters([
	  		'homeData'
	  	])
    },
	  data () {
	    return {
	    	
	    }
	  },
	  methods:{
	  	
	  },
	  watch:{
	  	homeData:function(currVal,prevVal){
//	  		console.log(currVal,prevVal);
	  	}
	  },
	  created(){
	  	
	  },
	  mounted(){

	  }
  }
</script>

<style lang="less" scoped>
  .home{
  	position: relative;
  	font-size: 16px;
  	background: #F4F4F4;
  	margin-bottom: 1.15rem;
  	main{
  		position: relative;
  		padding-top: .9rem;
  	}
  }
</style>