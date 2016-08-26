var React = require('react');

var Tweet = React.createClass({

    propTypes : {

      tweet(properties, propertyName, componentName) {
          var tweet = properties[propertyName];
          if(!tweet){
              return new Error('Tweet must be set');
          }
          if(!tweet.media) {
              return new Error('Tweet must have an image');
          }
      },

      onImageClick: React.PropTypes.func  
    },

    handleImageClick(){
        var tweet = this.props.tweet;
        var onImageClick = this.props.onImageClick;

        if(onImageClick) {
            onImageClick(tweet);
        }
    },


    render() {
        console.log("****** Tweet *****: " + this.props.tweet)
        var tweet = this.props.tweet;
        var tweetMediaUrl = tweet.media[0].url;
        return (
            <div style={tweetStyle}>
                <img src={tweetMediaUrl} style={imageStyle} onClick={this.handleImageClick} />
            </div>
        );
    }
})