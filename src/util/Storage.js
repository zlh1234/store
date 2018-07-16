const Storage = {
	set(key,val){
		localStorage.setItem(key, val);
	},
	get(key){
		let user = localStorage[key];
		return user
	},
	del(key){
		localStorage.removeItem(key);
	}
}
export default Storage;