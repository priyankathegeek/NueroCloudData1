var process=require('process');
var readline = require('readline');
var fs = require('fs');

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
     fs.writeFile('/Users/cfm/AWS_Local_Streaming/FileFromServer.txt', sum);    
});

});

//below function is used to write the result to a file.
   function writeTextFile(filepath, output) {
	var txtFile = new File(filepath);
	txtFile.open("w"); 
	txtFile.writeln(output);
	txtFile.close();
}
