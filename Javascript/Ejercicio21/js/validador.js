var APP = APP || {};
//APP.campo = "";
//APP.required = "";
//APP.email = "";



APP.validador = (function() {
    "use strict"

    window.$ = Element.prototype.$ = function(selector) {
        var that = (this instanceof Element) ? this : document;
        var elems = that.querySelectorAll(selector);
        return (elems.length === 1) ? elems[0] : elems;
    };



    var required = function(valor) {

        return (valor !== undefined && valor !== null && valor.length > 0 && !/\s+/.test(valor));

    };



    var email = function(valor) {

        var mail = /^(\w+)((\.|-|_)(\w+))*@(\w+)(\.\w{2,})+$/;

        return (mail.test(valor));

    };

    var password = function(valor) {

        var pass1 = /[a-z]/;
        var pass2 = /[A-Z]/;
        var pass3 = /[0-9]/;


        return (pass1.test(valor) && pass2.test(valor) && pass3.test(valor) && valor.length > 5);

    };


    var min = function(valor, len) {

        return (valor.length < len);

    };



    return {

        required: required,
        email: email,
        password: password,
        min: min
    };




})();