var respImg = document.getElementById('respImg');
var respBtn = document.getElementById('respBtn');

function resp() {
    'use strict';
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

    // ---- flex variables ----
    var flexToggler = $('.flex-toggler');
    var toggleGrower1 = $('.flex-togglerGrow-1');
    var toggleGrower2 = $('.flex-togglerGrow-2');
    var toggleGrower3 = $('.flex-togglerGrow-3');
    // ---- flex alignment ----
    var justifying = $('#justifying');
    var itemAlign = $('#item-align');
    var flexDir = $('#flex-dir');
    var flexWrap = $('#flex-wrap');
    var contAlign = $('#cont-align');
    var flexGrow1 = $('#flex-grow-1');
    var flexGrow2 = $('#flex-grow-2');
    var flexGrow3 = $('#flex-grow-3');
    var flexShrink1 = $('#flex-shrink-1');
    var flexShrink2 = $('#flex-shrink-2');
    var flexShrink3 = $('#flex-shrink-3');

    // ---- syntax highlight ----
    var syntaxHighlight = $('figure.code');

    // ---- smooth scrolling ----
    var smoothScroll = $('.smoothLink');

    // ---- Malihu scroll ----
    var scrollElement = $('.scrollBar');



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
        });


        // ---- flex functions ----
        flexToggler.on('click', function (e) {
            var target = e.target;
            var flexAlign = target.getAttribute('data-value');
            justifying.css('justify-content', flexAlign);
            itemAlign.css('align-items', flexAlign);
            flexDir.css('flex-direction', flexAlign);
            flexWrap.css('flex-wrap', flexAlign);
            contAlign.css('align-content', flexAlign);

        });

        toggleGrower1.on('click', function (e) {
            var target = e.target;
            var flexAlign = target.getAttribute('data-value');
            flexGrow1.css('flex-grow', flexAlign);
            flexShrink1.css('flex-shrink', flexAlign);

        });

        toggleGrower2.on('click', function (e) {
            var target = e.target;
            var flexAlign = target.getAttribute('data-value');
            flexGrow2.css('flex-grow', flexAlign);
            flexShrink2.css('flex-shrink', flexAlign);

        });

        toggleGrower3.on('click', function (e) {
            var target = e.target;
            var flexAlign = target.getAttribute('data-value');
            flexGrow3.css('flex-grow', flexAlign);
            flexShrink3.css('flex-shrink', flexAlign);

        });


        // ---- syntax highlight ----
        syntaxHighlight.each(function(i, block) {
            hljs.highlightBlock(block);

        });

        // ---- Malihu scroll ----
        scrollElement.mCustomScrollbar({
            scrollBarPosition: 'outside',
            mouseWheel:{ preventDefault: true }

        });

        // ---- smooth page navigation ----
        smoothScroll.click(function (e) {
            e.preventDefault();
            $('body, html').animate({
                scrollTop: $(this.hash).offset().top
            }, 750);
        });

    });


})(jQuery);
