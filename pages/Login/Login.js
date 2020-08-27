// pages/Login/Login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userName: '', //患者姓名
    phoneNum: '', //联系方式
    showError: false, //显示错误信息
    errorContent: '', //错误提示内容

  },


  // 输入姓名
  inputName: function(e) {
    var name = e.detail.value
    this.setData({
      userName: name
    })
  },

  // 联系方式  键盘隐藏后对号码进行校验
  inputPhone: function(e) {



    var phone = e.detail.value

    this.setData({
      phoneNum: phone
    })

    //输入内容为空 不做检查
    if (phone == '') {
      return;
    }



    if ((/^1(3|4|5|7|8)\d{9}$/.test(phone))) {
      //正确的手机号码

    } else {
      //错误的手机号码

    }


  },


  //确定 
  //检查姓名和手机号填写，发送申请或者登陆
  //
  ensure: function() {
    var that = this
    var name = that.data.userName
    var phone = that.data.phoneNum

    if (name.length == 0) {
      console.log("姓名错误")
      return;

    }

    if ((/^1(3|4|5|7|8)\d{9}$/.test(phone))) {
      that.setData({
        showError: false
      })
      wx.showToast({
        title: '已经确定',
        icon: 'none'
      })
    } else {
      that.setData({
        showError: true
      })
      return;
    }
  },




  // 定时任务  
  doRequest: function(e) {
    var that = this
    var times = 0
    var i = setInterval(function() {
      times++
      if (times >= 60) {
        console.log("---------" + times)
      } else {
        console.log("+++++++" + times)
      }
    }, 1000)
  },



  /**
   * 生命周期函数--监听页面加载
   * 第一次扫码进入
   * 发送申请之后
   * 发送申请被拒绝
   * 发送申请同意
   * 发送申请同意之后又被拒绝   * 
   */
  onLoad: function(options) {
    this.doRequest()
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