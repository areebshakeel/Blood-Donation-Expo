import * as firebase from 'firebase'


var firebaseConfig = {
    apiKey: "AIzaSyAdOOqLUviZ-PBnt7GdmAlJ5-sYVoWSrsg",
    authDomain: "blood-donation-5fa6f.firebaseapp.com",
    databaseURL: "https://blood-donation-5fa6f.firebaseio.com",
    projectId: "blood-donation-5fa6f",
    storageBucket: "blood-donation-5fa6f.appspot.com",
    messagingSenderId: "496024254329",
    appId: "1:496024254329:web:f31630655952c36b7ee1a8",
    measurementId: "G-H3D70N3YLE"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default firebase