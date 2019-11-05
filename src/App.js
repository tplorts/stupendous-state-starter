import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { createStore } from "redux";
import "./App.css";

const initialState = {
  text: "",
  list: []
};

// let state = {};

// function dispatch(action) {
//   state = reducer(state, action);
//   // update all subscribers
// }

function reducer(priorState = initialState, action) {
  if (action.type === "SET_TEXT") {
    return {
      text: action.text,
      list: priorState.list
    };
  }

  if (action.type === "ADD_ITEM") {
    return {
      text: priorState.text,
      list: [...priorState.list, action.item]
    };
  }

  return priorState;
}

export const store = createStore(reducer);

function App() {
  const dispatch = useDispatch();

  // const [text, setText] = useState("");
  const text = useSelector(state => state.text);

  function addAThing() {
    // setList([...list, text]);
    dispatch({
      type: "ADD_ITEM",
      item: text
    });

    // setText("");
    dispatch({
      type: "SET_TEXT",
      text: ""
    });
  }

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={e => {
          // setText(e.target.value);
          dispatch({
            type: "SET_TEXT",
            text: e.target.value
          });
        }}
      />
      <button onClick={addAThing}>Weeeeeeee</button>
      <List />
    </div>
  );
}

function List() {
  // const [list, setList] = useState([]);
  const list = useSelector(state => state.list);

  return (
    <ul>
      {list.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

export default App;
