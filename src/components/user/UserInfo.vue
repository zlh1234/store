<template>
  <div class="userInfo">
		<div class="avatar">
			<img src="/static/img/user/avatar.jpg" alt="avatar" />
		</div>
		<div class="nickName">
			<p>{{getUser.user.nickname}}</p>
		</div>
		<div class="about">
			<div class="icon">V</div>
			<div class="content">
				<p>{{getUser.user.mytype}}会员</p>
				<p>淘气值{{getUser.user.taonum}}</p>
			</div>
			<div class="more">
				<i class="iconfont icon-more"></i>
			</div>
		</div>
	</div>
</template>

<script>
	import {mapGetters} from 'vuex'
  export default {
    name: '',
      data () {
        return {
	  		
        }
      },
      computed:{
      	...mapGetters([
      		'getUser'
      	])
      },
      methods:{
		
      }
  }
</script>

<style lang="less" scoped>
  .userInfo{
		position: relative;
		width: 100%;
		height: 2rem;
		display:flex;
		align-items: center;
		border-bottom:1px solid #E0E0E0;
		/*background-image:linear-gradient(rgb(249,68,39),rgb(255,135,91));*/
		background:rgb(249,68,39);
		.avatar{
			width: 1.2rem;
			height: 1.2rem;
			border-radius: 50%;
			margin: 0 10px;
			border:3px solid #CCCCCC;
			img{
				width: 100%;
				border-radius: 50%;
			}
		}
		.nickName{
			flex: 1;
			font-size: .32rem;
			color: white;
			margin-right: 10px;
			p{
				width: 2.5rem;
				overflow: hidden;
				text-overflow:ellipsis;
				white-space: nowrap;
			}
		}
		.about{
			position: relative;
			right: 0;
			width: 2rem;
			height: .7rem;
			background: #FE921A;
			border-top-left-radius: .8rem;
			border-bottom-left-radius: .8rem;
			display: flex;
			align-items: center;
			font-size: .2rem;
			color: white;
			.icon{
				position: relative;
				width: .4rem;
				height: .4rem;
				line-height: .4rem;
				text-align: center;
				font-size: .35rem;
				color: #FE921A;
				border-radius: 50%;
				background: white;
				transform: rotate(15deg);
				margin: 0 .1rem;
				font-weight: bold;
			}
			.content{
				position: relative;
				text-align: center;
				height: 100%;
				display: flex;
				flex-direction: column;
				justify-content: center;
				p{
					padding: .02rem 0;
				}
			}
			.more{
				position: relative;
				right: 0;
				i{
					font-size: .3rem;
				}
			}
		}
	}
</style>