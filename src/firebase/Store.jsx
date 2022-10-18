import React, { useState } from 'react'
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { app } from './firebaseConfig'

const db = getFirestore(app);


const Store = () => {

  // const [value, setValue] = useState('')

  const dbRef = collection(db, "users");
  const data = {
    name: "Raja Tamil",
    country: "Canada"
  };

  addDoc(dbRef, data)
    .then(docRef => {
      console.log("Document has been added successfully");
    })
    .catch(error => {
      console.log(error);
    })


  // const getValue = (event) => {
  //   setValue(event.target.value);
  // };

  // const addValue = () => {
  //   db.collection("values")
  //     .doc(value)
  //     .set({
  //       value: value,
  //     })
  //     .then(function () {
  //       console.log("Value successfully written!");
  //     })
  //     .catch(function (error) {
  //       console.error("Error writing Value: ", error);
  //     });
  // };

  return (
    <div>
      {/* <div>
        <input onChange={getValue} type='text' />
        <button type='button' onClick={querySnapshot} >Add</button>
      </div> */}
    </div>
  )
}

export default Store