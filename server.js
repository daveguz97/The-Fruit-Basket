const express = require('express');
const app = express();
const fs = require('fs');
const bodyParser = require('body-parser');
const cors = require('cors');

const port = process.env.PORT || 5000;
const ip = process.env.IP;

// Set up
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

// Parse fruits from file
const getAllFruits = (cb) => {
  fs.readFile('./data/fruits.json', (err, file) => {
    if (err) {
      cb([]);
    } else {
      cb(JSON.parse(file));
    }
  });
};

// Get
app.get('/fruits', (req, res) => {
  fruitId = req.query.id;
  getAllFruits((fruits) => {
    if (!fruitId) {
      res.send(fruits);
    } else {
      fruits.forEach((fruit) => {
        if (fruit.id === fruitId) {
          res.send(fruit);
        }
      });
    }
  });
});

// Post
app.post('/cart', (req, res) => {
  res.send(req.body);
});

// In case you're using ejs
app.get('/', (req, res) => {
  res.render('home');
});

// Listening
app.listen(port, ip, () => {
  console.log('Listening at', port);
});
