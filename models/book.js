import {
  HTTP
}
from '../util/http-p.js'


class BookModel extends HTTP {
  data = null
  getHotList() {
    return this.request({
      url: 'book/hot_list'
    })

  }

  search(start, q) {
    return this.request({
      url: 'book/search?summary=1',
      data: {
        q: q,
        start: start
      }
    })
  }

  getMyBookCount() {
    return this.request({
      url: '/book/favor/count'
    })
  }

  //获取书籍详细信息
  getDetail(bid) {
    return this.request({
      url: `book/${bid}/detail`
    })
  }

  //点赞状态
  getLikeStatus(bid) {
    return this.request({
      url: `/book/${bid}/favor`
    })
  }

  //文章评论信息
  getComments(bid) {
    return this.request({
      url: `book/${bid}/short_comment`
    })
  }


  postComment(bid, comment) {
    return this.request({
      url: 'book/add/short_comment',
      method: 'POST',
      data: {
        book_id: bid,
        content: comment
      }
    })
  }
}

export {
  BookModel
}