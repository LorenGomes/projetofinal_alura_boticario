const mongoose = require('mongoose');
async function initDb() {
  const {
    DOCKER_MONGO_HOSTNAME,
    MONGO_HOSTNAME,
    MONGO_PORT,
    MONGO_DB
  } = process.env;
  var url = "";
  if (DOCKER_MONGO_HOSTNAME != null) {
    url = `mongodb://${DOCKER_MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}`;
  } else {
    url = `mongodb://${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}`;
  }

  mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.log(err));
}


module.exports = {
  initDb: initDb
};



