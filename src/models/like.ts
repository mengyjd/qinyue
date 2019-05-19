import { ClassicModel } from './classic'

const classicModel = new ClassicModel()

export class LikeModel {
  constructor() {}

  /**
   * 更新localStorage中期刊的喜欢信息
   * @param {number} classicIndex 期号
   * @memberof LikeModel
   */
  updateLocalLikeState(classicIndex: number) {
    const data = classicModel.getLocalClassicSync(classicIndex)
    if (!data) {
      return
    }
    data.fav_nums = data.like_status
      ? (data.fav_nums -= 1)
      : (data.fav_nums += 1)
    data.like_status = !data.like_status
    classicModel.setClassic(classicIndex, data, true)
  }
}
