import { gql } from 'apollo-server-express';

const productsSchema = gql`
  type Dimensions {
    width: Float!
    height: Float!
    depth: Float!
  }

  type Review {
    rating: Int!
    comment: String!
    date: String!
    reviewerName: String!
    reviewerEmail: String!
  }

  type Meta {
    createdAt: String!
    updatedAt: String!
    barcode: String!
    qrCode: String!
  }

  type Product {
    id: Int
    title: String
    description: String
    category: String
    price: Float
    discountPercentage: Float
    rating: Float
    stock: Int
    tags: [String]
    brand: String
    sku: String
    weight: Float
    dimensions: Dimensions
    warrantyInformation: String
    shippingInformation: String
    availabilityStatus: String
    reviews: [Review]
    returnPolicy: String
    minimumOrderQuantity: Int
    meta: Meta
    images: [String]
    thumbnail: String
  }

  type Query {
    products(page: Int, category: String): [Product]
  }
`;

export default productsSchema;
