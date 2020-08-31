// pages/Com/selectcheck/selectcheck.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    ansindex:{
      type: Number,
      value: 12
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    checkIndex:12,//选择的index,
    
  },

  /**
   * 组件的方法列表
   */
  methods: {
    radioChange:function(e){
      var index=e.detail.value
      console.log(index)
      var that=this
      that.setData({
        checkIndex: index,
        ansindex:index
      })
      that.triggerEvent('doselect',that.data.checkIndex)
    }
  },
  
})
