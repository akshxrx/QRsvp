"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAsset = exports.getAssetsByGroup = exports.getAssets = exports.createUser = exports.deleteAssetAuto = exports.updateAssetAuto = exports.createAssetAuto = void 0;
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
require("cors")({ origin: true });
admin.initializeApp();
exports.createAssetAuto = functions.firestore
    .document("assets/{assetId}")
    .onCreate(async (snap, context) => {
    const data = snap.data();
    const openscreenProject = await openScreenProject.assets().create({
        customAttributes: data,
    });
    snap.ref.set({ assetId: openscreenProject.projectId }, { merge: true });
});
exports.updateAssetAuto = functions.firestore
    .document("assets/{assetId}")
    .onUpdate(async (change, context) => {
    const data = change.after.data();
    openScreen.asset(data.assetId).update({
        customAttributes: data,
    });
});
exports.deleteAssetAuto = functions.firestore
    .document("assets/{assetId}")
    .onDelete(async (snap, context) => {
    const data = snap.data();
    await openScreen.asset(data.assetId).delete();
});
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
// export const createEvent = functions.https.onCall(
//   async (data: CreateAssetByProjectIdRequestBody, context) => {
//     console.log(await openScreen.assets().get(""));
// openScreen.assetGroups()
// console.log(process.env.OS_API_KEY);
// const fs = admin.firestore();
// const openscreenProject = await openScreen.assets().create({
//   ...data,
//   groupId: "events",
// });
// fs.collection("events")
//   .doc(openscreenProject.projectId || "")
//   .set({});
//     return;
//   }
// );
exports.getAssets = functions.https.onCall(async () => {
    return await openScreenProject.assets().get("");
});
exports.getAssetsByGroup = functions.https.onCall(async (data, context) => {
    return (await openScreen.assetGroup(data).get()).assets;
});
exports.getAsset = functions.https.onCall(async (data, context) => {
    return await openScreen.asset(data).get();
});
//# sourceMappingURL=index.js.map