<template>
  <section>
    <h2>Paquetes Vendidos</h2>
    <table id="packListSold">
      <thead>
        <tr>
          <th>Paquete</th>
          <th>Fecha de Compra</th>
          <th>Valor</th>
          <th>Usuario</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(purchase, index) in rows" :key="index">
          <td>{{ purchase?.pack }}</td>
          <td>{{ moment(purchase?.created_at).format('MMM Do YY - H:mm') }}</td>
          <td>{{ purchase?.total }}</td>
          <td>{{ purchase?.user }}</td>
        </tr>
      </tbody>
    </table>
  </section>
</template>
<script>
import { mapState } from 'vuex';
import moment from 'moment';
export default {
  name: 'AdminPurchaseList',
  components: {},

  computed: mapState({
    rows: ({ purchase, pack, user }) =>
      purchase.purchases.map((purch) => {
        purch.pack = pack.list.find(({ _id }) => _id === purch.pack)?.title || purch.pack;
        purch.user = user.list.find(({ id }) => id === purch.user)?.username || purch.user;
        return purch;
      }),
  }),
  mounted() {
    this.$store.dispatch('pack/getPacks');
    this.$store.dispatch('user/getUserList');
    this.$store.dispatch('purchase/getPurchases');
  },
  methods: {
    moment,
  },
};
</script>

<style scoped>
h2 {
  text-align: center;
}

section {
  padding: 1rem;
  max-width: 70em;
  margin: 0 auto;
}
table {
  width: 100%;
  border-collapse: collapse;
  border-style: hidden;
  border-radius: calc(5px * var(--ratio));
  box-shadow: 0 0 0 1px var(--color-gray);
}
table td,
table th {
  padding: 0.5rem;
}
table tr:nth-child(even) td {
  background-color: var(--color-gray);
}
table tr:hover td {
  background-color: var(--color-primary-aux);
  color: var(--text-color-light);
}
table th {
  padding-top: 0.8rem;
  padding-bottom: 0.8rem;
  text-align: left;
  background-color: var(--color-primary);
  color: var(--text-color-light);
}
table thead th:first-child {
  border-top-left-radius: calc(5px * var(--ratio));
}
table thead th:last-child {
  border-top-right-radius: calc(5px * var(--ratio));
}
table tbody tr:last-child td:first-child {
  border-bottom-left-radius: calc(5px * var(--ratio));
}
table tbody tr:last-child td:last-child {
  border-bottom-right-radius: calc(5px * var(--ratio));
}
</style>
