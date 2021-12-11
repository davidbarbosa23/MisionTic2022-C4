<template>
  <h2>Comprar Paquete</h2>
  <section>
    <div class="pack">
      <img :src="pack?.imageUrl" alt="" />
      <h3>{{ pack?.title }}</h3>
      <p>{{ pack?.description }}</p>
    </div>
    <form class="purchase" v-on:submit.prevent="handleSubmit">
      <div class="input">
        <label for="username">Usuario</label>
        <input id="username" type="text" v-model="user.username" disabled />
      </div>
      <div class="input">
        <label for="price">Precio</label>
        <input id="price" type="number" v-model="pack.price" placeholder="500000" disabled />
      </div>
      <div class="input">
        <label for="buyer_id">Identificación</label>
        <input id="buyer_id" type="number" v-model="purchase.buyer_id" :disabled="loading" />
      </div>
      <div class="input">
        <label for="buyer_card">Número de Tarjeta</label>
        <input id="buyer_card" type="number" v-model="purchase.buyer_card" :disabled="loading" />
      </div>
      <div class="input">
        <label for="buyer_card_name">Nombre de la Tarjeta</label>
        <input
          id="buyer_card_name"
          type="text"
          v-model="purchase.buyer_card_name"
          :disabled="loading"
        />
      </div>
      <div class="input">
        <label for="buyer_card_due_date">Fecha de expiración</label>
        <input
          id="buyer_card_due_date"
          type="date"
          v-model="purchase.buyer_card_due_date"
          :disabled="loading"
        />
      </div>
      <div class="input">
        <label for="buyer_card_cvv">Código de seguridad</label>
        <input
          id="buyer_card_cvv"
          type="number"
          v-model="purchase.buyer_card_cvv"
          :disabled="loading"
        />
      </div>
      <p v-if="message" class="error">{{ message }}</p>
      <button class="button" type="submit" :disabled="loading">Comprar</button>
    </form>
  </section>
</template>
<script>
import { mapState } from 'vuex';
export default {
  name: 'Purchase',
  data() {
    return {
      pack: { price: 0 },
      purchase: {
        user: this.$store.state.auth?.user?.id,
        pack: null,
        total: '',
        buyer_id: 1010101010,
        buyer_card: 4111111111111111,
        buyer_card_name: 'Pepito Perez',
        buyer_card_due_date: '2023-10-08',
        buyer_card_cvv: 111,
      },
    };
  },
  computed: mapState({
    user: (state) => state?.user?.info || { username: '' },
  }),
  methods: {
    getUrlId() {
      this.purchase.pack = this.$route.params.id;
      return this.$route.params.id;
    },
    getPack() {
      this.$store.dispatch('pack/getPack', this.getUrlId()).then((pack) => {
        this.pack = pack;
        this.purchase.total = pack.price;
      });
    },
    handleSubmit() {
      this.message = '';
      this.successful = false;
      this.loading = true;
      this.$store.dispatch('purchase/createPurchase', this.purchase).then(
        (data) => {
          this.message = 'Paquete comprado exitosamente';
          this.successful = true;
          setTimeout(() => this.$router.push('/perfil'), 2000);
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
  created() {
    this.getPack();
  },
};
</script>
<style scoped>
h2 {
  text-align: center;
}
section {
  padding: 1rem;
  display: flex;
  gap: 1rem;
  margin: 0 auto;
  max-width: 70em;
}

.pack {
  max-width: 40em;
}

img {
  width: 100%;
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
  height: min-content;
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
