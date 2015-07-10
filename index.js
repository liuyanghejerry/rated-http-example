var request = require('superagent');
var fs = require('fs');

var Throttle = require('throttle');

// create a "Throttle" instance that reads at 100 kbps
var throttle = new Throttle(1024*100);

var stream = fs.createWriteStream('./test.data');
var req = request.get('http://speedtest.singapore.linode.com/100MB-singapore.bin');
// req.pipe(stream);
req.pipe(throttle).pipe(stream);
