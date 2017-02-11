function setFirebaseData() {
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDDGSn7kYD5PB8J8Ui3ZPJVEFRIdIL61vA",
    authDomain: "wehelp-1486785287426.firebaseapp.com",
    databaseURL: "https://wehelp-1486785287426.firebaseio.com",
    storageBucket: "wehelp-1486785287426.appspot.com",
    messagingSenderId: "980853103197"
  };
  firebase.initializeApp(config);

  // Get a reference to the database service
  var database = firebase.database();
console.log('Hello');
}
