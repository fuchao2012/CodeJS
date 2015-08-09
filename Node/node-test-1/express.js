//express对比http，增加了两个功能：
// 1 根据http请求的不同方法进行过滤
// 2 根据定义的URL进行过滤
// var express = require('express')();
var app = require('express')();
// var app = express.createServer();
app.listen(9000);

var tweets = ["hello"];

app.get('/',function( req, res){
	res.send('hello!world! tweet');
});

app.post('/send',function(req,res){
	// res.send("this is POST method!");
	if(req.body && req.body.tweet){
		tweets.push(req.body.tweet)
		res.send({status:"OK",message:"Tweet received"});
	}else{
		res.send({status:"nOK",message:"no Tweet received"});
	}
});

app.get('/tweet',function(req,res){
	res.send(tweets);
});