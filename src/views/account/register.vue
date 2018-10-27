<template>
  <div>
      <label>Nombres</label>
      <input v-model="credential.nombres">
      <label>Username</label>
      <input v-model="credential.documentNumber">
      <label>Password</label>
      <input type="password" v-model="credential.password">
      &nbsp; | &nbsp;<a href="#" @click="create">Registrarse</a>
      <mi-mensaje :tipo="type" :mensaje="msg"></mi-mensaje>
  </div>
</template>
<script>
// import jwtDecode from 'jwt-decode'
// import router from '../../router'
import firebase from 'firebase'
export default {
  name: 'Login',
  data () {
    return {
      credential: {
        documentNumber: '',
        password: '',
        nombres: ''
      },
      msg: '',
      type: ''
    }
  },
  methods: {
    create () {
      var self = this
      firebase.auth().createUserWithEmailAndPassword(self.credential.documentNumber, self.credential.password).then(
        function (user) {
          var u = firebase.auth().currentUser
          u.updateProfile({ displayName: self.credential.nombres }).then(
            self.$message('Usuario creado con exito')
          )
        }, function (error) {
          self.$message.error('Opps' + error)
        }
      )
    }
  }
}
</script>