import { gql } from 'apollo-server';

export default gql`
  input PurchaseCreateInput {
    user: Int!
    pack: String!
    total: Float!
    buyer_id: Int!
    buyer_card: Float!
    buyer_card_name: String!
    buyer_card_due_date: String!
    buyer_card_cvv: Int!
  }
  type PurchaseDetail {
    id: Int!
    user: Int!
    pack: String!
    total: Float!
    buyer_id: Float!
    buyer_card: Float!
    buyer_card_name: String!
    buyer_card_due_date: String!
    buyer_card_cvv: Int!
    created_at: String!
  }
  type PurchaseDetailExtended {
    id: Int!
    user: UserDetail!
    pack: PackDetail!
    total: Float!
    buyer_id: Int!
    buyer_card: Float!
    buyer_card_name: String!
    buyer_card_due_date: String!
    buyer_card_cvv: Int!
    created_at: String!
  }
  type Mutation {
    createPurchase(purchaseInput: PurchaseCreateInput!): PurchaseDetail
    # updatePurchase(purchaseInput: PurchaseCreateInput!): PurchaseDetail
    # deletePurchase(purchaseId: String!): String
  }
  type Query {
    purchase(purchaseId: Int!): PurchaseDetailExtended
    purchases: [PurchaseDetail]!
    purchasesByUser(userId: Int!): [PurchaseDetail]!
  }
`;
