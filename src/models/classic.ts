import { setStorage, getStorageSync } from '../utils/localStorage'
import { getClassicLatest, recentClassic } from '../api/classic'

export class ClassicModel {
  private CLASSIC_KEY_PREFIX = 'classic-'

  constructor() {}

  /**
   * 获取最新的期刊
   * @memberof ClassicModel
   */
  async getClassicLatest() {
    const data: any = await getClassicLatest()
    this.setClassic(data.index, data)
    return data
  }

  /**
   * 获取当前期刊的上一期或者下一期
   * @param {number} currentIndex 当前期刊刊号
   * @param {string} nextOrPrevious next or previous
   * @memberof ClassicModel
   */
  async getRecentClassic(currentIndex: number, nextOrPrevious: string) {
    let needIndex =
      nextOrPrevious === 'next' ? currentIndex + 1 : currentIndex - 1

    let data = this.getLocalClassicSync(needIndex) // 先从本地获取数据

    if (!data) {
      // 如果本地数据不存在,则从网络获取
      data = await recentClassic(currentIndex, nextOrPrevious)
      this.setClassic(data.index, data)
    }

    return data
  }

  /**
   * 将期刊数据保存到本地
   * @param {number} index 期号
   * @param {object} data 期刊所有字段
   * @param {object} isCover 是否覆盖本地数据, 默认 false
   * @memberof ClassicModel
   */
  async setClassic(index: number, data: any, isCover = false) {
    if (!index) {
      throw new Error(`index错误:${index}`)
    }
    // 如果本地数据已存在,则直接返回
    if (this.getLocalClassicSync(index) && !isCover) {
      return
    }
    return setStorage(this.getKey(index), data)
  }

  /**
   * 从本地获取指定的期刊
   * @param {number} index 期号
   * @memberof ClassicModel
   */
  getLocalClassicSync(index: number) {
    return getStorageSync(this.getKey(index))
  }

  /**
   * 通过index生成key
   */
  private getKey(index: number) {
    return `${this.CLASSIC_KEY_PREFIX}${index}`
  }
}
