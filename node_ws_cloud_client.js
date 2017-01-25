var process=require('process');
var readline = require('readline');
var fs = require('fs');
var contents = fs.readFileSync('/Users/cfm/AWS_Local_Streaming/FileFromServer.txt');

var WebSocket = require('ws')
  , ws = new WebSocket('ws://localhost:8080');
ws.on('open', function() {
        
	ws.send(String(contents));
		});
ws.on('message', function(message) {
		//console.log('received sum of array: %s', message);
		});
