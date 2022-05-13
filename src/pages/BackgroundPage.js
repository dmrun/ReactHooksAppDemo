import React, { useState, useCallback } from "react";
import ListNumbers from "../components/List.js/ListNumbers";

export default function BackgroundPage() {
  const [number, setNumber] = useState(1);
  const [dark, setDark] = useState(false);

  const getItems = useCallback(
    (incrementor) => {
      return [
        number + incrementor,
        number + 1 + incrementor,
        number + 2 + incrementor,
      ];
    },
    [number]
  );
  const theme = {
    backgroundColor: dark ? "#333" : "#FFF",
    color: dark ? "#FFF" : "#333",
  };
  return (
    <div style={theme}>
      <input
        type="number"
        value={number}
        onChange={(e) =>
          setNumber(parseInt(e.target.value) > 0 ? parseInt(e.target.value) : 0)
        }
      ></input>
      <button onClick={() => setDark((prevDark) => !prevDark)}>
        Toggle Theme
      </button>
      <ListNumbers getItems={getItems} />
    </div>
  );
}
