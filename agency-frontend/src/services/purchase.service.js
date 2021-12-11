import { apolloClient } from './apolloProvider';

import PurchaseById from '@/graphql/PurchaseById.gql';
import PurchaseByUser from '@/graphql/PurchaseByUser.gql';
import PurchaseCreate from '@/graphql/PurchaseCreate.gql';
import PurchaseList from '@/graphql/PurchaseList.gql';

class PurchaseService {
  getPurchaseList() {
    return apolloClient.query({
      query: PurchaseList,
    });
  }

  getpurchaseById(id) {
    return apolloClient.query({
      query: PurchaseById,
      variables: {
        purchaseId: id,
      },
    });
  }

  getpurchaseByUserId(id) {
    return apolloClient.query({
      query: PurchaseByUser,
      variables: {
        userId: id,
      },
    });
  }

  createPurchase(purchase) {
    return apolloClient.mutate({
      mutation: PurchaseCreate,
      variables: {
        purchaseInput: purchase,
      },
    });
  }
}

export default new PurchaseService();
