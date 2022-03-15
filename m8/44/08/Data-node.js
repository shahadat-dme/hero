fs = require('fs');
fs.writeFile('test.txt', 'Grype!', function (err) {
  if (err) return console.log(err);
  console.log('Grype > test.txt');
});