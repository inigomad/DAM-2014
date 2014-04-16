define('data',['ydn-db'], function(ydn) {

    'use strict';

    var dbname = 'tweeterdb';
    var storagename = 'tweets';
    var db = new ydn.db.Storage(dbname);

    var InsertTweet = function(tweet,success,error){

            var req = db.put({name: storagename, keyPath: 'id'}, tweet);
            req.done(success);
            req.fail(error);

        };

    var GetTweet = function(id,success,error){

            var req = db.get(storagename,id);
            req.done(function(record) {
                success();
                console.log(record);
            });
            req.fail(error);

        };

    var GetAllTweets = function(success,error){

            var req = db.values(storagename);
            req.done(function(records) {
                success();
                console.log(records);
            });
            req.fail(error);

        };

    var RemoveTweet = function(id,success,error){

            var req = db.remove(storagename,id);
            req.done(function(records) {
                success();
                console.log('Borrado:' + records);
            });
            req.fail(error);

        };

    return {
        InsertTweet: InsertTweet,
        GetTweet: GetTweet,
        GetAllTweets: GetAllTweets,
        RemoveTweet: RemoveTweet
    };
  
});