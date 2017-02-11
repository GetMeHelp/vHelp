function firebaseInitialize() {
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDDGSn7kYD5PB8J8Ui3ZPJVEFRIdIL61vA",
    authDomain: "wehelp-1486785287426.firebaseapp.com",
    databaseURL: "https://wehelp-1486785287426.firebaseio.com",
    storageBucket: "wehelp-1486785287426.appspot.com",
    messagingSenderId: "980853103197"
  };
  firebase.initializeApp(config);
}

function setFirebaseData(userId, userDetails) {

  firebaseInitialize()
  // Get a reference to the database service
  var database = firebase.database();

  // Write data to firebase
  function writeUserData(userId, userDetails) {
    firebase.database().ref('users/' + userId).set(userDetails);
  }

  // Read data from Firebase
  var requestingUser = firebase.database().ref('/requestingUser');
  requestingUser.on('value', function(snapshot) {
    updateStarCount(postElement, snapshot.val());
  });

  writeUserData(userId, userDetails)
  console.log('User Added');
}

function setHelpRequest() {
  firebaseInitialize()
  console.log('send request');
  navigator.geolocation.getCurrentPosition(function(position) {
    let userDetails = JSON.parse(localStorage.getItem("userDetails"))
    let pos = {
      lat: position.coords.latitude,
      lng: position.coords.longitude
    }
    firebase.database().ref('requestingUser/').set({
      position: pos,
      user: userDetails
    });
  })
}
