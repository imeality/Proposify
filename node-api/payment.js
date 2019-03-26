var http = require("http");
var express = require('express');
var app = express();
var mysql = require('mysql');
var bodyParser = require('body-parser');

//start mysql connection
var connection = mysql.createConnection({
  host     : 'localhost', //mysql database host name
  user     : 'phpmyadmin', //mysql database user name
  password : '12345', //mysql database password
  database : 'resume' //mysql database name
});

connection.connect(function(error) {
 //if (error) throw error
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
var server = app.listen(3000,  "0.0.0.0", function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

});

//rest api to get all users
app.get('/payment', function (req, res) {
   connection.query('select * from Payment', function (error, results, fields) {
	  //if (error) throw error;
	  res.end(JSON.stringify(results));
	});
});

//rest api to get a single user data
app.get('/payment/:id', function (req, res) {
   connection.query('select * from Payment where User_ID=?', [req.params.id], function (error, results, fields) {
	  //if (error) throw error;
    res.end(JSON.stringify(results));
	});
});

//rest api to create a new user record into mysql database
app.post('/payment', function (req, res) {
   var params = {
     "Bank_name" : req.body.Bank_name,
     "Date" : req.body.Date,
     "Email" : req.body.Email, 
     "Amount" : req.body.Amount,
     "Payment_status" : req.body.Payment_status,
     "Payment_methord" : req.body.Payment_methord,
   }
   connection.query('select * from Payment', function (error, results, fields){
     if(results.Email !=0){
      console.log('Email already exist');
     }else{
      console.log(params);
      connection.query('INSERT INTO Payment SET ?', params, function (error, results) {
       //if (error) throw error;
       res.end(JSON.stringify(results));
       console.log('Record has been Inserted!');
     });
     }
   })
});

//rest api to update record into mysql database using put
app.put('/payment' , function (req, res) {   
  let Bank_name = req.body.Bank_name;
  let Date = req.body.Date;
  let Email = req.body.Email; 
  let Amount = req.body.Amount;
  let Payment_status = req.body.Payment_status;
  let Payment_methord = req.body.Payment_methord;
  connection.query('UPDATE `Payment` SET `Bank_name`=?,`Date`=?,`Amount`=?,`Payment_status`=?,`Payment_methord`=? where `Email`=?', [Bank_name,Date,Amount,Payment_status,Payment_methord,Email], function (error, results, fields) {
	  //if (error) throw error;
    res.end(JSON.stringify(results));
    console.log('Record has been Updated!');
	});
});

// all other requests redirect to 404
app.all("*", function (req, res, next) {
  return res.send('page not found');
  next();
});
