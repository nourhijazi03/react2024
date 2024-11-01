import React from "react";
import { useState, useEffect } from "react";
import app from "../firebaseConfig";
import { getDatabase, ref, set, get, push } from "firebase/database";
import { useNavigate, useParams } from "react-router-dom";

function UpdateWrite() {
  const navigate = useNavigate();
  const { firebaseID } = useParams();
  let [value1, setValue1] = useState("");
  let [value2, setValue2] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const db = getDatabase(app);
      const dbRef = ref(db, "nature/fruits/" + firebaseID);
      const snapshot = await get(dbRef);
      if (snapshot.exists()) {
        const targetObject = snapshot.val();
        setValue1(targetObject.fruitName);
        setValue2(targetObject.fruitDef);
      } else {
        alert("Error Occurred");
      }
    };
    fetchData();
  }, [firebaseID]);

  const overwriteData = async () => {
    const db = getDatabase(app);
    const newDocRef = ref(db, "nature/fruits/" + firebaseID);
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
        <h1>Edit Data</h1>
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
        <button onClick={overwriteData}>Update Data</button>
      </div>
    </div>
  );
}

export default UpdateWrite;
