import React from "react";

// const checkItems = [
//   "Check the pitch/fall",
//   "Skylights",
//   "Sizing of the gutters",
//   "Need carpentry"
// ];

const Checkbox = props => {
  // console.log(props);
  // console.log(props.isSelected);
  // return checkItems.map((checkItem, index) => {
  return (
    // <label key={index}>
    <label>
      <input
        type="checkbox"
        name={props.name}
        checked={props.isSelected}
        onChange={props.onCheckboxChange}
        // onMouseDown={props.onBlurChange}
      />
      {/* {checkItem} */}
      Check the pitch/fall
    </label>
  );
  // });
};

export default Checkbox;
