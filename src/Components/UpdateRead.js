import React from "react";
import { useState } from "react";
import app from "../firebaseConfig";
import { getDatabase, ref, get, remove } from "firebase/database";
import { useNavigate } from "react-router-dom";

function UpdateRead() {
  const navigate = useNavigate();
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

  const deleteFruit = async (fruitId) => {
    const db=getDatabase(app);
    const dbRef=ref(db,"nature/fruits/"+fruitId);
    await remove(dbRef);
    window.location.reload();
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
              <button
                onClick={() => navigate(`/updateread/edit/${item.fruitID}`)}
              >
                Edit
              </button>
              <button onClick={() => deleteFruit(item.fruitID)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default UpdateRead;
