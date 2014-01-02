/*
 * NOTE: This file generates fake tweet data, and is not intended to be part of your implementation.
 * You can safely leave this file untouched, and confine your changes to index.html.
 */

var refreshTweets = function(user){
  var $tweetlist = $('#tweetlist');
  $tweetlist.html('');

  if (user) {
    var index = streams.users[user].length - 1;
  }
  else {
    var index = streams.home.length - 1;
  }

  while (index >=0) {
    if (user) {
      var tweet = streams.users[user][index];
    }
    else {
      var tweet = streams.home[index];
    }
 //   var $tweet = $('<div></div>');
 //   $tweet.text('@' + tweet.user + ': ' + tweet.message);

    $singleTweet = $(''+ 
      '<div class="singleTweet">' +
        '<div class="userName"> <a href="#">' + '@' + tweet.user + '</a></div>' +
        '<div class="tweetTime">' + jQuery.timeago(tweet.created_at) + '</div>' +
        '<div class="tweetCopy"> <p>'+ tweet.message + '</p> </div>' + 
      '</div>');

    $singleTweet.appendTo('#tweetlist');
    index -= 1;
  };
}

function sendTweet() {
  var userInput = document.getElementById("draft").value;
  writeTweet(userInput);
  refreshTweets();
  document.getElementById("draft").value = '';
} 

function userTweets() {
  
}
