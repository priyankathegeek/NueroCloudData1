
var FinalSum;
var WebSocketServer = require('ws').Server
  , wss = new WebSocketServer({port: 8081});
wss.on('connection', function(ws) {
    ws.on('message', function(message) {
        console.log('received: %s', message);
        var arrRes = message.split(",");
        var sum=0;
       for(var i=0; i<arrRes.length;i++)
           sum+= parseInt(arrRes[i],10);

        console.log('Sum value is: %s', sum);
      FinalSum = sum;
    });
    ws.send(FinalSum);
});
