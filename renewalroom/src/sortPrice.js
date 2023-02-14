import React from "react";

function SortPrice( props ) {

  return (
    <div className="Sort-div">
      <p>Sort Price By: </p>
      <select id="ranges" onChange={props.handleSelect} value={props.selectOption}>
        <option value="Normal">Normal</option>
        <option value="Lowest">Lowest</option>
        <option value="Highest">Highest</option>
      </select>
    </div>
  );
}

export default SortPrice;