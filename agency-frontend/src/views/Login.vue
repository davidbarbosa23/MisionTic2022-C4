<template>
  <section>
    <h2>Iniciar Sesión</h2>
    <form v-on:submit.prevent="handleLogin">
      <div class="input">
        <label for="username">Usuario</label>
        <input
          id="username"
          type="text"
          v-model="user.username"
          placeholder="UsuarioGenial1"
          :disabled="loading"
        />
      </div>
      <div class="input">
        <label for="password">Contraseña</label>
        <input
          id="password"
          type="password"
          v-model="user.password"
          placeholder="123!abc"
          :disabled="loading"
        />
      </div>
      <p v-if="message" class="error">{{ message }}</p>
      <button type="submit" :disabled="loading">Ingresar</button>
    </form>
  </section>
</template>
<script>
export default {
  name: 'Login',
  components: {},
  data() {
    return {
      user: {
        username: '',
        password: '',
      },
      loading: false,
      message: '',
    };
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
  },
  created() {
    if (this.loggedIn) {
      this.$router.push('/perfil');
    }
  },
  methods: {
    handleLogin() {
      this.loading = true;
      this.$store.dispatch('auth/login', this.user).then(
        ({ id }) => {
          this.$store.dispatch('user/getUser', id);
          this.$router.push('/perfil');
        },
        (error) => {
          this.loading = false;
          this.message =
            error.response?.data?.message ||
            error.response?.data?.detail ||
            error.message ||
            error.toString();
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
  max-width: 24em;
  margin: 0 auto 2rem;
  display: flex;
  flex-direction: column;
  background: white;
  gap: 1.6rem;
}
.input {
  display: flex;
  flex-direction: column;
}

label {
  padding: 0.2rem 0.4rem;
}

input {
  padding: 0.8rem;
  border-radius: calc(3px * var(--ratio));
  border: 1px solid var(--color-primary);
}

button {
  align-self: end;
  border: 0;
  background: var(--color-primary);
  color: var(--text-color-light);
  padding: 0.5rem 1rem;
  text-align: center;
  border-radius: calc(3px * var(--ratio));
}
.error {
  color: var(--color-secondary);
  text-align: center;
  margin: 0;
}
</style>
