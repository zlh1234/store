<template>
  <div class="wrap">
    <div class="wrapper" ref="wrapper">
    	<div class="content">
    			<div v-for="(v,i) in currentData" :key="i" class="divBox">
    				<img v-if="v.topImg" class="titleImg" :src="v.topImg" :alt="v.title"/>
    				<p v-else>{{v.title}}</p>
						<div v-for="(val,index) in v.list" :key="index" class="groupBox">
							<p class="childTitle">{{val.p_title}}</p>
							<ul>
								<li v-for="(value,_index) in val.list" :key="_index" @click="handleClick(value,_index)">
									<img :src="value.src" :alt="value.name"/>
								</li>
							</ul>
						</div>
    			</div>
    	</div>
    </div>
  </div>
</template>

<script>

	import { mapGetters } from 'vuex'
	import BScroll from 'better-scroll';
	import { Toast } from 'mint-ui';
  export default {
    name: '',
    props:['showWho'],
	  data () {
	    return {
	  		contentScroll:null
	    }
	  },
	  computed:{
	  	...mapGetters([
				'categoryData'
			]),
	  	currentData:function(){
	  		if(this.showWho){//第一次会undefind
	  			return this.categoryData.data.cateData.filter(v=>v.cate_shouji_id==this.showWho.id)
	  		}
	  	}
	  },
	  methods:{
			_initScroll(){
				this.contentScroll = new BScroll(this.$refs.wrapper,{
  			bounce: {
					  top: false,
					  bottom: false,
					  left: false,
					  right: false
					},
					click:true
  		});
			},
			handleClick({name}){
				Toast({
				  message: name,
				  position: 'top',
				  duration: 1000,
				  className:'myToast'
				});
			}
	  },
	  mounted(){
	  	this.$nextTick(()=>{
				this._initScroll();
				this.contentScroll.scrollTo(0, 1, 1, 'easing');
				this.contentScroll.scrollTo(0, 0, 1, 'easing');
	  	});
	  }
  }
</script>

<style lang="less" scoped>
  .wrap{
  	position: relative;
  	width: 100%;
  	height: 100%;
  	box-sizing: border-box;
  	.wrapper{
  		position: relative;
  		height: 100%;
  		overflow: hidden;
  		.content{
  			position: relative;
  			width: 100%;
  			padding: 1.2rem 0.2rem;
  			box-sizing: border-box;
  			.divBox{
  				position: relative;
  				width: 100%;
  				.titleImg{
  					width: 100%;
  				}
  				.groupBox{
  					position: relative;
  					width: 100%;
  					margin-top: .2rem;
  					.childTitle{
  						font-size: .2rem;
  						color: #575757;
  						margin-bottom: 5px;
  					}
  					ul{
  						position: relative;
  						width: 100%;
  						box-sizing: border-box;
  						padding: 5px;
  						display: flex;
  						background: white;
  						flex-wrap: wrap;
  						li{
  							width: 33.3%;
  							box-sizing: border-box;
  							border-right: 1px solid #E0E0E0;
  							border-top: 1px solid #E0E0E0;
  							padding:5px; 
  							text-align:center; 
  							&:nth-child(3n){
  								border-right: none;
  								border-right: 0px solid #E0E0E0;
  							}
  							&:nth-child(1){
  								border-top: none;
  								border-top: 0px solid #E0E0E0;
  							}
  							&:nth-child(2){
  								border-top: none;
  								border-top: 0px solid #E0E0E0;
  							}
  							&:nth-child(3){
  								border-top: none;
  								border-top: 0px solid #E0E0E0;
  							}
  							img{
  								width: 80%;
  							}
  						}
  					}
  				}
  			}
  		}
  	}
  }
</style>