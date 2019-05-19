import { request } from './utils/http'

/**
 * 标记为喜欢或者取消标记
 * @export
 * @param {boolean} liked like组件状态
 * @param {number} art_id 期刊ID
 * @param {number} category 期刊类型,100:电影, 200:音乐, 300:句子
 * @returns
 */
export async function like(liked: boolean, art_id: number, category: string) {
  let url = liked ? '/like' : '/like/cancel'
  return request({
    url,
    method: 'POST',
    data: {
      art_id,
      type: category
    }
  })
}

