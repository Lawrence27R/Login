// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app';
import {
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  // apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  // authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
  // projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,

  apiKey: 'AIzaSyAbhG9_MHjctuxyFGxZ1pseI67ziiOWvBA',
  authDomain: 'kanban-board-394d7.firebaseapp.com',
  projectId: 'kanban-board-394d7',
  // storageBucket: 'kanban-board-394d7.appspot.com',
  // messagingSenderId: '100891785962',
  // appId: '1:100891785962:web:2252418da010f4c220f593',
  // measurementId: 'G-FG73W8BFJG',
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
export const db = getFirestore(app);
export const signInWithGoogle = () => signInWithPopup(auth, googleProvider);
export const signInWithGithub = () => signInWithPopup(auth, githubProvider);
export const signUpWithEmail = (email, pass) => createUserWithEmailAndPassword(auth, email, pass);
export const signInWithEmail = (email, pass) => signInWithEmailAndPassword(auth, email, pass);

// // Import the functions you need from the SDKs you need
// import { initializeApp, getApp, getApps } from 'firebase/app';
// import {
//   getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup,
// } from 'firebase/auth';

// import { getFirestore } from 'firebase/firestore';

// const firebaseConfig = {
//   // apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   // authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
//   // projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,

//   apiKey: 'AIzaSyAbhG9_MHjctuxyFGxZ1pseI67ziiOWvBA',
//   authDomain: 'kanban-board-394d7.firebaseapp.com',
//   projectId: 'kanban-board-394d7',
//   // storageBucket: 'kanban-board-394d7.appspot.com',
//   // messagingSenderId: '100891785962',
//   // appId: '1:100891785962:web:2252418da010f4c220f593',
//   // measurementId: 'G-FG73W8BFJG',
// };

// // Initialize Firebase

// const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// export const auth = getAuth(app);
// const googleProvider = new GoogleAuthProvider();
// const githubProvider = new GithubAuthProvider();
// export const db = getFirestore(app);
// export const signInWithGoogle = () => signInWithPopup(auth, googleProvider);
// export const signInWithGithub = () => signInWithPopup(auth, githubProvider);
