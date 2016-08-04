/* 
 * ... License Headers ... 
 */
var GoogleSpreadsheet = require('google-spreadsheet');
var async = require('async');
 
// spreadsheet key is the long id in the sheets URL 
var doc = new GoogleSpreadsheet('1-T-pgsrkD7RRpcR1lJL9IbRBQGB7NvmPNCCoPxReVlw');
var sheet;

async.series([
    function setAuth(step) {
        // see notes below for authentication instructions! 
        var creds = require('./GDAPI-24e19b3544a6.json');
        doc.useServiceAccountAuth(creds, step);
    },
  
    function getInfoAndWorksheets(step) {
        doc.getInfo(function(err, info) {
            console.log('Loaded doc: '+info.title+' by '+info.author.email);
            sheet = info.worksheets[0];
            console.log('sheet 1: '+sheet.title+' '+sheet.rowCount+'x'+sheet.colCount);
            step();
        });
    },
    
    function workingWithRows(step) {
    sheet.getRows({      
        'return-empty': false
        
    }, function(err, rows) {
        
                    console.log(rows.length);
            
                
           
       // console.log(cell._value);
 
      /*
      // cells have a value, numericValue, and formula 
      cell.value == '1'
      cell.numericValue == 1;
      cell.formula == '=ROW()';
 
      // updating `value` is "smart" and generally handles things for you 
      cell.value = 123;
      cell.value = '=A1+B2'
      cell.save(); //async 
 
      // bulk updates make it easy to update many cells at once 
      cells[0].value = 1;
      cells[1].value = 2;
      cells[2].formula = '=A1+B1';
      sheet.bulkUpdateCells(cells); //async 
      */
      step();
    });
  },
    
    function workingWithCells(step) {
    sheet.getCells({      
        'return-empty': false
    }, function(err, cells) {
        
            for(x in cells) {              
            //    console.log(x + " - " + cells[x]._value);
              
            }
            
                
           
       // console.log(cell._value);
 
      /*
      // cells have a value, numericValue, and formula 
      cell.value == '1'
      cell.numericValue == 1;
      cell.formula == '=ROW()';
 
      // updating `value` is "smart" and generally handles things for you 
      cell.value = 123;
      cell.value = '=A1+B2'
      cell.save(); //async 
 
      // bulk updates make it easy to update many cells at once 
      cells[0].value = 1;
      cells[1].value = 2;
      cells[2].formula = '=A1+B1';
      sheet.bulkUpdateCells(cells); //async 
      */
      step();
    });
  }
  
  ]);
