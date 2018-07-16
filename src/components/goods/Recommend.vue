<template>
  <div class="recommend">
    <v-goods :goodsList="homeData.data.goods" isType="1"></v-goods>
  </div>
</template>

<script>
	import {mapGetters} from 'vuex'
	import Goods from '../common/Goods.vue'
  export default {
    name: 'recommend',
    data () {
      return {
	  		
      }
    },
    computed:{
    	...mapGetters([
	  		'homeData'
	  	])
    },
    components:{
      	'v-goods':Goods,
      },
    methods:{
		
    }
  }
</script>

<style lang="less" scoped>
  .recommend{
  	position: relative;
  	width: 100%;
  	box-sizing: border-box;
  	background: #EEEEEE;
  	font-size: .25rem;
  	overflow: auto;
    padding-bottom: 1rem;
  }
</style>