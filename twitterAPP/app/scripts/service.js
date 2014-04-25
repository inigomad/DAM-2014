define('service', ['quo'], function($){
    'use strict';

    console.log();

    var getTweets = function(config, success, error) {
        console.log($);
        $.ajax({
            url : '/app/data/tweets.json',
            dataType : 'json',
            success : success,
            error : error
        });
    };

    return {
        getTweets : getTweets
    };
});