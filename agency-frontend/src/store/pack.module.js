import PackService from '../services/pack.service';

const initialState = {
  list: [],
  home: [],
};

export const pack = {
  namespaced: true,
  state: initialState,
  actions: {
    getPacks({ commit }) {
      return PackService.getPackList().then(
        ({ data }) => {
          commit('setPacks', data.packs);
          return Promise.resolve(data.packs);
        },
        (error) => {
          console.log('getPacks', error);
          return Promise.reject(error);
        }
      );
    },
    getPacksHome({ commit }, limit = 3) {
      return PackService.getPackList({ limit }).then(
        ({ data }) => {
          commit('setPacksHome', data.packs.slice(0, 3));
          return Promise.resolve(data.packs.slice(0, 3));
        },
        (error) => {
          console.log('getPacksHome', error);
          return Promise.reject(error);
        }
      );
    },
    getPack({ commit }, id) {
      return PackService.getPackById(id).then(
        ({ data }) => Promise.resolve(data.pack),
        (error) => {
          console.log('getPack', error);
          return Promise.reject(error);
        }
      );
    },
    createPack({ commit }, pack) {
      return PackService.createPack(pack).then(
        ({ data }) => Promise.resolve(data),
        (error) => {
          console.log('createPack', error);
          return Promise.reject(error);
        }
      );
    },
    updatePack({ commit }, pack) {
      return PackService.updatePack(pack).then(
        ({ data }) => Promise.resolve(data),
        (error) => {
          console.log('updatePack', error);
          return Promise.reject(error);
        }
      );
    },
    updatePackStatus({ commit }, pack) {
      return PackService.updatePackStatus(pack).then(
        ({ data }) => Promise.resolve(data),
        (error) => {
          console.log('updatePackStatus', error);
          return Promise.reject(error);
        }
      );
    },
    deletePack({ commit }, id) {
      return PackService.deletePack(id).then(
        ({ data }) => Promise.resolve(data),
        (error) => {
          console.log('deletePack', error);
          return Promise.reject(error);
        }
      );
    },
  },
  mutations: {
    setPacks(state, packs) {
      state.list = packs;
    },
    setPacksHome(state, packs) {
      state.home = packs;
    },
  },
};
