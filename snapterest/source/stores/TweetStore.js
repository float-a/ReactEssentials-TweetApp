var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter; // to be able to add and remove event listeners from out store
var assign = require('object-assign'); // copies the properties from multiple source objects to a single target object


var tweet = null;

function setTweet(receivedTweet) {
    tweet = receivedTweet;
}

function emitChange() {
    TweetStore.emit('change');
}

var TweetStore = assign({}, EventEmitter.prototype, {
    addChangeListener: function(callback) {
        this.on('change', callback)
    },

    removeChangeListener: function(callback) {
        this.removeListener('change', callback)
    },

    getTweet: function() {
        return tweet;
    }
});

function handleAction(action) {
    if(action.type === 'receive_tweet') {
        setTweet(action.tweet);
        emitChange(); //When the store changes its data, it needs to tell everyone who is interested in the data change
    }
}

TweetStore.dispatchToken = AppDispatcher.register(handleAction);


module.exports = TweetStore;