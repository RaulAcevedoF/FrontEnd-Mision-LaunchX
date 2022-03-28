<template>

<div class="navegacion">
  <div class="logo">
    <img alt="Vue logo" src="./assets/img/Delicake.png">
    <h1>DELICAKE</h1>
  </div>
  <div class="menu">
      <ul>
        <router-link to="/">Inicio</router-link> 
        <router-link to="/menu">Menú</router-link>
        <router-link to="/pedido">Pedido</router-link>
        <router-link to="/nosotros">Nosotros</router-link>
        <router-link to="/pastelero">Pastelero</router-link>
      </ul>
  </div>
</div>
<router-view/>
</template>

<style>
#app {
   background-image: url(https://images.pexels.com/photos/4705853/pexels-photo-4705853.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940);
}

/*Navegación*/
.logo{
    display: inline-block;
    padding-left: 25px;
}

.logo img{
  padding-top: 5px;
    width: 150px;
}

.logo h1{
    display: inline-block;
    position: absolute;
    margin-top: 50px;
    padding-left: 10px;
}

.menu{
    display: inline-block;
    position: absolute;
    margin-left: 500px;
    margin-top: 50px;
}

.menu a{
    font-family: Arial, Helvetica, sans-serif;
    font-size: 25px;
    padding-left: 20px;
    text-decoration: none;
    color: black;
    
}
</style>