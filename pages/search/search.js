// pages/search/search.js
var QQMapWX = require('../../libs/qqmap-wx-jssdk.js');
var qqmapsdk;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    shops: [],
    long: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let val = options.data;
    wx.setNavigationBarTitle({
      title:'您查询的是：'+ val
    })
    let that = this;
    qqmapsdk = new QQMapWX({
      key: 'XHSBZ-NO3KQ-UXU5A-GFUDV-ILVSO-2RBUA'
    });
    qqmapsdk.search({
      keyword: val,
      success: function (res) {
        that.setData({
          shops: res.data
        })

      }

    });

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