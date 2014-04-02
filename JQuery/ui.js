var App = App||{};
App.Ui = (function() {
    "use strict";

    var mostrarMaquinas = function(maquinas){

        maquinas = [{
        "id": "1",
        "ubicacion": {
            "longitud": 43.27633,
            "latitud": -2.024574
        },
        "contenido": ["comidacaliente", "bebidacaliente", "comidafria", "bebidafria", "otros"],
        "urlimagen": "maq3.jpg"
    }, {
        "id": "2",
        "ubicacion": {
            "longitud": 43.309628,
            "latitud": -1.983204
        },
        "contenido": ["comidafria", "bebidafria"],
        "urlimagen": "maq4.jpg"
    }, {
        "id": "3",
        "ubicacion": {
            "longitud": 43.321119,
            "latitud": -1.982775
        },
        "contenido": ["comidacaliente", "bebidafria"],
        "urlimagen": "maq1.jpg"
    }, {
        "id": "4",
        "ubicacion": {
            "longitud": 43.293825,
            "latitud": -1.994534
        },
        "contenido": ["comidacaliente", "comidafria"],
        "urlimagen": "maq2.jpg"
    }];

        var lista = $('<ul/>', {});

        for (var i = maquinas.length - 1; i >= 0; i--) {
            lista.append('<li data-id="' + maquinas[i].id + '"><img src="img/'+ maquinas[i].urlimagen +'"><span>Contenido:' + maquinas[i].contenido + '</li>');
        }

        $(lista).appendTo('body');

    };

    var mostrarDetalles = function(maquina){

        maquina = {
        "id": "1",
        "ubicacion": {
            "longitud": 43.27633,
            "latitud": -2.024574
        },
        "contenido": ["comidacaliente", "bebidacaliente", "comidafria", "bebidafria", "otros"],
        "urlimagen": "maq3.jpg"
    };





    };

    mostrarMaquinas();
    mostrarDetalles();

    return {
        mostrarMaquinas : mostrarMaquinas,
        mostrarDetalles : mostrarDetalles
    };




})();