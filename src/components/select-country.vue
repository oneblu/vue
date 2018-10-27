<template>
  <select v-model="value">
    <option>Colombia</option>
    <option>Aregentina</option>
  </select>
</template>
<script>
export default {
  props: ['value'],
  name: 'select-contry',
  data () {
    return {
    }
  }
}
</script>
