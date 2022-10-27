require('dotenv').config()
const Sequelize = require('sequelize')

var db = {}

const database = process.env.DB_DATABASE;
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
const db_host  = process.env.DB_HOST;
const db_port     = process.env.DB_PORT;

const sequelize = new Sequelize( database, username, password, {
    host: db_host,
    port: db_port,
    dialect: 'mysql',
    define: {
        freezeTableName: false,
    },
    logging: true
})

const models = [
    require('./models/users.js')
]

// Initialize models
models.forEach(model => {
    const seqModel = model(sequelize, Sequelize)
    db[seqModel.name] = seqModel
})

// Apply associations
Object.keys(db).forEach(key => {
    if ('associate' in db[key]) {
        db[key].associate(db)
    }
})

console.log(`***sequelize.models`);
console.log(sequelize.models);

// sequelize.sync({alter: true})
//   .then(result => {
//     console.log('Sincronizacion exitosa')
//   })
//   .catch(err => {
//     console.log(err);
//   });


db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db