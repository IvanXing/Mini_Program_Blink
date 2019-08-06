import {config} from '../config.js'

const tips = {
    1: '抱歉，出现了一个错误',
    1005:'appkey无效，请前往www.7yue.pro申请',
    3000:'期刊不存在'
}
// # 解构
class HTTP{
    request({url,data={},method='GET'}){
      //返回promise对象
        return new Promise((resolve, reject)=>{
            this._request(url,resolve,reject,data, method)
        })
    }
    _request(url,resolve, reject, data={}, method='GET'){
        wx.request({
            url:config.api_base_url + url,
            method:method,
            data:data,
            header:{
                'content-type':'application/json',
                'appkey':config.appkey
            },
            success:(res)=>{
                const code = res.statusCode.toString()
                if (code.startsWith('2')){
                    resolve(res.data)
                }
                else{
                    reject()
                    const error_code = res.data.error_code
                    this._show_error(error_code)
                }
            },
            fail:(err)=>{
                reject()
                this._show_error(1)
            }
        })

    }

    _show_error(error_code){
        if(!error_code){
            error_code = 1
        }
        const tip = tips[error_code]   //显示错误码
        wx.showToast({
            title: tip?tip:tips[1], 
            icon:'none',
            duration:2000
        }) 
    }


}

export {HTTP}





// //promise对象 保存状态  用对象形式 保存了异步调用的结果
// //异步代码写在promise函数中，第二步

// const promise = new Promise((resolve, reject) => {
//   //pending  fulfilled  rejected
//   //进行中    已成功     已失败     凝固
//   wx.getSystemInfo({
//     success: res => resolve(res),       //进行中=>成功
//     fail: error => reject(error)       //进行中=>失败
//   })
// })

// promise.then(
//   res => console.log(res),
//   error => console.log(error)
// )


















