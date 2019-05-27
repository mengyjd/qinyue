import { request } from './utils/http'

/**
 * 根据关键字搜索书籍
 * @param {string} keyword 搜索关键字
 * @param {number} start 开始记录数，默认为0
 */
export function searchBook(keyword: string, start = 0) {
  return request({
    url: '/book/search',
    data: {
      start,
      summary: 1,
      q: keyword
    }
  })
}

/**
 * 获取热门搜索关键词
 * @returns {Object} 返回关键字对象 obj.hot: []
 */
export function getHotSearchKeywords() {
  return request({
    url: '/book/hot_keyword'
  })
}
