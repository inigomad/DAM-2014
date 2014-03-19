$(function(){
    'use strict';

    var $boxes = $('.box');
    var $width = $(document).width();

    $boxes.css({
        'color' : 'yellow',
        'width' : '50px',
        'height' : '50px',
        'font-size' : '18px',
        'background-color' : 'blue',
        '-webkit-transform' : 'translatex(' + ($width -100) + 'px)',
        '-webkit-transition' : 'all 5s'
    });



});