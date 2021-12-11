<template>
  <section>
    <header>
      <h2>Paquetes</h2>
      <router-link class="button" to="/admin/paquete/crear">
        Añadir Paquete
        <mdicon name="file-plus" />
      </router-link>
    </header>
    <table>
      <thead>
        <tr>
          <th>Título</th>
          <th>Precio</th>
          <th>Descuento</th>
          <th>País</th>
          <th class="actions">Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(pack, index) in packs" :key="index">
          <td>{{ pack.title }}</td>
          <td>{{ pack.price }}</td>
          <td>{{ pack.discount }}</td>
          <td>{{ pack.country }}</td>
          <td>
            <div class="actions">
              <router-link class="button sm outline" :to="'/admin/paquete/' + pack._id">
                Editar
              </router-link>
              <button class="button sm danger" @click="() => deletePack(pack._id)">Eliminar</button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </section>
</template>
<script>
import { mapState } from 'vuex';
export default {
  name: 'AdminPackList',
  computed: {
    isAdmin() {
      return this.$store.state.user.info?.is_admin;
    },
    ...mapState({
      packs: (state) => state.pack.list,
    }),
  },
  watch: {
    isAdmin() {
      if (!this.isAdmin) this.$router.push('/perfil');
    },
  },
  methods: {
    getPacks() {
      this.$store.dispatch('pack/getPacks');
    },
    deletePack(id) {
      this.$store.dispatch('pack/deletePack', id).then(() => {
        this.getPacks();
      });
    },
  },
  mounted() {
    this.getPacks();
  },
};
</script>
<style scoped>
header {
  display: flex;
  margin: 3rem 0 1.38rem;
  align-items: center;
  justify-content: space-between;
}
h2 {
  margin: 0;
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

.button {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  align-self: end;
  border: 0;
  background: var(--color-primary);
  color: var(--text-color-light);
  padding: 0.5rem 1rem;
  text-align: center;
  border-radius: calc(3px * var(--ratio));
  line-height: 1;
  border: 1px solid transparent;
}
.button.sm {
  padding: 0.25rem 0.5rem;
}
.button.outline {
  border-color: var(--color-primary);
  color: var(--color-primary);
  background: var(--color-light);
}
.button.danger {
  background: var(--color-primary-aux);
  border-color: var(--color-primary-aux);
}
.button:hover {
  background: var(--color-primary);
  color: var(--text-color-light);
}

th.actions,
td .actions {
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
}
</style>
