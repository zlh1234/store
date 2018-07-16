
import timer from '../util/timer.js'
import {ajax} from '../util/myAxios'
import axios from 'axios';
const state = {
	msgList:[],
	msgIsRead:0
}

const getters = {
	msgList(state){
		return state.msgList
	},
	msgIsRead(state){
		return state.msgIsRead
	}
}

const actions = {
	getMsgList({commit},username){
		let arr = [];
		axios.all([
			ajax('/message/message.json')
		]).then(axios.spread(function(data){
			let list = data.data;
			arr = list.filter(v=>{
				return v.from==username || v.to==username
			});
			commit('getMsgList',{arr,username});
		}))
	},
	readMessage({commit},v){
		commit('readMessage',v);
	},
	sendMessage({commit},v){
		commit('sendMessage',v);
	}
}

const mutations = {
	getMsgList(state,{arr,username}){
		let sum = 0;//记录未读的总数
		let newArr = [];
		arr.forEach(v=>{
			let currentSum = 0;//记录当前的未读数
			v.msg_list.forEach(val=>{
				val.msg_time = timer(val.msg_time);
				if(val.msg_from!=username && val.isRead==false) {
					sum++;
					currentSum++;
				}
			});
			newArr.push({...v,"isRead":currentSum});
		});
		state.msgList = newArr;
		state.msgIsRead = sum;
	},
	readMessage(state,v){
		const { id,username } = v;
		let currentSum = 0;//记录当前的未读数
		let arr = state.msgList.map((v,i)=>{
			if(v.id == id){
				v.isRead = 0;
				v.msg_list.forEach(val=>{
					if(val.msg_from!=username && val.isRead==false){
						val.isRead=true;	//让其他人来的消息都变成已读
						currentSum++;
					}
				});
			}
			return v
		});
		state.msgIsRead = state.msgIsRead-currentSum;//总数减去已读的数量
	},
	sendMessage(state,{id,thisMsg}){
		let tim = thisMsg.msg_time;
		state.msgList = state.msgList.map(val=>{
			if(val.id == id){
				val.msg_list.push({...thisMsg,msg_time:timer(tim)});
			}
			return val
		});
	}
}

export default {
	state,
	getters,
	actions,
	mutations
}
