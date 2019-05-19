import wepy from 'wepy'
import {
  host
} from '../config'

const errorTips = {
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

/**
 * 对请求进行基本配置
 * @param {Object} options 请求配置
 * @param {string} options.url 请求url
 * @param {string} options.method 请求方法 default GET
 * @return {Promise} 返回res.data对象
 */
export function request(options) {
  return new Promise((resolve, reject) => {
    wepy.request({
      url: `${host.baseUrl}${options.url}`,
      method: options.method || 'GET',
      'content-type': 'application/json',
      header: {
        appkey: host.appkey
      },
      data: options.data
    }).then((res) => {
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
