import React, { useState } from "react";
import "./App.css";
import List from "./comp/List";

const App = () => {
  const [list, setList] = useState();
  const [display, setDisplay] = useState([]);
  function write(e) {
    setList(e.target.value);
  }
  function show() {
    if (list === "" || typeof list === "undefined") {
      alert("empty");
    } else {
      setDisplay((o) => {
        return [...o, list];
      });
    }
    setList("");
  }
  function remove(id) {
    console.log(id);
    setDisplay((o) => {
      return o.filter((arr, i) => {
        return i != id;
      });
    });
  }
  return (
    <>
      <div className="main_cont">
        <br />
        <h1>TODO List</h1>
        <br />
        <div className="input">
          <input
            type="text"
            placeholder="Add Item"
            onChange={write}
            value={list}
          />
          <button onClick={show} className="add">
            +
          </button>
        </div>
        <br />

        {display.map((val, i) => {
          return (
            <>
              <div className="listadded">
                <List jo={val} key={i} id={i} onSelect={remove} />
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};
export default App;
