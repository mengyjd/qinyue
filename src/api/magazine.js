import {
  request
} from './utils/http'

// 获取最新一期期刊
export async function getClassicLatest() {
  return request({
    url: '/classic/latest',
    method: 'GET'
  })
}
