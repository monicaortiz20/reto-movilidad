import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore, collection, addDoc, getDocs, doc, getDoc, query, where, setDoc, deleteDoc } from 'firebase/firestore';

// import { getStorage, ref, uploadBytes, getDownloadURL, getBytes } from 'firebase/storage';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY_FIREBASE,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  projectId: process.env.REACT_APP_PROJECTID,
  storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_APPID
};



export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
// const storage = getStorage(app)

//para saber si el usuario existe
export async function userExists(uid){
  const docRef = doc(db,'users', uid);
  const res = await getDoc(docRef)
  console.log(res)
  return res.exists();
}

//para registrar usuario
export async function registerNewUser(user){
  try {
    const collectionRef = collection(db, 'users');
    const docRef = doc(collectionRef, user.uid)
    await setDoc(docRef, user);
  } catch (error) {
    console.log(error)
  }
}