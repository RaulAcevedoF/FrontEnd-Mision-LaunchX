<template>
  <div class="home">
    <Pastelero/>
  </div>
</template>

<script>
// @ is an alias to /src
import Pastelero from '@/components/Pastelero'

export default {
  name: 'pasteleroView',
  components: {
    Pastelero
  }
}
</script>