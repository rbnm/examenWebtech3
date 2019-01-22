const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient

var db;

MongoClient.connect('mongodb://localhost:27017/examen', (err, database) => {
  if (err) return console.log(err)
  db = database.db('examen')
  app.listen(process.env.PORT || 3000, () => {
    console.log('Listening on port 3000')
  })
})

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(express.static('public'))

// Redirect to list
app.get('/', (req, res) => { 
  res.redirect('/add')
})


// Show the add product form
app.get('/add', (req, res) => {
   res.render('add.ejs', {})
})

// Add a product to the db
app.post('/add', (req, res) => {
  let query = {naam: req.body.naam, examen: req.body.examen, reden: req.body.reden};
  db.collection('inhaal').find(query).toArray(function(err, result) {
    if (err) console.log(err)
    if (result == ''){
      datum = getDatum();
      db.collection('inhaal').insertOne({naam: req.body.naam, examen: req.body.examen, reden: req.body.reden, datum: datum}, (err, result) => {
        if (err) return console.log(err)
         res.redirect('/succes')
      })
    }
    else{
      res.render('exists.ejs');
    }
  });

})

// Show the exist page
app.get('/exists', (req, res) => {
  res.render('exists.ejs')
})
app.get('/succes', (req, res) => {
  res.render('succes.ejs')
})
// Show the search form
app.get('/search', (req, res) => {
   res.render('search.ejs', { examens: '' })
})

// Find a product
app.post('/search', (req, res) => {
 let query = { naam: req.body.naam }
 let mysort = { reden: 1 };
 db.collection('inhaal').find(query).sort(mysort).toArray(function(err, result) {
   if (err) console.log(err)
   if (result == '')
       res.render('search_not_found.ejs', {})
   else
       res.render('search_result.ejs', { examens: result })
 });
})


//datum in mooi formaat
getDatum = () => {
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth() + 1; //January is 0!
  
  var yyyy = today.getFullYear();
  if (dd < 10) {
    dd = '0' + dd;
  } 
  if (mm < 10) {
    mm = '0' + mm;
  } 
  var datum = dd + '/' + mm + '/' + yyyy;
  return datum
}
