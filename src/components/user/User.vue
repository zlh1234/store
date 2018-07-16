<template>
  <div class="user">
		<router-view></router-view>
  </div>
</template>

<script>
	import Storage from '../../util/Storage.js'
	import {mapGetters} from 'vuex'
	import UserInfo from './UserInfo.vue'
	import Main from './Main.vue'
  export default {
    name: 'user',
      data () {
        return {
	  		
        }
      },
      computed:{
      	...mapGetters([
      		'getUser'
      	])
      },
      components:{
      	'v-main':Main
      },
      methods:{
				un(){
					Storage.del('user');
				}
      },
      created(){
      	setTimeout(()=>{
      		if(this.getUser.code == 0){//如果还未登陆
						this.$router.replace('/login');
					}
      	},20);
      }
  }
</script>

<style lang="less" scoped>
  .user{
  	position: relative;
  	width: 100%;
  	background: #ECECEB;
  	min-height: 100%;
  }
</style>