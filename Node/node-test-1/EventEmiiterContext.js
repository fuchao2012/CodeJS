var util = require('util');
var EventEmitter = require('events').EventEmitter;

var Server = function(){
	console.log("init server!");
};

util.inherits(Server,EventEmitter);

Server.prototype.outputThis = function(output){
	//快速执行
/*	if(arguments.length < 3){
		handler.call(this,arguments[0],arguments[1]);
	}else{
		var args = Array.prototype.slice.call(arguments,1);
		handler.apply(this,args);
	}*/


	console.log(this);
	console.log(output);
};

Server.prototype.emitOutput = function(input){
	this.emit('output',input);
	// console.log("in emitOutput "+this);
};

Server.prototype.callEmitOutput = function(){
	this.emitOutput('innerEmitOutput');
	// console.log("in callEmitOutput "+this);
};

var s = new Server();
//在output事件上绑定outputThis方法
s.on('output',s.outputThis);

s.emitOutput('outerEmitOutput');
s.callEmitOutput();
s.emit('output','Direct');