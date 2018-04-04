let params = {
  left: 0,
  top: 0,
  currentX: 0,
  currentY: 0,
  flag: false
};
//获取相关CSS属性
let getCss = function (o, key) {
  return o.currentStyle ? o.currentStyle[key] : document.defaultView.getComputedStyle(o, false)[key];
};

//拖拽的实现
let startDrag = function (bar, target, callback) {
  if (getCss(target, "left") !== "auto") {
    params.left = getCss(target, "left");
  }
  if (getCss(target, "top") !== "auto") {
    params.top = getCss(target, "top");
  }
  //o是移动对象
  bar.onmousedown = function (event) {
    params.flag = true;
    if (!event) {
      event = window.event;
      //防止IE文字选中
      bar.onselectstart = function () {
        return false;
      }
    }
    let e = event;
    params.currentX = e.clientX;
    params.currentY = e.clientY;
  };
  document.onmouseup = function () {
    params.flag = false;
    if (getCss(target, "left") !== "auto") {
      params.left = getCss(target, "left");
    }
    if (getCss(target, "top") !== "auto") {
      params.top = getCss(target, "top");
    }
  };
  document.onmousemove = function (event) {
    let e = event ? event : window.event;
    if (params.flag) {
      let nowX = e.clientX, nowY = e.clientY;
      let disX = nowX - params.currentX, disY = nowY - params.currentY;
      target.style.left = parseInt(params.left) + disX + "px";
      target.style.top = parseInt(params.top) + disY + "px";
      if (event.preventDefault) {
        event.preventDefault();
      }
      return false;
    }

    if (typeof callback == "function") {
      callback(parseInt(params.left) + disX, parseInt(params.top) + disY);
    }
  }
};

export default startDrag;
