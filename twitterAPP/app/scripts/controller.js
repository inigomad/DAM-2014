define('controller', ['data','service','ui'], function(DB, srv, ui){
    'use strict';


    var error = function(err) {
        console.log(err);
    };

    var processTweets = function(data, success, error) {
        var tweets =[];
        var newTweet;

        if (data && data.statuses && data.statuses.length > 0){
            for (var i = data.statuses.length - 1; i >= 0; i--) {
                newTweet ={
                    id : data.statuses[i].id_str,
                    text : data.statuses[i].text,
                    date : new Date(data.statuses[i].created_at),
                    user : data.statuses[i].user.name,
                    image : data.statuses[i].user.user_profile_image_url
                };
                tweets.push(newTweet);
            }
            success(tweets);
        }

    };

    var getTweetsFromTwitter = function(success, error) {
        srv.getTweets({},function(data){
            processTweets(data,function(tweets){
                DB.addTweets(tweets,success,error);
            },error);
        },error);
    };

    var showLatestTweets = function(){
        // Get latest data from data provider
        DB.getAllTweets(function(tweets){

            ui.showTweetsList(tweets,function(){},function(){});
            
        }, function(err){console.log(err);});
        // Update views
    };

    return {
        getTweetsFromTwitter : getTweetsFromTwitter,
        showLatestTweets : showLatestTweets
    };
});