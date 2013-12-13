/*
 * NOTE: This file generates fake tweet data, and is not intended to be part of your implementation.
 * You can safely leave this file untouched, and confine your changes to index.html.
 */

var refreshTweets = function(){
  var $tweetlist = $('.tweetlist');
  $tweetlist.html('');

  var index = streams.home.length - 1;
  while(index >= 0){
    var tweet = streams.home[index];
    var $tweet = $('<div></div>');
    $tweet.text('@' + tweet.user + ': ' + tweet.message);
    $tweet.appendTo($tweetlist);
    index -= 1;
  };
}

function sendTweet() {
  var userInput = document.getElementById("draft").value;
  writeTweet(userInput);
} 