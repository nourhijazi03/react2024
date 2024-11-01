import React from "react";
import { useState } from "react";
import app from "../firebaseConfig";
import { getDatabase, ref, get } from "firebase/database";

function UpdateRead() {
  let [fruitArray, setFruitArray] = useState([]);

  const fetchData = async () => {
    const db = getDatabase(app);
    const dbRef = ref(db, "nature/fruits");
    const snapshot = await get(dbRef);

    if (snapshot.exists()) {
      const myData = snapshot.val();
      const tempArray = Object.keys(myData).map((myFired) => {
        return {
          ...myData[myFired],
          fruitID: myFired,
        };
      });
      setFruitArray(tempArray);
    } else {
      alert("error occured");
    }
  };
  return (
    <div className="main">
      <div>
      <h1>Update Data</h1>
      <button onClick={fetchData}>Show Data</button>
      <ul>
        {fruitArray.map((item, index) => (
          <li key={index}>
            {item.fruitName}:{item.fruitDef}:{item.fruitID}
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
}

export default UpdateRead;
