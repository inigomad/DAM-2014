$(function(){

    $(document).on('click','#comprobar', function(e){
        $.ajax({
            url : '../servidor/compruebaDisponibilidadJSON.php', 
            data : {},
            datatype : 'json',
            type : 'post',
            cache : false,
            success : function(data, textStatus, jqXHR) {
                console.log(data);
                if ($('#respuesta').length > 0) {$('#respuesta').text('El nombre ' + $.parseJSON(data).disponible+' se puede utilizar');} 
                else {$('<p id="respuesta">El nombre '+$.parseJSON(data).disponible+' se puede utilizar</p>').appendTo('#disponibilidad');}

                if ($.parseJSON(data).disponible == "no"){

                    $('#opciones').remove();

                    $('<ul id="opciones">Opciones: </ul>').appendTo('#disponibilidad');
                    for (var i = $.parseJSON(data).alternativas.length - 1; i >= 0; i--) {
                        $('<li>'+$.parseJSON(data).alternativas[i]+'</li>').appendTo('#opciones');
                        }
                
           

                }

                else {$('#opciones').remove();}

                        /*optional stuff to do after success */
            },
            error : function(jqXHR, textStatus, errorThrown) {
                    console.log(errorThrown);
            }
        });
    });



});