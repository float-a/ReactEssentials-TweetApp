var React = require('react');
var SnapkiteStreamClient = require('./mockTweets');
var StreamTweet = require('./StreamTweet.react');
var Header = require('./Header.react');

var Stream = React.createClass({
    
    getInitialState() {
        return {
            tweet: null
        }
    },

    componentDidMount(){
        SnapkiteStreamClient.initializeStream(this.handleTweet);
    },

    componentWillUnmount(){
        SnapkiteStreamClient.destroyStream();
    },

    handleTweet(tweet){
        this.setState({
            tweet: tweet
        });
    },

    render() {
        console.log('render Stream');
        var tweet = this.state.tweet;

        console.log(tweet);

        if(tweet){
            return (
                <StreamTweet tweet={tweet} 
                             onAddTweetToCollection = {this.props.onAddTweetToCollection}
                />
            );
        } 
        return (
            <Header text = "Waiting for public photos from Twitter..." />
        );
    }
});

module.exports = Stream;

