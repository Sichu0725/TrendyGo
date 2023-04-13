function onSuccess(googleUser) {
  console.log('Logged in as: ' + googleUser.getBasicProfile().getName())
  window.location.href = '#page01'
}

function onFailure(error) {
  console.log(error)
  window.location.href = '#page01'
}

function renderButton() {
  gapi.signin2.render('google-login', {
    scope: 'profile email',
    width: 240,
    height: 50,
    longtitle: true,
    theme: 'dark',
    onsuccess: onSuccess,
    onfailure: onFailure,
  })
}
