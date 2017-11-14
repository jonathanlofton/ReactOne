const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const MongoClient = require('mongodb').MongoClient

app.use(bodyParser.urlencoded({ extended: true }))

app.set('view engine', 'ejs')

let db;

MongoClient.connect('mongodb://jlofton:12345@ds163705.mlab.com:63705/mongo-test-1', (err, database) => {
  if (err) return console.log(err)
  db = database
  app.listen(3000, () => {
    console.log('listening to 3000...')
  })
})




app.get('/', (req, res) => {
  // res.sendFile(__dirname + 'views/index.ejs')
  let cursor = db.collection('quotes').find().toArray((err, result) => {

    // first argument is the name of the file we're rendering
    // it must be placed within a views folder
    // the second argument is an object that passes data into the view
    res.render('index.ejs', {quotes: result})
  })
})

app.post('/quotes', (req, res) => {
  db.collection('quotes').save(req.body, (err, result) => {
    if (err) return console.log(err)

    console.log('saved to database')
    res.redirect('/')
  })
})


// app.get(path, callback)
// path === / in this case because the browser is looking for
// localhost:3000/ <== that last slash is what its looking for

// callback === is a function that is executed when that path is 
// being hit