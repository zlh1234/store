import {ajax} from '../util/myAxios';
import axios from 'axios';
import Storage from '../util/Storage.js'

const state = {
	code:0,
	user:{},
	msg:''
}

const getters = {
	getUser(state){
		return state
	}
}

const actions = {
	login({commit},user){
		const {username,password} = user;
		axios.get('/static/data/user/users.json?t='+new Date().getTime()).then(res=>{
			const userList = res.data;
			const user = userList.filter(v=>v.username == username && v.password == password);
			commit('login',user);
		})
	},
	userTest(store){
		store.dispatch('homeTest',12);
	}
}

const mutations = {
	login(state,user,root){
		if(user.length){
			state.code = 1;
			state.user = user[0];
			state.msg = "";
			let a = JSON.stringify({"username":state.user.username,"password":state.user.password});
			Storage.set('user',a);
		}else{
			state.code = 0;
			state.user = [];
			state.msg = "登陆失败，请检查用户名和密码";
		}
	}
}


export default {
	state,
	getters,
	actions,
	mutations
}
