"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateUrl = exports.createUser = void 0;
const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();
exports.createUser = functions.auth.user().onCreate(async (user) => {
    await admin
        .firestore()
        .doc(`users/${user.uid}`)
        .set({
        displayName: user.displayName,
        photoUrl: user.photoURL ||
            "https://image.flaticon.com/icons/png/512/709/709579.png",
    });
});
exports.validateUrl = functions.https.onCall(async (data, context) => {
    return;
});
//# sourceMappingURL=index.js.map