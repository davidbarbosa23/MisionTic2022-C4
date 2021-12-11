<template>
  <nav>
    <router-link class="nav-item" to="/">Inicio</router-link>
    <router-link class="nav-item" to="/paquetes">Planes</router-link>
    <router-link class="nav-item" to="/contacto">Contáctanos</router-link>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  components: {},
  data() {
    return {};
  },
};
</script>

<style scoped>
.nav-item {
  padding: 0.3rem 0.8rem;
  outline: none;
}
.nav-item:not(:last-child) {
  border-right: 1px solid var(--color-primary);
}
/* .nav-item.router-link-exact-active, */
.nav-item:hover {
  color: var(--color-primary);
}
</style>
