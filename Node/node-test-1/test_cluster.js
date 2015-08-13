var cluster = require('cluster');
var http = require('http');
var numCPUs = require('os').cpus().length;

console.log("cpu numbers: "+numCPUs);
console.log("this is master? "+cluster.isMaster);
console.log("this is worker? "+cluster.isWorker);

if(cluster.isMaster){
	for(var i=0;i<numCPUs;i++){
		cluster.fork();
	}

	cluster.on('death',function(worker){
		console.log('worker'+worker.pid+'died');
		cluster.fork();//当进程死后，自动创建子进程
	});
}else{
	http.Server(function(req,res){
		res.writeHead(200);
		res.end("hello world\n");
	}).listen(8000);
}