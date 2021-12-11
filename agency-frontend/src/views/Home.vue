<template>
  <HomeSlider />
  <PacksList :packs="packs" />
  <HomeAbout />
  <GMapMap
    :center="{ lat: 4.6383904, lng: -74.0844193 }"
    :zoom="14"
    map-type-id="terrain"
    class="map"
  />
</template>

<script>
import { mapState } from 'vuex';

import HomeSlider from '@/components/HomeSlider.vue';
import PacksList from '@/components/PacksList.vue';
import HomeAbout from '@/components/HomeAbout.vue';

export default {
  name: 'Home',
  components: {
    HomeSlider,
    PacksList,
    HomeAbout,
  },
  computed: mapState({
    packs: (state) => state.pack.home,
  }),
  created() {
    this.$store.dispatch('pack/getPacksHome', 3);
  },
};
</script>
<style scoped>
.map {
  height: 20em;
  width: 100%;
}
</style>
