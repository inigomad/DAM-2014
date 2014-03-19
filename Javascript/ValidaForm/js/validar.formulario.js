HTMLFormElement.prototype.validar = function(opts) {
    "use strict";


    var hijos = this.querySelectorAll('[data-validator]');


    var creaAviso = function (campo, tipo){
        if (campo.parentNode.querySelectorAll('div.' + tipo.clase + '.' + campo.name).length === 0) {
            var aviso = document.createElement('div');
            var mensaje = document.createTextNode(tipo.msg);
            aviso.appendChild(mensaje);
            aviso.classList.add(tipo.clase);
            aviso.classList.add(campo.name);
            campo.parentNode.insertBefore(aviso,campo.nextSibling);


        }
    };

    var borraAviso = function (campo, tipo){
            var nodo = campo.parentNode.querySelectorAll('div.' + tipo.clase + '.' + campo.name);
            nodo[0].parentNode.removeChild(nodo[0]);
    };

    var checkField = function(e) {

        //  console.log("Soy: " + this.dataset.validator);

        

        switch (this.dataset.validator) {
            case "required":

                if (this.type == "checkbox") {
                    console.log("Soy el checkbox");

                    if (!this.checked)

                    {
                        this.labels[0].classList.add("red-txt");
                        creaAviso(this,opts.condiciones);
                    } else {
                        this.labels[0].classList.remove("red-txt");
                        borraAviso(this,opts.condiciones);
                    }
                }


                var test = APP.validador.required(this.value);
                console.log(test);
                if (!test)

                {
                    this.classList.add("red-bg");
                    creaAviso(this,opts.required);

                } else {
                    this.classList.remove("red-bg");
                    borraAviso(this,opts.required);
                }
                break;
            case "email":
                test = APP.validador.email(this.value);
                console.log(test);
                if (!test)

                {
                    this.classList.add("red-bg");
                    creaAviso(this,opts.email);
                } else {
                    this.classList.remove("red-bg");
                    borraAviso(this,opts.email);
                }
                break;
            case "password":
                test = APP.validador.password(this.value);
                console.log(test);
                if (!test)

                {
                    this.classList.add("red-bg");
                    creaAviso(this,opts.password);
                } else {
                    this.classList.remove("red-bg");
                    borraAviso(this,opts.password);
                }
                break;
            case "min":


                test = APP.validador.min(this.value, this.dataset.length);
                console.log(test);
                if (!test)

                {
                    this.classList.add("red-bg");
                    creaAviso(this,opts.textarea);
                } else {
                    this.classList.remove("red-bg");
                    borraAviso(this,opts.textarea);
                }
                break;
            default:
                break;
        }

    };




    for (var i = hijos.length - 1; i >= 0; i--) {




        if (hijos[i].dataset.validator !== undefined)
            var selfVal = hijos[i].dataset.validator; {
            hijos[i].addEventListener("blur", checkField);
            hijos[i].addEventListener("keyup", checkField);
            hijos[i].addEventListener("keydown", checkField);
            hijos[i].addEventListener("change", checkField);
            hijos[i].addEventListener("checkMe", checkField);


        }


    }


    // var hijosTA = this.querySelectorAll('textarea');



    // for (var i = hijosTA.length - 1; i >= 0; i--) {


    //     if (hijosTA[i].dataset.validator != undefined)
    //         var selfVal = hijosTA[i].dataset.validator; {
    //         hijosTA[i].addEventListener("keyup", checkField);
    //         hijosTA[i].addEventListener("blur", checkField);
    //         hijosTA[i].addEventListener("checkMe", checkField);

    //     }


    // };


    var checkForm = function(e) {

        try {
            var event = new Event('checkMe');

            for (var i = hijos.length - 1; i >= 0; i--) {

                hijos[i].dispatchEvent(event);

            }

            // for (var i = hijosTA.length - 1; i >= 0; i--) {

            //     hijosTA[i].dispatchEvent(event);

            // };
        } catch (ex) {
            console.log(ex);
            e.preventDefault();
        }

        console.log("submit the form");
        var formData = this.dataset.validator;

        e.preventDefault();

        return true;

    };


    this.addEventListener("submit", checkForm);


    return true;


};