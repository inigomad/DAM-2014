$(document).ready(function(){
    "use strict";

    var elemento;

    $(document).on('blur', 'input', function(){

        if (this.validity.valid && this.value !==''){
            $('#progreso')[0].value = $('#progreso')[0].value + 1;
        }
        /* Act on the event */
    });

    $(document).on('click', 'input', function(){
        
            if (this.validity.valid && this.value !=='' && this!==elemento){
                $('#progreso')[0].value = $('#progreso')[0].value - 1;
            }

            elemento = this;
        
        /* Act on the event */
    });

    $('<div>Este navegador no soporta:</div>').appendTo('body');

    for (var i in Modernizr.inputtypes) {
        
    if (Modernizr.inputtypes[i] === false) {
        $('<div>'+i+'</div>').appendTo('body');
     }
    }

    $('<br><div>Pero si soporta:</div>').appendTo('body');

    for (var j in Modernizr.inputtypes) {
        
    if (Modernizr.inputtypes[j] === true) {
        $('<div>'+j+'</div>').appendTo('body');
     }
    }

    Modernizr.load({
        test: Modernizr.inputtypes,
        yep: 'datetime-polyfill.min.js',
        nope: 'datetime-polyfill.min.js'
    });



});