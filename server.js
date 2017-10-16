
var express = require('express');
var request = require('request');
var fs = require('fs');
var app = express();

app.set('view engine', 'ejs');


app.get('/', function(req, res) {
  //  request('resources/patient.txt', function(error, response, body) {
    //    if(error)
      //  {
        //    res.send(error)
        //}
        //else
        //{
          //  res.render('pages/patient', {
            // patients: body
          //});

        //}
    //});

  
fs.readFile('resources/patient.json', 'utf8', function (err, data) {
  if (err) 
    {
        res.send(err);
    }
    else
    {
       res.render('pages/patient', {
         patients: data
      });     
    }
});


});








app.listen(8066);
console.log('8066 server port running');