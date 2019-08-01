import{ HTTP } from '../util/http.js'

class ClassicModel extends HTTP {
  getLatest(sCallback) {      //(res)=>{}是scallback
    this.request({
      url: 'classic/latest',
      success: (res) => {
        sCallback(res)
      }
    })
  }
}

export {
  ClassicModel
}