/* global describe, it*/

(function () {
    'use strict';

    require.config({
        baseUrl: '../app/scripts',
        paths :{
            jquery: '../bower_components/jquery/dist/jquery'
        }

    });


    describe('Events module', function(){

        var ev;
        var ctrl;
        var $;

        beforeEach(function(done){
            require(['events','jquery','controller'], function(events,jquery,controller){
                ev = events;
                $ = jquery;
                ctrl = controller;
                done();
            });
        });
        describe('Testing events', function(){
            it('Evento lanzadooo', function(done){
                var event = new Event('datachange');
                document.dispatchEvent(event);
                //assert.isTrue(ctrl.showLatestTweets.calledOnce);
                done();
            });
        });


    });

})();
