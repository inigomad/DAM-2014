(function($){

    $.fn.stripe = function(color){
        var c = color || '#CCC';

        return this.filter('table').each(function(){
            var $this = $(this);

            $this.find('tbody tr:odd').css('background-color', c);

        });
            
    
    };

})(jQuery);

$('#fruits').stripe('#123');