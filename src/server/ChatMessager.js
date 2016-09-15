
var http = require('http');
var url = require('url');
var fs = require('fs');

var ActiveFile = 'active.txt'; 
var MessageFile = 'message.txt';

      
// -- format of module code
module.exports = {

writeFormatedMessage: function (user, message){

    var newMessage = user +',' + message ;
    
    console.log("message:"+newMessage);

    return newMessage;
}

//writeFormatedMessage("hello","Long time!");

}