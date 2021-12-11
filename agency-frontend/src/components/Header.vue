<template>
  <header>
    <Logo />
    <Navbar />
    <Dropdown :items="UserOptions" :key="$store.state.auth.user" />
  </header>
</template>

<script>
import EventBus from '@/common/EventBus';

import Logo from '@/components/Logo';
import Navbar from '@/components/Navbar';
import Dropdown from '@/components/Dropdown';

export default {
  name: 'Header',
  components: {
    Dropdown,
    Navbar,
    Logo,
  },
  computed: {
    UserOptions() {
      return [
        {
          title: 'Paquetes',
          to: '/admin/paquetes',
          icon: 'playlist-plus',
          show: this.$store.state.auth.user && this.$store.state.user.info?.is_admin,
        },
        {
          title: 'Compras',
          to: '/admin/compras',
          icon: 'playlist-star',
          show: this.$store.state.auth.user && this.$store.state.user.info?.is_admin,
        },
        {
          title: 'Usuarios',
          to: '/admin/usuarios',
          icon: 'account-group',
          show: this.$store.state.auth.user && this.$store.state.user.info?.is_admin,
        },
        {
          divisor: true,
          show: this.$store.state.auth.user && this.$store.state.user.info?.is_admin,
        },
        {
          title: 'Login',
          to: '/ingreso',
          icon: 'account',
          show: !this.$store.state.auth.user,
        },
        {
          title: 'Registro',
          to: '/registro',
          icon: 'account-plus',
          show: !this.$store.state.auth.user,
        },
        {
          title: 'Mi Perfil',
          to: '/perfil',
          icon: 'account-details',
          show: this.$store.state.auth.user,
        },
        {
          title: 'Logout',
          onClick: this.logOut,
          icon: 'logout',
          show: this.$store.state.auth.user,
        },
      ].filter((option) => option.show);
    },
  },

  methods: {
    logOut() {
      this.$store.dispatch('auth/logout');
      this.$router.push('/ingreso');
    },
  },
  mounted() {
    EventBus.on('logout', () => {
      this.logOut();
    });
  },
  beforeUnmount() {
    EventBus.remove('logout');
  },
};
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.2em;
  gap: 1em;
}
</style>
