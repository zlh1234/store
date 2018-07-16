<template>
  <div class="msgInfo">
    <v-header :myTitle="currentMsg.from_name"></v-header>
    <div class="content">
    	<!--<button @click="handleClick">点击</button>-->
    	<ul>
    		<li v-for="(v,i) in currentMsg.msg_list" :class="{'right':v.msg_from==currentUser}">
    			<p>{{v.msg_time}}</p>
    			<span>{{v.msg_info}}</span>
    		</li>
    	</ul>
    </div>
    <div class="footer" ref="footer">
    	<div class="input">
    		<input v-model="sendText" type="text" @focus="inputFocus" @keypress.enter="sendMessage" />
    	</div>
    	<div class="button" @click="sendMessage">
    		发送
    	</div>
    </div>
  </div>
</template>

<script>
	import SimpleHeader from '../common/SimpleHeader'
	import {mapGetters} from 'vuex'
  export default {
    name: 'msgInfo',
      data () {
        return {
	  			currentMsg:'',
	  			currentUser:'',
	  			sendText:''
        }
      },
		  components:{
		  	'v-header':SimpleHeader
		  },
      computed:{
      	...mapGetters([
      		'msgList',
      		'getUser'
      	])
      },
      methods:{
      	inputFocus(){
      		setTimeout(()=>{
      			let footer = this.$refs.footer;
      			footer.scrollIntoView(true);
						footer.scrollIntoViewIfNeeded();
      		},2000);
      	},
				handleClick(){
					console.log(this.msgList);
				},
				back(){
					this.$router.back();
				},
				sendMessage(){
					if(this.sendText){
						let thisMsg = {
							"isRead":false,
							"msg_from":this.currentUser,
							"msg_id":this.currentMsg.msg_list.length+1,
							"msg_info":this.sendText,
							"msg_time":new Date().getTime()
						}
						let sendData = {"id":this.currentMsg.id,thisMsg};
						this.$store.dispatch('sendMessage',sendData);
						this.sendText = '';
					}
				}
      },
      created(){
      	setTimeout(()=>{
      		const {username} = this.getUser.user;
      		this.currentUser = username;
      		//筛选出当前id的聊天内容
      		if(this.msgList.length == 0){
	  				this.$store.dispatch('getMsgList',this.currentUser);
	  			}
	  			setTimeout(()=>{
	  				//设置成已读
	  				const {id} = this.$route.query;
    				this.$store.dispatch('readMessage',{id,username});
    				//获取当前聊天列表
						let currentMsg = this.msgList.filter(v=>{
				      	return v.id == this.$route.query.id
				      });
				    this.currentMsg = currentMsg[0];
	  			},20);
//    		alert(this.currentUser);
      	},20);
      }
  }
</script>

<style lang="less" scoped>
  .msgInfo{
  	position: relative;
  	top: 0;
  	left: 0;
  	width: 100%;
  	height: 100%;
  	.content{
  		position: absolute;
  		top: .8rem;
  		left: 0;
  		bottom: 1rem;
  		width: 100%;
  		overflow: auto;
  		ul{
  			position: relative;
  			width: 96%;
  			font-size: .28rem;
  			margin: 0 auto;
  			li{
  				width: 100%;
  				text-align: left;
  				padding: 5px 0;
  				p{
  					width: 100%;
  					text-align: center;
  					font-size: .22rem;
  					color: #ACACAC;
  					margin: .2rem 0;
  				}
  				span{
  					padding: 5px 10px;
  					border-radius: 20px;
  					background: #CCCCCC;
  				}
  				&.right{
  					text-align: right;
  					span{
	  					padding: 5px 10px;
	  					border-radius: 20px;
	  					background: #1CA70D;
	  					color: white;
	  				}
  				}
  			}
  		}
  	}
  	.footer{
  		position: absolute;
  		bottom: 0;
  		left: 0;
  		width: 100%;
  		height: 1rem;
  		border-top:1px solid #F0F0F0;
  		display: flex;
  		background: #C4C4C4;
  		.input{
  			position: relative;
  			flex: 1;
  			align-items: center;
  			display:flex;
  			input{
  				width: 100%;
  				border: 1px solid #C9CDC8;
  				height: .8rem;
  				font-size: .32rem;
  				border-radius: 10px;
  				background: white;
  				box-sizing: border-box;
  				padding-left: 5px;
  				margin-left: 5px;
  			}
  		}
  		.button{
  			width: 1.2rem;
  			height: 100%;
  			line-height: 1rem;
  			font-size: .35rem;
  			text-align: center;
  		}
  	}
  }
</style>