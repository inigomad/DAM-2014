/* global describe, it*/

(function () {
    'use strict';

    require.config({
        baseUrl: '../app/scripts',
        paths :{
            jquery: '../bower_components/jquery/dist/jquery',
            handlebars: '../bower_components/handlebars.js/dist/handlebars'
        },
        shim: {
            'ydn-db': {
                exports: 'ydn'
            },
            'handlebars': {
                exports: 'Handlebars'
            }
        }

    });


    describe('UI module', function(){
        var uivar;
        var HB;
        var $;
        var DB;

        beforeEach(function(done){
            require(['ui','handlebars','jquery','data'], function(ui, handlebars,jquery,data){
                uivar = ui;
                HB = handlebars;
                $ = jquery;
                DB = data;
                done();
            });
        });
        describe('Testing the UI', function(){
            it('UI loaded', function(){
            });
        });

        it('Lista cargada', function(done){
            DB.getAllTweets(
                    function(tweets){//success
                        uivar.showTweetsList(tweets, function(){
                            assert.strictEqual($('#twitter-list').children().length, 100);
                            done();
                        }, function(error){console.log(error);});
                    }, function(error){console.log(error);});
            done();
        });


    });

})();
