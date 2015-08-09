//net模块，包含node TCP功能
var net = require('net');

var chatServer = net.createServer();
// var clientList = [];

chatServer.on('connection',function(client){
	client.name = client.remoteAddress+":"+client.remotePort;
	client.write('hi '+client.name+'!\n');

	// clientList.push(client);

	client.on('data',function(data){
		console.log(data.toString());
		/*for(var i=0; i<clientList.length; i+=1){
			clientList[i].write(data);
		}*/	
	});
	// 关闭连接 
	client.end();
});

chatServer.listen(9000);
console.log("server start! listen on 9000....")