<template>
    <div class="contenedor">
      <div class="img1">
        <img
          src="https://images.pexels.com/photos/7363159/pexels-photo-7363159.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt="cumpleaños"
        />
      </div>

      <div class="formulario">
        <form action="">
          <h2>Realiza tu pedido</h2>
          <label for="nombre">Danos tu Nombre</label>
          <br />
          <input type="text" id="nombre" name="nombre" placeholder="Nombre" />
          <br /><br />

          <label for="telefono">Teléfono</label>
          <br />
          <input
            type="tel"
            id="telefono"
            name="telefono"
            placeholder="Teléfono"
          />
          <br /><br />

          <label for="nombre">Correo electrónico</label>
          <br />
          <input type="email" id="correo" name="correo" placeholder="Correo" />
          <br /><br />

          <label for="descripcion">Descripción del pastel</label>
          <br />
          <input
            type="text"
            id="descripcion"
            name="descripcion"
            placeholder="Descripción"
          />
          <br /><br />

          <p>¿Sabor del Pastel?</p>
          <input type="radio" id="fresa" name="pasteles" value="fresa" />
          <label for="fresa">Fresa</label>
          <br />
          <input
            type="radio"
            id="chocolate"
            name="pasteles"
            value="chocolate"
          />
          <label for="chocolate">Chocolate</label>
          <br />
          <input type="radio" id="vainilla" name="pasteles" value="vainilla" />
          <label for="vainilla">Vainilla</label>
          <br />
          <input type="radio" id="cajeta" name="pasteles" value="cajeta" />
          <label for="cajeta">Cajeta</label>
          <br />
          <input
            type="radio"
            id="zanahoria"
            name="pasteles"
            value="zanahoria"
          />
          <label for="zanahoria">Zanahoria</label>
          <br />
          <input type="radio" id="clasico" name="pasteles" value="clasico" />
          <label for="clasico">Clásico</label>
          <br />

          <p>¿Adornos?</p>
          <input type="checkbox" id="letrero" name="letrero" value="letrero" />
          <label for="letrero">Letrero Feliz Cumpleaños</label>
          <br />
          <input type="checkbox" id="vela" name="vela" value="vela" />
          <label for="vela">Paquete vela de Cumpleaños</label>
          <br />
          <input type="checkbox" id="frutas" name="frutas" value="frutas" />
          <label for="frutas">Mix de frutas</label>
          <br />
          <input type="checkbox" id="cerezas" name="cerezas" value="cerezas" />
          <label for="cerezas">Cerezas</label>
          <br />
          <input
            type="checkbox"
            id="chocolate"
            name="chocolate"
            value="chocolate"
          />
          <label for="chocolate">Chocolate</label>
          <br />
          <input type="checkbox" id="nuez" name="nuez" value="nuez" />
          <label for="nuez">Nuez</label>
          <br /><br />

          <input type="reset" class="limpiar"/>

          <input type="submit" class="enviar"/>

          <br /><br />
        </form>
      </div>

      <div class="img2">
        <img
          src="https://images.pexels.com/photos/6800138/pexels-photo-6800138.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt="img2"
        />
      </div>
    </div>
</template>

<script>
export default {
  name: 'Contacto',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

img{
    width: 350px;
    padding-left: 5px;
}

/*formulario*/
.img1, .img2, .formulario{
    float: left; 
}

.contenedor{
    overflow: hidden;
    padding-left: 2%;
    padding-top: 2%;
}

.formulario{
    display: flex;
    justify-content: center;
    font-size: large;
    padding-left: 10%;
    padding-right: 10%;
}

.formulario h2{
    text-align: center;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 160%;
    font-weight: bold;
}

.limpiar{
    background-color: royalblue;
    color: white;
    border-radius: 5%;
    font-size: 100%;
}

.enviar{
    background-color: darkgreen;
    color: white;
    border-radius: 5%;
    font-size: 100%;
    
}

</style>
