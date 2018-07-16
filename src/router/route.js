import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/home/Home';//主页
import Category from '@/components/category/Category';//分类页
import Message from '@/components/message/Message';//消息
import Cart from '@/components/cart/Cart';//购物车
import User from '@/components/user/User';//用户中心

import MsgInfo from '@/components/message/MsgInfo';//聊天页
import Login from '@/components/login/Login';//登陆

import Order from '@/components/user/Order';//所有订单
import UserMain from '@/components/user/Main';//个人中心主页

import GoodInfo from '@/components/goods/GoodInfo'//商品详细

import Search from '@/components/search/Search'//搜索页面

Vue.use(Router)

export default new Router({
	mode:'history',
	routes: [
	  {path: '/',name: 'Home',component: Home},
	  {path: '/category',name: 'Category',component: Category},
	  {path: '/message',name: 'Message',component: Message},
	  {path: '/cart',name: 'Cart',component: Cart},
	  {
	   	path: '/user',
	    component: User,
	    children:[
	    	{path:'order',name:'UserOrder',component:Order},
	    	{path:'',name:'User',component:UserMain}
	    ]
	  },
	  {path:'/msginfo',name:'MsgInfo',component:MsgInfo},
	  {path:'/login',name:'Login',component:Login},
	  {path:'/goodinfo',name:'GoodInfo',component:GoodInfo},
	  {path:'/search',name:'Search',component:Search}
	]
})
