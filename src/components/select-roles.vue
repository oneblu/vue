<template>
  <el-select :value="value" placeholder="Select" @change="onChange" filterable>
    <el-option v-for="item in options" :key="item.id" :label="item.name" :value="item.id"></el-option>
  </el-select>
</template>
<script>
export default {
  props: ['value'],
  name: 'select-roles',
  data () {
    return {
      options: []
    }
  },
  methods: {
    get () {
      var self = this
      self.$http.get('role/getallactive').then(response => {
        self.options = response.body
      }, response => {
        console.log(response)
        alert(response.body.message)
      })
    },
    onChange (value) {
      this.$emit('input', value)
    }
  },
  mounted () {
    var self = this
    self.get()
  }
}
</script>