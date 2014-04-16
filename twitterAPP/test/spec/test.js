/* global describe, it */

(function () {
    'use strict';

    require.config({
        baseUrl : '../app/scripts',
        paths : {
            'ydn-db': '../bower_components/ydn-db/jsc/ydn.db-dev'
        },
        shim: {
            'ydn-db': {
                exports : 'ydn'
            }
        }
    });

    describe('Database module', function () {
        var DB;

        beforeEach(function(done){
            require(['data'], function(data){
                DB = data;
                done();
            });
        });

        describe('Insert Tweet', function() {
            it('Inserta un tweet', function(done) {
                DB.InsertTweet({id:'1234567890',text:'Hola'},function(){done();},function(err){throw err;});
            });
        });
        describe('Get Tweet', function() {
            it('Obtiene un tweet', function(done) {
                DB.GetTweet('1234567890',function(){done();},function(err){throw err;});
            });
        });
        describe('Get all Tweets', function() {
            it('Obtiene todos los tweets', function(done) {
                DB.GetAllTweets(function(){done();},function(err){throw err;});
            });
        });
        describe('Remove Tweet', function() {
            it('Borra un tweet', function(done) {
                DB.RemoveTweet('1234567890',function(){done();},function(err){throw err;});
            });
        });
    });
})();
