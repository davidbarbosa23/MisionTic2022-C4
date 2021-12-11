<template>
  <section>
    <h2>Crear Usuario</h2>
    <form v-on:submit.prevent="handleRegister">
      <h6>Cuenta</h6>
      <div class="input-group">
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
      </div>
      <h6>Datos de usuario</h6>
      <div class="input-group">
        <div class="input">
          <label for="first_name">Nombre</label>
          <input
            id="first_name"
            type="text"
            v-model="user.first_name"
            placeholder="Daniela"
            :disabled="loading"
          />
        </div>
        <div class="input">
          <label for="last_name">Apellido</label>
          <input
            id="last_name"
            type="text"
            v-model="user.last_name"
            placeholder="Ruiz"
            :disabled="loading"
          />
        </div>
      </div>
      <div class="input-group">
        <div class="input">
          <label for="email">Email</label>
          <input
            id="email"
            type="email"
            v-model="user.email"
            placeholder="correo@correo.com"
            :disabled="loading"
          />
        </div>
        <div class="input">
          <label for="country">País</label>
          <input
            id="country"
            type="text"
            v-model="user.country"
            placeholder="Colombia"
            :disabled="loading"
          />
        </div>
      </div>
      <p v-if="message" class="error">{{ message }}</p>
      <button type="submit" :disabled="loading">Registrarse</button>
    </form>
  </section>
</template>
<script>
export default {
  name: 'Register',
  components: {},
  data() {
    return {
      user: {
        username: '',
        password: '',
        first_name: '',
        last_name: '',
        email: '',
        country: '',
      },
      message: '',
      loading: false,
      successful: null,
    };
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
  },
  mounted() {
    if (this.loggedIn) {
      this.$router.push('/perfil');
    }
  },
  methods: {
    handleRegister() {
      this.message = '';
      this.successful = false;
      this.loading = true;
      this.$store.dispatch('auth/register', this.user).then(
        (data) => {
          this.message = 'Registro Exitoso';
          this.successful = true;
          setTimeout(() => this.$router.push('/ingreso'), 2000);
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
