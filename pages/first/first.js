// pages/first/first.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showWindow: false,
  },

  // 修改状态显示窗口
  showWindow: function() {
    this.setData({
      showWindow: !this.data.showWindow
    })
  },
  // 显示不同页面 url: '/pages/SDS/SDS',
  route: function(e) {
    console.log(e.currentTarget.dataset.id)
    let id = e.currentTarget.dataset.id;
    console.log("---------" + id)
    switch (id) {
      case 1:
        wx.navigateTo({
          url: '/pages/SDS/SDS',
        })
        break;
      case 2:

        break;
      case 3:

        break;
      case 4:

        break;
      case 5:

        break;
      case 6:

        break;
      case 7:

        break;
      case 8:

        break;
    }
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