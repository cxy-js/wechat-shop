let data = require("../../libs/foodimg.js")
let data1 = require("../../libs/food1img.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    region: ['江苏省'],
    icon: "../../img/search.png",
    icons: [
      [
        { icon: "../../img/apple1.png", title: "美食" },
        { icon: "../../img/apple2.png", title: "鲜果" },
        { icon: "../../img/apple3.png", title: "饮品" },
        { icon: "../../img/apple4.png", title: "晚餐" },
        { icon: "../../img/apple5.png", title: "快餐" },
        { icon: "../../img/apple6.png", title: "超市" },
        { icon: "../../img/apple7.png", title: "正餐" },
        { icon: "../../img/apple8.png", title: "全部" }
      ],
      [
        { icon: "../../img/apple1.png", title: "美食" },
        { icon: "../../img/apple2.png", title: "鲜果" },
        { icon: "../../img/apple3.png", title: "饮品" },
        { icon: "../../img/apple4.png", title: "晚餐" },
        { icon: "../../img/apple5.png", title: "快餐" },
        { icon: "../../img/apple6.png", title: "超市" },
        { icon: "../../img/apple7.png", title: "正餐" },
        { icon: "../../img/apple8.png", title: "全部" }
      ]
    ],
    inputval: "",
    shopst: [],
    shops: []
  },
  // bindRegionChange: function (e) {
  //   console.log(e)
  //   this.setData({
  //     region: e.detail.value
  //   })
  // },
  /**
   * 生命周期函数--监听页面加载
   */
  //跳转商家页面
  goshop(e) {
    let id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: '../shops/shops?id=' + id
    })

  },
  onLoad: function (options) {
    console.log(data.shops)
    //本地请求的超值美食资源
    this.setData({
      shopst: data1.sv
    })
    //商家请求的数据
    //本地请求的资源
    this.setData({
      shops: data.shops
    })
  },

  //获取input值
  getval(e) {
    this.setData({
      inputval: e.detail.value
    })
  },
  //搜索传值
  search(e) {
    let v = e.currentTarget.dataset.d
    if (v == "") {
      return
    }
    wx.navigateTo({
      url: '../search/search?data=' + v
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