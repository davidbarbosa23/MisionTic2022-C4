<template>
  <img
    src="https://cdn.pixabay.com/photo/2017/07/15/09/41/call-center-2505953_960_720.jpg"
    class="img"
    alt=""

  />
  <div class="content">
    <div class="information">
      <article>
        <h3>Aprovecha nuestros descuentos de temporada</h3>
        <p>
          Disfruta nuestros paquetes, llevate un recuerdo para el resto de tu vida, póngase en contacto con
          nosotros diligenciando el siguiente formulario y uno de nuestros asesores especialistas se
          contactará en el menor tiempo posible.
        </p>
      </article>
    </div>
    <div>
      <h4>Teléfonos</h4>
      <p>
        Colombia: +57 601 3134089
        <br />
        USA: +1 (786) 2-345545
        <br />
        México:+52 (55) 41696655
        <br />
        Chile: +56 (2) 23684560
        <br />
        Perú: +51 (1) 641-913323
      </p>
    </div>
  </div>
  <GMapMap
    :center="{ lat: 4.6383904, lng: -74.0844193 }"
    :zoom="14"
    map-type-id="terrain"
    class="map"
  />
</template>

<script>
export default {
  name: 'Contact',
};
</script>
<style scoped>
article {
  padding: 3rem 1rem;
  margin: 0 auto;
  max-width: 50em;
}
article h3 {
  text-align: center;
  margin-top: 0;
}
article p {
  text-align: center;
}

.map {
  height: 20em;
  width: 100%;
}

.img {


  text-align: center;
  margin: 0 auto;
  width: 100%;
  background-color: #ffffff;
  color: #000000;
}
.content {
  padding: 3em 30px 5em;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: space-between;
  place-items: center;
  background-color: #ffffff;
  width: 100%;
  height: max-content;
  color: #000000;
}
</style>
