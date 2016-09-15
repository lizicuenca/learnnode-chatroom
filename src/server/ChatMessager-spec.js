var ChatMessager = require('./ChatMessager.js')


describe('Chat Messager validation', function() {
  it('runs', function() {
    expect(true).toBeTruthy();
  });


  it('writeFormatedMessage', function() {
    var user = "RZ";
    var message = "My new Message";
      
    console.log("chat object="+ChatMessager.writeFormatedMessage(user,message));
    
    expect(ChatMessager.writeFormatedMessage(user,message)).toEqual(user+","+message);
  });

});
