import firebase from 'firebase';

const provider = new firebase.auth.GoogleAuthProvider();

export async function useGoogleAuth() {
  const res = await firebase.auth().signInWithPopup(provider);

  if (res) {
    return res.user;
  }
}
