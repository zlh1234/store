import { ajax } from '../util/myAxios'
import axios from 'axios';
const state = {
	order:{
		order_list:[],
		user:'',
		isLoading:false
	}
}
let isLoading = false;

const getters = {
	getOrder(state){
		return state.order
	}
}

const actions = {
	getOrder({rootState,commit}){
		if(!isLoading){
			ajax('/order/order.json')
				.then(res=>{
					const username = rootState.user.user.username;
//					alert(username);
					let arr = res.data.filter(v=>v.user == username);
					isLoading = true;
					commit('getOrder',arr);
				});
		}
	},
	purchase({rootGetters,commit,state},value){
		let { username } = rootGetters.getUser.user;
		let orderID = state.order.order_list.length;
		let arr = value.map(v=>{
			orderID++;
			return {...v,"order_id":orderID,"type":1}
		});
		commit('returnOrderState',[...arr,...state.order.order_list]);
	},
	/*确认收货*/
	query({commit,state},order_id){
		let arr = state.order.order_list.map(v=>v.order_id==order_id ? {...v,"type":3} : v);
		commit('returnOrderState',arr);
	},
	/*付款*/
	toPay({commit,state},order_id){
		let arr = state.order.order_list.map(v=>v.order_id==order_id ? {...v,"type":1} : v);
		commit('returnOrderState',arr);
	},
	/*删除订单*/
	delOrder({commit,state},order_id){
		let arr = state.order.order_list.filter(v=>!(v.order_id==order_id));
		commit('returnOrderState',arr);
	}
}

const mutations = {
	getOrder(state,arr){
		if(arr.length){
			state.order = arr[0];
		}
	},
	returnOrderState(state,arr){
		state.order.order_list = arr;
	}
}


export default {
	state,
	getters,
	actions,
	mutations
}
