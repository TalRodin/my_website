// // import firebase from 'firebase/app'
// import * as firebase from 'firebase'
// import 'firebase/firestore'


// console.log('process.env: ',  process.env.FIREBASE_PROJECT_ID)
// const config = {
//     apiKey: process.env.FIREBASE_API_KEY,
//     authDomain: process.env.FIREBASE_AUTH_DOMAIN,
//     databaseURL: process.env.FIREBASE_DATABASE_URL,
//     projectId: process.env.FIREBASE_PROJECT_ID,
//     storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
//     messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
//     appId: process.env.FIREBASE_APP_ID,
    
//   };
// //   !firebase.apps.length 
// //   ? firebase.initializeApp(config).firestore()
// //   : firebase.app().firestore();
// // firebase.initializeApp(config)
// // console.log('firebase.apps:', firebase.app().firestore());


// export default () => {
//   if ( !firebase.apps.length) {
//     firebase.initializeApp(config).firestore()
//   }
// };
//   // console.log(firebase)
// //   firebase.firestore()

// //   .settings({timestampInSnapshots: true})
//   // }catch (err) {
//   //   if (!/already exists/.test(err.message)) {
//   //   console.error('Firebase initialization error', err.stack)
//   //   }
//   // }
// //   return firebase
// // }
// // export default firebase.firestore()

// // export default firebase.initializeApp(config).firestore()


import firebase from 'firebase/app'
import 'firebase/firestore'

export function loadFirebase(){
    try{
    const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID
  };

  firebase.initializeApp(config);
  firebase.firestore()
  .settings({timestampInSnapshots: true})
  }catch(error){
      if(!/already exists/.test(error.message)){console.log(`Firebase did not't initialize correctly: ${error.message}`)}
}
return firebase
}