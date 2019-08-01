// components/episode/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    index: {
      type: String,
      observer: function(newVal, oldVal, changePath){
        let val = newVal < 10 ? '0'+newVal : newVal;
        // 不要再observer中修改自身属性值 
        // this.setData({index: val })  //更新index,index属于属性又触发observer 递归调用  08->8
        this.setData({
          _index: val
        })
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    year: 0,
    month: '',
    _index: ''
  },

  //组件的生命周期函数
  attached: function(){
    
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
