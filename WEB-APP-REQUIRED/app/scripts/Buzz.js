define('Buzz', function() {

    var buzzTest = function() {

        if (arguments[0] !== parseInt(arguments[0])) return '';

        var n = arguments[0];

        if (n % 5 === 0) return 'BUZZ';
        else return '';
    };

    return {
        buzzTest: buzzTest
    };

});