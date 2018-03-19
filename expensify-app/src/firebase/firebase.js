import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyANViYD3zW3vPfIfamn8qcfjLRc-XnlP1E",
    authDomain: "expensify-22817.firebaseapp.com",
    databaseURL: "https://expensify-22817.firebaseio.com",
    projectId: "expensify-22817",
    storageBucket: "expensify-22817.appspot.com",
    messagingSenderId: "893107411132"

};
firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };