var APP = APP || {};
APP.validador = function() {
    "use strict";
    window.$ = Element.prototype.$ = function(a) {
        var b = this instanceof Element ? this : document,
            c = b.querySelectorAll(a);
        return 1 === c.length ? c[0] : c;
    };
    var a = function(a) {
        return void 0 !== a && null !== a && a.length > 0 && !/\s+/.test(a);
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
}();