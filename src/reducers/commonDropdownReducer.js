import { DROPDOWN_SELECT_VALUE } from "../actions/actionTypes";

const commonDropdownReducer = (state, action) => {
  switch (action.type) {

    case DROPDOWN_SELECT_VALUE:
      return {
        ...state,
        [action.propNameUpdate]: action.newValue,
      };

    default:
      return state;
  }
};

export default commonDropdownReducer;
