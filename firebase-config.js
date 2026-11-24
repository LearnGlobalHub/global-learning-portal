
import { initializeApp } from "https://www.gstatic.com/firebasejs/13.4.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/13.4.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/13.4.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/13.4.0/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyAZp8xRUJ49rJmxW-TtUbr8gOioAwMQdbI",
  authDomain: "global-learning-hub-ecb44.firebaseapp.com",
  projectId: "global-learning-hub-ecb44",
  storageBucket: "global-learning-hub-ecb44.firebasestorage.app",
  messagingSenderId: "581070277396",
  appId: "1:581070277396:web:3e3322d4e1a0df6b76d001",
  measurementId: "G-3GD4QNJ7T1"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export { app };
