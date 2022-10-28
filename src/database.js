require('dotenv').config()
const Sequelize = require('sequelize')

var db = {}

const sequelize = process.env.NODE_ENV === 'local' ? 
    new Sequelize( process.env.DB_DATABASE, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        dialect: 'mysql',
        define: {
            freezeTableName: false,
        },
        logging: true
    })
    :
    new Sequelize( process.env.DB_TEST_DATABASE, process.env.DB_TEST_USERNAME, process.env.DB_TEST_PASSWORD, {
        host: process.env.DB_TEST_HOST,
        dialect: 'mysql',
        // dialectOptions: {
        //     ssl: 'Amazon RDS'
        // },
        define: {
            freezeTableName: false,
        },
        logging: console.log
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