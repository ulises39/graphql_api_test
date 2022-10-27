import { gql } from "apollo-server-express";
import * as db from '../database';
// const Users = require('../models/users')(sequelize, Sequelize.DataTypes,
//     Sequelize.Model);
// import * as Users from '../models/users';

export const typeDefs = gql`
    type User {
        id: ID!
        nombre: String!
        segundo_nombre: String
        apellido_paterno: String!
        apellido_materno: String!
        fecha_nacimiento: String!
        email: String!
        telefono: String!
    }

    type Query {
        users: [User]
        user(id: ID!): User
    },

    type Mutation {
        createUser(nombre: String!,
            segundo_nombre: String,
            apellido_paterno: String!,
            apellido_materno: String!,
            fecha_nacimiento: String!,
            email: String!,
            telefono: String!): User
    },
`

export const resolvers = {
    Query: {
        users: async () => db.users.findAll(),
        user: async (obj, args, context, info) => db.users.findByPk(args.id),
    },

    Mutation: {
        async createUser(parent, args){
            const newUser =  args;
            console.log(`Usuario a salvar:`);
            console.log(JSON.stringify(newUser));
            await db.users.create(newUser);

            // return await db.users.create(newUser) != null;
            return await db.users.create(newUser); 
        }
    }
}
