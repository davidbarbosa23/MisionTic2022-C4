import { gql } from 'apollo-server';

export default gql`
  input PackCreateInput {
    title: String!
    description: String!
    price: Float!
    discount: Int
    country: String
    imageUrl: String
  }
  type PackDetail {
    _id: String!
    title: String!
    description: String!
    price: Float!
    isActive: Boolean!
    discount: Int!
    country: String!
    imageUrl: String!
    createdAt: String!
    modifiedAt: String!
  }
  type Mutation {
    createPack(packInput: PackCreateInput!): PackDetail
    updatePack(packId: String!, packInput: PackCreateInput!): PackDetail
    updatePackStatus(packId: String!, isActive: Boolean!): PackDetail
    deletePack(packId: String!): String
  }
  type Query {
    pack(packId: String!): PackDetail
    packs: [PackDetail]!
  }
`;
