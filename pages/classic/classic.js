// pages/classic/classic.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    test: 1
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    console.log(this.data.test)
    let that = this;

    //正常请求
    wx.request({
      url: 'http://bl.7yue.pro/v1/classic/latest',
      header:{
        appkey:'ofGdI94yWKpfxpTJ'
      },
      // success:function(res){
      //   console.log(res)
      //   //console.log(this.data.test)   //null
      //   console.log(that.data.test)
      // }
      success: (res)=>{
        console.log(this.data.test)   //箭头函数定义时绑定 非运行时
      }
    })

    //promise版本(解决异步嵌套)
    let promise = new Promise((resolve, reject) => {
      wx.request({
        url: 'http://bl.7yue.pro/v1/classic/latest',
        header: {
          appkey: 'ofGdI94yWKpfxpTJ'
        },
        success: (res) => {
          resolve(res)
        }
      })
    })
    promise.then((res) => {
      console.log(res)
    })


  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})