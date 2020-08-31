// pages/select/select.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    num:100,
    quesArr:["这些症状已经影响到了您的工作/学习", "这些症状已经影响到了您的日常生活/娱乐活动", "这些症状已经影响到了您的您的家庭生活/家庭责任", "过去的一周中，有几天是由于症状而导致您不能上学或工作，或者导致您不能承担日常职责", "过去的一周中，有几天您明显受到症状的影响，导致您上学或工作时效率明显下降"],
    ansindex:12,
    ansArr:[1,2,3,4,5],
    currentQusIndex:0,//当前题目index
  },


  onChangeCount:function(e){
    console.log(e.detail);
  },

  select:function(e){
    console.log(e.detail)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})