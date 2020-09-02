import * as firebase from 'firebase/app'


const firebaseConfig = {
    apiKey: "AIzaSyCLoNoOc8uhyd7OZQfBvYNTxtgfon8Hpig",
    authDomain: "nwitter-44dd4.firebaseapp.com",
    databaseURL: "https://nwitter-44dd4.firebaseio.com",
    projectId: "nwitter-44dd4",
    storageBucket: "nwitter-44dd4.appspot.com",
    messagingSenderId: "688529157873",
    appId: "1:688529157873:web:91e44d6637b64c14d68350"
};

export default firebase.initializeApp(firebaseConfig)