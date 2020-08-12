import axios from 'axios'
import qs from 'qs'
import router from "../router";


axios.defaults.timeout = 360000
axios.defaults.baseURL = ''
axios.defaults.headers = {
    'Content-Type': 'application/x-www-form-urlencoded',
    /*    'authorization': store.state.login.token,
        'userId': store.state.login.userId,*/
}
axios.defaults.transformRequest = [function (data) {
    if (data) {
        if (data.typeData != 'upload') {
            data = qs.stringify(data)
        }
    }


    return data
}]
//http request 拦截器
axios.interceptors.request.use(
    config => {


        return config
    },
    err => {

    }
)


//http response 拦截器
axios.interceptors.response.use(
    response => {

        return response
    },
    error => {


        return Promise.reject(error)
    }
)
export default axios
