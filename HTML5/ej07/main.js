$(document).ready(function(){

    var caja = $('#caja')[0];

    caja.value = localStorage.getItem('contenido');

    $(document).on('keyup', '#caja', function(event) {
       
       localStorage.setItem('contenido', this.value);

    });

    function handleStorage(event) {
        event = event || window.event; // support IE8
        if (event.newValue === null) { // it was removed

        } else {
           caja.value = localStorage.getItem('contenido');
        }
    }

    window.addEventListener('storage', handleStorage, false);
    //window.attachEvent('onstorage', handleStorage); para

});