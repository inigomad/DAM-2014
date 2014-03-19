HTMLFormElement.prototype.validar = function(opts) {
    "use strict"

    var form = this;

    var hijos = this.querySelectorAll('[data-validator]');


    var borraAvisos = function(obj, optsType) {
        var listaErrores = form.querySelectorAll('.' + optsType.clases + '-' + obj.name);

        console.log("SOY " + form.tagName + " BUSCANDO: " + optsType.clases + '.' + obj.name + " ENCONTRADOS: " + listaErrores.length);

        if (listaErrores.length > 0) {
            for (var i = listaErrores.length - 1; i >= 0; i--) {
                listaErrores[i].parentNode.removeChild(listaErrores[i]);
            };
        }
    }

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


        // var listaErrores2 = form.querySelectorAll(optsType.clases);
        // console.log("SOY " + form.tagName + " BUSCANDO: " + optsType.clases + " ENCONTRADOS: " + listaErrores2.length);


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
                        createErrorAdvice(this, opts.required);
                    } else {
                        this.labels[0].classList.remove("red-txt");
                        borraAvisos(this, opts.required);
                    }
                    break;
                }


                var test = APP.validador.required(this.value);
                console.log(test);
                if (!test)

                {
                    this.classList.add("red-bg");
                    createErrorAdvice(this, opts.required);



                } else {
                    this.classList.remove("red-bg");
                    borraAvisos(this, opts.required);
                }
                break;
            case "email":
                var test = APP.validador.email(this.value);
                console.log(test);
                if (!test)

                {
                    this.classList.add("red-bg");
                    createErrorAdvice(this, opts.email);
                } else {
                    this.classList.remove("red-bg");
                    borraAvisos(this, opts.email);
                }
                break;
            case "password":
                var test = APP.validador.password(this.value);
                console.log(test);
                if (!test)

                {
                    this.classList.add("red-bg");
                    createErrorAdvice(this, opts.password);
                } else {
                    this.classList.remove("red-bg");
                    borraAvisos(this, opts.password);
                }
                break;
            case "min":


                var test = APP.validador.min(this.value, this.dataset.length)
                console.log(test);
                if (!test)

                {
                    this.classList.add("red-bg");
                    createErrorAdvice(this, opts.textarea);
                } else {
                    this.classList.remove("red-bg");
                    borraAvisos(this, opts.textarea);
                }
                break;
            default:
                break;
        }

    };




    for (var i = hijos.length - 1; i >= 0; i--) {

        if (hijos[i].dataset.validator != undefined)
            var selfVal = hijos[i].dataset.validator; {
            hijos[i].addEventListener("blur", checkField);
            hijos[i].addEventListener("keyup", checkField);
            hijos[i].addEventListener("keydown", checkField);
            hijos[i].addEventListener("checkMe", checkField);



        }


    };




    var checkForm = function(e) {

        try {
            var event = new Event('checkMe');

            for (var i = hijos.length - 1; i >= 0; i--) {

                hijos[i].dispatchEvent(event);

            };


        } catch (ex) {
            console.log(ex);
            e.preventDefault();
        }

        console.log("submit the form");
        var formData = this.dataset.validator;

        e.preventDefault();

        return true;

    };


    form.addEventListener("submit", checkForm);


    return true;


};