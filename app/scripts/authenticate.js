function onSignIn(googleUser) {
  // Useful data for your client-side scripts:
  var profile = googleUser.getBasicProfile();
  console.log('ID: ' + profile.getId()); // Don't send this directly to your server!
  console.log('Full Name: ' + profile.getName());
  console.log('Given Name: ' + profile.getGivenName());
  console.log('Family Name: ' + profile.getFamilyName());
  console.log('Image URL: ' + profile.getImageUrl());
  console.log('Email: ' + profile.getEmail());

  let userDetails = {
    name: profile.getName(),
    image: profile.getImageUrl(),
    email: profile.getEmail()
  }

  // The ID token you need to pass to your backend:
  var id_token = googleUser.getAuthResponse().id_token;
  console.log(googleUser.isSignedIn());
  setFirebaseData(profile.getId(), userDetails);

  userDetails.id = profile.getId()
  localStorage.setItem('userDetails', JSON.stringify(userDetails));

  // window.location.href = './needHelp.html';
};
