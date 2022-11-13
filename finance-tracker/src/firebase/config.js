import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBjAdI1ySF0IH8DA_S4ObnFhIcx9W0Y49w",
    authDomain: "mymoney-5aa70.firebaseapp.com",
    projectId: "mymoney-5aa70",
    storageBucket: "mymoney-5aa70.appspot.com",
    messagingSenderId: "10657185586",
    appId: "1:10657185586:web:e30c0e464a34c0af36212b"
  };

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth=firebase.auth()

//timestamp
const timestamp=firebase.firestore.Timestamp

export { projectFirestore,projectAuth,timestamp }
