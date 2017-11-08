(function ($) {
  'use strict';

  var $shareBtn = $('#shareBtn');
  var $shareBtnClose = $('#shareBtnClose');
  var $shareBlock = $('.share-links');

  var $sizeBtn = $('.size-btn span');

  var $listSlider = $('#itemsSlider');
  var $itemsList = $listSlider.find('.items-list');
  var $prev = $listSlider.find('.prev');
  var $next = $listSlider.find('.next');
  var slideCount = $listSlider.find('li').length;
  var slideWidth = $listSlider.width();
  var sliderListWidth = slideCount * slideWidth;

  $itemsList.css({
    width: sliderListWidth,
    marginLeft: -slideWidth
  });

  $listSlider.find('li').css({
    width: slideWidth
  });

  $(window).on('load', function () {
    var viewportWidth = $(document).width();

    if (viewportWidth < 699) {
      $listSlider.find('li:last-child').prependTo($itemsList);
    }
  });

  $(window).on('load resize', function () {
    var viewportWidth =  $(window).width();

    if (viewportWidth < 699) {
      slideWidth = $listSlider.width();
      sliderListWidth = slideCount * slideWidth;

      $itemsList.css({
        width: sliderListWidth,
        marginLeft: -slideWidth
      });

      $listSlider.find('li').css({
        width: slideWidth
      });
    } else {
      $itemsList.css({
        width: '',
        marginLeft: ''
      });
      $itemsList.find('li').css({
        width: ''
      });
    }
  });

  $(document).ready(function () {

    //Hack for IE8 ---------------
    $sizeBtn.click(function () {
      $sizeBtn.removeClass('checked');
      $(this).addClass('checked');
    });
    // ---------------------------

    $shareBtn.on('click', function () {
      $shareBlock.toggleClass('hide');
    });

    $shareBtnClose.on('click', function () {
      $shareBlock.toggleClass('hide');
    });

    $(document).on('click', function (event) {
      var $el = $(event.target);

      if (!$el.closest('.item-share').length) {
        $shareBlock.addClass('hide');
      }

      event.stopPropagation();
    });

    function slideLeft() {
      $itemsList.animate({ left: +slideWidth }, 250, function () {
        $listSlider.find('li:last-child').prependTo($itemsList);
        $itemsList.css('left', '');
      });
    }

    function slideRight() {
      $itemsList.animate({ left: -slideWidth }, 250, function () {
        $listSlider.find('li:first-child').appendTo($itemsList);
        $itemsList.css('left', '');
      });
    }

    $prev.on('click', function (event) {
      slideLeft();
      event.stopPropagation();
    });

    $next.on('click', function (event) {
      slideRight();
      event.stopPropagation();
    });
  });
})(jQuery);
