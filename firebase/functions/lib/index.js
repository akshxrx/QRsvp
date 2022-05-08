"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteAsset = exports.createEvent = exports.createUser = exports.deleteAssetAuto = exports.updateAssetAuto = exports.test = exports.createContactByScan = exports.getAssetByScan = exports.createAssetAuto = void 0;
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
    var _a, _b, _c, _d;
    const data = snap.data();
    const openscreenAsset = await openScreenProject.assets().create({
        customAttributes: data,
        // qrCodes: data.qrCodes?.map((qr: string) => ({
        //   intent: clientUrl,
        //   intentType: QrCodeIntentType.DYNAMIC_REDIRECT,
        // })),
        groupId: data.groupId || "no-group-id",
        name: data.name || "eventName",
    });
    let qrCode;
    let qrObject;
    if ((_a = openscreenAsset === null || openscreenAsset === void 0 ? void 0 : openscreenAsset.asset) === null || _a === void 0 ? void 0 : _a.assetId) {
        qrObject = await openScreen
            .asset((_b = openscreenAsset === null || openscreenAsset === void 0 ? void 0 : openscreenAsset.asset) === null || _b === void 0 ? void 0 : _b.assetId)
            .qrCodes()
            .create({
            intent: data.clientIntent,
            intentType: sdk_1.QrCodeIntentType.DYNAMIC_REDIRECT,
            dynamicRedirectType: sdk_1.QrCodeDynamicRedirectType.SCAN_ID_IN_PATH_PARAMETER,
            locatorKeyType: sdk_1.QrCodeLocatorKeyType.SHORT_URL,
        });
        if (qrObject.qrCodeId) {
            qrCode = await openScreen.qrCode(qrObject.qrCodeId).get({
                format: sdk_1.QrCodeType.PNG,
                scale: 12,
                background: "#ffffff",
                foreground: "#0a74b7",
                dataUrl: true,
            });
        }
    }
    snap.ref.set({
        assetId: ((_c = openscreenAsset === null || openscreenAsset === void 0 ? void 0 : openscreenAsset.asset) === null || _c === void 0 ? void 0 : _c.assetId) || "no-project",
        // qrCodes: openscreenAsset.asset?.qrCodes?.map((qr) => qr || "no-qr"),
        eventId: data.eventId || "no-event",
        qrCodeId: (qrObject === null || qrObject === void 0 ? void 0 : qrObject.qrCodeId) || "no qr id",
        imgData: ((_d = qrCode === null || qrCode === void 0 ? void 0 : qrCode.image) === null || _d === void 0 ? void 0 : _d.data) || "no img data",
    }, { merge: true });
});
exports.getAssetByScan = functions.https.onCall(async (scanId) => {
    const response = await openScreen.scan(scanId).get();
    return response;
});
exports.createContactByScan = functions.https.onCall(async (context) => {
    var _a;
    const { scanId, name, phone } = context;
    console.log(scanId, name, phone);
    // Get Scanned object
    const scan = await openScreen.scan(scanId).get();
    const assetId = (_a = scan === null || scan === void 0 ? void 0 : scan.asset) === null || _a === void 0 ? void 0 : _a.assetId;
    let contactId;
    // get contact of this project by the phoneNumber
    const contactsObjPhone = await openScreen
        .asset(assetId)
        .contacts()
        .get({ phone });
    const responseContact = await openScreen.scan(scanId).contacts().create({
        firstName: name,
        cellPhone: phone,
    });
    contactId = responseContact.contact.contactId;
    if (assetId && contactId) {
        await openScreen.asset(assetId).contact(contactId).link();
        const sms = await openScreen
            .scan(scanId)
            .sms()
            .send({ smsTemplateName: "firstTemplate", to: phone });
    }
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
// export const getAssets = functions.https.onCall(async () => {
//   return (await openScreenProject.assets().get("")).assets;
// });
// export const getAssetsByGroup = functions.https.onCall(
//   async (data: string, context) => {
//     return (await openScreen.assetGroup(data).get()).assets;
//   }
// );
// export const getAsset = functions.https.onCall(
//   async (data: string, context) => {
//     return await openScreen.asset(data).get();
//   }
// );
exports.deleteAsset = functions.https.onCall(async (data, context) => {
    return await openScreen.asset(data).delete();
});
//# sourceMappingURL=index.js.map