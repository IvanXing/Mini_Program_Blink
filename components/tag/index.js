// components/tag/index.js
Component({

  //启用插槽
  options: {
    multipleSlots: true,
  },
  //外部样式
  externalClasses: ['tag-class'],
  /**
   * 组件的属性列表
   */
  properties: {
    text: String
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    //评论处点击传入事件
    onTap(event) {
      this.triggerEvent('tapping', {
        text: this.properties.text
      })
    }


  }
})
