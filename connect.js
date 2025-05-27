import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyDYJKQv1iGdLODp_9Dmy9wuqZmRbirH1hw",
    authDomain: "ja-peru-ypp-website.firebaseapp.com",
    projectId: "ja-peru-ypp-website",
    storageBucket: "ja-peru-ypp-website.firebasestorage.app",
    messagingSenderId: "347125755710",
    appId: "1:347125755710:web:4af6392ced1cf0b489466f"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
