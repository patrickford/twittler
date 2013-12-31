/*
 * NOTE: This file generates fake tweet data, and is not intended to be part of your implementation.
 * You can safely leave this file untouched, and confine your changes to index.html.
 */

var refreshTweets = function(){
  var $tweetlist = $('.tweetlist');
  $tweetlist.html('');

  var lastTweet = streams.home.length - 1;
  console.log(lastTweet)
  for (var i = lastTweet; i > lastTweet-10; i--) {
    var tweet = streams.home[i];
    var $tweet = $('<div></div>');
    $tweet.text('@' + tweet.user + ': ' + tweet.message);
    $tweet.appendTo($tweetlist);
  };
}

function sendTweet() {
  var userInput = document.getElementById("draft").value;
  writeTweet(userInput);
  refreshTweets();
  document.getElementById("draft").value = '';
} 

