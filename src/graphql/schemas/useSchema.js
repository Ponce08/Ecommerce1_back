import { gql } from 'apollo-server-express';

const userSchema = gql`
  type User {
    id: Int
    name: String
    email: String
    password: String
    address: String
    phone: String
  }

  type Query {
    users: [User]
  }
`;

export default userSchema;
