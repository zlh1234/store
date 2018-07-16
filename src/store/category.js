import { ajax } from '../util/myAxios'
import Axios from 'axios';
const state = {
	data:{
		cateList:[],
		cateData:[]
	},
	isOk:false
}

const getters = {
	categoryData(state){
		return state
	}
}

const actions = {
	getCategoryData({commit}){
		Axios.all([
			ajax('/category/categoryList.json'),
			ajax('/category/categoryData.json')
		])
		.then(Axios.spread(function(cateList,cateData){
			commit('getCategoryData',{"cateList":cateList.data,"cateData":cateData.data})
		}))
	}
}

const mutations = {
	getCategoryData(state,{cateList,cateData}){
		state.data = {cateList,cateData};
		state.isOk = true;
	}
}


export default {
	state,
	getters,
	actions,
	mutations
}
