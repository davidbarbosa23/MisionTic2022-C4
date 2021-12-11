import { ApolloServer } from 'apollo-server';

import typeDefs from './typeDefs/index.js';
import resolvers from './resolvers/index.js';
import AuthUsersAPI from './dataSources/authUsersApi.js';
import PacksAPI from './dataSources/packsApi.js';
import PurchasesAPI from './dataSources/purchasesApi.js';

import authentication from './utils/authentication.js';

if (process.env.NODE_ENV !== 'production') import('dotenv').then((dotenv) => dotenv.config());

const server = new ApolloServer({
  context: authentication,
  typeDefs,
  resolvers,
  dataSources: () => ({
    authUsersAPI: new AuthUsersAPI(),
    packsAPI: new PacksAPI(),
    purchasesAPI: new PurchasesAPI(),
  }),
  introspection: true,
  playground: true,
});

server.listen(process.env.PORT || 4000).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
