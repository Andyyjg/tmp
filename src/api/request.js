import service from '../utils/http'

/**
 * 封装get请求
 * @param url
 * @param params
 * @returns {Promise}
 */
export function get(url, data,config={}) {
    url='/api'+url
    return new Promise((resolve, reject) => {
        service
            .get(url,{
                params:data,
                ...config
            })
            .then(res => {
                resolve(res.data)
            })
            .catch(err => {
                reject(err)
            })
    })
}

/**
 * 封装post请求
 * @param url
 * @param body
 * @returns {Promise}
 */
export function post(url, data,config) {
    url='/api'+url
    return new Promise((resolve, reject) => {
        service
            .post(url, data,config)
            .then(res => {
                resolve(res.data)
            })
            .catch(err => {
                reject(err)
            })
    })
}

/**
 * 封装patch请求
 * @param url
 * @param body
 * @returns {Promise}
 */
export function patch(url, body) {
    return new Promise((resolve, reject) => {
        service
            .patch(url, body)
            .then(res => {
                resolve(res)
            })
            .catch(err => {
                reject(err)
            })
    })
}

/**
 * 封装delete方法
 * @param url
 * @param params
 * @returns {Promise}
 */

export function Delete(url, params) {
    return new Promise((resolve, reject) => {
        service
            .delete(url, params)
            .then(res => {
                resolve(res)
            })
            .catch(err => {
                reject(err)
            })
    })
}

/**
 * 封装put请求
 * @param url
 * @param body
 * @returns {Promise}
 */

export function put(url, params) {
    return new Promise((resolve, reject) => {
        service
            .put(url, params)
            .then(res => {
                resolve(res)
            })
            .catch(err => {
                reject(err)
            })
    })
}
