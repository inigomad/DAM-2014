define('Fizz', function() {

    "use strict";

    var fizzTest = function() {

        if (arguments[0] !== parseInt(arguments[0])) return '';

        var n = arguments[0];

        if (n % 3 === 0) return 'FIZZ';
        else return '';
    };


    return {
        fizzTest: fizzTest
    };

});