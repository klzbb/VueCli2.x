import axios from 'axios'
const service = axios.create({
	baseURL:process.env.BASE_API,
	timeout: 5000,
})

// request interceptor
service.interceptors.request.use(config => {
	if (sessionStorage.getItem('token')) {
		config.headers['X-Token'] = sessionStorage.getItem('token')
	}
	return config
}, error => {

	Promise.reject(error)
})

// respone interceptor
service.interceptors.response.use(
	response => response,
	error => {
		return Promise.reject(error)
	})


class Http{
	async post(url,data,callback){
		try{
			
			let res = await service.post(`${url}?access_token=5bff7e17-595b-40e1-9f43-311c887ce99b`,data);
			// let res = await service.post(`${url}?access_token=${sessionStorage.getItem('token')}`,data);
			if(res.status == 200){
				callback(res)
			}else{
				alert('网络请求失败')
			}
		}catch(e){
			console.log(e)
		}
	}
	async login(url,data,callback){
		try{
			let res = await service.post(`${url}`,data);
			if(res.status == 200){
				callback(res)
			}else{
				alert('网络请求失败')
			}
		}catch(e){
			console.log(e)
		}
	}
	async register(url,data,callback){
		try{
			let res = await service.post(`${url}`,data);
			if(res.status == 200){
				callback(res)
			}else{
				alert('网络请求失败')
			}
		}catch(e){
			console.log(e)
		}
	}
	async get(){

	}
}

export default new Http()

export async function post (url,data,callback) {
	if(callback){
		let res = await service.post(`${url}?access_token=${sessionStorage.getItem('token')}`,data);
		if(res.status == 200){
			callback(res)
		}else{
			console.log('网络请求失败')
		}
	}else{
		return service.post(`${url}?access_token=${sessionStorage.getItem('token')}`,data);
	}
}
// 登录
export async function login(url,data,callback){
	if(callback){
		let res = await service.post(`${url}`,data);
		if(res.status == 200){
			callback(res)
		}else{
			console.log('网络请求失败')
		}
	}else{
		return service.post(`${url}`,data)
	}
}
// 注册
export function register(url,data,callback){
	return service.post(`${url}`,data).then(res => {
		if(res.status == 200){
			callback(res)
		}else{
			alert('网络请求失败')
		}
	})
}
// 获取用户号码
export function getUserPhone(url,data,callback){
	return service.post(`${url}`,data).then(res => {
		if(res.status == 200){
			callback(res)
		}else{
			alert('网络请求失败')
		}
	})
}
// 获取手机验证码
export function getUserPhoneCheck(url,data,callback){
	return service.post(`${url}`,data).then(res => {
		if(res.status == 200){
			callback(res)
		}else{
			alert('网络请求失败')
		}
	})
}
// 校验手机验证码
export function checkPhoneCheck(url,data,callback){
	return service.post(`${url}`,data).then(res => {
		if(res.status == 200){
			callback(res)
		}else{
			alert('网络请求失败')
		}
	})
}
// 修改用户密码
export function updateSecret(url,data,callback){
	return service.post(`${url}`,data).then(res => {
		if(res.status == 200){
			callback(res)
		}else{
			alert('网络请求失败')
		}
	})
}
// 检查手机号是否被占用
export function checkUserIsExist(url,data,callback){
	return service.post(`${url}`,data).then(res => {
		if(res.status == 200){
			callback(res)
		}else{
			alert('网络请求失败')
		}
	})
}









