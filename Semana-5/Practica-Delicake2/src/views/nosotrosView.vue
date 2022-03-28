<template>
  <div class="home">
    <Nosotros direccion="Lic Manuel Ruiz 427, Reforma, 68050 Oaxaca de Juárez, Oax." telefono="(951)5159097" horario1="L-V 8:00 - 20:00 HRS" horario2="S-D 10:00 - 20:00 HRS"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Nosotros from '@/components/Aboutus'

export default {
  name: 'nosotrosView',
  components: {
    Nosotros
  }
}
</script>