(function(){

    "use strict";

    var enlaces = document.getElementsByTagName("a");
    console.log(enlaces.length);

    enlaces = document.querySelectorAll("a");
    console.log(enlaces.length);

    var dir = enlaces[enlaces.length-2];
    console.log(dir.href);

    var numEnlaces=0;
    for (var i = enlaces.length - 1; i >= 0; i--) {
        if (enlaces[i].href === "http://prueba/") numEnlaces+=1;
    }
    console.log("Número de enlaces con un for: ");console.log(numEnlaces);

    enlaces = document.querySelectorAll('a[href="http://prueba/');
    console.log("Número de enlaces con css: ");console.log(enlaces.length);

    var parrafos;
    parrafos = document.querySelectorAll("body > p");

    console.log("Número de enlaces del tercer párrafo: ");console.log(parrafos[2].getElementsByTagName("a").length);

}

)();

    