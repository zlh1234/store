
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
import home from './home.js'
import category from './category.js'
import message from './message.js'
import user from './user.js'
import order from './order.js'
import goodInfo from './goodInfo.js'
import cart from './cart.js'
export default new Vuex.Store({
	modules:{
		home,//主页
		category,//分类
		message,//消息
		user,//用户中心
		order,//我的订单
		goodInfo,//商品详细信息
		cart//购物车
	}
});
