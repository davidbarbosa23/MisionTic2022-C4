<template>
  <h2>Mis Paquetes</h2>
  <div class="frame">
    <div class="user-frame">
      <div class="frame-center">
        <a><mdicon name="account-circle" width="50" height="50" /></a>
        {{ user.first_name }} {{ user.last_name }}
      </div>

      <div class="frame-center2">Email: {{ user.email }}</div>
      <div class="frame-der">
        <ul class="no-dot l-padding-0 font-weight-200">
          <li>Compras Totales: {{ purchases.length }}</li>
        </ul>
      </div>
    </div>
  </div>
  <PacksList v-if="purchases.length" :packs="purchases" title="Mis Compras" profile />
</template>

<script>
import { mapState } from 'vuex';
import PacksList from '@/components/PacksList.vue';

export default {
  name: 'Profile',
  components: {
    PacksList,
  },
  computed: mapState({
    user: ({ user }) => user.info,
    purchases: (state) =>
      state.purchase.userPurchases.map(
        ({ pack }) => state.pack.list.find(({ _id }) => _id === pack) || {}
      ),
  }),
  mounted() {
    this.$store.dispatch('pack/getPacks');
    this.$store.dispatch('user/getUser', this.$store.state.auth.user.id);
    this.$store.dispatch('purchase/getUserPurchases', this.$store.state.auth.user.id);
  },
};
</script>

<style scoped>
h2 {
  text-align: center;
}

.frame {
  width: 80;
  display: grid;
  justify-content: center;
  margin-bottom: 1rem;
}

.user-frame {
  padding: 15px 80px 15px;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 2fr 1.5fr 1fr;
  justify-items: center;
  place-items: center;
  background-color: #ffffff;
  width: 100%;
  height: max-content;
  color: #000000;
  border: 1px solid rgb(30, 30, 30);
  justify-self: center;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
}

.frame-center {
  padding: 10px;
  text-align: center;
  justify-items: start;
  font-size: 20px;
  font-weight: bold;
}

.frame-center2 {
  padding: 10px;
  text-align: left;
}

.frame-der {
  padding: 10px;
  text-align: center;
  justify-content: center;
}
</style>
