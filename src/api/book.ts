import { request } from './utils/http'

/**
 * 获取精选书籍
 */
export function getFeatureBooks() {
  return request({
    url: '/book/hot_list'
  })
}

/**
 * 获取书籍详情
 * @param {number} id 书籍ID
 */
export function bookDetail(id: number) {
  return request({
    url: `/book/${id}/detail`
  })
}

/**
 * 获取书籍短评
 * @param {number} id 书籍ID
 */
export function shortComment(id: number) {
  return request({
    url: `/book/${id}/short_comment`
  })
}

/**
 * 获取书籍点赞情况
 * @param {number} id 书籍ID
 */
export function bookFavor(id: number) {
  return request({
    url: `/book/${id}/favor`
  })
}

export function addShortComment(id: number, content: string) {
  return request({
    url: '/book/add/short_comment',
    method: 'POST',
    data: {
      book_id: id,
      content
    }
  })
}

/**
 * 获取喜欢书籍的数量
 */
export function bookFavorCount() {
  return request({
    url: '/book/favor/count'
  })
}
