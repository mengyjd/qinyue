export async function setStorage(key: string, data: any) {
  return new Promise((resolve, reject) => {
    wx.setStorage({
      key: key,
      data,
      success: result => {
        resolve(result)
      },
      fail: () => {
        reject()
      },
      complete: () => {
        resolve()
      }
    })
  })
}

export function getStorageSync(key: string) {
  return wx.getStorageSync(key)
}
