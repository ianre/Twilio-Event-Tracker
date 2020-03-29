/*
 const  plugin1 = require('awesome-typescript-loader');

 In the case above, the variable plugin1
 receive the object exported by 
 the module 'awesome-typescript-loader'.

 Then, if you want to access its properties, 
 you would have to call it like this: plugin1.propertyFoo

 const { plugin2 } = require('awesome-typescript-loader');
 In this second case, what happens is that you already 
 know that object exported by 
 the module 'awesome-typescript-loader' has 
 a property called plugin2, but you do not want to import the whole object with all properties like on the first scenario.

  So, you use this syntax { plugin2 } 
  that means basically that you created 
  local variable plugin2 that received 
  only the property plugin2 from the 
  object that is being default 
  exported by 'awesome-typescript-loader'.
*/
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');


require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// start of coors middleware
app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
// mongodb tool remade
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
);

// test connection to mongoDB
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');
// NEW EVENTS
const eventsRouter = require('./routes/events');



// TWILIO
const http = require('http');
const MessagingResponse = require('twilio').twiml.MessagingResponse;
//const MessagingResponse = require('twilio').TwimlResponse.MessagingResponse; // this should be twiml.MessagingResponse

app.post('/sms', (req, res) => {
  const twiml = new MessagingResponse();

  let sendMessage = "Thank you for using Pick Me Up! REQ:" + req.toString() + "  RES:" + res.toString();
  console.log(sendMessage);
  twiml.message(sendMessage);
  res.writeHead(200, {'Content-Type': 'text/xml'});
  res.end(twiml.toString());
});

/*
whenever someone goes to our wesite and requests 
www.app.com/users, it will load everything under "usersRouter"
*/
app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);
app.use('/events', eventsRouter);

// app is listening on port
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});