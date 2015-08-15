var http = require('http');
var querystring = require('querystring');

var postData = querystring.stringify({
	'content':'期待下一期！（测试数据）',
	'cid':348
});

var options = {
	hostname:'www.imooc.com',
	port:80,
	path:'/course/document',
	method:'POST',
	headers:{
		'Accept':'application/json, text/javascript, */*; q=0.01',
		'Accept-Encoding':'gzip, deflate',
		'Accept-Language':'zh-CN,zh;q=0.8',
		'Cache-Control':'no-cache',
		'Connection':'keep-alive',
		'Content-Length':postData.length,
		'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8',
		'Cookie':'imooc_uuid=bfe75366-7afc-4210-9cc7-f644b8487ca2; loginstate=1; apsid=g0NGVkZmEwNmM4MzE2OTEzZDM5MjkwNjliYmI0NTMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMTg4NTYxAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAyMzYwMzM1N0BxcS5jb20AAAAAAAAAAAAAAAAAAAAAADEyMDA2MmEzMjc2ZmZkYjg0YzVmOGZlZTQ2YzE4Yzhm4ruZU%2BK7mVM%3DND; PHPSESSID=ejbc963iluafk3t1d5bdk77rs6; cvde=55ce8d852852e-11; Hm_lvt_f0cfcccd7b1393990c78efdeebff3968=1439127303,1439302121,1439565042,1439600012; Hm_lpvt_f0cfcccd7b1393990c78efdeebff3968=1439600297',
		'Host':'www.imooc.com',
		'Origin':'http://www.imooc.com',
		'Referer':'http://www.imooc.com/video/8837',
		'User-Agent':'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.125 Safari/537.36',
		'X-Requested-With':'XMLHttpRequest'
	}
}

var req = http.request(options,function(res){
	console.log('Status:'+res.statusCode);
	console.log('Headers:'+JSON.stringify(res.headers));

	res.on('data',function(chunk){
		console.log(Buffer.isBuffer(chunk));
		console.log(typeof chunk);
	});

	res.on('end',function(){
		console.log('end!');
	});

	

});
req.on('error',function(e){
	console.log('error:'+e.message);
});
req.write(postData);
req.end();