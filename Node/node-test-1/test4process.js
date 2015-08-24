console.log(process.version);//Node版本号
console.log(process.installPrefix);//安装目录
console.log(process.platform);//安装平台
console.log(process.uptime());//已经运行了多少秒
console.log(process.title);//进程名字
console.log(process.execPath);//执行路径
console.log(process.cwd());//工作目录
console.log(process.memoryUsage());//内存使用情况

process.on('exit',function(){
	setTimeout(function(){//进程已经终止，不会在执行
		console.log('this will not run');
	},100);
	console.log('bye');
});

