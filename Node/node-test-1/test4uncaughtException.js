process.on('uncaughtException',function(err){
	console.log('Caught exception:'+err);
});

setTimeout(function(){//之前的代码可以正常运行
	console.log('this will  still run.');
},500);

nonexistentFunc();//抛出异常
//之后的代码，不会再运行
console.log('This will not run');