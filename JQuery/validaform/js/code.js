window.$ = Element.prototype.$ = function(selector) {
    var that = (this instanceof Element) ? this : document;
    var elems = that.querySelectorAll(selector);
    return (elems.length === 1) ? elems[0] : elems;
};

window.onload = function() {
    var formulario = $("#registro");
    // var formulario1 = $("#registro1");
    formulario.validar({
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
    // formulario1.validar();
};