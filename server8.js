var fs= require('fs');
fs.appendFile('apple.txt','yes,succesfully work completed',function( err)
{
    if (err) throw err;
    console.log('saved!');
});