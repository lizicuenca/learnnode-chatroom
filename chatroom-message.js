var fs= require('fs')
var http = require('http');
var url = require('url');
//var dateFormat = require('dateformat');

var messageFile="message.txt";


var server = http.createServer(function (request,response) {
	console.log("request recieved:"+request.url);
	
	if(request.url.match('/index.html')) {
		fs.readFile('./chatroom.html',function(err,data){
			response.end(data);
		});
	}else if(request.url.match('/write.html')){
		response.writeHead(200, { 'content-type': 'application/json' });
			var url_parts = url.parse(request.url, true);
			var query = url_parts.query;
			var newMessage = query.query;
			var user = query.id;
			
			writeMessage(user , newMessage );
			readMessages(response);

	}else if(request.url.match('/read.html')){
		response.writeHead(200, { 'content-type': 'application/json' });		
		readMessages(response);
	}else if(request.url.match('/typing.html')){
		response.writeHead(200, { 'content-type': 'application/json' });		
		readActiveUser(response);
	}else if(request.url.match('/typingUpdate.html')){
		var url_parts = url.parse(request.url, true);
			var query = url_parts.query;
			var isTyping = query.isTyping;
			var user = query.id;
			updateTyping(user,isTyping,response);
	}
	
})

server.listen(1007);
console.log("Open for E-Biz");

function updateTyping(user,isTyping,response){

fs.readFile('active.txt', function callback (err, data) {
		// console.log("readfile");
		 var currentUser = user;
		 if (err) {
			 console.log(err);
			 return;
		 }
		 if (!isTyping && data.toString() == user){
				currentUser = '';
		 }
			 fs.writeFile('active.txt', currentUser, function callback (err, data) {
			 
			 if (err) {
				 console.log(err)
				 return;
			 }
			//console.log(user + " .... is written!")	
			response.end();
			}); 
		
		//var str = .split("\n");
		//response.end(JSON.stringify({user: str}));

		// console.log(" read data - response size = "+str.length)	
			 
		//return str;

		}); 
		
	 
}

function readActiveUser(response){
 fs.readFile('active.txt', function callback (err, data) {
		// console.log("readfile");
		 if (err) {
			 console.log(err);
			 return;
		 }
		var str = data.toString().split("\n");
		response.end(JSON.stringify({user: str}));

		// console.log(" read data - response size = "+str.length)	
			 
		return str;

		}); 
}

/*
	Read message from the file
*/
function readMessages(response){
	 fs.readFile(messageFile, function callback (err, data) {
		// console.log("readfile");
		 if (err) {
			 console.log(err);
			 return;
		 }
		var str = data.toString().split("\n");
		response.end(JSON.stringify({messages: str}));

		 console.log(" read data - response size = "+str.length)	
			 
		return str;

		}); 
	
}

/*
	Append message into message file as a new line. 
	
	Also include a timestamp while writting a message
*/
function writeMessage(user, message){
if (message != null){
	var day=new Date().getTime();
	//var day=dateFormat(new Date(), "yyyy-mm-dd h:MM:ss");

	var messageWithTime = day + ',' + user +',' + message  + "\n";
	 fs.appendFile(messageFile, messageWithTime, function callback (err, data) {
		 
		 if (err) {
			 console.log(err)
			 return;
		 }
		console.log(messageWithTime + " .... is written!")	
		}); 
		}
	
}
