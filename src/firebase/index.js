import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyCRoMLLRYXHyoM2MwmrEKw1GuEvthrXXhE",
    authDomain: "portfolio-29a50.firebaseapp.com",
    projectId: "portfolio-29a50",
    storageBucket: "portfolio-29a50.appspot.com",
    messagingSenderId: "653987414369",
    appId: "1:653987414369:web:56fc59f10306486075c520",
    measurementId: "G-CGB1253024"
};
const app = initializeApp(firebaseConfig);
let db = getFirestore(app)

export {db}