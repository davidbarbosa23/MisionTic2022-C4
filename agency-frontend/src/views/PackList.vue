<template>
  <PacksList :packs="packs" title="Nuestros Planes" />
</template>
<script>
import { mapState } from 'vuex';
import PacksList from '@/components/PacksList.vue';

export default {
  name: 'PackList',
  components: {
    PacksList,
  },
  computed: mapState({
    packs: (state) => state.pack.list,
  }),
  created() {
    this.$store.dispatch('pack/getPacks');
  },
};
</script>
