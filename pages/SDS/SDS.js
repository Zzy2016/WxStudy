// pages/SDS/SDS.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    allQuestionCount: 5,//题目总数
    questionIndex: 1, //题目编号
    btnText: '下一题', //下一题/保存 显示
    isSave:false,//是否保存 
    questionContent: ["这些症状已经影响到了您的工作/学习", "这些症状已经影响到了您的日常生活/娱乐活动", "这些症状已经影响到了您的您的家庭生活/家庭责任", "过去的一周中，有几天是由于症状而导致您不能上学或工作，或者导致您不能承担日常职责","过去的一周中，有几天您明显受到症状的影响，导致您上学或工作时效率明显下降"]
  },



  //下一题 
  down: function() {
    

    var index=this.data.questionIndex
    var all = this.data.allQuestionCount



    if (this.data.allQuestionCount == index){
        //最后一题，保存数据
        this.setData({
          isSave:true
        })
    }else{
      //不是最后一题，显示下一题，题号加1
      index+=1;
      if (index == all){
        this.setData({
          questionIndex:index,
          btnText:'保存'
        })
      }else{
        this.setData({
          questionIndex: index          
        })
      }
    }

    console.log("题目编号---下一题"+index)

  },
  //上一题 
  up: function() {
    var index = this.data.questionIndex
    index-=1


    // if(index<this.data.allQuestionCount){

    // }else{

    // }

    this.setData({
      questionIndex: index,
      btnText: '下一题'
    })

    // if(index!=1){
    //   this.setData({
    //     questionIndex: index
    //   })
    // }else{
      
    // }

    
    console.log("题目编号---上一题" + index)
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})