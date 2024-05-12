const fs = require('fs');

// writefile
// copyFile
// appendFile
// unlink
// rename


fs.writeFile("hey.txt","hey hello kaisa ho ", function(err){
    if(err)console.log(err)
        else console.log("done")
    
})


fs.appendFile("hey.txt", "mera name uzair ha",function(err){
    if(err)console.log(err)
        else console.log("done")
})