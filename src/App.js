import React, { useState } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const [list, setList] = useState([]);

  function addAThing() {
    setList([...list, text]);
    setText("");
  }

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={e => {
          setText(e.target.value);
        }}
      />
      <button onClick={addAThing}>Weeeeeeee</button>
      <ul>
        {list.map(item => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
