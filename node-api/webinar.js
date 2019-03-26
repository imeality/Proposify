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

//rest api to get all webinar
app.get(' ', function (req, res) {
   connection.query('select * from Webinar', function (error, results, fields) {
	  //if (error) throw error;
	  res.end(JSON.stringify(results));
	});
});

//rest api to get a single webinar data
app.get('/webinar/:id', function (req, res) {
   connection.query('select * from Webinar where Webinar_ID=?', [req.params.id], function (error, results, fields) {
	  //if (error) throw error;
    res.end(JSON.stringify(results));
	});
});

//rest api to create a new webinar record into mysql database
app.post('/webinar', function (req, res) {
   var params = {
     "Topic" : req.body.Topic,
     "Discription" : req.body.Discription,
     "Time" : req.body.Time,
     "First_name" : req.body.Last_name,
     "Last_name" : req.body.Last_name,
     "Email" : req.body.Email,     
   }
     connection.query('INSERT INTO Webinar SET ?', params, function (error, results) {
      //if (error) throw error;
      res.end(JSON.stringify(results));
      console.log('Record has been Inserted!');
    });
  });

//rest api to update record into mysql database using put
app.put('/webinar' , function (req, res) {   
  let Topic = req.body.Topic;
  let Discription = req.body.Discription;
  let Time = req.body.Time;
  let First_name = req.body.First_name;
  let Last_name = req.body.Last_name;
  let Email = req.body.Email; 
  connection.query('UPDATE `Webinar` SET `First_name`=?,`Last_name`=?,`Topic`=?,`Discription`=?,`Time`=? where `Email`=?', [First_name,Last_name,Topic,Discription,Time,Email], function (error, results, fields) {
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
