$(document).ready(function() {

    $('form').validador({
        'required': {
            'emsg': 'campo requerido',
            'clases': 'error-requerido'
        },
        'textarea': {
            'emsg': "longitud máxima excedida",
            'clases': 'error-textarea'
        },
        'password': {
            'emsg': "cotraseña demasiado debil",
            'clases': 'error-password'
        },
        'email': {
            'emsg': "email erroneo",
            'clases': 'error-email'
        }
    });

    // //var $f = $('form').validador();
    // $(document).on('keyup', '[data-validator]', function() {

    // });

    // $(document).on('submit', '[type="submit"]', function() {
    //     $('form').validador({
    //         'required': {
    //             'emsg': 'campo requerido',
    //             'clases': 'error-requerido'
    //         },
    //         'textarea': {
    //             'emsg': "longitud máxima excedida",
    //             'clases': 'error-textarea'
    //         },
    //         'password': {
    //             'emsg': "cotraseña demasiado debil",
    //             'clases': 'error-password'
    //         },
    //         'email': {
    //             'emsg': "email erroneo",
    //             'clases': 'error-email'
    //         }
    //     });
    // });


});