// pages/shops/shops.js
let data = require("../../libs/foodimg.js")
let cainame = [];//负责传递到去结算页面的菜名数组
let everyprice = [];//负责传递到去结算页面的价格数组
let everynum = [];//负责传递到去结算页面的数量数组
Page({
  data: {
    shops: {},
    curt: 0,
    curindex: 0,
    idx: 0,
    ishow: 1,
    cai: [],
    allprice: 0,
    allnum: 0,
    cainame:[],
   everynum:[],
    everyprice:[]

  },
  //菜品切换
  goIndex(e) {
    let i = e.currentTarget.dataset.id;
    let index = e.currentTarget.dataset.index//根据index来显示菜
    this.setData({
      curt: i,
      curindex: index
    });
  },
  //增加商品数量
  add(e) {
    let index = e.currentTarget.dataset.index
    let cai = this.data.cai;
    let curt = this.data.curt;//当前是哪个分类下的菜
    let num = cai[curt][index].num;
    num++;
    cai[curt][index].num = num
    
    everynum.push(cai[curt][index].num)//点击一次pushprice
    cainame.push(cai[curt][index].cainame)//点击一次push菜名
    everyprice.push(cai[curt][index].price)//点击一次pushprice
    this.setData({
      cai: cai,
      cainame:cainame,
      everyprice: everyprice,
      everynum: everynum
    })
    this.getAll()
    console.log(this.data.cainame)
  },
  //减少商品数量
  minus(e) {
    let index = e.currentTarget.dataset.index
    let cai = this.data.cai;
    let curt = this.data.curt;//当前是哪个分类下的菜
    let num = cai[curt][index].num;
    cainame.splice(cai[curt][index], 1)//点击一次删除菜名
    if (num <= 0) {
      return false;
    }
    num--;
    //重新赋值数量
    cai[curt][index].num = num
    this.setData({
      cai: cai,
      cainame:cainame
    })
    this.getAll()
  },
  //计算总价
  getAll() {
    let cai = this.data.cai;
    let total = 0;
    let allnum = 0;
    let allcainame=""
    //循环当前类别菜数组
    for (let i = 0; i < cai.length; i++) {
      let c = cai[i];
      for (let j = 0; j < c.length; j++) {
        let num = c[j].num
        let price = c[j].price;
        //计算总商品数        
        allnum += num
         //计算总价
        total += num * price
      }
    }
    this.setData({
      allprice: total,
      allnum: allnum
    });
  },
  //跳转支付页面
  getAllprice() {
    // console.log(this.data.shops)
    //传递菜馆名，总价
    let title = this.data.shops.title;
    let allprice = this.data.allprice;
    let cainame = this.data.cainame;
    if (this.data.allnum === 0) {
      wx.showModal({
        title: '商品为空！',
        content: '您选择商品了吗？',
      })
      return
    } else {
      //商品数量不能为0
      this.getAll()
      wx.navigateTo({
        url: '../pay/pay?allprice=' + allprice + '&title=' + title + '&cainame=' + cainame + '&everynum=' + everynum + '&everyprice=' + everyprice
      })
    }
  },
  onLoad: function (options) {
    let id = options.id;
    //商家详情本地请求资源
    wx.showToast({
      title: '成功',
      duration: 500,
      success: (e) => {
        if (e.errMsg === 'showToast:ok') {
          this.setData({
            shops: data.shops[id],
            cai: data.shops[id].cai
          })
          console.log(this.data.cai)
        } else {
          console.log(e.errMsg)
        }
      }
    })
  },
  switchnav(e) {
    let id = e.currentTarget.dataset.id
    //console.log(id)
    if (this.data.idx === id) {
      return
    } else {
      let i = id == 0
      this.setData({
        ishow: i,
        idx: id
      })
    }
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