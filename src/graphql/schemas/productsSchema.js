import { gql } from 'apollo-server-express';

const productsSchema = gql`
  type Product {
    id: Int
    title: String
    images: [String]
  }

  type Query {
    products: [Product]
  }
`;

export default productsSchema;