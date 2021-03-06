// pages/book/index.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bookInfo: {}
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
    var bookInfo = app.globalData.bookInfo
    var history = bookInfo.history
    bookInfo.total = 0
    for (var i = 0; i < history.length; i++) {
      bookInfo.total += Number(history[i].value)
    }
    this.setData({
      bookInfo: bookInfo,
    })
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
  
  },

  newItem: function() {
    wx.navigateTo({
      url: 'new'
    })
  }
})