var http = require("http");
var express = require('express');
var app = express();
var mysql = require('mysql');
var bodyParser = require('body-parser');

var jwt = require('jsonwebtoken');
var cors = require('cors');
app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));
//start mysql connection
var connection = mysql.createConnection({
  host     : 'localhost', //mysql database host name
  user     : 'root', //mysql database user name
  password : '', //mysql database password
  database : 'user' //mysql database name
});

connection.connect(function(error) {
 if (error) throw error
  console.log('You are now connected with mysql database...')
})
//end mysql connection

//start body-parser configuration
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));
//end body-parser configuration

//create app server
var server = app.listen(3000,  "127.0.0.1", function () {
  var host = server.address().address
  var port = server.address().port
  
  console.log("Example app listening at http://%s:%s", host, port)

});

//rest api to get all customers
app.get('/login', function (req, res) {
   connection.query('select admin_email,password from Admin', function (err, results) {
    if(results[0].admin_email == req.body.admin_email && results[0].password == req.body.password)
    {
        console.log("token generated");
        var token = jwt.sign({ id:results}, "mykey", {expiresIn:8}); // expires in 24 hour 
        return res.status(200).send({ auth: true, token: token });
      }
    else  
    {
      console.log("token not generated");
      return res.status(500).send({auth: false, message: 'Failed to authenticate token.' });
    }
	});
});


//rest api to create a new customer record into mysql database
app.post('/login', function (req, res) {
    var params = {
        "admin_email" : req.body.email, 
        "password" : req.body.password,
      }
   console.log(params);
   connection.query('INSERT INTO Admin SET ?', params, function (error, results, fields) {
	  //if (error) throw error;
	  res.end(JSON.stringify(results));
	});
});

//rest api to get all customers
app.get('/user', function (req, res) {
   connection.query('select * from user', function (error, results, fields) {
	  if (error) throw error;
	  res.end(JSON.stringify(results));
	});
});


//rest api to create a new customer record into mysql database
app.post('/user', function (req, res) {
    var params = {
        "user_name" : req.body.name,
        "user_email" : req.body.email, 
        "password" : req.body.password
      }
   console.log(params);
   connection.query('INSERT INTO user SET ?', params, function (error, results, fields) {
	  //if (error) throw error;
	  res.end(JSON.stringify(results));
	});
});
