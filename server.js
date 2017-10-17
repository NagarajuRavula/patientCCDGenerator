
var express = require('express');
var request = require('request');
var fs = require('fs');
var app = express();
app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/getPatient', function(req, res) {
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
}

function getFile(file) {
  var data = fs.readFileSync("resources/"+file);
  var jsonData = JSON.parse(data);
  patientObj[file] = jsonData;
 }

});

app.listen(8066);
console.log('8066 server port running');