/*
*
*   added in ch 2-9  'create the settings store'
*/

import firebase from 'firebase'
import MobxFirebaseStore from 'mobx-firebase-store'

// Replace with your Configuration Information
/*
*   get values from firebase consol - 'add firebase to web app'
*/
const config = {
      apiKey: "AIzaSyBN6zea-k343ikMIFa0XvIdig89MHHMd9M",
      authDomain: "dinder-7487b.firebaseapp.com",
      databaseURL: "https://dinder-7487b.firebaseio.com",
      projectId: "dinder-7487b",
      storageBucket: "dinder-7487b.appspot.com",
      messagingSenderId: "181808097795"
  }


/*
*       this.splashTime = 5000 = sets how long splashscreen lasts.
*/
export default class SettingsStore extends MobxFirebaseStore {
  constructor() {
    firebase.initializeApp(config)
    super(firebase.database().ref())

    this.splashTime = 5000
    this.splashImg = require('../../images/splash.jpg')
  }
  get SplashTime() {
    return this.splashTime
  }
  get SplashImg() {
    return this.splashImg
  }
}
