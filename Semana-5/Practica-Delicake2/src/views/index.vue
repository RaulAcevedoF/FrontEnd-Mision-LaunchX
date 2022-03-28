<template>
  <div class="home">
    <Inicio msg="¡Felicidad en cada mordida!"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Inicio from '@/components/Inicio'

export default {
  name: 'index',
  components: {
    Inicio
  }
}
</script>