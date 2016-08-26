var React = require('react');
var ReactDOM = require('react-dom');
var Header = require('./Header.react');
var Tweet = require('./Tweet.react');


var StreamTweet = React.createClass({

    getInitialState(){
        console.log('[Snapterest] StreamTweet: 1. Running getInitialState()');
        return {
            numberofCharacterIsIncreasing: null,
            headerText: null
        }
    },

    componentWillMount(){
        console.log('[Snapterest] StreamTweet: 2. Running componentWillMount()');
        this.setState({
            numberofCharacterIsIncreasing: true,
            headerText: 'Latest public photo from Twitter'
        })
        window.snapterest = {
            numberOfReceivedTweets:1,
            numberOfDisplayedTweets:1
        };
    },

    componentDidMount(){
        console.log('[Snapterest] StreamTweet: 3. Running componentDidMount()');

        var componentDOMRepresentation =  ReactDOM.findDOMNode(this);

        window.snapterest.headerHtml = componentDOMRepresentation.children[0].outerHTML; //Header
        window.snapterest.headerHtml = componentDOMRepresentation.children[1].outerHTML; //Tweet

    },

    componentWillReceiveProps(nextProps){
         console.log('[Snapterest] StreamTweet: 4. Running componentWillReceiveProps()');

         var currentTweetLength = this.props.tweet.text.length;
         var nextTweetLength = nextProps.tweet.text.length;

         var isNumberOfCharacterIncresing = (nextTweetLength > currentTweetLength);
         var headerText;

         this.setState({
             numberofCharacterIsIncreasing: isNumberOfCharacterIncresing
         });

         if(isNumberOfCharacterIncresing){
             headerText = 'Number of characther is incresing';
         } else {
             headerText = 'Latest public photo from Twitter';
         }

         this.setState({
             headerText: headerText
         });

         window.snapterest.numberOfReceivedTweets++;
    },

    shouldComponentUpdate(nextProps, nextState) {
        console.log('[Snapterest] StreamTweet: 5. Running shouldComponentUpdate()');
        return (nextProps.tweet.text.length > 1);
    },

    componentWillUpdate(nextProps, nextState) {
        console.log('[Snapterest] StreamTweet: 6. Running componentWillUpdate()');
    },

    componentDidUpdate(prevProps, prevState) {
        console.log('[Snapterest] StreamTweet: 7. Running componentDidUpdate()');

        window.numberOfDisplayedTweets++;
    },

    componentWillUnmount(){
        console.log('[Snapterest] StreamTweet: 8. Running componentWillUnmount()');

        delete window.snapterest;
    },

    render() {
        console.log('[Snapterest] StreamTweet: running render()');

        console.log(this.props.tweet);
        return (
            <section>
                <Header text={this.state.headerText} />
                
                <Tweet tweet={this.props.tweet}
                        onImageClick={this.props.onAddTweetToCollection}
                />
            
            </section>
        );
    }

});

module.exports = StreamTweet;
