// components/episode/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    index: {
      type: String,
      observer: function(newVal, oldVal, changePath){    //数值改变会触发observer 默认传递三个参数
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
    months: [
      '一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'
      ],
    year: 0,
    month: '',
    _index: ''
  },

  //组件的生命周期函数
  attached: function(){
    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth();

    this.setData({
      year: year,
      month: this.data.months[month]
    })
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
