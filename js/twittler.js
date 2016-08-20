$(document).ready(function(){

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

      $singleTweet = $(''+ 
        '<div class="singleTweet">' +
          '<div class="userName"> <a href="#">' + '@' + tweet.user + '</a></div>' +
          '<div class="tweetTime">' + jQuery.timeago(tweet.created_at) + '</div>' +
          '<div class="tweetCopy"> <p>'+ tweet.message + '</p> </div>' + 
        '</div>');

      $singleTweet.appendTo('#tweetlist');
      index -= 1;
    }
  };

  $("#refresh").click(function() {
    refreshTweets();
  });

  $("#myTweets").click(function() {
    refreshTweets(visitor);
  });

  $("#newTweet").submit(function(e) {
    e.preventDefault();
    var userInput = $("#draft").val();
    $("#draft").val('');    
    writeTweet(userInput);
    refreshTweets();
  });

  // Show tweets for only selected user
  $(document).on('click', '.userName', (function(e) {
    var user = $(this).find('a').text().slice(1);
    refreshTweets(user);
  }));

  refreshTweets();

})
