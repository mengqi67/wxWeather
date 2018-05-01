
// var common = require('../../common.js');
var bmap = require('../../utils/bmap-wx.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    ak: "75Kc0XmbCTBYfexbH7oACj9I0aYGyLcd",
    weatherData: '',
    futureWeather: [] ,
    today : "2018-01-01",
    wallsrc: "/images/clearday",
    weatherIcon: "../../images/w/w01",
    theWeather: {
      date: 22,
      currentCity: "北京市",
      weatherDesc: "多云",
      pm25: 67,
      temperature: "24 ~ 14",
      wind: " 无风 "
    },
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    // 新建bmap对象   
    var BMap = new bmap.BMapWX({
      ak: that.data.ak
    }); 
    var fail = function (data) {
      console.log(data);
    };
    
    var success = function (data) {
      // console.log(data);
      var weatherData = data.currentWeather[0];//当前城市所有信息
      var futureWeather = data.originalData.results[0].weather_data;//预报
      // common.init();
      var date = weatherData.date;
      date = date.substring(date.indexOf("：") + 1, date.indexOf("℃"));
      console.log(date);
      weatherData.date = date;
      that.setData({
        theWeather: weatherData,
        today: data.originalData.date,
        one: futureWeather[0].date.substring(0,3),
        onetemp: futureWeather[0].temperature,
        two: futureWeather[1].date,
        twotemp: futureWeather[1].temperature,
        three: futureWeather[2].date,
        threetemp: futureWeather[2].temperature,
        four: futureWeather[3].date,
        fourtemp: futureWeather[3].temperature
      });
      // var bigIcon = common.changeicon(weatherData.weatherDesc);
      // weatherIcon = bigIcon.picsrc;
      // wallsrc = bigIcon.wallsrc;   
    };
    // 发起weather请求
    BMap.weather({
      fail: fail,
      success: success
    });    
  },
  

 
  onReady: function () {
     /**
   * 生命周期函数--监听页面初次渲染完成
   */
  },

 
  onShow: function () {
     /**
   * 生命周期函数--监听页面显示
   */
  },


  onHide: function () {
      /**
   * 生命周期函数--监听页面隐藏
   */
  },


  onUnload: function () {
      /**
   * 生命周期函数--监听页面卸载
   */
  },

 
  onPullDownRefresh: function () {
     /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  },

 
  onReachBottom: function () {
     /**
   * 页面上拉触底事件的处理函数
   */
  },


  onShareAppMessage: function () {
      /**
   * 用户点击右上角分享
   */
  }
})