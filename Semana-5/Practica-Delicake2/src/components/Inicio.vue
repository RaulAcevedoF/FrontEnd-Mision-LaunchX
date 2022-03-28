<template>
  <div class="contenidoinicio">
      <p>{{ msg }}</p>
      <img
        src="https://cdn.pixabay.com/photo/2016/03/27/22/38/cake-1284548_1280.jpg"
        alt="pasteles"
       />
    </div>
</template>

<script>
export default {
  name: 'Inicio',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.contenidoinicio p{
    text-align: center;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 160%;
}

.contenidoinicio img{
    padding-left: 330px;
    width:600px;
}
</style>
