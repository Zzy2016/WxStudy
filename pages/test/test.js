// pages/test/test.js
Page({

  /**
   * 页面的初始数据  json
   */
  data: {
    test: [1, 2, 3, 4, 5, 6, 7],
    checkIndex:0,
  },


  testbindcontact: function(e) {
    console.log("-------contact")
  },

  testgetphone: function(e) {
    console.log("获取手机号")
    console.log(e.detail)
    console.log(e)
    console.log(e.detail.encryptedData)


  },

  bindpick: function(e) {
    console.log(e.detail.value)
    var index=e.detail.value;
    console.log("------"+this.data.test[index])
    this.setData({
      checkIndex:index
    })
  },


  bindgetuserinfo: function(e) {
    console.log(e)
    console.log(e.detail.rawData)


    

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