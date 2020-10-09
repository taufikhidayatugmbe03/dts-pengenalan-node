//membuat file
const fs = require('fs')

fs.appendFile('myText1.txt', 'Hello world', function() {
  console.log('Berhasil menulis file.')
})