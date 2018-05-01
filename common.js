var bmap = require('bmap-wx.js');
function init() {
  // 首先查看是不是有数据
  try {
    var BMap = new bmap.BMapWX({
      ak: 'UnMeMmKOwfL2jYjTq1VU3TAgCIsqb6Gf'
    });
    var fail = function (data) {
      console.log(data)
    }
    var success = function (data) {
      var weatherData = data.currentWeather[0];
      // weatherData.fullData = data.originalData.results[0];
      //console.log(weatherData);
      // 发起weather请求 
      BMap.weather({
        fail: fail,
        success: success
      });
    }
  } catch (e) {
    // Do something when catch error
    console.log("缓存出问题啦!");
  }
}
function changeicon(disc) {
  var now = new Date().getHours();
  console.log(now)
  var statusData = {
    picsrc = "",
    wallsrc = ""
  };
  var dayNight = "w";
  var wallPaper = "day";
  if (now > 18 || now < 6) {
    dayNight = "n";
    wallPaper = "night;"
  } else {
    dayNight = "w";
    wallPaper = "day";
  }
  switch (disc) {
    case "晴":
      statusData.picsrc = "/images/w/" + dayNight + "00";
      statusData.wallsrc = "/images/clear" + wallPaper;
      break;
    case "多云":
      statusData.picsrc = "/images/w/" + dayNight + "01";
      statusData.wallsrc = "/images/cloud" + wallPaper;
      break;
    case "阴":
      statusData.picsrc = "/images/w/" + dayNight + "02";
      statusData.wallsrc = "/images/rainy" + wallPaper;
      break;
    case "雨":
      statusData.picsrc = "/images/w/" + dayNight + "08";
      statusData.wallsrc = "/images/rainy" + wallPaper;
      break;
    case "雪":
      statusData.picsrc = "/images/w/" + dayNight + "15";
      statusData.wallsrc = "/images/snow" + wallPaper;
      break;
    case "沙尘暴":
      statusData.picsrc = "/images/w/" + dayNight + "20";
      statusData.wallsrc = "/images/sand" + wallPaper;
      break;
    default:
      console.log("未匹配到")
      statusData.picsrc = "/images/w/" + dayNight + "00";
      statusData.wallsrc = "/images/clear" + wallPaper;
  }
  return statusData;
}
module.exports = {
  changeicon = changeicon,
  init = init
}
