jest.dontMock('../TweetUtils.js');

describe('Tweet utilities module', function(){
    it('returns an array of tweet ids', function(){
        var TweetUtils=require('../TweetUtils');
        var tweetsMock = {
            tweet1:{},
            tweet2:{},
            tweet3:{}
        };
        var expectedListOfTweets = ['tweet1', 'tweet2', 'tweet3'];
        var actualListOfTweets = TweetUtils.getListOfTweetIds(tweetsMock);

        expect(actualListOfTweets).toEqual(expectedListOfTweets);

    })
})