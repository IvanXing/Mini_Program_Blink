// components/like/index.js
Component({
  /**
   * 组件的属性列表
   */
  //属性=>开放的数据(type必填 value会给默认值)
  properties: {
    like: {
      type: Boolean,
      value: false,
      observer:function(){

      }
    },
    count:{
      type: Number,
    }
  },

  /**
   * 组件的初始数据
   */

 // 组件的封装性 开放性（哪些是内部数据不开放，哪些开放）  粒度

  data: {
    // like: true,
    // count: 99,
    yesSrc: 'images/like.png',
    noSrc: 'images/like@dis.png',
   
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onLike:function(event){
      let like = this.properties.like;
      let count = this.properties.count;
      count = like ? count-1 : count+1;
      this.setData({
        count: count,
        like: !like,
      })
    }
  }
})
