import wepy from 'wepy'
import { host } from '../config'

interface tipDictionary {
  [key: number]: string
}

const errorTips: tipDictionary = {
  1: '抱歉,发生了一个错误',
  1000: '输入参数错误',
  1001: '输入的json格式不正确',
  1002: '找不到资源',
  1003: '未知错误',
  1004: '禁止访问',
  1005: '不正确的开发者key',
  1006: '服务器内部错误',
  2000: '你已经点过赞了',
  2001: '你还没点过赞',
  3000: '该期内容不存在'
}

interface RequestParam {
  url: string
  data?: object | string | ArrayBuffer
  header?: object
  method?:
    | 'GET'
    | 'OPTIONS'
    | 'HEAD'
    | 'POST'
    | 'PUT'
    | 'DELETE'
    | 'TRACE'
    | 'CONNECT'
  dataType?: 'json' | 'text'
  responseType?: 'text' | 'arraybuffer'
}

/**
 * 对请求进行基本配置
 * @param {object} options 请求配置
 * @return {Promise} 返回res.data对象
 */
export function request(options: RequestParam) {
  return new Promise((resolve, reject) => {
    wepy
      .request({
        url: `${host.baseUrl}${options.url}`,
        method: options.method || 'GET',
        data: options.data,
        header: {
          appkey: host.appkey
        }
      })
      .then(res => {
        if (res.statusCode.toString().startsWith(2)) {
          resolve(res)
        } else {
          showErrorToast(res.data.error_code) // 请求失败时,显示错误提示
        }
      })
  })
}

/**
 * 弹出错误提示Toast
 * @param {number} [errorCode=1]
 */
function showErrorToast(errorCode = 1) {
  wx.showToast({
    title: errorTips[errorCode],
    icon: 'none'
  })
}
