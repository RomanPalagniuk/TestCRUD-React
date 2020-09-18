const Sequelize = require('sequelize');


let sequelize = new Sequelize('HotDogs', 'postgres', '123456', {
  host: 'localhost',
  dialect:  'postgres',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  } 
});

sequelize.authenticate()
    .then(() => {
      console.log('Connection has been established successfully.');
    })
    .catch(err => {
      console.error('Unable to connect to the database:', err);
    });

const db = {};


db.hotdog = require('./models/hotdog.js')(sequelize, Sequelize);

db.sequelize = sequelize;
db.Sequelize = Sequelize;
module.exports = db;