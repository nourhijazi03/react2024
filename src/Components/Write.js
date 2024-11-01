import React from "react";
import { useState } from "react";
import app from "../firebaseConfig";
import { getDatabase, ref, set, push } from "firebase/database";

function Write() {
  let [value1, setValue1] = useState("");
  let [value2, setValue2] = useState("");

  const saveData = async () => {
    const db = getDatabase(app);
    const newDocRef = push(ref(db, "nature/fruits"));
    set(newDocRef, {
      fruitName: value1,
      fruitDef: value2,
    })
      .then(() => {
        alert("data saved successfully!");
      })
      .catch((error) => {
        alert("error:", error.message);
      });
  };

  return (
    <div className="main">
      <div>
      <h1>Write Page</h1>
      <input
        type="text"
        value={value1}
        onChange={(e) => setValue1(e.target.value)}
      />
      <br />
      <input
        type="text"
        value={value2}
        onChange={(e) => setValue2(e.target.value)}
      />
      <br />
      <button onClick={saveData}>Save Data</button>
      </div>
    </div>
  );
}

export default Write;
