var firebaseConfig = {
    apiKey: "AIzaSyB7USYZHtyW6YbXVGH_cBUWPphP4QjW01o",
    authDomain: "west-food-management.firebaseapp.com",
    databaseURL: "https://food-waste-management-134ac-default-rtdb.firebaseio.com/",
    projectId: "west-food-management",
    storageBucket: "west-food-management.appspot.com",
    messagingSenderId: "982475828562",
    appId: "1:982475828562:web:d7ef90ca8a58b284bc5e8b",
    measurementId: "G-8SRC0DS1F7"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// import { getApp } from "firebase/app";
// import { getFunctions, connectFunctionsEmulator } from "firebase/functions";

// const functions = getFunctions(getApp());
// connectFunctionsEmulator(functions, "localhost", 5001);
// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyDbIrLQJuQ1vhlowtx8zURbGlP7Nnz_Czo",
//   authDomain: "food-waste-management-134ac.firebaseapp.com",
//   projectId: "food-waste-management-134ac",
//   databaseURL: "https://food-waste-management-134ac-default-rtdb.firebaseio.com/",
//   storageBucket: "food-waste-management-134ac.appspot.com",
//   messagingSenderId: "216177900545",
//   appId: "1:216177900545:web:180eac7c2181b586fa9400",
//   measurementId: "G-Q27KNR1DP0"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);