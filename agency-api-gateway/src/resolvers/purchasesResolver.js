import { AuthenticationError, ForbiddenError } from 'apollo-server';

export default {
  Query: {
    purchase: async (_, { purchaseId }, { dataSources, user }) => {
      if (!user?.is_admin) throw new ForbiddenError('User not able to perform this request');

      const purchase = await dataSources.purchasesAPI.getById(purchaseId);
      purchase.user = await dataSources.authUsersAPI.getById(purchase.user);
      purchase.pack = await dataSources.packsAPI.getById(purchase.pack);
      return purchase;
    },
    purchases: (_, __, { dataSources, user }) => {
      if (!user?.is_admin) throw new ForbiddenError('User not able to perform this request');
      return dataSources.purchasesAPI.getPurchases();
    },
    purchasesByUser: (_, { userId }, { dataSources, user }) => {
      if (!user?.is_admin && user?.id !== userId)
        throw new ForbiddenError('User not able to perform this request');
      return dataSources.purchasesAPI.getByUserId(userId);
    },
  },
  Mutation: {
    createPurchase: (_, { purchaseInput }, { dataSources, token }) => {
      if (!token) throw new AuthenticationError('You need to have an active session');
      return dataSources.purchasesAPI.create(purchaseInput);
    },
    // updatePurchase: (_, { purchaseInput }, { dataSources, user }) => {
    //   if (user?.is_admin) return dataSources.purchasesAPI.update(purchaseInput);
    //   throw new ForbiddenError('User not able to perform this request');
    // },
    // deletePurchase: (_, { purchaseId }, { dataSources, user }) => {
    //   if (user?.is_admin) return dataSources.purchasesAPI.delete(purchaseId);
    //   throw new ForbiddenError('User not able to perform this request');
    // },
  },
};
