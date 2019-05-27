import { getFeatureBooks, bookDetail, shortComment, bookFavor, addShortComment } from '../api/book'

export default class BookModel {
  constructor() {}

  /**
   * 获取精选书籍List
   */
  getFeatureBooks() {
    return getFeatureBooks()
  }

  /**
   * 获取书籍详情
   * @param id 书籍ID
   */
  getBookDetail(id: number) {
    return bookDetail(id)
  }

  /**
   * 获取书籍短评
   * @param id 书籍ID
   */
  getShortComment(id: number) {
    return shortComment(id)
  }

  /**
   * 获取书籍点赞信息
   * @param id 书籍ID
   */
  getBookFavor(id: number) {
    return bookFavor(id)
  }

  /**
   * 添加书籍短评
   * @param id 书籍ID
   * @param content 评论内容,最多12个字
   */
  addShortComment(id: number, content: string) {
    if(content.length > 12) {
      throw new Error('短评字数超出限制,最多12个字')
    }
    return addShortComment(id, content)
  }
}
