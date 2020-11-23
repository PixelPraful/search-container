import firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyBv0iEMYLZSCJCZ33axhpwxeaGYgwXsEN4",
  authDomain: "my-test-project-159011.firebaseapp.com",
  databaseURL: "https://my-test-project-159011.firebaseio.com",
  projectId: "my-test-project-159011",
  storageBucket: "my-test-project-159011.appspot.com",
  messagingSenderId: "679133311840",
  appId: "1:679133311840:web:2558fd3f7fe0a1f165a405",
  measurementId: "G-M85CFDWCVG"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;