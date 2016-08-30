var SnapkiteStreamClient = require('../components/mockTweets');
var TweetActionCreators = require('../actions/TweetActionCreator');

function initializeStreamOfTweets() { 
    SnapkiteStreamClient.initializeStream(TweetActionCreators.receiveTweet);
}
module.exports = {
initializeStreamOfTweets: initializeStreamOfTweets
};