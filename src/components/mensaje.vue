<template>
  <span :class="tipo" :tipo="tipo" :mensaje="mensaje">{{mensaje}}</span>
</template>
<script>
export default {
  props: ['mensaje', 'tipo'],
  name: 'Login',
  data () {
    return {
    }
  }
}
</script>
<style>
  .red {
    background-color: blue;
    color: white
  }
  .green {
    background-color: green;
    color: white
  }
</style>