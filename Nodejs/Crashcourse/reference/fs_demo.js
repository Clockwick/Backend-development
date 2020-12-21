const fs = require('fs');
const path = require('path');

// Create folder
fs.mkdir(path.join(__dirname, '/test'), {}, function(err) {
    if (err) throw err;
    console.log('Folder created.');
})

// Remove folder
// fs.rmdir(path.join(__dirname, '/test'), {}, function(err) {
//     if (err) throw err;
//     console.log('Folder removed.');
// })

// Create and write to file
fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 'Hello guys!!', function(err) {
    if (err) throw err;
    console.log('File written to ...');
})

// Append to file
fs.appendFile(path.join(__dirname, '/test', 'hello.txt'), ', I love nodejs .', function(err) {
    if (err) throw err;
    console.log('File written to ...');
})

//Read file
fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf-8', function(err, data) {
    if (err) throw err;
    console.log(data);
})

//Rename file
fs.rename(path.join(__dirname, '/test', 'hello.txt'), path.join(__dirname, '/test', 'helloworld.txt'), function(err) {
    if (err) throw err;
    console.log('File renamed ...');
})