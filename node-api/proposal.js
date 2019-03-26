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

                                                //Proposal tabel api

//rest api to get all proposal
app.get('/proposal', function (req, res) {
   connection.query('select * from Proposal', function (error, results, fields) {
	  //if (error) throw error;
	  res.end(JSON.stringify(results));
	});
});

//rest api to create a new user record into mysql database
app.post('/proposal', function (req, res) {
   var params = { 
     "Proposal_detail" : req.body.Proposal_detail,
     "Date" : req.body.Date,
   }
   console.log(params);
     connection.query('INSERT INTO Proposal SET ?', params, function (error, results) {
      //if (error) throw error;
      res.end(JSON.stringify(results));
      console.log('Record has been Inserted!');
    });  
});


//rest api to update record into mysql database using put
app.put('/proposal/:id' , function (req, res) {   
  let Proposal_detail = req.body.Proposal_detail;
  let Date = req.body.Date;
  connection.query('UPDATE `Proposal` SET `Proposal_detail`=?,`Date`=? where `Proposal_ID`=?', [Proposal_detail,Date,req.params.id], function (error, results, fields) {
	  //if (error) throw error;
    res.end(JSON.stringify(results));
    console.log('Record has been Updated!');
	});
});

                                                //Client table api

//rest api to get all client
app.get('/client', function (req, res) {
    connection.query('select * from Client', function (error, results, fields) {
       //if (error) throw error;
       res.end(JSON.stringify(results));
     });
 });
 
//rest api to get a single client data
app.get('/client/:id', function (req, res) {
    connection.query('select * from Client where Client_ID=?', [req.params.id], function (error, results, fields) {
       //if (error) throw error;
     res.end(JSON.stringify(results));
     });
 });

 //rest api to create a new client record into mysql database
 app.post('/client', function (req, res) {
    var params = { 
      "Proposal_ID" : req.body.Proposal_ID,
      "Client_name" : req.body.Client_name,
      "Client_address" : req.body.Client_address,
      "Client_country" : req.body.Client_country,
      "Client_state" : req.body.Client_state,
      "Client_city" :req.body.Client_city,
      "Client_mob1" : req.body.Client_mob1,
      "Client_mob2" : req.body.Client_mob2,
    }
    console.log(params);
      connection.query('INSERT INTO Client SET ?', params, function (error, results) {
       //if (error) throw error;
       res.end(JSON.stringify(results));
       console.log('Record has been Inserted!');
     });  
 });
 
 
 //rest api to update record into mysql database using put
 app.put('/client/:id' , function (req, res) {   
   let Client_name = req.body.Client_name;
   let Client_address = req.body.Client_address;
   let Client_country = req.body.Client_country;
   let Client_state = req.body.Client_state;
   let Client_city = req.body.Client_city;
   let Client_mob1 = req.body.Client_mob1;
   let Client_mob2 = req.body.Client_mob2;
   connection.query('UPDATE `Client` SET `Client_name`=?,`Client_address`=?,`Client_country`=?,`Client_state`=?,`Client_city`=?,`Client_mob1`=?,`Client_mob2`=? where `Client_ID`=?', [Client_name,Client_address,Client_country,Client_state,Client_city,Client_mob1,Client_mob2,req.params.id], function (error, results, fields) {
       //if (error) throw error;
     res.end(JSON.stringify(results));
     console.log('Record has been Updated!');
     });
 });

                                                    //Company table api

//rest api to get all company
app.get('/company', function (req, res) {
    connection.query('select * from Company', function (error, results, fields) {
       //if (error) throw error;
       res.end(JSON.stringify(results));
     });
 });
 
//rest api to get a single caompany data
app.get('/company/:id', function (req, res) {
    connection.query('select * from Company where Company_ID=?', [req.params.id], function (error, results, fields) {
       //if (error) throw error;
     res.end(JSON.stringify(results));
     });
 });

 //rest api to create a new company record into mysql database
 app.post('/company', function (req, res) {
    var params = { 
      "Proposal_ID" : req.body.Proposal_ID,
      "Company_name" : req.body.Company_name,
      "Company_address" : req.body.Company_address,
      "Company_country" : req.body.Company_country,
      "Company_state" : req.body.Company_state,
      " " :req.body.Company_city,
    }
    console.log(params);
      connection.query('INSERT INTO Company SET ?', params, function (error, results) {
       //if (error) throw error;
       res.end(JSON.stringify(results));
       console.log('Record has been Inserted!');
     });  
 });
 
 
 //rest api to update record into mysql database using put
 app.put('/company/:id' , function (req, res) {   
   let Company_name = req.body.Company_name;
   let Company_address = req.body.Company_address;
   let Company_country = req.body.Company_country;
   let Company_state = req.body.Company_state;
   let Company_city = req.body.Company_city;
   connection.query('UPDATE `Company` SET `Company_name`=?,`Company_address`=?,`Company_country`=?,`Company_state`=?,`Company_city`=? where `Company_Id`=?', [Company_name,Company_address,Company_country,Company_state,Company_city,req.params.id], function (error, results, fields) {
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
