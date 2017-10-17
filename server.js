
var express = require('express');
var request = require('request');
var fs = require('fs');
var app = express();
app.use(express.static('public'));
app.set('view engine', 'ejs');


app.get('/', function(req, res) {
 var patients=new Object();
 patients.medication = new Array();
 patients.patientBasicInfo = new Array();

function getFile(file, cb) {
    fs.readFile(file, 'utf8', function (err, data) {
  if (err) {
        res.send(err);
    }
    else {
         if (typeof cb === 'function')
                cb(JSON.parse(data));
    }
});
}


intialize();


function intialize()
{


  getFile('resources/medication.json',name =  function(medication) {
      console.log("2 record: "+medication[0].units)
   patients['medication']=medication;
   console.log("from obj: "+patients.medication[0].units);
  });
  getFile('resources/patient.json',name =  function(patientBasicInfo) {
    console.log("1 record: "+patientBasicInfo[0].dataOfBirth)
   patients['patientBasicInfo']=patientBasicInfo;
   console.log("from obj: "+patients.patientBasicInfo[0].ethnicity);
  });

console.log("from obj: "+patients.patientBasicInfo[0].ethnicity);
//console.log("from obj: "+patients.medication[0].units);

}






});



 

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




function getFile(file){
  var data = fs.readFileSync("resources/"+file);
  var jsonData = JSON.parse(data);
  patientObj[file] = jsonData;
}




});





app.listen(8066);
console.log('8066 server port running');