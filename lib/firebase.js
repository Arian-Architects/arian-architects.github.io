import 'firebase/firestore'
import firebase from 'firebase/app'

var firebaseConfig = {
  apiKey: 'AIzaSyDPAOa5hlNl65yeJyYT1aCDvttlohWBNXI',
  authDomain: 'arian-architects-69b54.firebaseapp.com',
  projectId: 'arian-architects-69b54',
  storageBucket: 'arian-architects-69b54.appspot.com',
  messagingSenderId: '892708317252',
  appId: '1:892708317252:web:a9388763c40b4b7d453411',
}

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
} else {
  firebase.app()
}

export const firestore = firebase.firestore()
export default firebase
