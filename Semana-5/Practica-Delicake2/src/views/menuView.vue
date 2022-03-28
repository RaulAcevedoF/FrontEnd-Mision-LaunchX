<template>
  <div class="home">
    <Saborespastel pastel1="Pastel sabor Fresa" pastel2="345.00" pastel3="Pastel sabor Chocolate" pastel4="380.00" pastel5="Pastel sabor Vainilla" pastel6="250.00" pastel7="Pastel sabor Cajeta" pastel8="380.00" pastel9="Pastel sabor Zanahoria" pastel10="410.00" pastel11="Pastel Clásico" pastel12="410.00"/>
    <Decoracionespastel decoracion1="Letrero Feliz Cumpleaños " decoracion2="45.00" decoracion3="Paquete Vela de Cumpleaños" decoracion4="85.00" decoracion5="Mis de Frutas" decoracion6="100.00" decoracion7="Cerezas" decoracion8="250.00" decoracion9="Chocolate" decoracion10="75.00" decoracion11="Nuez" decoracion12="85.00"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Saborespastel from '@/components/SaboresPastel.vue'
import Decoracionespastel from '@/components/DecoracionesPastel.vue'

export default {
  name: 'menuView',
  components: {
    Saborespastel,
    Decoracionespastel

  }
}
</script>