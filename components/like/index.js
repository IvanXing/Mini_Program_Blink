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
 //data私有的 properties外部可以访问
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

      console.log('组件中onLike', event)
      //自定义事件
      let like = this.properties.like;
      let count = this.properties.count;
      count = like ? count-1 : count+1;
      this.setData({
        count: count,
        like: !like,
      })

      //标识用户点赞还是取消点赞
      let behavior = this.properties.like ? 'like' : 'cancel';
      //激活一个事件（第一个参数 自定义名称 第二个参数 自定义属性（event的detail属性）第三个参数 一般不用 ）
      this.triggerEvent('like', {
        behavior: behavior
      }, {})

    }
  }
})
