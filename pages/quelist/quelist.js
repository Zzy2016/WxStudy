// pages/quelist/quelist.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    array: [],
    option: []
  },

  doSelect: function (e) {
    console.log(e)
    console.log(e.currentTarget.id)
    var that = this
    var option = that.data.option
    var index = e.currentTarget.id
    for (var i = 0; i < option.length; i++) {
      if (i == index) {
        option[i].checked = true
      } else {
        option[i].checked = false
      }
    }

    that.setData({
      option:option
    })

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var array = this.data.option
    for (var i = 0; i < 10; i++) {
      array.push({
        name: i,
        checked: false
      })
    }
    console.log(array)
    this.setData({
      option: array
    })

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