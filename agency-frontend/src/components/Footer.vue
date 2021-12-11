<template>
  <div class="footer">
    <div class="foot-izq">
      <div id="nav">
        <router-link to="/">Home</router-link>
        <br />
        <router-link to="/paquetes">Paquetes</router-link>

        <br />
        <router-link to="/contacto">Contactenos</router-link>
      </div>
    </div>

    <div class="foot-center">
      Vigilado por:
      <br />
      <img src="../assets/Anato.png" alt="Anato" />
      <img src="../assets/aerocivil.png" alt="aerocivil" />
      <img src="../assets/industriaComercio.png" alt="industriaComercio" />
      <img src="../assets/iata.png" alt="iata" />
      <img src="../assets/transporte.png" alt="transporte" />
      <br />
      <br />

      Copyrigth 2021, Todos los derechos reservados
    </div>

    <div class="foot-der">
      <ul class="no-dot l-padding-0 font-weight-200">
        <li>
          Encuentre mas de nosotros:
          <br />

          <a href="https://facebook.com/"> <mdicon name="facebook" /></a>&nbsp;
          <a href="https://twitter.com/"> <mdicon name="twitter" /></a>&nbsp;
          <a href="https://www.youtube.com/"> <mdicon name="youtube" /></a>&nbsp;
          <a href="https://www.linkedin.com/"> <mdicon name="linkedin" /></a>
        </li>

        <br />
      </ul>
    </div>
  </div>
</template>

<script>
import { mdiTwitter } from '@mdi/js';

export default {
  methods: {},
  name: 'Footer',
  components: {
    mdiTwitter,
  },
};
</script>

<style scoped>
.footer {
  padding: 3em 30px 5em;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: space-between;
  place-items: center;
  background-color: #ffffff;
  width: 100%;
  height: max-content;
  color: #000000;
}

.foot-izq {
  padding: 10px;
  text-align: left;
  font-size: 25px;
}

.foot-center {
  padding: 10px;
  text-align: center;
}

.foot-der {
  padding: 10px;
  text-align: center;
  justify-content: center;
}
</style>
