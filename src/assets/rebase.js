import Rebase from 're-base';
import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyDKRzUTU9nUBgJZdgQBfIvbUin6Kn8Zdn4",
  authDomain: "noname-app-16470.firebaseapp.com",
  databaseURL: "https://noname-app-16470.firebaseio.com",
  projectId: "noname-app-16470",
  storageBucket: "",
  messagingSenderId: "164817166652"
};

const app = firebase.initializeApp(config)
const base = Rebase.createClass(app.database())
const facebookProvider = new firebase.auth.FacebookAuthProvider()

export { app, base, facebookProvider }
