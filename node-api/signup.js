var http = require("http");
var express = require('express');
var app = express();
var mysql = require('mysql');
var bodyParser = require('body-parser');
var cors = require('cors');
app.use(cors());

//start mysql connection
var connection = mysql.createConnection({
  host     : 'localhost', //mysql database host name
  user     : 'root', //mysql database user name
  password : '', //mysql database password
  database : 'Resume' //mysql database name
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
var server = app.listen(3000,  "127.0.0.1", function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

});

//rest api to get all users
app.get('/signup', function (req, res) {
   connection.query('select * from Signup', function (error, results, fields) {
	  //if (error) throw error;
	  res.end(JSON.stringify(results));
	});
});

//rest api to get a single user data
app.get('/signup/:id', function (req, res) {
   connection.query('select * from Signup where User_ID=?', [req.params.id], function (error, results, fields) {
	  //if (error) throw error;
    res.end(JSON.stringify(results));
	});
});

//rest api to create a new user record into mysql database
app.post('/signup', function (req, res) {
   var params = {
     "Fname" : req.body.Fname,
     "Lname" : req.body.Lname,
     "Email" : req.body.Email, 
     "Mobile_no" : req.body.Mobile_no,
     "Password" : req.body.Password,
   }
   connection.query('select * from Signup', function (error, results, fields){
    if(req.body.Email == results.Email){
     console.log('Email already exist');
    }else if(req.body.Mobile_no == results.Mobile_no){
      console.log('Mobile Number already exist');
    }else{
     console.log(params);
     connection.query('INSERT INTO Signup SET ?', params, function (error, results) {
      //if (error) throw error;
      res.end(JSON.stringify(results));
      console.log('Record has been Inserted!');
    });
    }
  })
});

//rest api to update record into mysql database using put
app.put('/signup' , function (req, res) {   
  let Fname = req.body.Fname;
  let Lname = req.body.Lname;
  let Email = req.body.Email; 
  let Mobile_no = req.body.Mobile_no;
  let Password = req.body.Password;
  connection.query('UPDATE `Signup` SET `Fname`=?,`Lname`=?,`Mobile_no`=?,`Password`=? where `Email`=?', [Fname,Lname,Mobile_no,Password,Email], function (error, results, fields) {
	  //if (error) throw error;
    res.end(JSON.stringify(results));
    console.log('Record has been Updated!');
	});
});

/*//rest api to delete record from mysql database
app.delete('/signup', function (req, res) {
   console.log(req.body);
   connection.query('DELETE FROM `Signup` WHERE `User_ID`=?', [req.body.ID], function (error, results, fields) {
    //if (error) throw error;
    res.end(JSON.stringify(results));
	  res.end('Record has been deleted!');
	});
});*/

// all other requests redirect to 404
app.all("*", function (req, res, next) {
  return res.send('page not found');
  next();
});
