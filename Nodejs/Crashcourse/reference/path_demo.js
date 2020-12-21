const path = require('path');

console.log(path.basename(__filename));


// Path to directories
console.log(path.dirname(__filename));

console.log(path.extname(__filename));

console.log(path.parse(__filename).base);


// Concatenate path
console.log(path.join(_dirname, 'test', 'hello.html'));