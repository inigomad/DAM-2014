define(['controller','data'], function(controller,data) {
  console.log('App started');

  controller.getTweetsFromTwitter();

  controller.showLatestTweets();

});