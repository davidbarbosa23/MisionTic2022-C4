import { createStore } from 'vuex';
import { auth } from './auth.module';
import { pack } from './pack.module';
import { purchase } from './purchase.module';
import { user } from './user.module';

const store = createStore({
  modules: {
    auth,
    pack,
    purchase,
    user,
  },
});

export default store;
