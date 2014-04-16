define('FizzBuzz', ['jquery','Fizz','Buzz'], function(jquery,Fizz,Buzz) {

    var testnumber = function() {

        if (arguments[0] !== parseInt(arguments[0])) return '';

        var n = arguments[0];

        var r = Fizz.fizzTest(n) + ' ' + Buzz.buzzTest(n);

        if (r.length === 1) {
            return n;
        }

        return $.trim(r);


    };

    var testlist = function(n) {

        var s = '';

        for (var i = 1; i <= n; i++) {
            s = s + testnumber(i) + ',';
        }

        console.log('Para el número ' + n);
        console.log('La cadena es: ' + s.substring(0, s.length - 1));
        return s.substring(0, s.length - 1);

    };

    return {
        testnumber: testnumber,
        testlist: testlist
    };

});