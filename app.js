const express=require('express');
const app = express()
const bodyParser = require('body-parser');

//Setting
app.set('view engine', 'ejs');
app.use(express.static(__dirname+'/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));


//routes
app.use('/',require('./route/home'));

// port 
const port = 3000;
app.listen(port, function(){
  console.log('server on! http://localhost:'+port);
});