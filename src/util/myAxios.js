
import Axios from 'axios';
import { Indicator } from 'mint-ui';

export const inteduce = Axios.create();

//inteduce拦截器---请求前拦截
inteduce.interceptors.request.use(config => {
	Indicator.open({//显示loading
	  spinnerType: 'snake'
	});
	return config;
}, error => Promise.reject(error));
//inteduce拦截器---响应拦截
inteduce.interceptors.response.use(response => {
	setTimeout(function(){
		Indicator.close();
	},100)
	return response;
}, error => {
	Indicator.close();
	return Promise.reject(error);
});


//导出
export const ajax = function(url){ 
	let strURL = "/static/data"+url+'?t='+new Date().getTime();
	return inteduce.get(strURL);
};
