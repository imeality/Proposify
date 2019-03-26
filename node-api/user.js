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

                                            //User table  api .

//rest api to get all users
app.get('/user', function (req, res) {
   connection.query('select * from User', function (error, results, fields) {
	  //if (error) throw error;
	  res.end(JSON.stringify(results));
	});
});

//rest api to get a single user data
app.get('/user/:id', function (req, res) {
   connection.query('select * from User where User_ID=?', [req.params.id], function (error, results, fields) {
	  //if (error) throw error;
    res.end(JSON.stringify(results));
	});
});

//rest api to create a new user record into mysql database
app.post('/user', function (req, res) {
   var params = {
     
     "Name" : req.body.Name,
     "DOB" : req.body.DOB,
     "Age" : req.body.Age, 
     "Mobile_no" : req.body.Mobile_no,
     "Email" : req.body.Email,
     "Address" : req.body.Address,
     "Country" : req.body.Country,
     "State" : req.body.State,
     "City" : req.body.City,
     
   }
     console.log(params);
     connection.query('INSERT INTO User SET ?', params, function (error, results) {
      //if (error) throw error;
      res.end(JSON.stringify(results));
      console.log('Record has been Inserted!');
    });
});

//rest api to update record into mysql database using put
app.put('/user' , function (req, res) {   
  let Name = req.body.Name;
  let DOB = req.body.DOB;
  let Age = req.body.Age; 
  let Mobile_no = req.body.Mobile_no;
  let Email = req.body.Email;
  let Address = req.body.Address;
  let Country = req.body.Country;
  let State = req.body.State;
  let City = req.body.City;
  connection.query('UPDATE `User` SET `Name`=?,`DOB`=?,`Age`=?,`Mobile_no`=?,`Address`=? ,`Country`=? ,`State`=? ,`City`=?  where `User_ID `=?', [Name,DOB,Age,Mobile_no,Address,Country,State,City,Email], function (error, results, fields) {
	  //if (error) throw error;
    res.end(JSON.stringify(results));
    console.log('Record has been Updated!');
	});
});

                                             //Education table  api .  

//rest api to get all users
app.get('/education', function (req, res) {
  connection.query('select * from Education', function (error, results, fields) {
     //if (error) throw error;
     res.end(JSON.stringify(results));
   });
});

//rest api to get a single user data
app.get('/education/:id', function (req, res) {
  connection.query('select * from Education where Ue_id=?', [req.params.id], function (error, results, fields) {
     //if (error) throw error;
   res.end(JSON.stringify(results));
   });
});

//rest api to create a new user record into mysql database
app.post('/education', function (req, res) {
  var params = {
    "User_ID" : req.body.User_ID,
    "tenth_school" : req.body.tenth_school,
    "tenth_per" : req.body.tenth_per,
    "tenth_Passingyear" : req.body.tenth_Passingyear, 
    "twelth_school" : req.body.twelth_school,
    "twelth_per" : req.body.twelth_per,
    "twelth_Passingyear" : req.body.twelth_Passingyear,
    "Graduation_Collage" : req.body.Graduation_Collage,
    "Graduation_Stream" : req.body.Graduation_Stream,
    "Graduation_per" : req.body.Graduation_per,
    "Graduation_Passingyear" : req.body.Graduation_Passingyear,
    "PG_collage" : req.body.PG_collage,
    "PG_Stream" : req.body.PG_Stream,
    "PG_per" : req.body.PG_per,
    "PG_Passingyear" : req.body.PG_Passingyear,   
  }
    console.log(params);
    connection.query('INSERT INTO Education SET ?', params, function (error, results) {
     //if (error) throw error;
     res.end(JSON.stringify(results));
     console.log('Record has been Inserted!');
     res.end('Record has been Inserted!');
   });
});

