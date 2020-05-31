import * as functions from 'firebase-functions';
import * as admin from "firebase-admin";


// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

admin.initializeApp({
    credential: admin.credential.cert(require(serviceAccount)),
    databaseURL: "https://TastyBox.firebaseio.com",
    // projectId: adminConfig
});



