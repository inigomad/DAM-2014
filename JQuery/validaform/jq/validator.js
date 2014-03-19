(function($) {

    $.fn.validador = function(opts) {
        // console.log(opts.required);
        return this.filter('form').each(function() {
            var $form = $(this);

            $form.on('submit', validarFormulario);
            $form.find(':input[data-validator]').on('keyup checkMe blur', opts, validarCampo);
        });
    };

    $.fn.validate.defaults = {
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
    };

    var validarCampo = function(e) {

        var f = this.dataset.validator;

        switch (f) {
            case 'required':

                if (this.type == "checkbox") {

                    if (!this.checked) {
                        this.labels[0].classList.add("red-txt");
                        this.classList.add('red-bg');

                        createErrorAdvice(this, e.data.required);
                    } else {
                        this.labels[0].classList.remove("red-txt");
                        this.classList.remove('red-bg');
                        borraAvisos(this, e.data.required);
                    }
                    break;
                }
                if (!validador.required(this.value)) {
                    $this = $(this);
                    $this.addClass('red-bg');
                    createErrorAdvice(this, e.data.required);

                } else {
                    $this = $(this);
                    $this.removeClass('red-bg');
                    borraAvisos(this, e.data.required);
                }
                break;
            case 'email':
                if (!validador.email(this.value)) {
                    $this = $(this);
                    $this.addClass('red-bg');
                    createErrorAdvice(this, e.data.email);

                } else {
                    $this = $(this);
                    $this.removeClass('red-bg');
                    borraAvisos(this, e.data.email);
                }
                break;
            case 'password':
                if (!validador.password(this.value)) {
                    $this = $(this);
                    $this.addClass('red-bg');
                    createErrorAdvice(this, e.data.password);

                } else {
                    $this = $(this);
                    $this.removeClass('red-bg');
                    borraAvisos(this, e.data.password);
                }
                break;
            case 'min':
                if (validador.min(this.value, $(this).data('length'))) {
                    $this = $(this);
                    $this.removeClass('red-bg');
                    borraAvisos(this, e.data.textarea);
                } else {
                    $this = $(this);
                    $this.addClass('red-bg');
                    createErrorAdvice(this, e.data.textarea);

                }
                break;


        }
    };

    var validador = (function() {

        var a = function(a) {
            return void 0 !== a && null !== a && a.length > 0 && !/^\s+/.test(a);
        }, b = function(a) {
                var b = /^(\w+)((\.|-|_)(\w+))*@(\w+)(\.\w{2,})+$/;
                return b.test(a);
            }, c = function(a) {
                var b = /[a-z]/,
                    c = /[A-Z]/,
                    d = /[0-9]/;
                return b.test(a) && c.test(a) && d.test(a) && a.length > 5 && this.required(a);
            }, d = function(a, b) {
                return a.length < b;
            };
        return {
            required: a,
            email: b,
            password: c,
            min: d
        };
    })();

    var createErrorAdvice = function(obj, optsType) {

        borraAvisos(obj, optsType);


        var item = document.createElement("div");
        var arrow = document.createElement("div");
        var texto = document.createTextNode(optsType.emsg);
        item.appendChild(texto);
        // obj.appendChild(item);

        // someElement.parentNode.insertBefore(newElement, someElement.nextSibling);

        obj.parentNode.insertBefore(item, obj.nextSibling);


        item.classList.add(optsType.clases + '-' + obj.name);
        item.classList.add("red-bg-50");

        item.classList.add("pabs");



        arrow.classList.add(optsType.clases + '-' + obj.name);
        arrow.classList.add("pabs");
        arrow.classList.add("frigth");

        if (optsType.clases == "error-textarea") {
            item.classList.add("avisoup");
            arrow.classList.add("arrowup");
        } else if (optsType.clases + '-' + obj.name == "error-requerido-condiciones")

        {
            item.classList.add("avisoupleft");
            arrow.classList.add("arrowupleft");
        } else


        {
            item.classList.add("aviso");
            arrow.classList.add("arrowdown");
        }

        obj.parentNode.insertBefore(arrow, obj.nextSibling);

    };

    var borraAvisos = function(obj, optsType) {
        var listaErrores = $('.' + optsType.clases + '-' + obj.name);



        if (listaErrores.length > 0) {
            for (var i = listaErrores.length - 1; i >= 0; i--) {
                listaErrores[i].parentNode.removeChild(listaErrores[i]);
            }
        }
    };

    var validarFormulario = function(e) {

        var $evento = new Event('checkMe');
        var $form = $(this).find(':input[data-validator]');

        for (var i = $form.length - 1; i >= 0; i--) {
            $form[i].dispatchEvent($evento);
        }


        if ($('.red-bg').length > 0) {
            e.preventDefault();
        }

    };

})(jQuery);