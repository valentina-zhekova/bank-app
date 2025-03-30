import { DROPDOWN_SELECT_VALUE } from "./actionTypes";

const dropdownSelectValue = (propNameUpdate, newValue) => {
  return {
    type: DROPDOWN_SELECT_VALUE,
    propNameUpdate,
    newValue,
  };
};

export { dropdownSelectValue };
