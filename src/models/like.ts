import ClassicModel from './classic'
import { getLikeInfo } from '../api/like'

const classicModel = new ClassicModel()

export default class LikeModel {
  constructor() {}

  /**
   * 从网络获取并更新localStorage中期刊的喜欢信息
   * @param {number} classicIndex 期号
   * @memberof LikeModel
   */
  async updateLocalLikeState(classicIndex: number, id: number, category: number, ) {
    const data = classicModel.getLocalClassicSync(classicIndex)
    const likeInfo: any = await getLikeInfo(category, id)
    if (!data || !likeInfo) {
      return
    }
    data.fav_nums = likeInfo.fav_nums
    data.like_status = likeInfo.like_status
    classicModel.setClassic(classicIndex, data, true)
  }
}
