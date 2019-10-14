var fs = require('fs'),
    readline = require('readline');

var rd = readline.createInterface({
    input: fs.createReadStream('/path/to/file'),
    output: process.stdout,
    console: false
});

rd.on('line', function(line) {
    console.log(line);
})
