$(function(){

    window.onload = $('#recurso').val(document.location.href);

    $(document).on('click','#enviar', function(e){
        var $this = $(this);
        $.ajax({
            url : $('#recurso').val(), 
            data : {},
            datatype : 'text',
            cache : false,
            success : function(data, textStatus, jqXHR) {
                console.log(jqXHR);
                $('#contenidos').text(data);
                $('#codigo').text(jqXHR.status + ' - ' + jqXHR.statusText);
                $('#cabeceras').text(jqXHR.getAllResponseHeaders());
                        /*optional stuff to do after success */
            },
            error : function(jqXHR, textStatus, errorThrown) {
                    console.log(errorThrown);
                    $('#codigo').text(jqXHR.status + ' - ' + jqXHR.statusText);
                    $('#cabeceras').text(jqXHR.getAllResponseHeaders());
            }
        });
    });

});