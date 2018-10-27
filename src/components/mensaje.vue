<template>
  <span :class="tipo" :tipo="tipo" :mensaje="mensaje">{{mensaje}}</span>
</template>
<script>
export default {
  props: ['mensaje', 'tipo'],
  name: 'Login',
  data () {
    return {
      // estilo: 'red'
    }
  }
  // mounted () {
  //   if (this.tipo === 'success') {
  //     estilo: 'green'
  //   }
  // }
}
</script>
<style>
  .red {
    background-color: red;
    color: white
  }
  .green {
    background-color: green;
    color: white
  }
</style>