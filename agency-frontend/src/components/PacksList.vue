<template>
  <section>
    <h3>{{ title }}</h3>
    <div class="packs-container">
      <PackItem
        v-for="pack in packs"
        :key="pack._id"
        :url="pack.imageUrl"
        :title="pack.title"
        :description="pack.description"
        :_id="pack._id"
        :profile="profile"
      />
    </div>
  </section>
</template>

<script>
import PackItem from '@/components/PackItem.vue';

export default {
  name: 'PacksList',
  components: {
    PackItem,
  },
  props: {
    packs: {
      type: Array,
      default: [
        {
          _id: 1,
          title: 'Tour al Paris',
          description: 'Viaje para 2 personas',
          price: 5000000.0,
          isActive: true,
          discount: 10,
          country: 'Paris',
          imageUrl: 'https://cdn.pixabay.com/photo/2017/01/05/16/57/girl-1955797_960_720.jpg',
        },
        {
          _id: 2,
          title: 'Tour al Cancun',
          description: 'Viaje para 2 personas',
          price: 5000000.0,
          isActive: true,
          discount: 10,
          country: 'Paris',
          imageUrl: 'https://cdn.pixabay.com/photo/2014/08/15/11/29/beach-418742_960_720.jpg',
        },
      ],
    },
    title: { type: String, default: 'Planes Destacados' },
    profile: { type: Boolean, default: false },
  },
};
</script>
<style scoped>
section {
  padding: 3rem 1rem;
  margin: 0 auto;
  max-width: 70em;
}
section h3 {
  text-align: center;
  margin-top: 0;
  margin-bottom: 2rem;
}

.packs-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20em, 1fr));
  grid-gap: 2rem;
  justify-items: center;
  align-items: center;
}
</style>
