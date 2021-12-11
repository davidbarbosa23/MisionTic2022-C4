<template>
  <Splide :options="options">
    <SplideSlide class="slide-item" v-for="(slide, index) in slides" :key="index">
      <img :src="slide.image" :alt="slide.title" />
      <div>
        <h2>{{ slide.title }}</h2>
      </div>
    </SplideSlide>
  </Splide>
</template>
<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HomeSlider',

  components: {
    Splide,
    SplideSlide,
  },

  props: {
    slides: {
      type: Array,
      default: [
        {
          image: 'https://cdn.pixabay.com/photo/2016/10/22/18/52/beach-1761410_960_720.jpg',
          title: 'El descanso que mereces',
        },
        {
          image: 'https://cdn.pixabay.com/photo/2014/08/12/00/01/santorini-416136_960_720.jpg',
          title: 'Descubre el mundo con nosotros',
        },
        {
          image: 'https://cdn.pixabay.com/photo/2017/05/31/16/24/port-2360861_960_720.jpg',
          title: 'Destinos increíbles',
        },
      ],
    },
  },

  setup() {
    const options = {
      rewind: true,
      gap: '1rem',
    };

    return { options };
  },
});
</script>
<style scoped>
.slide-item {
  position: relative;
  min-height: 25rem;
  max-height: 50vh;
  overflow: hidden;
}

.slide-item > div {
  position: absolute;
  top: 50%;
  left: 50%;
  max-width: 40em;
  transform: translate(-50%, -50%);
  background: rgba(var(--color-light-rgb), 0.8);
  padding: 1.6rem;
  border-radius: calc(5px * var(--ratio));
  box-shadow: var(--box-shadow-big);
}
.slide-item h2 {
  margin: 0;
  text-align: center;
  font-weight: 800;
}
.slide-item > img {
  position: absolute;
  width: 100%;
  top: 50%;
  transform: translateY(-50%);
}
</style>
