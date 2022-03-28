<template>
    <div class="decoracion">
        <h2>Decoraciones de pastel</h2>
  
        <div>
          <img
            src="https://http2.mlstatic.com/D_NQ_NP_2X_937517-MLM43806393682_102020-F.webp"
            alt="letrero-felizCumpleaños"
          />
          <p>{{ decoracion1 }}</p>
          <p>${{ decoracion2 }}</p>
        </div>
  
        <div>
          <img
            src="https://http2.mlstatic.com/D_NQ_NP_2X_959766-MLM46272475679_062021-F.webp"
            alt="velas-cumpleaños"
          />
          <p>{{ decoracion3 }}</p>
          <p>${{ decoracion4 }}</p>
        </div>
  
        <div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8ZzlYWX324ICijc1w1yS-dq8ytPjSv-X1Sw&usqp=CAU"
            alt="frutas"
          />
          <p>{{ decoracion5 }}</p>
          <p>${{ decoracion6 }}</p>
        </div>
  
        <div>
          <img
            src="https://content-cocina.lecturas.com/medio/2018/07/19/tarta-de-avellanas-y-cerezas_791b3b78_800x800.jpg"
            alt="cerezas"
          />
          <p>{{ decoracion7 }}</p>
          <p>${{ decoracion8 }}</p>
        </div>
  
        <div>
          <img
            src="https://cdn.pixabay.com/photo/2014/11/30/10/48/chocolate-551424_1280.jpg"
            alt="chocolates"
          />
          <p>{{ decoracion9 }}</p>
          <p>${{ decoracion10 }}</p>
        </div>
  
        <div>
          <img
            src="https://cdn.pixabay.com/photo/2016/02/22/03/46/pecans-1214697_1280.jpg"
            alt="nuez"
          />
          <p>{{ decoracion11 }}</p>
          <p>${{ decoracion12 }}</p>
        </div>
      </div>
      <a><router-link to="/pedido">Realiza tu pedido aquí</router-link></a>
      <br>
      <br>
</template>

<script>
export default {
  name: 'DecoracionesPastel',
  props: {
    decoracion1: String,
    decoracion2: String,
    decoracion3: String,
    decoracion4: String,
    decoracion5: String,
    decoracion6: String,
    decoracion7: String,
    decoracion8: String,
    decoracion9: String,
    decoracion10: String,
    decoracion11: String,
    decoracion12: String
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*decoraciones*/

.decoracion{
    overflow: hidden;
    text-align: center;
}

.decoracion h2{
    text-align: center;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 160%;
}

.decoracion div{
    float: left;
    padding-left: 14%;
    align-items: center;
}

.decoracion p{
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
    
}

.decoracion img{
    width: 200px; 
}

a{
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
    padding-left: 280px;
    text-decoration: none;
    
}

a:visited {
  color: black;
}

</style>
