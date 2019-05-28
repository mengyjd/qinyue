import { request } from './utils/http'

// 获取最新一期期刊
export async function getClassicLatest() {
  return request({
    url: '/classic/latest'
  })
}

/**
 * 获取我喜欢的期刊
 * @param {number} start 开始的页数,默认为1
 */
export async function classicFavor(start = 1) {
  return request({
    url: '/classic/favor',
    data: {
      start
    }
  })
}

/**
 * 获取当前期刊的上一期或者下一期
 * @param {number} index 当前期刊的期号
 * @param {string} model previous or next
 */
export async function recentClassic(index: number, model: string) {
  const url = `/classic/${index}/${model}`
  return request({
    url
  })
}
