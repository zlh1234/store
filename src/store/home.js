
import {ajax} from '../util/myAxios'
import axios from 'axios';
const state = {
	data:{},
	isOk:false
}

const getters = {
	homeData(state){
		return state
	}
}

const actions = {
	getHomeData({commit}){
		axios.all([
			ajax('/home/menu.json'),//菜单
			ajax('/home/banner.json'),//轮播图
			ajax('/home/side.json'),//淘抢购
			ajax('/home/cate_1.json'),//分类展示 手机数码
			ajax('/home/cate_2.json'),//分类展示 服饰衣帽
			ajax('/home/goods.json')//商品
		])
		.then(axios.spread(function(menu,banner,side,cate_1,cate_2,goods){
			let data = {
				menu:menu.data,
				banner:banner.data,
				side:side.data,
				cate_1:cate_1.data,
				cate_2:cate_2.data,
				goods:goods.data
			};
			commit('getHomeData',data);
		}))
	},
	homeTest(store,v){
		console.log(v);
	}
}

const mutations = {
	getHomeData(state,data){
		state.data = data;
		state.isOk = true;
	}
}

export default {
	state,
	getters,
	actions,
	mutations
}
