import wepy from 'wepy'
import {host} from '@/config'
export function magazineLatest() {
  wepy.request(`${host.baseUrl}classic/latest`)
}
