$(document).ready(function(){

    var mivideo = $('#mivideo')[0];

    mivideo.volume = $('#volumen')[0].value/100;

    var valvol = $('#valvol')[0];

    valvol.innerHTML = mivideo.volume * 100;

    var progreso = $('#progreso')[0];

    progreso.style.width = '90%';

    mivideo.addEventListener('timeupdate', function() {
        var percent = Math.floor((100 / mivideo.duration) * mivideo.currentTime);
        progreso.value = percent;
    }, false);

    $(document).on('click', '#playbtn', function(event) {
        mivideo.play();
        /* Act on the event */
    });

    $(document).on('click', '#pausabtn', function(event) {
        mivideo.pause();
        /* Act on the event */
    });

    $(document).on('click', '#stopbtn', function(event) {
        mivideo.pause();
        mivideo.currentTime = 0;
        /* Act on the event */
    });

    $(document).on('click', '#iniciobtn', function(event) {
        mivideo.currentTime = 0;
        /* Act on the event */
    });

    $(document).on('click', '#avanbtn', function(event) {
        mivideo.currentTime = mivideo.currentTime + 10;
        /* Act on the event */
    });

    $(document).on('click', '#retrbtn', function(event) {
        mivideo.currentTime = mivideo.currentTime - 10;
        /* Act on the event */
    });

    $(document).on('click', '#finbtn', function(event) {
        mivideo.pause();
        mivideo.currentTime = mivideo.duration;
        /* Act on the event */
    });

    $(document).on('click', '#fscrbtn', function(event) {
        mivideo.webkitRequestFullScreen();
        /* Act on the event */
    });

    $(document).on('change', '#volumen', function(event) {
        mivideo.volume = this.value/100;
        valvol.innerHTML = this.value;
        /* Act on the event */
    });

});