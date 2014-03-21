$(function(){

    $provincias = $('#provincias');
    $localidades = $('#localidades');

    $.ajax({
            url : '../servidor/cargaProvinciasJSON.php', 
            dataType : 'json',
            type : 'POST',
            cache : false,
            success : function(data, textStatus, jqXHR) {
                //console.log(data);
                var opc = new Option('Selecciona una provincia','');
                $provincias[0].options.add(opc);
                for (var i in data){
                    opc = new Option(data[i], i);
                    $provincias[0].options.add(opc);
                }

                        /*optional stuff to do after success */
            },
            error : function(jqXHR, textStatus, errorThrown) {
                    console.log(errorThrown);
            }
        });

    $(document).on('change','#provincias', function(e){
        $.ajax({
                    url : '../servidor/cargaMunicipiosJSON.php', 
                    data : {
                        provincia : $("#provincias option:selected").val(),
                    },
                    dataType : 'json',
                    type : 'POST',
                    cache : false,
                    success : function(data, textStatus, jqXHR) {
                        $('#localidades option').remove();
                        var opc = new Option('Selecciona una localidad','');
                        $localidades[0].options.add(opc);
                        for (var i in data){
                            opc = new Option(data[i], i);
                            $localidades[0].options.add(opc);
                        }

                                /*optional stuff to do after success */
                    },
                    error : function(jqXHR, textStatus, errorThrown) {
                            console.log(errorThrown);
                    }
                });
    });



});