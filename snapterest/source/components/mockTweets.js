var tweets = [
    {
        id: 123,
        text: 'hello my darlisdfsd sdss s dsdn',
        media: [{url: 'http://pbs.twimg.com/media/CUH6hWoUsAE8YmL.jpg'}]
    },
    {
        id: 1234,
        text: 'hello my darlin',
        media: [{url: 'http://pbs.twimg.com/media/CUH6h1AWsAEzkKa.jpg'}]
    },
    {
        id: 1235,
        text: 'hello my darlin',
        media: [{url: 'http://pbs.twimg.com/media/CUH6rdnU8AAnSyW.jpg'}]
    },
    {
        id: 1236,
        text: 'hello my darlind',
        media: [{url: 'http://pbs.twimg.com/media/CUH6vmrU8AEfEI_.jpg'}]
    },
    {
        id: 1237,
        text: 'hello my darlin sd',
        media: [{url: 'http://pbs.twimg.com/media/CUH62XbUkAEyYBA.jpg'}]
    },
    {
        id: 1238,
        text: 'hello my darlindf sdf dsf s',
        media: [{url: 'http://pbs.twimg.com/media/CUH6242WEAAvCzu.jpg'}]
    },
    {
        id: 1239,
        text: 'hello my darlindfsdf  fd',
        media: [{url: 'http://pbs.twimg.com/media/CUH6-QAW4AAJS4w.jpg'}]
    },
    {
        id: 12311,
        text: 'hello my darlin dsfsfd ',
        media: [{url: 'http://pbs.twimg.com/media/CUH7HCJVEAAUfl6.jpg'}]
    },
    {
        id: 12322,
        text: 'hello my darlin 4',
        media: [{url: 'http://pbs.twimg.com/media/CUH7TXjUsAAK3hp.jpg'}]
    }

];

var callback,  stream;

module.exports = {

    initializeStream: function(func) {
        callback = func;
        stream = setInterval(this.streamer, 5000);

    },

    streamer : function() {
        callback(tweets[Math.floor(Math.random()*9)]);
      //  console.log(tweets[Math.floor(Math.random()*9)]);
         },
    
    destroyStream: function() {
        clearInterval(stream);
    }

};