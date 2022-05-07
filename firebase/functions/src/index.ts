import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

admin.initializeApp();

export const createUser = functions.auth.user().onCreate(async (user) => {
  await admin
    .firestore()
    .doc(`users/${user.uid}`)
    .set({
      displayName: user.displayName,
      photoUrl:
        user.photoURL ||
        "https://image.flaticon.com/icons/png/512/709/709579.png",
    });
});

export const validateUrl = functions.https.onCall(async (data, context) => {
  return;
});
