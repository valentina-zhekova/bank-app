import React from "react";

// dropdownSubject -> JSX parent element to wrap in dropdown
// dropdownOptions -> array of values to show (note: dropdown just shows items, a filter component would mutate the list)
// handleClick -> what to do on selecting value, e.g. pass a function
const CommonDropdwon = ({ dropdownSubject, dropdownOptions, handleClick }) => {
  function showDropdownOptions() {
    return dropdownOptions.map((item, index) => {
        return (
          <div
            key={index} 
            onClick={() => handleClick(item)}
            style={{ backgroundColor: "green" }}
          >
            {item}
          </div>
        );
      });
  }

  return (
    <div className="dropdown">
    <div className="dropdown-holder">{dropdownSubject}</div>
    <div className="dropdown-content">
        {showDropdownOptions()}
    </div>
    </div>
  );
};

export default CommonDropdwon;
