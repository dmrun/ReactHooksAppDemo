import React, { useState } from "react";
import rickyImg from "../rickmorty.png";

export default function GetRicky(props) {
  const [number, setNumber] = useState(0);
  const [img, setImg] = useState(false);
  const doubleNumber = slowMotion(number);
  const themeStyles = {
    display: img ? "block" : "none",
    width: "250px",
  };
  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => setImg((prevDisplay) => !prevDisplay)}>
        Hide/Display Image
      </button>
      <img style={themeStyles} src={rickyImg}></img>
    </div>
  );
}

function slowMotion(num) {
  console.log("Call slow fnc");
  for (let i = 0; i <= 1000000000; i++) {}
  return num * 2;
}
