$(function(){

    var peticiones = [];
    var index = -1;

    $peticion = function() {
        $.ajax({
            url : '../servidor/generaContenidos.php', 
            data : {},
            datatype : 'text',
            cache : false,
            success : function(data, textStatus, jqXHR) {
                console.log(jqXHR);
                var fecha = new Date();
                $('#ticker').text(fecha.getHours()+':'+((fecha.getMinutes()<10?'0':'') + fecha.getMinutes())+':'+((fecha.getSeconds()<10?'0':'') + fecha.getSeconds())+' - '+data);
                peticiones.push($('#ticker').text());
                index = peticiones.length-1;
            },
            error : function(jqXHR, textStatus, errorThrown) {
                    console.log(errorThrown);
            }
        });
    };

    var noticias = setInterval($peticion, 1000);

    $(document).on('click','#detener', function(e){
            if (noticias > 0) {
                clearInterval(noticias);
                noticias = 0;
            }
            else {noticias = setInterval($peticion, 1000);}

    });

    $(document).on('click','#siguiente', function(e){
            clearInterval(noticias);
            noticias = 0;
            index = index +1;
            if (index < peticiones.length) {$('#ticker').text(peticiones[index]);}
            else {index = index - 1;}
    });

    $(document).on('click','#anterior', function(e){
            clearInterval(noticias);
            noticias = 0;
            index = index - 1;
            if (index >= 0) {$('#ticker').text(peticiones[index]);}
            else {index = index +1;}
    });





});
