/*
var http = require('http');
var url = process.argv[2];
var url2 = process.argv[3];
var url3 = process.argv[4];
var bl = require('bl');



http.get(url,function (response){
    response.pipe(bl(function (err, data) {
        console.log(data.toString());
     }))
    response.on('error', function(err){
        console.log(err);
    })
});



http.get(url2,function (response){
    response.pipe(bl(function (err,data){
        console.log(data.toString());
    }))
    response.on('error',function(err){
        console.log(err);
    })
})



http.get(url3, function(response){
    response.pipe(bl(function (err,data){
        console.log(data.toString());
    }))
    response.on('error',function(err){
        console.log(err);
    })
})
*/
/*********************************** */

const http = require('http')
    const bl = require('bl')
    const results = []
    let count = 0
    
    function printResults () {
      for (let i = 0; i < 3; i++) {
        console.log(results[i])
      }
    }
    
    function httpGet (index) {
      http.get(process.argv[2 + index], function (response) {
        response.pipe(bl(function (err, data) {
          if (err) {
            return console.error(err)
          }
    
          results[index] = data.toString()
          count++
    
          if (count === 3) {
            printResults()
          }
        }))
      })
    }
    
    for (let i = 0; i < 3; i++) {
      httpGet(i)
    }




