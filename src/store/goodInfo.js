import {ajax} from '../util/myAxios'
import axios from 'axios';

const state = {
	getGoodInfo:{
		isOk:3,
		data:{}
	}
}

const getters = {
	getGoodInfo(state){
		return state.getGoodInfo
	}
}

const actions = {
	search({commit},{v}){
		axios.all([
			ajax('/home/goods.json')
		]).then(axios.spread(function(res){
			let arr = res.data.list.filter(val=>val.good_id == v);
			commit('search',arr);
		}))
	}
}

const mutations = {
	search(state,arr){
		if(arr.length){
			state.getGoodInfo.isOk = 1;
			state.getGoodInfo.data = arr[0];
		}else{
			state.getGoodInfo.isOk = 0;
			state.getGoodInfo.data = {};
		}
	}
}

export default {
	state,
	getters,
	actions,
	mutations
}
