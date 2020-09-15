// pages/func/func.js
var comm = require('../../utils/util')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    a: 1,
    b: '1',


    test: {
      test1: 1,
      test2: 2
    }
  },

  getCode: function () {
    var that = this
    var appID = "wx06928842b7177b6e";
    var secret = "2cd7cfbd6a1ab81fb86fa0e4a280f3c2";
    wx.request({
      url: 'https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential',
      data: {
        appid: appID,
        secret: secret
      },
      success: function (res) {
        console.log("==========")
        console.log(res)
        that.getCode1(res.data.access_token)
        // that.getCode2(res.data.access_token)
      },

      fail: function (res) {
        console.log("fail  ", res)
      }


    })
  },

  getCode1: function (e) {
    var that = this
    var scene = 'id=123'
    wx.request({
      url: 'https://api.weixin.qq.com/wxa/getwxacodeunlimit?access_token=' + e,

      data: {
        scene: scene,
        page: ''
      },
      method: 'POST',
      responseType: 'arraybuffer',
      success: function (res) {

        console.log(res)

        var src2 = wx.arrayBufferToBase64(res.data)
       
        // wx.downloadFile({
        //   url: 'https://api.weixin.qq.com/wxa/getwxacodeunlimit?access_token=' + e,
        //   success:function(res){
        //       console.log("success",res)
        //       wx.saveFile({
        //         tempFilePath: res.tempFilePath,
        //       })
        //   },
        //   fail:function(res){
        //     console.log("fail",res)
        //   }
        // })

        that.setData({
          src2
        })
      }
    })
  },

  testImg:function(){
    wx.downloadFile({
      url: 'url',
    })
  },

  // getCode2:function(e){
  //   var that=this
  //   wx.request({
  //     url:'https://api.weixin.qq.com/intp/marketcode/applycode?access_token='+e,
  //     data:{
  //       code_count:10000,
  //       isv_application_id:'test'
  //     },
  //     success:function(res){
  //       console.log(res)
  //     }

  //   })
  // },




  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    // console.log(comm.func())
    // console.log(comm.toCel(77))
    // console.log(this.data.a == this.data.b)
    // console.log(this.data.a === this.data.b)
    // console.log(this.data.test)

    // var ob=this.data.test
    // for(let key in ob){
    //   console.log(key+"    ",ob[key])
    // }

    // var test="123--"+comm.toCel(89)+"--123";
    // console.log(test)

    // var person={
    //   firstName:"1",
    //   lastName:"2",
    //   id:"3",
    //   fullName : function(){
    //     return this.firstName+" "+this.lastName;
    //   }
    // }

    // this.getCode()


    // console.log(person.firstName)  
    // console.log(person.lastName)  
    // console.log(person.fullName)
    // console.log(person.fullName())



    // var name="zheshiyigezifuchuan";
    // console.log(name.length,"     "+name)
    // console.log(name.indexOf('yi'),"     "+name)
    // console.log(name.lastIndexOf('i'),"     "+name)
    // console.log(name.lastIndexOf('i',10),"     "+name)
    // console.log(name.indexOf('b'),"     "+name)
    // console.log(name.search('shi'),"     "+name)
    // console.log(name.slice(1,3),"     "+name)
    // console.log(name.substring(1,3),"     "+name)
    // console.log(name.substr(1,3),"     "+name)
    // console.log(name.replace('i','--'),"     "+name)
    // console.log(name.toUpperCase(),"     "+name)
    // console.log(name.toLowerCase(),"     "+name)
    // console.log(name.concat("   ",'123'),"     "+name)
    // console.log(name.trim(),"     "+name)
    // console.log(name.charAt(10),"     "+name)
    // console.log(name.charCodeAt(10),"     "+name)
    // console.log(name[0].toUpperCase(),"     "+name)
    // console.log(name.split(''),"     "+name)



    // var a=10;
    // var b='20';
    // var c=10;
    // console.log(a+b)
    // console.log(a+c)

    // console.log("a"+a+b)
    

    // var x=3.14
    // var y=3
    // var d=123e5
    // var e=123e-6
    // console.log(x)
    // console.log(y)
    // console.log(d)
    // console.log(e)

    // console.log(0.2+0.1)

    // console.log((0.2*10+0.1*10)/10)

//     var a='10'
//     var b='20'
//     console.log(a+b)
//     console.log(a*b)
//     console.log(a-b)
//     console.log(a/b)

//     var c=100
//     console.log(c)
//     console.log(c.toString())

//     var  array=[]
//     for(var i=0;i<3;i++){
//         array.push('1')
//     }
// console.log(array)
// array.pop()
// console.log(array)
var currentTime=new Date();
console.log(currentTime.toString)


    for(var i=0;i<10;i++){
      if(i==5){
        break
      }
      console.log(i)
    }


  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
      a=9
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log(a)
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