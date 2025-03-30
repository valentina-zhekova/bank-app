import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { dropdownSelectValue } from "../actions/commonDropdownActions";

// dropdownSubject -> JSX parent element to wrap in dropdown
// propNameOptions -> which state property to listen for changes and show as list 
// propNameUpdate -> which state property to update with the selected value on click
const CommonDropdwon = ({ dropdownSubject, propNameOptions, propNameUpdate }) => {
//   const transactionStates = { // TODO move to common
//     send: "Send",
//     received: "Received",
//     payed: "Payed"
//   };
  const dispatch = useDispatch();

  const dropdownOptions = useSelector(state => state[propNameOptions]);

  function showDropdownOptions() {
    return dropdownOptions.map((item, index) => {
        return (
          <div key={index} onClick={() => dispatch(dropdownSelectValue(propNameUpdate, item))}>{item}</div>
        );
      });
  }

  return (
    // <div className="dropdown">
    // <button className="dropdown-holder" style={{ backgroundColor: "green" }}>{selectedTransaction.state}</button>
    // <div className="dropdown-content" style={{ backgroundColor: "green" }}>
    //     <div>{transactionStates.send}</div>
    //     <div>{transactionStates.received}</div>
    //     <div>{transactionStates.payed}</div>
    // </div>
    // </div>
    <div className="dropdown">
    <div className="dropdown-holder">{dropdownSubject}</div>
    <div className="dropdown-content">
        {showDropdownOptions()}
    </div>
    </div>
  );
};

export default CommonDropdwon;
