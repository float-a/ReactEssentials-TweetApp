var React = require('react');
var ReactDOMServer = require('react-dom/server');
var CollectionControls = require('./CollectionControls.react');
var TweetList = require('./TweetList.react');
var Header = require('./Header.react');

var Collection = React.createClass({
    createHtmlMarkupStringOfTweetList() {
        var htmlString = ReactDOMServer.renderToStaticMarkup(<TweetList tweets={this.props.tweets} />);

        var htmlMarkup = {
            html : htmlString
        };

        return JSON.stringify(htmlMarkup);
    },

    getListOfTweetsIds(){
        return Object.keys(this.props.tweets);
    },

    getNumberOfTweetsInCollection(){
        return this.getListOfTweetsIds().length;
    },

    render() {
        var numberOfTweetsInCollection = this.getNumberOfTweetsInCollection();

        if(numberOfTweetsInCollection > 0) {
            var tweets = this.props.tweets;
            var htmlMarkup = this.createHtmlMarkupStringOfTweetList();
            var removeAllTweetsFromCollection = this.props.onRemoveAllTweetsFromCollection;
            var handleRemoveTweetFromCollection = this.props.onRemoveTweetFromCollection;

            return(
                <div>
                    <CollectionControls numberOfTweetsInCollection={numberOfTweetsInCollection}
                                        htmlMarkup={htmlMarkup}
                                        onRemoveAllTweetsFromCollection={removeAllTweetsFromCollection}
                    />
                    <Tweets tweets={tweets}
                            onRemoveTweetFromCollection={handleRemoveTweetFromCollection}
                    />
                </div>
            );
        }
        return <Header text="Your collection is empty." />
    }
});

module.exports=Collection;