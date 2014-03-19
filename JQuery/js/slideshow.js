$(document).ready(function(){
    var slider = $('#slideshow').bxSlider({
        mode : 'fade',
        controls : false,
        autostart: false,
        pager : false,
        onSlideAfter : function (){alert('Diapositiva ' + slider.getCurrentSlide());}
     });


    $(document).on('click', '#adelante', function(){
        slider.goToNextSlide();
    });

    $(document).on('click', '#atras', function(){
         slider.goToPrevSlide();
    });

    $(".fancybox").fancybox();


});