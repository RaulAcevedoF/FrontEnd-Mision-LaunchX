<template>
    <div class="sabores">
      <h2>Sabores de pastel</h2>

      <div>
        <img
          src="https://www.suqiee.com.mx/wp-content/uploads/2017/05/instagram-pastel-de-fresas-con-crema-1.jpg"
          alt="pastel-fresa"
        />
        <p>{{ pastel1 }}</p>
        <p>${{ pastel2 }}</p>
      </div>

      <div>
        <img
          src="https://www.suqiee.com.mx/wp-content/uploads/2017/05/instagram-pastel-de-chocolate-3.jpg"
          alt="pastel-chocolate"
        />
        <p>{{ pastel3 }}</p>
        <p>${{ pastel4 }}</p>
      </div>

      <div>
        <img
          src="https://www.suqiee.com.mx/wp-content/uploads/2017/05/instagram-pastel-boston-vainilla-1.jpg"
          alt="pastel-vainilla"
        />
        <p>{{ pastel5 }}</p>
        <p>${{ pastel6 }}</p>
      </div>

      <div>
        <img
          src="https://www.suqiee.com.mx/wp-content/uploads/2017/05/instagram-pastel-cajetoso-6.jpg"
          alt="pastel-cajeta"
        />
        <p>{{ pastel7 }}</p>
        <p>${{ pastel8 }}</p>
      </div>

      <div>
        <img
          src="https://www.suqiee.com.mx/wp-content/uploads/2022/03/instagram-pastel-de-zanahoria-4.jpg"
          alt="pastel-zanahoria"
        />
        <p>{{ pastel9 }}</p>
        <p>${{ pastel10 }}</p>
      </div>

      <div>
        <img
          src="https://www.suqiee.com.mx/wp-content/uploads/2017/05/instagram-pastel-cl%C3%A1sico-6.jpg"
          alt="pastel-clasico"
        />
        <p>{{ pastel11 }}</p>
        <p>${{ pastel12 }}</p>
      </div>
    </div>
</template>

<script>
export default {
  name: 'SaboresPastel',
  props: {
    pastel1: String,
    pastel2: String,
    pastel3: String,
    pastel4: String,
    pastel5: String,
    pastel6: String,
    pastel7: String,
    pastel8: String,
    pastel9: String,
    pastel10: String,
    pastel11: String,
    pastel12: String
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.sabores{
    overflow: hidden;
    text-align: center;
}

.sabores h2{
    text-align: center;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 160%;
}

.sabores div{
   float:left;
   padding-left: 14%;   
   align-items: center;
}

.sabores p{
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
    
}

.sabores img{
  width: 200px;
}

</style>
