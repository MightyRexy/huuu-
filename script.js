const auth = firebase.auth();

function loginWithGoogle() {
  const provider = new firebase.auth.GoogleAuthProvider();
  auth.signInWithPopup(provider)
    .then(result => {
      const user = result.user;
      alert("Signed in with Google as: " + user.displayName);
    })
    .catch(error => {
      alert("Google login failed: " + error.message);
    });
}

function loginWithGitHub() {
  const provider = new firebase.auth.GithubAuthProvider();
  auth.signInWithPopup(provider)
    .then(result => {
      const user = result.user;
      alert("Signed in with GitHub as: " + user.displayName);
    })
    .catch(error => {
      alert("GitHub login failed: " + error.message);
    });
}

  
 