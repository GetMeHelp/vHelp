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
  let pos = {
    lat: 12.9352015,
    lng: 77.53465609999999
  }
  let userDetails = JSON.parse(localStorage.getItem('userDetails'))
  navigator.geolocation.getCurrentPosition(function(position) {
    let userDetails = JSON.parse(localStorage.getItem('userDetails'))
    let pos = {
      lat: position.coords.latitude,
      lng: position.coords.longitude
    }
    console.log(pos, userDetails);
    firebase.database().ref('requestingUser/').set({position: pos, user: userDetails});
    window.location.href = 'receivedHelp.html';
  })
}

function receivedHelp() {
  console.log('Help Received');
  firebase.database().ref('requestingUser/').set({});
  window.location.href = 'needHelp.html';

}
