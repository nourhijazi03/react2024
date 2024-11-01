import React from "react";
import { useNavigate } from "react-router-dom";
import "../style.css";

function Navbar() {
  const navigate = useNavigate();
  return (
    <div className="nav">
      <h1 className="logo" onClick={() => navigate("/")}>
        LOGO HOME
      </h1>
      <div>
        <button className="btn1" onClick={() => navigate("/read")}>
          Read
        </button>
        <button className="btn1" onClick={() => navigate("/update")}>
          Update
        </button>
        <button className="btn1" onClick={() => navigate("/update")}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default Navbar;
