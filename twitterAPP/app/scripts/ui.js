define('ui',['jquery','handlebars'],function($, HB){
    'use strict';

    console.log('UI module start');

    var showTweetsList = function(tweets,success,error){

        var $list = $('#twitter-list');

        var listTpl = $('#list-tpl').html();
        var template =  HB.compile(listTpl);

        var html = template({tweets : tweets});
        $list.html(html);

        success();

    };

    return {
        showTweetsList : showTweetsList
    };

});