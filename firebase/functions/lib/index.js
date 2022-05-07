"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteAsset = exports.getAsset = exports.getAssetsByGroup = exports.getAssets = exports.createEvent = exports.createUser = void 0;
const functions = require("firebase-functions");
const admin = require("firebase-admin");
const sdk_1 = require("@openscreen/sdk");
const dotenv = require("dotenv");
dotenv.config();
const projectId = "1a877553-f7e3-4bb9-a5bb-0dd0cfa7e28e";
const openScreen = new sdk_1.Openscreen().config({
    key: process.env.OS_API_KEY,
    secret: process.env.OS_API_SECRET,
});
const openScreenProject = openScreen.project(projectId);
const clientUrl = process.env.FUNCTIONS_EMULATOR
    ? "http://localhost:8080/#/"
    : "main";
require("cors")({ origin: true });
admin.initializeApp();
// export const createAssetAuto = functions.firestore
//   .document("assets/{assetId}")
//   .onCreate(async (snap, context) => {
//     const data = snap.data();
//     const openscreenProject = await openScreenProject.assets().create({
//       customAttributes: data,
//     });
//     snap.ref.set({ assetId: openscreenProject.projectId }, { merge: true });
//   });
// export const updateAssetAuto = functions.firestore
//   .document("assets/{assetId}")
//   .onUpdate(async (change, context) => {
//     const data = change.after.data();
//     openScreen.asset(data.assetId).update({
//       customAttributes: data,
//     });
//   });
// export const deleteAssetAuto = functions.firestore
//   .document("assets/{assetId}")
//   .onDelete(async (snap, context) => {
//     const data = snap.data();
//     await openScreen.asset(data.assetId).delete();
//   });
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
exports.createEvent = functions.https.onCall(async (data, context) => {
    var _a;
    const fs = admin.firestore();
    const openscreenProject = await openScreenProject.assets().create({
        customAttributes: data,
        name: data.name || "eventName",
        groupId: "events",
        qrCodes: [
            {
                intent: clientUrl,
                intentType: sdk_1.QrCodeIntentType.DYNAMIC_REDIRECT,
            },
        ],
    });
    fs.collection("events")
        .doc(openscreenProject.projectId || "")
        .set({
        uid: (_a = context.auth) === null || _a === void 0 ? void 0 : _a.uid,
    });
    return;
});
exports.getAssets = functions.https.onCall(async () => {
    return (await openScreenProject.assets().get("")).assets;
});
exports.getAssetsByGroup = functions.https.onCall(async (data, context) => {
    return (await openScreen.assetGroup(data).get()).assets;
});
exports.getAsset = functions.https.onCall(async (data, context) => {
    return await openScreen.asset(data).get();
});
exports.deleteAsset = functions.https.onCall(async (data, context) => {
    return await openScreen.asset(data).delete();
});
//# sourceMappingURL=index.js.map