<template>
  <div>
      <label>Username</label>
      <input v-model="credential.documentNumber">
      <label>Password</label>
      <input type="password" v-model="credential.password">
      <a href="#" @click="login">Iniciar sesion </a>
&nbsp;&nbsp;<a href="">Olvide mi contraseña</a>
     <router-link to="/register">Registrarse</router-link>
      <mi-mensaje :tipo="type" :mensaje="msg"></mi-mensaje>

      <br>
      <br>
      <div id="firebaseui-auth-container"></div>
  </div>
</template>
<script>
import auth from '../../assets/auth'
// import jwtDecode from 'jwt-decode'
// import router from '../../router'
import firebase from 'firebase'
export default {
  name: 'Login',
  data () {
    return {
      credential: {
        documentNumber: '',
        password: ''
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
          self.$message('Usuario creado con exito')
        }, function (error) {
          self.$message.error('Opps' + error)
        }
      )
      // self.$http.post('User/authenticate', self.credential).then(response => {
      //   // console.log(response.body)
      //   var tokenDecode = jwtDecode(response.body.token)
      //   // console.log(tokenDecode)
      //   sessionStorage.setItem('token_expire', tokenDecode.exp)
      //   sessionStorage.setItem('token', response.body.token)
      //   router.push({ name: 'home' })
      // }, response => {
      //   // this.$message.error(response.body.message)
      //   this.msg = response.body.message
      //   this.type = 'red'
      //   // console.log(response)
      //   // alert(response.body.message)
      // })
    },
    login () {
      var self = this
      firebase.auth().signInWithEmailAndPassword(self.credential.documentNumber, self.credential.password).then(
        function (user) {
          console.log(user)
          self.$message('Usuario creado con exito')
        }, function (error) {
          self.$message.error('Opps' + error)
        }
      )
      // self.$http.post('User/authenticate', self.credential).then(response => {
      //   // console.log(response.body)
      //   var tokenDecode = jwtDecode(response.body.token)
      //   // console.log(tokenDecode)
      //   sessionStorage.setItem('token_expire', tokenDecode.exp)
      //   sessionStorage.setItem('token', response.body.token)
      //   router.push({ name: 'home' })
      // }, response => {
      //   // this.$message.error(response.body.message)
      //   this.msg = response.body.message
      //   this.type = 'red'
      //   // console.log(response)
      //   // alert(response.body.message)
      // })
    }
  },
  mounted () {
    auth.authForm('#firebaseui-auth-container')
  }
}
</script>