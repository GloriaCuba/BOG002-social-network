export function inicializarFirebase() {
  const firebaseConfig = {
    apiKey: 'AIzaSyChnpSpbN4XUjpjy-cVAXdAhlE8aMNIjX0',
    authDomain: 'social-network-sn9.firebaseapp.com',
    projectId: 'social-network-sn9',
    storageBucket: 'social-network-sn9.appspot.com',
    messagingSenderId: '227673003549',
    appId: '1:227673003549:web:c58d79d806e57adb2f58f4',
    measurementId: 'G-NX0STFY82X',
};
    // Initialize Firebase

  firebase.initializeApp(firebaseConfig);
  var db = firebase.firestore();
  var auth = firebase.auth();
  console.log(firebase.auth);
  auth.useDeviceLanguage();
}