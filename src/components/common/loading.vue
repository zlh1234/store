<template>
  <div class="loading">
    123123
  </div>
</template>

<script>
	import { Indicator } from 'mint-ui';
  export default {
    name: '',
      data () {
        return {
	  		
        }
      },
      methods:{
				
      },
      created(){
      	Indicator.open();
      },
      mounted(){
      	Indicator.open();
      }
  }
</script>

<style lang="less" scoped>
  .loading{
  	position: fixed;
  	top: 0;
  	left: 0;
  	bottom: 0;
  	right: 0;
  	background: white;
  	z-index: 99999;
  }
</style>