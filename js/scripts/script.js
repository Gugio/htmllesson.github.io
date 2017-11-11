var respImg = document.getElementById('respImg');
var respBtn = document.getElementById('respBtn');

function resp() {
  if (respImg.hasAttribute('style')) {
    respImg.removeAttribute('style');
    respBtn.innerHTML = 'Add responsive';
    return;
  }
  respImg.setAttribute('style', 'max-width:100%;height:auto;');
  respBtn.innerHTML = 'Remove responsive';
}


(function ($) {
  'use strict';
  var brepet = $('#brepet');
  var battach = $('#battach');
  var bclip = $('#bclip');
  var borig = $('#borig');
  var bsize = $('#bsize');
  var over = $('#over');
  var brepetR = $('.radioRepeat');
  var brepetRO = $('.brepetRO');

  $(document).ready(function () {
    brepetR.on('click', function (e) {
      var target = e.target;
      var datav = target.getAttribute('data-content');
      brepet.css('background-repeat', datav);
      battach.css('background-attachment', datav);
      bsize.css('background-size', datav);
      bclip.css('background-clip', datav);
      over.css('overflow', datav);
    });

    brepetRO.on('click', function (e) {
      var target = e.target;
      var datav = target.getAttribute('data-content');
      borig.css('background-origin', datav);
    })
  });
})(jQuery);

