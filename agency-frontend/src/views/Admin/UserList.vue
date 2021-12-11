<template>
  <section>
    <h2>Usuarios Registrados</h2>
    <table id="UserList">
      <thead>
        <tr>
          <th>Primer Nombre</th>
          <th>Primer Apellido</th>
          <th>Correo Electrónico</th>
          <th>Usuario</th>
          <th>F.Nacimiento</th>
          <th>País</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(user, index) in rows" :key="index">
          <td>{{ user?.first_name }}</td>
          <td>{{ user?.last_name }}</td>
          <td>{{ user?.email }}</td>
          <td>{{ user?.username }}</td>
          <td>{{ user?.birth_day }}</td>
          <td>{{ user?.country }}</td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: 'AdminUserList',
  components: {},
  props: {},
  computed: mapState({ rows: (state) => state.user.list }),
  mounted() {
    this.$store.dispatch('user/getUserList');
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
