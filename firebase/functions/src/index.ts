import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import {
	NestedKeyValueObject,
	Openscreen,
	QrCodeDynamicRedirectType,
	QrCodeIntentType,
	QrCodeLocatorKeyType,
	QrCodeType,
} from "@openscreen/sdk";
import * as dotenv from "dotenv";
dotenv.config();

// functions.firebaseConfig()
const projectId = "1a877553-f7e3-4bb9-a5bb-0dd0cfa7e28e";
const openScreen = new Openscreen().config({
	key: process.env.OS_API_KEY,
	secret: process.env.OS_API_SECRET,
});
const openScreenProject = openScreen.project(projectId);
const clientUrl = process.env.FUNCTIONS_EMULATOR
	? "http://localhost:8080/#/"
	: "main";

require("cors")({ origin: true });

admin.initializeApp();

export const createAssetAuto = functions.firestore
	.document("assets/{assetId}")
	.onCreate(async (snap, context) => {
		const data = snap.data();
		const openscreenAsset = await openScreenProject.assets().create({
			customAttributes: data,
			// qrCodes: data.qrCodes?.map((qr: string) => ({
			//   intent: clientUrl,
			//   intentType: QrCodeIntentType.DYNAMIC_REDIRECT,
			// })),
			groupId: data.groupId || "no-group-id",
			name: (data.name as string) || "eventName",
		});
		let qrCode;
		let qrObject;
		if (openscreenAsset?.asset?.assetId) {
			qrObject = await openScreen
				.asset(openscreenAsset?.asset?.assetId)
				.qrCodes()
				.create({
					intent: data.clientIntent,
					intentType: QrCodeIntentType.DYNAMIC_REDIRECT,
					dynamicRedirectType:
						QrCodeDynamicRedirectType.SCAN_ID_IN_PATH_PARAMETER,
					locatorKeyType: QrCodeLocatorKeyType.SHORT_URL,
				});
			if (qrObject.qrCodeId) {
				qrCode = await openScreen.qrCode(qrObject.qrCodeId).get({
					format: QrCodeType.PNG,
					scale: 12,
					background: "#ffffff",
					foreground: "#0a74b7",
					dataUrl: true,
				});
			}
		}
		snap.ref.set(
			{
				assetId: openscreenAsset?.asset?.assetId || "no-project",
				// qrCodes: openscreenAsset.asset?.qrCodes?.map((qr) => qr || "no-qr"),
				eventId: data.eventId || "no-event",
				qrCodeId: qrObject?.qrCodeId || "no qr id",
				imgData: qrCode?.image?.data || "no img data",
			},
			{ merge: true }
		);
	});

export const getAssetByScan = functions.https.onCall(async (scanId: string) => {
	const response = await openScreen.scan(scanId).get();
	return response;
});

export const createContactByScan = functions.https.onCall(async (context) => {
	const { scanId, name, phone } = context;
	console.log(scanId, name, phone);
	// Get Scanned object
	const scan = await openScreen.scan(scanId).get();
	const assetId = scan?.asset?.assetId;
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

export const test = functions.https.onCall((c, t) => {
	return;
});
export const updateAssetAuto = functions.firestore
	.document("assets/{assetId}")
	.onUpdate(async (change, context) => {
		const data = change.after.data();
		openScreen.asset(data.assetId).update({
			customAttributes: data || "no-data",
		});
	});
export const deleteAssetAuto = functions.firestore
	.document("assets/{assetId}")
	.onDelete(async (snap, context) => {
		const data = snap.data();
		await openScreen.asset(data.assetId).delete();
	});

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

export const createEvent = functions.https.onCall(
	async (data: NestedKeyValueObject, context) => {
		const fs = admin.firestore();
		const openscreenObject = await openScreenProject.assets().create({
			customAttributes: data,
			name: (data.name as string) || "eventName",
			groupId: "events",
			qrCodes: [
				{
					intent: clientUrl,
					intentType: QrCodeIntentType.DYNAMIC_REDIRECT,
				},
			],
		});

		fs.collection("events")
			.doc(openscreenObject.projectId || "")
			.set({
				uid: context.auth?.uid,
			});

		return;
	}
);

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

export const deleteAsset = functions.https.onCall(
	async (data: string, context) => {
		return await openScreen.asset(data).delete();
	}
);
