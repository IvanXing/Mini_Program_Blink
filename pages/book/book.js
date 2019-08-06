import{
  BookModel
} from '../../models/book.js'

const bookModel = new BookModel()


Page({

  /**
   * 页面的初始数据
   */
  data: {
    books:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    // promise错误用法 依然回调嵌套
    // const hotList = bookModel.getHotList();
    // hotList.then(
    //   res=>{
    //     console.log('hotbook', res)
    //     bookModel.getMyBookCount().then(res=>{
    //       console.log('mybookcount', res)
    //     })
    //   }
    // )

    //正确用法（异步调用都是平行写法 return promise）
    // bookModel.getHotList()
    //   .then(res => {
    //     console.log(res)
    //     return bookModel.getMyBookCount()
    //   })
    //   .then(res => {
    //     console.log(res)
    //     return bookModel.getHotList()
    //   })
    //   .then(res => {
    //     console.log(res)
    //   })

    //获取热门书籍
    bookModel.getHotList()
      .then(res=>{
        this.setData({
          books: res
        })
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