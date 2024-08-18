const express = require('express');
require('dotenv').config();
const db = require('./data/database');
const seed = require('./seeders/initial.seed');
const bannerRoutes = require('./routes/banner.routes');
const produtoRoutes = require('./routes/produto.routes');
const categoriaRoutes = require('./routes/categoria.routes');
const reviewRoutes = require('./routes/review.routes');
const contatoRoutes = require('./routes/contato.routes');


const cors = require('cors');
const app = express()
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
  app.use(cors());
  next();
});

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.urlencoded({ extended: false }));
app.use(express.json());


app.use('/banner', bannerRoutes);
app.use('/produto', produtoRoutes);
app.use('/categoria', categoriaRoutes);
app.use('/review', reviewRoutes);
app.use('/contato', contatoRoutes);


app.use(function (error, req, res, next) {
  res.status(500).json({
    message: 'Something went wrong!',
  });
});



db.initDb()
  .then(function () {
    app.listen(3000);
    seed.seedInitialInfos().then(() => {
      console.log("Initial seeding completed");
    }).catch((err) => {
      console.error("Error seeding:", err);
      process.exit(1);
    });

  })
  .catch(function (error) {
    console.log('Connecting to the database failed!');
  });


