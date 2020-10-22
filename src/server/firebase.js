import app from 'firebase/app'
import 'firebase/firestore';
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyCgXsdCg4kI3YbXKEq3nkziDxgiUek0IDg",
    authDomain: "farel-91d78.firebaseapp.com",
    databaseURL: "https://farel-91d78.firebaseio.com",
    projectId: "farel-91d78",
    storageBucket: "farel-91d78.appspot.com",
    messagingSenderId: "1031275345761",
    appId: "1:1031275345761:web:416ce0db2eab360efdb720"
  };

class Firebase{

    constructor(){
        app.initializeApp(config);
        this.db = app.firestore();
        this.auth = app.auth();
    }

    estaIniciado(){
        return new Promise(resolve => {
            this.auth.onAuthStateChanged(resolve)
        })
    }
}

export default Firebase;