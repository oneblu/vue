import route from '../router'
import firebase from 'firebase'
import firebaseui from 'firebaseui'

export function validateToken () {
  console.log('validar auth')
  if (!sessionStorage.getItem('token')) {
    route.push('login')
  }
}

// const config = {
//   apiKey: 'AIzaSyDDgplgZbeip3gMim82FC8H8HMWIr0M5lU',
//   authDomain: 'invoice-ninja-7acbf.firebaseapp.com',
//   databaseURL: 'https://invoice-ninja-7acbf.firebaseio.com',
//   projectId: 'invoice-ninja-7acbf',
//   storageBucket: 'invoice-ninja-7acbf.appspot.com',
//   messagingSenderId: '495753981656'
// }

const auth = {
  context: null,
  uiConfig: null,
  ui: null,
  init (context) {
    this.context = context

    // firebase.initializeApp(config)
    this.uiConfig = {
      signInSuccessUrl: 'home',
      signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID
      ]
    }
    this.ui = new firebaseui.auth.AuthUI(firebase.auth())

    firebase.auth().onAuthStateChanged((user) => {
      this.context.$store.dispatch('/')

      let requireAuth = this.context.$route.matched.some(record => record.meta.requireAuth)
      let guestOnly = this.context.$route.matched.some(record => record.meta.guestOnly)

      if (requireAuth && !user) {
        this.context.$router.push('login')
      } else if (guestOnly && user) {
        this.context.$router.push('home')
      }
    })
  },
  authForm (container) {
    this.ui.start(container, this.uiConfig)
  },
  user () {
    return this.context ? firebase.auth().currentUser : null
  },
  logout () {
    firebase.auth().signOut()
    this.context.$router.push('login')
  }
}

export default auth
