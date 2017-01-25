var WebSocket = require('ws')
  , ws = new WebSocket('ws://localhost:8081');
ws.on('open', function() {
		var date=new Date();
                var TestArray = "10,20,30,40,50";
		ws.send(String(TestArray));
		});
ws.on('message', function(message) {
		console.log('received sum of array: %s', message);
		});
