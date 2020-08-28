// pages/first/first.js

var app=getApp()
Page({

  /**
   * 页面的初始数据  
   */
  data: {
    showWindow: true,
    lastClickTime: 0,
    arr: [{
      
        title: '席汉残疾量表（SDS）',
        desc: '请根据您过去一周的情况见姓选择',
        tip: '1次/3月 | 共15问 |约2分钟'
      
    }, {
      
        title: '病人健康情况问卷-9',
        desc: '在过去的两周，您经常受到以下问题的困扰吗',
        tip: '1次/3月 | 共10问 |约2分钟'
      
    }, {
      
        title: 'GAD-7',
        desc: '在过去的两周里，您被以下问题困扰的频率如何',
        tip: '1次/3月 | 共7问 |约2分钟'
      
    }, {
     
        title: 'HEA卫生经济学随访评估表',
        desc: '在过去一个月里，您的随访状态是什么样式？',
        tip: '1次/3月 | 共6问 |约2分钟'
      
    }, {
     
        title: 'SELF-REPORT MEASURE FOR MEDI CATI ON ADHERENCE',
        desc: '请根据您的实际情况进行选择',
        tip: '1次/3月 | 共15问 |约2分钟'
      
    }, {
      
        title: 'STAR-P医患关系-患者量表',
        desc: '请根据您的实际情况进行选择',
        tip: '1次/3月 | 共15问 |约2分钟'
     
    }, {
      
        title: '药物副反应频率、强度与负担评定量表',
        desc: '请根据您过去一周的情况进行选择',
        tip: '1次/3月 | 共10问 |约2分钟'
      
    }, {
      
        title: '6项生活质量简表',
        desc: '请根据您的实际情况进行选择',
        tip: '1次/3月 | 共10问 |约2分钟'
      
    }],

    attens: ['本人', '夫妻', '子女', '父母', '兄弟', '朋友'],
  },

  // 修改状态显示窗口
  showWindow: function() {
    this.setData({
      showWindow: !this.data.showWindow
    })
  },
  // 显示不同页面 url: '/pages/SDS/SDS',
  // 防止多次点击
  route: function(e) {
    console.log(e.currentTarget.dataset.id)
    let id = e.currentTarget.dataset.id;
    console.log("---------" + id)

    var nowTime = new Date();
    if (nowTime - this.data.lastClickTime < 1000) {
      return;
    }

    this.setData({
      lastClickTime: nowTime
    })

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
    var that = this
    var array = that.data.arr

    for (var i = 0; i < array.size; i++) {
      console.log("----" +array[i].title+"   "+array[i].desc+"   "+array[i].tip)
    }

   


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