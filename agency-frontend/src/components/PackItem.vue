<template>
  <router-link class="packitem" :to="`/paquete/${_id}`">
    <img :src="url" :alt="title" />
    <div class="description">
      <h4>{{ title }}</h4>
      <p>{{ description }}</p>
    </div>
    <span v-if="!profile" class="button">Ver más</span>
  </router-link>
</template>
<script>
export default {
  name: 'PackItem',
  props: {
    url: {
      type: String,
      default: 'https://cdn.pixabay.com/photo/2016/02/29/06/43/cancun-1228131_960_720.jpg',
    },
    title: {
      type: String,
      default: 'Viaje a Cancun',
    },
    description: {
      type: String,
      default: 'Viaje con toda la famila, todo incluido',
    },
    _id: {
      type: String,
      default: '61979eaf390c244342d111bc',
    },
    profile: { type: Boolean, default: false },
  },
};
</script>
<style scoped>
.packitem {
  position: relative;
  max-width: 20em;
  height: 28em;
  overflow: hidden;
  border-radius: calc(5px * var(--ratio));
  box-shadow: var(--box-shadow-big);
  transition: ease-in 0.1s;
}

.packitem:hover {
  transform: scale(1.1);
}

.packitem img {
  width: 110%;
  position: absolute;
  bottom: 50%;
  left: 50%;
  transform: translateX(-50%);
}
.packitem .description h4 {
  margin-top: 0.5rem;
  margin-bottom: 0.8rem;
  font-weight: 600;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
}

.packitem .description {
  position: relative;
  top: 50%;
  padding: 1rem;
  height: calc(50% - 3rem);
}
.packitem .description p {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}

.packitem .button {
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  color: white;
  background-color: var(--color-primary);
  text-decoration: none;
  margin-left: auto;
  display: block;
  padding: 0.5rem 1rem;
  text-align: center;
  border-radius: calc(3px * var(--ratio));
}
</style>
