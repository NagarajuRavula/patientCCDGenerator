
var express = require('express');
var request = require('request');
var async = require('async');
var fs = require('fs');
var app = express();
app.use(express.static('public'));
app.set('view engine', 'ejs');


//this calls the files asynchronously

app.get('/patient', function(req, res) {
var patientObj = new Object();
const files =['medication.json','patient.json','patientAllergy.json','activeProblems.json','advanceDirectives.json'
            ,'complaintAndReasonforVisit.json','encounterDiagnosis.json','encounters.json','familyHistory.json'
            ,'hospitalDischargeMedications.json','immunization.json','inactiveProblems.json','laboratoryResults.json'
            ,'microbiologyResults.json','payers.json','procedures.json','socialHistory1.json'
            ,'socialHistory2.json','vitalSigns.json'];


 async.forEach(files, function(file,callback) { 
     fs.readFile("resources/"+file,function (err, data) {
     if (err) return console.error(err);
     var jsonData = JSON.parse(data);
     console.log(jsonData[0].patient);
     patientObj[file] = jsonData;
     callback();
   }); 
},function() {
         res.render('pages/patient', {
         patients: patientObj
    }); 
});
     
});

//this calls the files synchronously
app.get('/getPatient', function(req, res) {
var patientObj = new Object();
const files =['medication.json','patient.json','patientAllergy.json','activeProblems.json','advanceDirectives.json'
            ,'complaintAndReasonforVisit.json','encounterDiagnosis.json','encounters.json','familyHistory.json'
            ,'hospitalDischargeMedications.json','immunization.json','inactiveProblems.json','laboratoryResults.json'
            ,'microbiologyResults.json','payers.json','procedures.json','socialHistory1.json'
            ,'socialHistory2.json','vitalSigns.json'];
intialize();

function intialize() {

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


app.listen(8066);
console.log('8066 server port running');

