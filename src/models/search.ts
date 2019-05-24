import { getHotSearchKeywords, searchBook } from '../api/search'
import { setStorage, getStorageSync } from '../utils/localStorage'
import { uniq } from '../utils/utils'

export default class Search {
  constructor() {}

  /**
   * 根据关键字搜索书籍
   * @param {string} keyword 搜索关键字
   * @param {number} start 开始记录数，默认为0
   */
  searchBook(keyword: string, start?: number) {
    this.saveSearchHistory(keyword)
    return searchBook(keyword, start)
  }

  /**
   * 从服务端获取热门搜索关键词
   * @returns 返回关键词数组
   */
  async getHotSearchKeywords() {
    const data: any = await getHotSearchKeywords()
    if (!data) return []
    return data.hot
  }

  /**
   * 将搜索历史保存到本地
   * @param {string} keyword 搜索关键词
   */
  saveSearchHistory(keyword: string) {
    let historys: string[] = this.getSearchHistorySync()
    if (!historys) {
      historys = []
    }
    historys.unshift(keyword)
    historys = uniq(historys)
    setStorage('search-history', historys)
  }

  /**
   * 从本地获取用户的搜索关键词
   * @returns {Array} 返回关键词数组
   */
  getSearchHistorySync() {
    return getStorageSync('search-history')
  }
}
