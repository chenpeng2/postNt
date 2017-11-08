(function (doc, win) {
  var docEl = doc.documentElement,
    resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
    recalc = function () {
      var clientWidth = docEl.clientWidth;
      if (!clientWidth) return;
      if(clientWidth<=540){
        docEl.style.fontSize = 20* (clientWidth / 320) + 'px';
      }else{
        docEl.style.fontSize = 33.75 + 'px';
      }
    };

  if (!doc.addEventListener) return;
  win.addEventListener(resizeEvt, recalc, true);
  //doc.addEventListener('DOMContentLoaded', recalc, true);
  recalc();
})(document, window);
