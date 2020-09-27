import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: 'AIzaSyCY_5OoOkUwlBSvVCPAaX2iTWd3UVZu5f8',
  authDomain: 'crown-db-d7f75.firebaseapp.com',
  databaseURL: 'https://crown-db-d7f75.firebaseio.com',
  projectId: 'crown-db-d7f75',
  storageBucket: 'crown-db-d7f75.appspot.com',
  messagingSenderId: '792070706834',
  appId: '1:792070706834:web:dac257bcb68b019398384b',
  measurementId: 'G-2Q603XGZ88',
}

firebase.initializeApp(config)

export const auth = firebase.auth()

export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)
