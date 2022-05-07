"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteAsset = exports.getAsset = exports.getAssetsByGroup = exports.getAssets = exports.createEvent = exports.createUser = exports.deleteAssetAuto = exports.updateAssetAuto = exports.test = exports.createAssetAuto = void 0;
const functions = require("firebase-functions");
const admin = require("firebase-admin");
const sdk_1 = require("@openscreen/sdk");
const dotenv = require("dotenv");
dotenv.config();
// functions.firebaseConfig()
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
exports.createAssetAuto = functions.firestore
    .document("assets/{assetId}")
    .onCreate(async (snap, context) => {
    var _a, _b, _c;
    const data = snap.data();
    const openscreenAsset = await openScreenProject.assets().create({
        customAttributes: data,
        qrCodes: (_a = data.qrCodes) === null || _a === void 0 ? void 0 : _a.map((qr) => ({
            intent: clientUrl,
            intentType: sdk_1.QrCodeIntentType.DYNAMIC_REDIRECT,
        })),
        name: data.name || "eventName",
    });
    snap.ref.set({
        assetId: openscreenAsset.projectId || "no-project",
        qrCodes: (_c = (_b = openscreenAsset.asset) === null || _b === void 0 ? void 0 : _b.qrCodes) === null || _c === void 0 ? void 0 : _c.map((qr) => qr. || "no-qr"),
        eventId: data.eventId || "no-event",
    }, { merge: true });
});
exports.test = functions.https.onCall((c, t) => {
    return;
});
exports.updateAssetAuto = functions.firestore
    .document("assets/{assetId}")
    .onUpdate(async (change, context) => {
    const data = change.after.data();
    openScreen.asset(data.assetId).update({
        customAttributes: data || "no-data",
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
exports.createEvent = functions.https.onCall(async (data, context) => {
    var _a;
    const fs = admin.firestore();
    const openscreenObject = await openScreenProject.assets().create({
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
        .doc(openscreenObject.projectId || "")
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