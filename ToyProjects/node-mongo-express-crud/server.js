const express = require('express');
const app = express();

app.listen(3000, () => {
  console.log('listening to 3000...')
})

app.get('/', (req, res) => res.sendFile(__dirname + '/index.html'))

// app.get(path, callback)
// path === / in this case because the browser is looking for
// localhost:3000/ <== that last slash is what its looking for

// callback === is a function that is executed when that path is 
// being hit