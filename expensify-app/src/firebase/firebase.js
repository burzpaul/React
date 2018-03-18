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

database.ref().set({
    name: 'Paul Burz',
    age: 24,
    isSingle: false,
    location: {
        city: 'Bucuresti',
        country: 'Romania'
    }
});

database.ref('attributes').set({
    height: 1.95,
    weigh: 78
});