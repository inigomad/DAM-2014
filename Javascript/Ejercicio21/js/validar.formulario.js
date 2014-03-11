HTMLFormElement.prototype.validar = function() {
    "use strict"


    var hijos = this.querySelectorAll('input[data-validator], textarea[data-validator], select[data-validator]');




    var checkField = function(e) {

        //  console.log("Soy: " + this.dataset.validator);

        switch (this.dataset.validator) {
            case "required":

                if (this.type == "checkbox") {
                    console.log("Soy el checkbox");

                    if (!this.checked)

                    {
                        this.labels[0].classList.add("red-txt");
                    } else {
                        this.labels[0].classList.remove("red-txt");
                    }
                }


                var test = APP.validador.required(this.value);
                console.log(test);
                if (!test)

                {
                    this.classList.add("red-bg");
                } else {
                    this.classList.remove("red-bg");
                }
                break;
            case "email":
                var test = APP.validador.email(this.value);
                console.log(test);
                if (!test)

                {
                    this.classList.add("red-bg");
                } else {
                    this.classList.remove("red-bg");
                }
                break;
            case "password":
                var test = APP.validador.password(this.value);
                console.log(test);
                if (!test)

                {
                    this.classList.add("red-bg");
                } else {
                    this.classList.remove("red-bg");
                }
                break;
            case "min":


                var test = APP.validador.min(this.value, this.dataset.length)
                console.log(test);
                if (!test)

                {
                    this.classList.add("red-bg");
                } else {
                    this.classList.remove("red-bg");
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
            hijos[i].addEventListener("checkMe", checkField);


        }


    };


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

            };

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