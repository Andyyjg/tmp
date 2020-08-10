let baseUrl = ""
var env = process.env.NODE_ENV === 'development' ? 'development' :
    process.env.VUE_APP_TITLE === 'testing' ? 'testing' :
        process.env.VUE_APP_TITLE === 'beta' ? 'beta' : 'production';

switch (env) {


    case 'development':

        baseUrl = "http://172.28.20.5:8787"  //这里是本地的请求url


        break
    case 'testing':   // 注意这里的名字要和步骤二中设置的环境名字对应起来
        baseUrl = "http://172.28.20.3:6001"  //这里是测试环境中的url

        break
    case 'production':
        baseUrl = "http://10.80.4.11:8080"  //生产环境url

        break
    case 'beta':
        baseUrl = ""  //生产环境url

        break

}
module.exports = {
    baseUrl
}



