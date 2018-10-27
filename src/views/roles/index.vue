<template>
  <div>
    <select-roles v-model="selectedRole"></select-roles>
    <br><br>
    <table v-for="item in data" border="1px" style="width: 200px;">
      <tr>
        <td>{{item.name}}</td>
        <td>{{item.status}}</td>
        <td>{{item.id}}</td>
      </tr>
    </table>
  </div>
</template>
<script>
export default {
  name: 'Roles',
  data () {
    return {
      data: [],
      selectedRole: ''
    }
  },
  methods: {
    get () {
      var self = this
      this.$message({ message: 'Congrats, this is a success message.', type: 'success' })
      self.$http.get('role/getallactive').then(response => {
        console.log('>>>>>>>>>>>>>', response.body)
        self.data = response.body
      }, response => {
        console.log(response)
        alert(response.body.message)
      })
    }
  },
  mounted () {
    var self = this
    self.get()
  }
}
</script>