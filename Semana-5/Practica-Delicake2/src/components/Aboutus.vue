<template>
    <div class="nosotros">
      <h1>Sobre nosotros</h1>
    </div>

    <div class="ubicacion">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3813.9748184832497!2d-96.71338008563558!3d17.073884388267288!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85c72238bc452bf7%3A0xe9ef7b055484c848!2sPasteler%C3%ADa%20ROME!5e0!3m2!1ses-419!2smx!4v1646351865927!5m2!1ses-419!2smx"
        width="1140"
        height="270"
        style="border: 0"
        allowfullscreen=""
        loading="lazy"
      ></iframe>
    </div>

    <div class="container">
      <div class="direccion">
        <h2>Dirección</h2>
        <p>{{ direccion }}</p>
      </div>

      <div class="telefono">
        <h2>Teléfono</h2>
        <p>{{ telefono }}</p>
      </div>

      <div class="horario">
        <h2>Horarios de atención</h2>
        <p>{{ horario1 }}</p>
        <p>{{ horario2 }}</p>
      </div>
    </div>
    <br>
    <br>
</template>

<script>
export default {
  name: 'Aboutus',
  props: {
    direccion: String,
    telefono: String,
    horario1: String,
    horario1: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.nosotros{
    text-align: center;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 80%;
}

.ubicacion{
    padding-left: 5%;
}

.container{
    overflow: hidden;
    padding-top: 2%;
}

.direccion, .telefono , .horario{
    float: left; 
    padding-left: 8%;
    text-align: center;
    font-weight: bold;
    font-family: Arial, Helvetica, sans-serif;
}

</style>
