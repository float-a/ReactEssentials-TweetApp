var React = require('react');
var Tweet = require('./Tweet.react.js');
var CollectionActionCreators = require('../actions/CollectionActionCreators');

var listStyle = {
        padding: '0'
};

var listItemStyle = {
    display: 'inline-block',
    listStyle: 'none'
};

var TweetList = React.createClass({
    
     getListOfTweetsIds(){
        return Object.keys(this.props.tweets);
    },

    removeTweetFromCollection(tweet) {
        CollectionActionCreators.removeTweetFromCollection(tweet.id);
    },

    getTweetElement: function (tweetId) {
        var tweet = this.props.tweets[tweetId];
        var handleRemoveTweetFromCollection = this.removeTweetFromCollection;
        var tweetElement;

        if (handleRemoveTweetFromCollection) {
            tweetElement = (
                <Tweet tweet={tweet}
                       onImageClick={handleRemoveTweetFromCollection} />
            );
        } else {
            tweetElement = <Tweet tweet={tweet} />;
        }

        return <li style={listItemStyle} key={tweet.id}>{tweetElement}</li>;
},

    render() {
        var tweetElements = this.getListOfTweetsIds().map(this.getTweetElement);

        return (
            <ul style={listStyle}>
                {tweetElements}
            </ul>
        );
    }
});

module.exports = TweetList;