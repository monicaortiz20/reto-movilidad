import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore, collection, addDoc, getDocs, doc, getDoc, query, where, setDoc, deleteDoc } from 'firebase/firestore';//users collection

// import { getStorage, ref, uploadBytes, getDownloadURL, getBytes } from 'firebase/storage';//fotos perfil

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


//para verificar si el usuario existe
export async function userExists(uid){
  const docRef = doc(db,'users', uid);
  const res = await getDoc(docRef)
  console.log('esto es el res de verificación de usuario', res)
  return res.exists();
}

