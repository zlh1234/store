<template>
  <div class="category" >
  	<v-categoryheader></v-categoryheader>
    <div class="wrapper" ref="wrapper">
		  <ul class="content" ref="content">
		    <li v-for="(v,i) in categoryData.data.cateList" @click="handleSelect(v,i)"
		    	:class="{'active':isActive==i}"
		    	:key="i">{{v.name}}</li>
		  </ul>
		</div>
		
		<div class="right">
			<v-content :showWho="showWho"></v-content>
		</div>
		
  </div>
</template>

<script>
	import Header from '../common/Header';
	import Content from './Content'
	import BScroll from 'better-scroll';
	import { mapGetters } from 'vuex'
  export default {
    name: '',
    components:{
    	'v-categoryheader':Header,
    	'v-content':Content
    },
	  data () {
	    return {
	    	scroll:null,
				isActive:0,//当前选择 样式
	    }
	  },
	  computed:{
			...mapGetters([
				'categoryData'
			]),
			showWho(){
				return this.categoryData.data.cateList[this.isActive]
			}
	  },
	  methods:{
			handleSelect(v,i){
				if(this.isActive!=i){
					this.isActive = parseInt(i);
				}
			},
			_initScroll(){
				this.scroll = new BScroll(this.$refs.wrapper, {
	  			bounce: {
					  top: false,
					  bottom: false,
					  left: false,
					  right: false
					},
					click:true,
	  		});
			}
	  },
	  created(){
			
	  },
	  mounted(){
	  	this.$nextTick(()=>{
				this._initScroll();
		  });
	  }
  }
</script>

<style lang="less" scoped>
  .category{
  	position: relative;
  	font-size: .26rem;
  	width: 100%;
  	height: 100%;
  	background: #F4F4F4;
  	display: flex;
  	.wrapper{
  		position: relative;
  		width: 1.8rem;
  		height: 100%;
  		overflow: hidden;
  		.content{
  			position: relative;
  			width: 100%;
  			background: white;
  			padding-top: .9rem;
  			padding-bottom: 1.1rem;
  			li{
  				width: 100%;
  				height: 1rem;
  				line-height: 1rem;
  				text-align: center;
  				box-sizing: border-box;
  				border-bottom: 1px solid #EAEAEA;
  				border-right: 1px solid #EAEAEA;
  				&:last-child{
  					border-bottom: none;
  					border-bottom: 0px solid #EAEAEA;
  				}
  				&.active{
  					background: #F4F4F4;
  					color: red;
  					border-right: none;
  					border-right: 0 solid #EAEAEA;
  				}
  			}
  		}
  	}
  	.right{
  		position: relative;
  		flex: 1;
  		height: 100%;
  		background: #F4F4F4;
  	}
  }
</style>