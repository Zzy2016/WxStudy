// pages/Com/select1/select1.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    num:{
      type:Number,
      value:0
    }
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
    bindDel(){
      let{num}=this.data
      if(num<1){
        return
      }
      this.setData({
        num:num-1
      })
      this.triggerEvent('changeCount',this.data.num)
    },

    bindAdd(){
      let{num}=this.data
      this.setData({
        num:num+1
      })
      console.log(num,this.data.num)
      this.triggerEvent('changeCount',this.data.num)
    }
  }
})
