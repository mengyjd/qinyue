import { request } from './utils/http'

/**
 * 获取精选书籍
 */
export async function getFeatureBooks() {
  return request({
    url: '/book/hot_list'
  })
}
