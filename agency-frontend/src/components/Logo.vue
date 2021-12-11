<template>
  <router-link class="logo" to="/">
    <mdicon class="img" size="50" name="Island" />
    <span>Package Travel</span>
  </router-link>
</template>
<script>
export default {
  name: 'logo',
};
</script>

<style scoped>
.logo {
  display: flex;
  align-items: center;
  position: relative;
  max-width: 14rem;
  gap: 1rem;
  outline: none;
}

span {
  text-align: center;
  margin: 0;
  font-size: 1.2rem;
  line-height: 1.2;
}

.img {
  display: block;
  padding: 0;
  border-radius: calc(4px * var(--ratio));
  border: 2px solid var(--color-primary);
  height: 54px;
  width: 54px;
}

.img {
  color: var(--color-primary);
}
</style>
