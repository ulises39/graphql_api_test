const { makeExecutableSchema } = require('graphql-tools');
const users = require('../data');

const typeDefs = `
    type User {
        id: Int!
        nombre: String!
        segundo_nombre: String
        apellido_paterno: String!
        apellido_materno: String!
        fecha_nacimiento: String!
        email: String!
        telefono: String!
    }

    type Query {
        users: [Users]
        user (id: Int!): User
    }
`; 

const resolvers = {
    Query: {
        async users(_, args){
            return await users;
        },

        async user(_, {id}){
            return users.find((user) => user.id === id);
        },
    },

    Mutation: {
        async createUser(_, { id, ...rest }){
            let newUser = {
                rest,
            };
            return await users.push(newUser);
        }
    }
}

const schema = makeExecutableSchema({
    typeDefs,
    resolvers
});

module.exports = schema;