//rest api to update record into mysql database using put
app.put('/education/:id' , function (req, res) {   
  let tenth_school = req.body.tenth_school;
  let tenth_per = req.body.tenth_per;
  let tenth_Passingyear = req.body.tenth_Passingyear; 
  let twelth_school = req.body.twelth_school;
  let twelth_per = req.body.twelth_per;
  let twelth_Passingyear = req.body.twelth_Passingyear;
  let Graduation_Collage = req.body.Graduation_Collage;
  let Graduation_Stream = req.body.Graduation_Stream;
  let Graduation_per = req.body.Graduation_per;
  let Graduation_Passingyear = req.body.Graduation_Passingyear;
  let PG_collage = req.body.PG_collage;
  let PG_Stream = req.body.PG_Stream;
  let PG_per = req.body.PG_per;
  let PG_Passingyear = req.body.PG_Passingyear;
  //let User_ID = req.body.User_ID;
  connection.query('UPDATE `Education` SET `tenth_school`=?,`tenth_per`=?,`tenth_Passingyear`=?,`twelth_school`=?,`twelth_per`=?,`twelth_Passingyear`=?,`Graduation_Collage`=?,`Graduation_Stream`=? ,`Graduation_per`=?,`Graduation_Passingyear`=?,`PG_collage`=?,`PG_Stream`=?,`PG_per`=?,`PG_Passingyear`=? where `Ue_id`=?', [tenth_school,tenth_per,tenth_Passingyear,twelth_school,twelth_per,twelth_Passingyear,Graduation_Collage,Graduation_Stream,Graduation_per,Graduation_Passingyear,PG_collage,PG_Stream,PG_per,PG_Passingyear,req.params.id], 
  function (error, results, fields) {
      //if (error) throw error;
    res.end(JSON.stringify(results));
    console.log('Record has been Updated!');
   });
 });

                                              //Job Details table  api .

//rest api to get all users
app.get('/job', function (req, res) {
  connection.query('select * from job', function (error, results, fields) {
     //if (error) throw error;
     res.end(JSON.stringify(results));
   });
});

//rest api to get a single user data
app.get('/job/:id', function (req, res) {
  connection.query('select * from job where Ujob_id=?', [req.params.id], function (error, results, fields) {
     //if (error) throw error;
   res.end(JSON.stringify(results));
   });
});

//rest api to create a new user record into mysql database
app.post('/job', function (req, res) {
  var params = {
     "User_ID" : req.body.User_ID,
     "Experience" : req.body.Experience,
     "Job_profile" : req.body.Job_profile,
     "Company_name" : req.body.Company_name, 
     "Start_date" : req.body.Start_date,
     "End_date" : req.body.End_date,
     "Skills" : req.body.Skills,
     "Achivement" : req.body.Achivement,
     "Languages" : req.body.Languages,
     "Hobbies" : req.body.Hobbies,
   }
     console.log(params);
     connection.query('INSERT INTO job SET ?', params, function (error, results) {
      //if (error) throw error;
      res.end(JSON.stringify(results));
      console.log('Record has been Inserted!');
      res.end('Record has been Inserted!');
    });
});

//rest api to update record into mysql database using put
app.put('/job/:id' , function (req, res) {   
 let Experience = req.body.Experience;
 let Job_profile = req.body.Job_profile;
 let Company_name = req.body.Company_name; 
 let Start_date = req.body.Start_date;
 let End_date = req.body.End_date;
 let Skills = req.body.Skills;
 let Achivement = req.body.Achivement;
 let Languages = req.body.Languages;
 let Hobbies = req.body.Hobbies;
 //let User_ID = req.body.User_ID;
 connection.query('UPDATE `job` SET `Experience`=?,`Job_profile`=?,`Company_name`=?,`Start_date`=?,`End_date`=?,`Skills`=?,`Achivement`=?,`Languages`=? ,`Hobbies`=? where `Ujob_id`=?', [Experience,Job_profile,Company_name,Start_date,End_date,Skills,Achivement,Languages,Hobbies,req.params.id], 
 function (error, results, fields) {
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
