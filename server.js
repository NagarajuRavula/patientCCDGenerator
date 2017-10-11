
var express = require('express');
var request = require('request');

var app = express();

app.set('view engine', 'ejs');


app.get('/', function(req, res) {
    request('http://localhost:8080/UserManagement/rest/UserService/patients/', function(error, response, body) {
        if(error)
        {
            res.send(error)
        }
        else
        {
            res.render('pages/patient', {
             patients: body
          });

        }
    });
});

app.listen(8066);
console.log('8066 server port running');