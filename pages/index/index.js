//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: '欢迎使用超级账本',
    userInfo: {}
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo,
        total: app.globalData.bookInfo.total
      })
    })
  },
  onShow: function() {
    var bookInfo = app.globalData.bookInfo
    var history = bookInfo.history
    bookInfo.total = 0
    for (var i = 0; i < history.length; i++) {
      bookInfo.total += Number(history[i].value)
    }
    this.setData({
      total: bookInfo.total,
    })
  }
})
