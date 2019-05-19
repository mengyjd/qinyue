import { request } from './utils/http'

// 获取最新一期期刊
export async function getClassicLatest() {
  return request({
    url: '/classic/latest'
  })
}

/**
 * 获取当前期刊的上一期或者下一期
 * @param {number} index 当前期刊的期号
 * @param {string} model pre or next
 */
export async function recentClassic(index, model) {
  const url = `/classic/${index}/${model}`
  return request({
    url
  })
}
