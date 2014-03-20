$(function(){
    $(document).on('change','select[name=day]', function(e){
        var $this = $(this);
        $.ajax({
            url : 'data/specials.json', 
            data : {data : $this.val()},
            datatype : 'json',
            cache : false,
            success : function(data, textStatus, jqXHR) {
                        console.log(data);
                        /*optional stuff to do after success */
            },
            error : function(jqXHR, textStatus, errorThrown) {
                    console.log(errorThrown);
            }
        });
    });
});