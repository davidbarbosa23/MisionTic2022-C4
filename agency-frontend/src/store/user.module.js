import UserService from '../services/user.service';

const initialState = { info: {}, list: [] };

export const user = {
  namespaced: true,
  state: initialState,
  actions: {
    getUser({ commit }, id) {
      return UserService.getUserById(id).then(
        ({ data }) => {
          commit('setUser', data.user);
          return Promise.resolve(data.user);
        },
        (error) => {
          console.log('getUser', error);
          return Promise.reject(error);
        }
      );
    },
    getUserList({ commit }) {
      return UserService.getUserList().then(
        ({ data }) => {
          commit('setUserList', data.users);
          return Promise.resolve(data.users);
        },
        (error) => {
          console.log('getUserList', error);
          return Promise.reject(error);
        }
      );
    },
  },
  mutations: {
    setUser(state, user) {
      state.info = user;
      state.list = null;
    },
    setUserList(state, userList) {
      state.list = userList;
    },
  },
};
