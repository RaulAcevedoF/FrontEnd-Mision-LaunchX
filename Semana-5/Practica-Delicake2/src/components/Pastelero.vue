<template>
     <h1 class="let">Cantidad de sabores disponibles</h1>
    <div class="seccion1">
      <table class="colapsado" border="1">
        <tr>
          <th>Sabor</th>
          <th>Cantidad</th>
          <th>Precio</th>
          <th>Estado</th>
        </tr>
        <tr>
          <td>Fresa</td>
          <td>4</td>
          <td>$345.00</td>
          <td>Disponible</td>
        </tr>
        <tr>
          <td>Chocolate</td>
          <td>5</td>
          <td>$380.00</td>
          <td>Disponible</td>
        </tr>
        <tr>
          <td>Vainilla</td>
          <td>2</td>
          <td>$250.00</td>
          <td>Disponible</td>
        </tr>
        <tr>
          <td>Cajeta</td>
          <td>6</td>
          <td>$380.00</td>
          <td>Disponible</td>
        </tr>
        <tr>
          <td>Zanahoria</td>
          <td>0</td>
          <td>$410.00</td>
          <td>inhabilitado</td>
        </tr>
        <tr>
          <td>Clásico</td>
          <td>5</td>
          <td>$410.00</td>
          <td>Disponible</td>
        </tr>
      </table>
    </div>

    <hr />
    <h1 class="let">Cantidad de adornos disponibles</h1>
    <div class="seccion2">
      <table class="colapsado" border="1">
        <tr>
          <th>Adorno</th>
          <th>Cantidad</th>
          <th>Precio</th>
          <th>Estado</th>
        </tr>
        <tr>
          <td>Letrero Cumpleaños</td>
          <td>3</td>
          <td>$45.00</td>
          <td>Disponible</td>
        </tr>
        <tr>
          <td>Paquete Vela de Cumpleaños</td>
          <td>1</td>
          <td>$85.00</td>
          <td>Disponible</td>
        </tr>
        <tr>
          <td>Mix de Frutas</td>
          <td>10</td>
          <td>$100.00</td>
          <td>Disponible</td>
        </tr>
        <tr>
          <td>Cerezas</td>
          <td>6</td>
          <td>$75.00</td>
          <td>Disponible</td>
        </tr>
        <tr>
          <td>Chocolate</td>
          <td>2</td>
          <td>$75.00</td>
          <td>Disponible</td>
        </tr>
        <tr>
          <td>Nuez</td>
          <td>0</td>
          <td>$85.00</td>
          <td>inhabilitado</td>
        </tr>
      </table>
    </div>

    <hr />
    <h1 class="let">Tabla de pedidos</h1>
    <div class="seccion3">
      <table class="colapsado" border="1">
        <tr>
          <th>Nombre</th>
          <th>Teléfono</th>
          <th>Correo Electronico</th>
          <th>Descripción</th>
          <th>Sabor pastel</th>
          <th>Adornos</th>
        </tr>

        <tr>
          <td>Raul</td>
          <td>9512345698</td>
          <td>vivon32153@xindax.com</td>
          <td>Pastel para 10 personas</td>
          <td>Fresa</td>
          <td>Letrero, paquete de velas, chocolate</td>
        </tr>

        <tr>
          <td>Maria</td>
          <td>5512456792</td>
          <td>vivon153@xindax.com</td>
          <td>Pastel para 5 personas</td>
          <td>Chocolate</td>
          <td>Mix de frutas y chocolate</td>
        </tr>

        <tr>
          <td>Juan</td>
          <td>1235434575</td>
          <td>vivon183@xindax.com</td>
          <td>Pastel para 15 años</td>
          <td>Clásico</td>
          <td>Letrero, paquete de velas, chocolate</td>
        </tr>
      </table>
    </div>

    <br/>
    <br/>

    <div class="btn">
      <a href="./index.html"><button>Inicio</button></a>
    </div>
    <br/>
    <br/>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.seccion1{
    padding-left: 40%;
    font-weight: bold;
    font-family: Arial, Helvetica, sans-serif;
}

.seccion2{
    padding-left: 33%;
    font-weight: bold;
    font-family: Arial, Helvetica, sans-serif;
}

.seccion3{
    padding-left: 15%;
    font-weight: bold;
    font-family: Arial, Helvetica, sans-serif;
}

.let{
    text-align: center;
}

.colapsado {
    border-collapse: collapse;
}

table{
    text-align: center;
    padding-left: 50%;
}

.btn{
    text-align: center;
}

.btn button{
    background-color: darkgreen;
    color: white;
    border-radius: 5%;
    font-size: 100%;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
}

</style>