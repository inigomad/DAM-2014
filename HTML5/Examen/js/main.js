$(document).ready(function() {

    var contadorJ = 0,
        contadorR = 0,
        aciertos = [],
        elreto = null,
        eljugador = null,
        fin = false;

    // GEOLOCALIZACION

    var position;

    function showMap(long, lat) {
        var mapcanvas = document.createElement('div');
        mapcanvas.id = 'mapcanvas';
        mapcanvas.style.height = '400px';
        mapcanvas.style.width = '560px';

        document.querySelector('section').appendChild(mapcanvas);

        console.log(long, lat);

        var latlng = new google.maps.LatLng(lat, long);
        var myOptions = {
            zoom: 15,
            center: latlng,
            mapTypeControl: false,
            navigationControlOptions: {style: google.maps.NavigationControlStyle.SMALL},
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(document.getElementById("mapcanvas"), myOptions);

        var marker = new google.maps.Marker({
            position: latlng,
            map: map,
            title: "¡Usted está aquí!"
        });
    }

    // BD

    window.indexedDB = window.indexedDB || window.mozIndexedDB ||
                    window.webkitIndexedDB || window.msIndexedDB;

    window.IDBTransaction = window.IDBTransaction || 
                    window.webkitIDBTransaction || window.msIDBTransaction;

    window.IDBKeyRange = window.IDBKeyRange || 
                    window.webkitIDBKeyRange || window.msIDBKeyRange;

   function cargar (data) {    
        var transaction = bd.transaction(["concurso"], "readwrite");
        var store = transaction.objectStore("concurso");

        console.log(data);

        var request = store.put(data);

        request.onsuccess = function(e) {
            console.log("Se ha añadido: "+e);
        };

        request.onerror = function(e) {
            console.log("Error añadiendo: ", e);
        };
    }

    var ObtenerJSON = function() {
        var datos = $.ajax({
            url : 'data/show.json', 
            data : {},
            dataType : 'json',
            type : 'POST',
            cache : false,
            success : function(data, textStatus, jqXHR) {
                    cargar(data);
            },
            error : function(jqXHR, textStatus, errorThrown) {
                    console.log(errorThrown);
            }
        });

    };

    var bd = null;

    function onerror(e) {
        console.log(e);
    }

    function abrirBD () {
        var version = 1;
        var request = indexedDB.open("concurso", version);

        request.onupgradeneeded = function(e) {
            bd = e.target.result;

            if(bd.objectStoreNames.contains('concurso')) bd.deleteObjectStore('concurso');

            var store = bd.createObjectStore("concurso", 
                    { keyPath: "id" });
        };

        request.onerror = onerror;

        request.onsuccess = function(e) {
            bd = e.target.result;
            ObtenerJSON();
            console.log("Base de datos abierta");
        };
    }

    function cargaJugador() {

        var transaction = bd.transaction(["concurso"]);
        var store = transaction.objectStore("concurso");

        var cursorRequest = store.openCursor();

        cursorRequest.onsuccess = function (event) {
            var cursor = event.target.result;
            var jugador = cursor.value.players[contadorJ];
            eljugador = jugador;
            if (cursor) {
                $('#contenido')[0].innerHTML = "<img src=" + jugador.player.photo + ">" +
                                                             "<span class='center'>Jugador " + (contadorJ + 1) + "</span><br>" + 
                                                             jugador.player.name + "<br>" + 
                                                             jugador.player.age + "<br>" + 
                                                             jugador.player.description +
                                                             "<input type='button' value='Siguiente' id='elecBtn'>" ;
            } else {

            }
        };

        cursorRequest.onerror = onerror;
    }

    function cargaReto() {

        var transaction = bd.transaction(["concurso"]);
        var store = transaction.objectStore("concurso");

        var cursorRequest = store.openCursor();

        cursorRequest.onsuccess = function (event) {
            var cursor = event.target.result;
            var reto = cursor.value.players[contadorJ].challenges[contadorR];
            elreto = reto;
            var correcta = cursor.value.players[contadorJ].challenges[contadorR].selected;
            if (cursor) {
                $('#contenido')[0].innerHTML = "<img src=" + reto.option1.photo + " id='op1' data-correcta='false'>" + 
                                               "<img src=" + reto.option2.photo + " id='op2' data-correcta='false'>" +
                                               "<a href='#' data-long=" + reto.place.longitude + " data-lat=" + reto.place.latitude + " id='geoloc'>" + 
                                               reto.place.address + "</a><br>" + " " + 
                                               reto.place.description + "<br><br><br>" + 
                                               "Haz clic en una de las dos imágenes<br>";
                if (correcta == 'option1') $('#op1').data('correcta','true');
                else $('#op2').data('correcta','true');
            } else {
            //Objects are in data[]
            }

            if (cursor.value.players[contadorJ].challenges.length == (contadorR + 1)) 
                {
                    contadorR = 0;

                    if ((contadorJ+1) == cursor.value.players.length) {fin = true; contadorJ = 0;}
                    else contadorJ = contadorJ + 1;
                }
            else contadorR = contadorR + 1;
        };

        cursorRequest.onerror = onerror;
    }

    function muestraEstadisticas(){

        $('#contenido')[0].innerHTML = "Has tenido " + aciertos.length + " acierto/s<br>";
        for (var i in aciertos)
            {
                $('#contenido')[0].innerHTML = $('#contenido')[0].innerHTML + "Con el jugador " + aciertos[i].jugador.player.name + " el reto de " + aciertos[i].reto.place.address + "<BR>";
            }
                                    

    }

    function init() {
        abrirBD();
    }

    // EVENTOS

    window.addEventListener("DOMContentLoaded", init, false);

    $(document).on('click', '#jugar', function(event) {
        cargaJugador();
    });

    $(document).on('click', '#estadisticas', function(event) {
        muestraEstadisticas();
    });

    $(document).on('click', '#encuesta', function(event) {
        $('#contenido')[0].innerHTML = "hola";
    });

    $(document).on('click', '#elecBtn', function(event) {
        cargaReto();
    });

    $(document).on('click', '#geoloc', function(event) {
        console.log($('#geoloc').data('longlat'));
        showMap($('#geoloc').data('long'),$('#geoloc').data('lat'));
    }); 

   $(document).on('click', '#op1', function(event) {
        if ($(this).data('correcta') == 'true') {alert('acertaste!');aciertos.push({"jugador":eljugador,"reto":elreto});}
        else alert('fallaste!');
        if (!fin){
            if (contadorR === 0) cargaJugador();
            else cargaReto();
        }
        else {
                alert("Se acaboooo!");
                muestraEstadisticas();
            }
    }); 

   $(document).on('click', '#op2', function(event) {
        if ($(this).data('correcta') == 'true') {alert('acertaste!');aciertos.push({"jugador":eljugador,"reto":elreto});}
        else alert('fallaste!');
        if (!fin){
            if (contadorR === 0) cargaJugador();
            else cargaReto();
        }
        else {
                alert("Se acaboooo!");
                contadorR = 0;
                contadorJ = 0;
                muestraEstadisticas();
            }
    });


});