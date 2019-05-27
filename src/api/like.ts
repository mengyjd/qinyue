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

/**
 * 获取期刊的喜欢信息 喜欢的数量及状态
 * @param {number} category
 * @param {number} id
 * @returns {object} { fav_nums: 1, id: 1, like_status: 1 }
 */
export async function getLikeInfo(category: number, id: number) {
  return request({
    url: `/classic/${category}/${id}/favor`
  })
}

