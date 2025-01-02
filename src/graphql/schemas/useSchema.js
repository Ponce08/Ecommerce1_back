import { gql } from 'apollo-server-express';

const userSchema = gql`
  type User {
    id: Int
    firstName: String
    lastName: String
    email: String
    password: String
    address: String
    phoneNumber: String
  }

  input CreateUserInput {
    firstName: String!
    lastName: String!
    email: String!
    phoneNumber: String
    address: String
    password: String!
  }

  type Auth {
    token: String
    user: User
  }

  type Query {
    users: [User]
  }

  type Mutation {
    createUser(input: CreateUserInput!): User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
  }
`;

export default userSchema;
