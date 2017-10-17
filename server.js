
var express = require('express');
var request = require('request');
var async = require('async');
var fs = require('fs');
var app = express();
app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/getPatient', function(req, res) {
var patientObj = new Object();
const files =['medication.json','patient.json','patientAllergy.json','activeProblems.json','advanceDirectives.json'
            ,'complaintAndReasonforVisit.json','encounterDiagnosis.json','encounters.json','familyHistory.json'
            ,'hospitalDischargeMedications.json','immunization.json','inactiveProblems.json','laboratoryResults.json'
            ,'microbiologyResults.json','payers.json','procedures.json','socialHistory1.json'
            ,'socialHistory2.json','vitalSigns.json'];
intialize();

function intialize(){

  for(var i=0;i<files.length;i++) {
    getFile(files[i]);
  }

   res.render('pages/patient', {
         patients: patientObj
    }); 
}

function getFile(file) {
  var patientData = fs.readFileSync("resources/"+file);
  var patientDataJSON = JSON.parse(patientData);
  patientObj[file] = patientDataJSON;
 }

});



app.get('/', function(req, res) {
var patientObj = new Object();
intialize();

function intialize(){

  getFile('medication.json');
  getFile('patient.json');
  getFile('patientAllergy.json');
  getFile('activeProblems.json');
  getFile('advanceDirectives.json');
  getFile('complaintAndReasonforVisit.json');
  getFile('encounterDiagnosis.json');
  getFile('encounters.json');
  getFile('familyHistory.json');
  getFile('hospitalDischargeMedications.json');
  getFile('immunization.json');
  getFile('inactiveProblems.json');
  getFile('laboratoryResults.json');
  getFile('microbiologyResults.json');
  getFile('payers.json');
  getFile('procedures.json');
  getFile('socialHistory1.json');
  getFile('socialHistory2.json');
  getFile('vitalSigns.json');

   res.render('pages/patient', {
         patients: patientObj
    }); 
  // res.end();
}

function getFile(file) {
 // var data = fs.readFileSync("resources/"+file);
  //var jsonData = JSON.parse(data);
  //patientObj[file] = jsonData;
  console.log(file)
  fs.readFile("resources/"+file, function (err, data) {
    if (err) return console.error(err);
    var jsonData = JSON.parse(data);
    patientObj[file] = jsonData;
});






 }//getFile

});




app.get('/patient', function(req, res) {
var patientObj = new Object();
const files =['medication.json','patient.json','patientAllergy.json','activeProblems.json','advanceDirectives.json'
            ,'complaintAndReasonforVisit.json','encounterDiagnosis.json','encounters.json','familyHistory.json'
            ,'hospitalDischargeMedications.json','immunization.json','inactiveProblems.json','laboratoryResults.json'
            ,'microbiologyResults.json','payers.json','procedures.json','socialHistory1.json'
            ,'socialHistory2.json','vitalSigns.json'];


 async.forEach(files, function(file,callback){ 
     fs.readFile("resources/"+file,function (err, data) {
      console.log("reading file data");
    if (err) return console.error(err);
    var jsonData = JSON.parse(data);
    console.log(jsonData[0].patient);
    patientObj[file] = jsonData;
    callback();
   }); 
},function(){
  console.log("hello");
   res.render('pages/patient', {
         patients: patientObj
    }); 
});
     



});

app.listen(8066);
console.log('8066 server port running');






app.get('/test', function(req, res, next) {
    var messageIds = [1,2,3,4,5,6,7];
    async.forEach(messageIds, function(messageId, callback) {
        console.log("deleting ",callback);
        callback();
    }, function(err) {
      console.log("inside finally");

        if (err) return next(err);
        res.json({
            success: true,
            message: messageIds.length+' message(s) was deleted.'
        });
        console.log("finally");
    });


});