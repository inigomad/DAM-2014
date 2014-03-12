window.$ = Element.prototype.$ = function(selector) {
    var that = (this instanceof Element) ? this : document;
    var elems = that.querySelectorAll(selector);
    return (elems.length === 1) ? elems[0] : elems;
};

window.onload = function() {
    var formulario = $("#registro");

    formulario.validar({

        'required' : {
            'msg' : 'Campo requerido',
            'clase' : 'error-requerido'
        },
        'textarea' : {
            'msg' : 'Max. 50 caracteres',
            'clase' : 'excedido-textarea'
        },
        'password' : {
            'msg' : 'La contraseña debe tener al menos 6 dígitos, una mayúscula, una minúscula y un número',
            'clase' : 'error-pass'
        },
        'email' : {
            'msg' : 'Formato de email incorrecto',
            'clase' : 'error-email'
        },
        'condiciones' : {
            'msg' : 'Debe aceptar las condiciones del servicio',
            'clase' : 'error-condiciones'
        }

    
    }



        );
};