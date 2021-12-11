import PurchaseService from '../services/purchase.service';

const initialState = {
  purchases: [],
  userPurchases: [],
};

export const purchase = {
  namespaced: true,
  state: initialState,
  actions: {
    getPurchases({ commit }) {
      return PurchaseService.getPurchaseList().then(
        ({ data }) => {
          commit('setPurchases', data.purchases);
          return Promise.resolve(data.purchases);
        },
        (error) => {
          console.log('getPurchases', error);
          return Promise.reject(error);
        }
      );
    },
    getPurchase({ commit }, id) {
      return PurchaseService.getpurchaseById(id).then(
        ({ data }) => Promise.resolve(data.purchase),
        (error) => {
          console.log('getPurchase', error);
          return Promise.reject(error);
        }
      );
    },
    getUserPurchases({ commit }, userId) {
      return PurchaseService.getpurchaseByUserId(userId).then(
        ({ data }) => {
          commit('setUserPurchases', data.purchasesByUser);
          return Promise.resolve(data.purchasesByUser);
        },
        (error) => {
          console.log('getUserPurchases', error);
          return Promise.reject(error);
        }
      );
    },
    createPurchase({ commit }, purchase) {
      return PurchaseService.createPurchase(purchase).then(
        ({ data }) => Promise.resolve(data.createPurchase),
        (error) => {
          console.log('createPurchase', error);
          return Promise.reject(error);
        }
      );
    },
  },
  mutations: {
    setPurchases(state, purchases) {
      state.purchases = purchases;
    },
    setUserPurchases(state, purchases) {
      state.userPurchases = purchases;
    },
  },
};
