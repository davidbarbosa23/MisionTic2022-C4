<template>
  <Header />
  <router-view />
  <Footer />
</template>
<script>
import TokenService from '@/services/token.service';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
export default {
  components: {
    Header,
    Footer,
  },
  mounted() {
    const userId = TokenService.getUserId();
    if (userId) this.$store.dispatch('user/getUser', userId);
  },
};
</script>
