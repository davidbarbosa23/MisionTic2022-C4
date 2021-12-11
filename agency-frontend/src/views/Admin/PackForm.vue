<template>
  <section>
    <h2>{{ isEdit ? 'Editar' : 'Crear' }} Paquete</h2>
    <form v-on:submit.prevent="handleSubmit">
      <div class="input">
        <label for="title">Título</label>
        <input
          id="title"
          type="text"
          v-model="pack.title"
          placeholder="Viaje a ..."
          :disabled="loading"
        />
      </div>
      <div class="input">
        <label for="password">Descripción</label>
        <textarea
          id="description"
          v-model="pack.description"
          placeholder="Descripción del paquete"
          :disabled="loading"
        />
      </div>
      <div class="input-group">
        <div class="input">
          <label for="price">Precio</label>
          <input
            id="price"
            type="number"
            v-model="pack.price"
            placeholder="500000"
            :disabled="loading"
          />
        </div>
        <div class="input">
          <label for="discount">Descuento (%)</label>
          <input
            id="discount"
            type="text"
            v-model="pack.discount"
            placeholder="10"
            :disabled="loading"
          />
        </div>
      </div>
      <div class="input-group">
        <div class="input">
          <label for="country">País</label>
          <input
            id="country"
            type="text"
            v-model="pack.country"
            placeholder="Colombia"
            :disabled="loading"
          />
        </div>
        <div class="input">
          <label for="imageUrl">Imagen (URL)</label>
          <input
            id="imageUrl"
            type="text"
            v-model="pack.imageUrl"
            placeholder="https://cdn.pixabay.com/photo..."
            :disabled="loading"
          />
        </div>
      </div>
      <p v-if="message" class="error">{{ message }}</p>
      <div class="input-group">
        <router-link class="button secondary" to="/admin/paquetes" :disabled="loading">
          Cancelar
        </router-link>
        <button class="button" type="submit" :disabled="loading">
          {{ isEdit ? 'Actualizar' : 'Añadir' }}
        </button>
      </div>
    </form>
  </section>
</template>
<script>
export default {
  name: 'AdminPackForm',
  components: {},
  data() {
    return {
      isEdit: false,
      pack: {
        title: '',
        description: '',
        price: 100000,
        isActive: true,
        discount: 0,
        country: 'Colombia',
        imageUrl: 'https://cdn.pixabay.com/photo/2017/01/05/16/57/girl-1955797_960_720.jpg',
      },
      message: '',
      loading: false,
      successful: null,
    };
  },
  computed: {
    isAdmin() {
      return this.$store.state.user.info?.is_admin;
    },
  },
  watch: {
    isAdmin() {
      if (!this.isAdmin) this.$router.push('/perfil');
    },
  },
  mounted() {
    const packId = this.getUrlId();
    if (packId) {
      this.isEdit = true;
      this.getPack(packId);
    }
  },
  methods: {
    getUrlId() {
      return this.$route.params.id;
    },
    getPack(id) {
      this.$store.dispatch('pack/getPack', id).then((pack) => {
        this.pack = pack;
      });
    },
    handleSubmit() {
      this.message = '';
      this.successful = false;
      this.loading = true;
      this.$store.dispatch(`pack/${this.isEdit ? 'update' : 'create'}Pack`, this.pack).then(
        (data) => {
          this.message = `Paquete ${this.isEdit ? 'actualizado' : 'añadido'} exitosamente`;
          this.successful = true;
          this.$store.dispatch('pack/getPacks');
          setTimeout(() => this.$router.push('/admin/paquetes'), 2000);
        },
        (error) => {
          this.message =
            error.response?.data?.message ||
            error.response?.data?.detail ||
            error.message ||
            error.toString();
          this.successful = false;
          this.loading = false;
        }
      );
    },
  },
};
</script>
<style scoped>
h2 {
  text-align: center;
}

section {
  padding: 1rem;
}
form {
  padding: 1.6rem;
  border-radius: calc(5px * var(--ratio));
  box-shadow: var(--box-shadow-big);
  margin: 0 auto 2rem;
  max-width: 46em;
  display: flex;
  flex-direction: column;
  background: white;
  gap: 1.6rem;
}
.input {
  display: flex;
  flex-direction: column;
}

.input-group {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20em, 1fr));
  gap: 1rem;
}

label,
h6 {
  padding: 0.2rem 0.4rem;
}

input,
textarea {
  padding: 0.8rem;
  border-radius: calc(3px * var(--ratio));
  border: 1px solid var(--color-primary);
}

.button {
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
.button.secondary {
  border-color: var(--color-primary);
  color: var(--color-primary);
  background: transparent;
}
.error {
  color: var(--color-secondary);
  text-align: center;
  margin: 0;
}
</style>
