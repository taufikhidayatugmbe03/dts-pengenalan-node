//membuka file
const fs = require('fs')

fs.open('myText1.txt', 'w', (err, file) => {
  if(err) {
    return console.error(err)
  }

  console.log('Saved!')
})