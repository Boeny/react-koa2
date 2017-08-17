const fs = require('fs');
const http = require('http');
const config = require('./db.config');

function getDbString(data){
  return '{"comments":'+data+'}';
}

function saveDataToDb(data){
  fs.writeFileSync(__dirname +'/'+ config.db_file, getDbString(data), 'utf-8');
}

module.exports = function() {
  return new Promise((resolve, reject) => {
    var data = '';
    
    var req = http.get(config.url, function(res) {
      res.setEncoding('utf8');
      
      res.on('data', function (chunk) {
        data += chunk;
      });
      
      res.on('end', function(){
        saveDataToDb(data);
        resolve ();
      });
    });
    
    req.on('error', function(e) {
      reject('problem with request: ' + e.message);
    });
  });
};