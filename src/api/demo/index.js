import { get, post, put, Delete } from '../request'
export default {
    getReportList(params = {}) {
        return post('/hall/getReportList', params)
    },
}
