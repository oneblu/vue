<template>
  <div>
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
      data: []
    }
  },
  methods: {
    get () {
      var self = this
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