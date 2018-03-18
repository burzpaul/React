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

database.ref('notes').push({
    title: 'To do',
    body: 'Go for a run'
});

// const firebaseNotes = {
//     notes: {
//         asdasda: {
//             title: 'First note!',
//             body: 'This is my note'
//         },
//         asdadasdacvre: {
//             title: 'Second note!',
//             body: 'This is my note'
//         }
//     }
// };

// const notes = [{
//     id: '12',
//     title: 'First note!',
//     body: 'This is my note'
// }, {
//     id: '742abc',
//     title: 'Second note!',
//     body: 'This is my note'
// }]
// database.ref('notes').set(firebaseNotes);
// const onValueChange = database.ref().on('value', (snapshot) => {
//     const value = snapshot.val();
//     console.log(`${value.name} is a ${value.job.title} at ${value.job.company}`);

// }, (e) => {
//     console.log('error with data fetching', e);

// });

// database.ref()
//     .once('value')
//     .then((snapshot) => {
//         console.log(snapshot.val());
//     })
//     .catch((error) => {
//         console.log('error', error);
//     });

// database.ref().set({
//     name: 'Paul Burz',
//     age: 24,
//     stressLevel: 6,
//     job: {
//         title: 'Sofware developer',
//         company: 'Google'
//     },
//     location: {
//         city: 'Bucuresti',
//         country: 'Romania'
//     }
// }).then(() => {
//     console.log('Data is saved');
// }).catch((error) => {
//     console.log('This failed:', error);
// });

// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Microsoft'
// });

// // database.ref('isSingle')
// //     .remove()
// //     .then(() => {
// //         console.log('Data is saved');
// //     }).catch((error) => {
// //         console.log('This failed:', error);
// //     });
