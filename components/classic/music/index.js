import { classicBeh } from '../classic-beh.js'
const mMgr = wx.getBackgroundAudioManager()    //获取音乐播放对象

Component({
  /**
   * 组件的属性列表
   */
  behaviors: [classicBeh],
  properties: {
    src: String,          //音乐播放地址
    title: String
  },

  /**
   * 组件的初始数据
   */
  data: {
    playing: false,
    pauseSrc: 'images/player@pause.png',
    playSrc: 'images/player@play.png',
  },

  //监听音乐播放是否当前歌曲（wxif切换时调用）
  attached(event) {
    // 跳转页面 当前 切换
    this._recoverStatus()
    this._monitorSwitch()
  },

  //组件移除时触发
  detached: function (event) {
    // hidden不触发detached
    // mMgr.stop()
  },


  /**
   * 组件的方法列表
   */
  methods: {
    onPlay: function (event) {
      // 图片要切换
      if (!this.data.playing) {
        this.setData({
          playing: true
        })
        mMgr.src = this.properties.src          //切换src即可播放
        mMgr.title = this.properties.title
      } else {
        this.setData({
          playing: false
        })
        mMgr.pause()
      }
    },

    _recoverStatus: function () {
      if (mMgr.paused) {
        this.setData({
          playing: false
        })
        return
      }
      if (mMgr.src == this.properties.src) {
        this.setData({
          playing: true
        })
      }
    },

    //监听状态（总控开关和自定义开始暂停同步）
    _monitorSwitch: function () {
      mMgr.onPlay(() => {
        this._recoverStatus()
      })
      mMgr.onPause(() => {
        this._recoverStatus()
      })
      mMgr.onStop(() => {
        this._recoverStatus()
      })
      mMgr.onEnded(() => {
        this._recoverStatus()
      })
    }


    
  }
})
