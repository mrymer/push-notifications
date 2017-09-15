var accountSid = 'AC9f0a010d027f3e4b21dbf9c447406125';
var authToken = '05bfbb0db3f69036e7155ab6cee09045';

//require the Twilio module and create a REST client
var client = require('twilio')(accountSid, authToken);

client.messages.create({
    to: "+19175144172",
    from: "+12013719989",
    body: "How much wood, would a woodchuck chuck, if a woodchuck could chuck wood?",
}, function(err, message) {
  if(err){
    console.log(err);
  } else { console.log(message.sid);
  }

});
