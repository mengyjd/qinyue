import {
  host
} from '@/config'
import wepy from 'wepy'
// 获取最新一期期刊
export async function magazineLatest() {
  return wepy.request({
    url: `${host.baseUrl}classic/latest`,
    method: 'GET'
  })
}
