function setFirebaseData(userId, userDetails) {
  // Get a reference to the database service
  var database = firebase.database();

  // Write data to firebase
  function writeUserData(userId, userDetails) {
    firebase.database().ref('users/' + userId).set(userDetails);
  }

  // // Read data from Firebase
  // var requestingUser = firebase.database().ref('/requestingUser');
  // requestingUser.on('value', function(snapshot) {
  //   updateStarCount(postElement, snapshot.val());
  // });

  writeUserData(userId, userDetails)
  console.log('User Added');
}

function setHelpRequest() {
  console.log('Request Help');
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

function receivedHelp() {
  console.log('Help Received');
  firebase.database().ref('requestingUser/').set({});
}
