import React from "react";
const List = (props) => {
  return (
    <>
      <button
        className="neg"
        onClick={() => {
          props.onSelect(props.id);
        }}
      >
        +
      </button>
      <li>{props.jo}</li>
    </>
  );
};
export default List;
