$(function () {
    "use strict";

    // Obtener los elementos del DOM

    // Mi color asignado por el servidor
    var myColor = false;
    // Mi nick
    var myName = false;

    function addMessage(author, message, color, dt) {
        $('#content').prepend('<p><span style="color:' + color + '">' + author + '</span> @ ' +
              (dt.getHours() < 10 ? '0' + dt.getHours() : dt.getHours()) + ':' +
              (dt.getMinutes() < 10 ? '0' + dt.getMinutes() : dt.getMinutes()) +
              ': ' + message + '</p>');
    }

    // Comprobar la disponibilidad de Web Socket en el navegador
    if (Modernizr.websockets) {


    window.WebSocket = window.WebSocket || window.MozWebSocket;

    var socket = new WebSocket('ws://www.arkaitzgarro.com:1337');

    socket.onopen  = function(e){ $('#input')[0].disabled=false;$('#status')[0].innerHTML = 'Conectado';};

    socket.onerror = function(e){ console.log(e); };

    socket.onmessage = function(event) {
        var data = JSON.parse(event.data);

       if (data.type == 'color') {
            $('#status')[0].innerHTML = $('#status')[0].innerHTML + '<span style="color:' + data.data + '"> (' + $('#input')[0].value + ' ) </span>';
            $('#input')[0].value = '';
        }

        if (data.type == 'history') {
            for (var i in data.data) {
                addMessage(data.data[i].author,data.data[i].text,data.data[i].color,new Date(data.data[i].time));}
        }

        if (data.type == 'message') {
            addMessage(data.data.author,data.data.text,data.data.color,new Date(data.data.time));}
        
    

    };

        $(document).on('keyup', function(event) {
            if (event.keyCode == 13)  {socket.send($('#input')[0].value);}

            /* Act on the event */
        });

    // Abrir la conexion con ws://www.arkaitzgarro.com:1337
    // 1. Al abrir la conexión, solicitar el nick.
    // 2. Controlar posibles errores del servidor.
    // 3. Escucar los mensajes del servidor, y mostrarlos en el elemento "content"
    // 4. La estructura del objeto enviado por el servidor es la siguiente:
    //      {
    //          // Contiene el tipo de mensaje recibido
    //          type : @string in ['color', 'history', 'message'],
    //          // Contiene los datos según el tipo de mensaje recibido
    //          data: @Object {author, text, color, time}
    //      }
    // 5. Enviar un mensaje al pulsar enter. El mensaje enviado es únicamente la cadena de caracteres.

    /**
     * Añadir el mensaje a la ventana de chat
     */

    $(document).on('click', '#enviar', function(event) {
        socket.send($('#input')[0].value);
        /* Act on the event */
    });

}

});