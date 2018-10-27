<template>
  <div id="app">
    <component :is="layout"></component>
  </div>
</template>
<script>
const defaultLayout = 'private'
export default {
  computed: {
    layout () {
      return (this.$route.meta.layout || defaultLayout) + '-layout'
    }
  }
}
</script>
