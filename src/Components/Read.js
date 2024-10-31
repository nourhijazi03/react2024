import React from "react";
import { useState } from "react";
import app from "../firebaseConfig";
import { getDatabase, ref, get } from "firebase/database";

function Read() {
  let [fruitArray, setFruitArray] = useState([]);

  const fetchData = async () => {
    const db = getDatabase(app);
    const dbRef = ref(db, "nature/fruits");
    const snapshot = await get(dbRef);

    if (snapshot.exists()) {
      setFruitArray(Object.values(snapshot.val()));
      
    } else {
      alert("error occured");
    }
  };
  return (
    <div>
      <h1>Read Data</h1>
      <button onClick={fetchData}>Show Data</button>
      <ul>
        {fruitArray.map((item,index) => (
          <li key={index}>
            {item.fruitName}:{item.fruitDef}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Read;
