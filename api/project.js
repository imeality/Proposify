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
var server = app.listen(3000,  "0.0.0.0", function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

});

                             //signup table
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
    if(results.Email == req.body.Email ){
     console.log('Email already exist');
    }else if(results.Mobile_no == req.body.Mobile_no ){
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

//User table  api .

//rest api to get all users
app.get('/user', function (req, res) {
   connection.query('select * from User', function (error, results, fields) {
	  //if (error) throw error;
	  res.end(JSON.stringify(results));
	});
});

//rest api to get a single user data
app.get('/user/:Email', function (req, res) {
   connection.query('select * from User where Email=?', [req.params.id], function (error, results, fields) {
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
    "Email" : req.body.Email,
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
     "Email" : req.body.Email,
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
      "Company_name" : req.body.Company_name,
      "Company_email" : req.body.Company_email,
      "Company_address" : req.body.Company_address,
      "Company_country" : req.body.Company_country,
      "Company_state" : req.body.Company_state,
      "Company_city" :req.body.Company_city,
      "Date":req.body.Date,
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
   let Company_email = req.body.Company_email;
   let Company_address = req.body.Company_address;
   let Company_country = req.body.Company_country;
   let Company_state = req.body.Company_state;
   let Company_city = req.body.Company_city;
   let Date = req.body.Date;
   connection.query('UPDATE `Company` SET `Company_name`=?,`Company_email`=?,`Company_address`=?,`Company_country`=?,`Company_state`=?,`Company_city`=?,`Date`=? where `Company_Id`=?', [Company_name,Company_address,Company_country,Company_state,Company_city,Date,req.params.id], function (error, results, fields) {
       //if (error) throw error;
     res.end(JSON.stringify(results));
     console.log('Record has been Updated!');
     });
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
   connection.query('select * from Payment where Payment_ID=?', [req.params.id], function (error, results, fields) {
	  //if (error) throw error;
    res.end(JSON.stringify(results));
	});
});

//rest api to create a new user record into mysql database
app.post('/payment', function (req, res) {
   var params = {
    "Name" : req.body.Name,
    "Mobile_no" : req.body.Mobile_no,
    "Email" : req.body.Email, 
    "Amount" : req.body.Amount,
    "Date" : req.body.Date,
   }
     console.log(params);
      connection.query('INSERT INTO Payment SET ?', params, function (error, results) {
       //if (error) throw error;
       res.end(JSON.stringify(results));
       console.log('Record has been Inserted!');
     });
});

//rest api to update record into mysql database using put
app.put('/payment' , function (req, res) {   
     let Name = req.body.Name;
     let Mobile_no = req.body.Mobile_no;
     let Email = req.body.Email; 
     let Amount = req.body.Amount;
     let Date = req.body.Date;
     connection.query('UPDATE `Payment` SET `Name`=?,`Mobile_no`=?,`Amount`=?,`Date`=? where `Email`=?', [Name,Mobile_no,Email,Amount,Date], function (error, results, fields) {
	  //if (error) throw error;
    res.end(JSON.stringify(results));
    console.log('Record has been Updated!');
	});
});

					// webinar table
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
