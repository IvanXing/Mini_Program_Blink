import{ HTTP } from '../util/http.js'

class ClassicModel extends HTTP {

  //获取新期刊
  getLatest(sCallback) {      //(res)=>{}是scallback
    this.request({
      url: 'classic/latest',
      success: (res) => {
        sCallback(res)
        this._setLatestIndex(res.index)   //缓存期index
      }
    })
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



  // 获取当前一期的上一期
  // GET /classic/ < int: index > /previous
  getClassic(index, nextOrPrevious, sCallback){
    this.request({
      url: 'classic/' + index + '/' + nextOrPrevious,
      success: (res) => {
        sCallback(res)
      }
    })
  }

}

export {
  ClassicModel
}