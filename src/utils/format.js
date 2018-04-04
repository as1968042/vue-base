let format = {

  friendlyFileSize: (toSize) => {
  if(toSize * 1 < 1024
)
  {
  return toSize * 1 + 'B';
}
else
if (toSize * 1 < 1024 * 1024) {
  return parseInt(toSize * 1 / 1024) + 'KB';
} else if (toSize * 1 < 1024 * 1024 * 1024) {
  return (toSize * 1 / 1024 / 1024).toFixed(1) + 'MB';
} else if (toSize * 1 < 1024 * 1024 * 1024 * 1024) {
  return (toSize * 1 / 1024 / 1024 / 1024).toFixed(2) + 'GB';
}
},
timeFormat: (seconds) =>
{
  if (isNaN(seconds)) {
    return false
  }
  let timeResult = ''

  function timeFilter(seconds) {
    if (seconds < 60) {
      let sec
      sec = (seconds > 0) ? seconds + '秒' : ''
      timeResult = timeResult + sec
      return;
    }
    else if (seconds < 3600) {
      let min
      min = Math.floor(seconds / 60)
      //console.log(min)
      timeResult = timeResult + min + '分钟'
      timeFilter(seconds - min * 60)
    }
    else if (seconds < 3600 * 24) {
      let hour
      hour = Math.floor(seconds / 3600)
      timeResult = timeResult + hour + '小时'
      timeFilter(seconds - hour * 3600)
    } else {
      let day
      day = Math.floor(seconds / 3600 / 24)
      timeResult = timeResult + day + '天'
      timeFilter(seconds - day * 3600 * 24)
    }
  }

  timeFilter(seconds)
  return timeResult
}
,
getDateDiff: (dateTimeStamp) =>
{
  let minute = 1000 * 60;
  let hour = minute * 60;
  let day = hour * 24;
  let halfamonth = day * 15;
  let month = day * 30;
  let year = month * 12;
  let now = new Date().getTime();
  let diffValue = now - dateTimeStamp;
  if (diffValue < 0) {
    return;
  }
  let yearC = diffValue / year;
  let monthC = diffValue / month;
  let halfamonthC = diffValue / halfamonth;
  let weekC = diffValue / (7 * day);
  let dayC = diffValue / day;
  let hourC = diffValue / hour;
  let minC = diffValue / minute;
  let result = '';
  if (yearC >= 1) {
    result = "" + parseInt(yearC) + "年前";
  } else if (halfamonthC >= 1 && monthC < 1) {
    result = "半个月前";
  }
  else if (monthC >= 1) {
    result = "" + parseInt(monthC) + "个月前";
  }
  else if (weekC >= 1) {
    result = "" + parseInt(weekC) + "周前";
  }
  else if (dayC >= 1) {
    result = "" + parseInt(dayC) + "天前";
  }
  else if (hourC >= 1) {
    result = "" + parseInt(hourC) + "小时前";
  }
  else if (minC >= 1) {
    result = "" + parseInt(minC) + "分钟前";
  } else
    result = "刚刚";
  return result;
}

}

export default format

