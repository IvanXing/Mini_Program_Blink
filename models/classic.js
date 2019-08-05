import{ HTTP } from '../util/http.js'

class ClassicModel extends HTTP {

  //获取新期刊
  getLatest(sCallback) {      //(res)=>{}是scallback
    this.request({
      url: 'classic/latest',
      success: (res) => {
        sCallback(res)
        this._setLatestIndex(res.index)   //缓存期index
        let key = this._getKey(res.index)
        wx.setStorageSync(key, res)    //存入缓存
      }
    })
  }


  // 获取当前一期的上一期
  // GET /classic/ < int: index > /previous
  getClassic(index, nextOrPrevious, sCallback) {
    // 缓存中寻找 or API 写入到缓存中
    // key 确定key
    let key = nextOrPrevious == 'next' ?
      this._getKey(index + 1) : this._getKey(index - 1)
    let classic = wx.getStorageSync(key)
    if (!classic) {
      this.request({
        url: `classic/${index}/${nextOrPrevious}`,
        success: (res) => {
          wx.setStorageSync(
            this._getKey(res.index), res)
          sCallback(res)
        }
      })
    } else {
      sCallback(classic)
    }
  }

  //是否第一期最后一期
  isFirst(index) {
    return index == 1 ? true : false
  }

  isLatest(index) {
    let latestIndex = this._getLatestIndex()
    return latestIndex == index ? true : false
  }

  //index存入缓存
  _setLatestIndex(index) {
    wx.setStorageSync('latest', index)
  }

  //读取缓存index
  _getLatestIndex() {
    const index = wx.getStorageSync('latest')
    return index
  }

  //生成缓存数据key
  _getKey(index) {
    const key = 'classic-' + index
    return key
  }

}

export {
  ClassicModel
}