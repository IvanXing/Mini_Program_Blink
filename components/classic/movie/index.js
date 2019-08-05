import { classicBeh } from '../classic-beh.js'

Component({
// behavior行为  组件共同的行为
// 继承了多个behaviors中  自己properties中的会覆盖继承来的，继承的都有的，取最后一个
// 继承来的attached中的和自己定义的都会执行

  behaviors: [classicBeh],
  properties: {

  },

  data: {

  },

  methods: {

  }
})
