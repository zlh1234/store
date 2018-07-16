import { ajax } from '../util/myAxios'
import Axios from 'axios';

const state = {
	isAll:false,//全选按钮
	isType:false,//管理按钮
	total:0,//合计金额
	selectNum:0,//选择的个数
	data:[]//数据
}

const getters = {
	getCart(state){
		return state
	}
}

const actions = {
	/*获取购物车列表*/
	getCartList({commit},username){
		Axios.all([ajax('/cart/cart.json')]).then(Axios.spread(function(res){
			let currentData = res.data.filter(v=>v.user == username);
			let cartList = currentData[0].cart_list.map(val=>({...val,isSelect:false}));
			commit('returnCartState',cartList);
		}))
	},
	/*选择按钮*/
	shopSelect({commit,state},shop_id){
		/*选择按钮等于true/false*/
		let arr = state.data.map(v=>v.shop_id==shop_id ? {...v,isSelect:!v.isSelect} : v);
		commit('returnCartState',arr);
		commit('isAllSelect');
		commit('totalComputed');
	},
	/*增加单项商品的数量*/
	addCartNum({commit,state},good_id){
		let arr = state.data.map(v=>{
			return v.good_id == good_id ? {...v,"cart_num":v.cart_num+1} : v
		});
		commit('returnCartState',arr);
		commit('totalComputed');
	},
	/*减少单项商品的数量*/
	minusCartNum({commit,state},good_id){
		/*如果当前数量大于1则可以减*/
		let arr = state.data.map(v=>{
			return v.good_id==good_id && v.cart_num>1 ? {...v,"cart_num":v.cart_num-1} : v
		});
		commit('returnCartState',arr);
		commit('totalComputed');
	},
	//全选按钮
	selectAll({commit,state}){
		let arr = state.isAll?state.data.map(v=>({...v,"isSelect":false})):state.data.map(v=>({...v,"isSelect":true}));
		commit('returnCartState',arr);
		commit('totalComputed');
		commit('isAllSelect');
	},
	/*删除选择的商品*/
	deleteFn({commit,state}){
		let arr = state.data.filter(v=>!v.isSelect);
		commit('returnCartState',arr);
		commit('totalComputed');
		commit('isAllSelect');
	},
	/*增加商品到购物车*/
	addCart({commit,state},arr){
		let { good_id } = arr;
		let newArr = [];
		let isBe = 0;
		state.data.forEach(v=>{
			if(v.good_id == good_id){
				isBe = 1;
				newArr.push({...v,"cart_num":v.cart_num+1});
			}else{
				newArr.push(v);
			}
		});
		if(!isBe) newArr.push(arr);
//		console.log(newArr);
		commit('returnCartState',newArr);
	},
	/*结算，commit到order.js*/
	accounts({dispatch,commit,state}){
		let arr1 = [];//没有选中的返回到购物车
		let arr2 = [];//选中的添加到我的订单
		let a = state.data.forEach(v=>{
			if(v.isSelect){
				let toOrder = {
					"good_id":v.good_id,
					"good_title":v.good_title,
					"good_src":v.good_src,
					"good_name":v.good_name,
					"good_price":v.good_price,
					"good_freight":v.good_freight,
			        "good_num":v.cart_num
				}
				arr2.push(toOrder);
			}else{
				arr1.push(v);
			}
		})
		commit('returnCartState',arr1);
		commit('totalComputed');
		commit('isAllSelect');
		dispatch('getOrder').then(()=>{
			setTimeout(function(){
				dispatch('purchase',arr2);
			},20);
		});
	}
}

const mutations = {
	changeType(){
		state.isType = !state.isType;
	},
	/*返回整个数组给state.data*/
	returnCartState(state,v){
		state.data = v;
	},
	totalComputed(state){
		//把已选中的过滤出来再把对应的价格*数量返回到新数组
		let arr = state.data.filter(v=>v.isSelect).map(v=>v.good_price*v.cart_num);
		//把新数组的数加起来
		let currTotal = arr.length && arr.reduce((total,currentValue)=>total + currentValue);
		
		state.total = currTotal;//返回合计的金额
		state.selectNum = arr.length;//返回已选择的数量
	},
	isAllSelect(state){
		if(!state.data.length) {
			state.isAll = false;
			return false;
		}
		state.data.every(v=>v.isSelect) ? state.isAll = true : state.isAll = false;
	}
}

export default {
	state,
	getters,
	actions,
	mutations
}
