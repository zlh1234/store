<template>
  <div class="orderList">
    <ul>
			<li v-for="(v,i) in orderList" :key="i">
				<div class="top">
					<span><i class="iconfont icon-bags"></i>{{v.good_name}}</span>
					<span>{{statusArr[v.type]}}</span>
				</div>
				<div class="mid">
					<img :src="v.good_src"/>
					<p class="p1">{{v.good_title}}</p>
					<p class="p2">￥{{v.good_price}}</p>
				</div>
				<div class="bottom">
					<div class="total">
						共{{v.good_num}}件商品 合计:￥{{(v.good_price+v.good_freight)*v.good_num}} (含运费￥{{v.good_freight}})
					</div>
					<div class="action">
						<div class="actionBtn" v-if="v.type == 0">
							<a href="javascript:;" @click="toPay(v)">去付款</a>
						</div>
						<div class="actionBtn" v-else-if="v.type == 3">
							<a href="javascript:;" @click="delOrder(v)">删除订单</a>
						</div>
						<div class="actionBtn" v-else>
							<a href="javascript:;">查看物流</a>
							<a href="javascript:;">延长收货</a>
							<a href="javascript:;" class="query" @click="query(v)">确认收货</a>
						</div>
					</div>
				</div>
			</li>
		</ul>
  </div>
</template>

<script>
  export default {
    name: 'orderList',
    props:['getOrder','isType'],
      data () {
        return {
	  			statusArr:['待付款','买家已付款','卖家已发货','交易成功']
        }
      },
      computed:{
      	orderList(){
      		if(this.isType=="9999") return this.getOrder.order_list
      		return this.getOrder.order_list.filter(v=>v.type==this.isType)
      	}
      },
      methods:{
				query({order_id}){
					this.$store.dispatch('query',order_id);
				},
				toPay({order_id}){
					this.$store.dispatch('toPay',order_id);
				},
				delOrder({order_id}){
					this.$store.dispatch('delOrder',order_id);
				}
      }
  }
</script>

<style lang="less" scoped>
  .orderList{
  	position: relative;
  	width: 100%;
  	font-size: 14px;
  	color: #333333;
  	ul{
  		position: relative;
  		width: 100%;
  		li{
  			width: 100%;
  			display: flex;
  			flex-direction: column;
  			background: white;
  			margin: 8px 0;
  			box-sizing: border-box;
  			padding: 0 8px;
  			.top{
  				width: 100%;
  				height: .6rem;
  				line-height: .6rem;
  				span:first-child{
  					i{
  						margin: 0 4px;
  						font-size: 12px;
  					}
  				}
  				span:last-child{
  					color: red;
  					margin-right: 5px;
  					float: right;
  				}
  			}
  			.mid{
  				display: flex;
  				width: 100%;
  				padding: 0.1rem 0;
  				img{
  					width: 1.1rem;
  					height: 0.9rem;
  					margin: 0 6px;
  				}
  				.p1{
  					flex: 1;
  				}
  				.p2{
  					width: 1rem;
  					text-align: right;
  					font-weight: bold;
  					margin-right: 5px;
  				}
  			}
  			.bottom{
  				width: 100%;
  				display: flex;
  				flex-direction: column;
  				align-items:flex-end;
  				box-sizing: border-box;
  				padding-right: 5px;
  				.total{
  					padding: 5px 0;
  				}
  				.action{
						padding: 5px 0;
						.actionBtn{
							a{
								display: inline-block;
								width: 1.3rem;
								height: .4rem;
								line-height: .4rem;
								text-align: center;
								border: 1px solid #CCCCCC;
								border-radius: .25rem;
								margin: 0 2px;
								&.query{
									border: 1px solid #FA4013;
									color: #FA4013;
								}
							}
						}
  				}
  			}
  		}
  	}
  }
</style>