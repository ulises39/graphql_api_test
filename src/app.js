import '@babel/polyfill'
import cors from 'cors';// ... const server = express();
const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const app = express();
app.use('*', cors({ origin: 'http://localhost:3000' }));

const sequelize = require('./database');

const server = new ApolloServer({
    modules: [
        require('./graphql_info/users'),
    ]
});

const port = process.env.PORT | 3000;

server.applyMiddleware({app});

app.get('/', (req, res) => res.send('Hello World!'))


sequelize.sequelize.sync({alter: true})
  .then(result => {
    console.log('Sincronizacion exitosa')
    app.listen(port, () => {
        console.log(`Servidor ${process.env.PROJECT_NAME} corriendo en puerto ${port}`);
    })
  })
  .catch(err => {
    console.log(err);
  });

// app.listen(port, () => {
//     console.log(`Servidor ${process.env.PROJECT_NAME} corriendo en puerto ${port}`);
// })