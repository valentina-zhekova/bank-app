import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { validationError, resetError, updateValue } from "../actions/commonInputActions";

const CommonInput = ({demoValue}) => {
  const dispatch = useDispatch();


  const inputValue = useSelector(state => state.inputValue);
  const errorMsg = useSelector(state => state.errorMsg);
  console.log("ENTER", 111, inputValue, 111, errorMsg);

  const hasError = errorMsg != "";

  function doOnChange(input) {

    const errAppeared = /[1-9]/.test(input);
    console.log(222, input, 222, hasError, 222, errAppeared);

    if (!hasError && errAppeared) {
      console.log(222, "dispatch error");
      dispatch(validationError(input));
    } else if (hasError && (!errAppeared)) {
      console.log(222, "dispatch reset");
      dispatch(resetError(input));
    } else {
      console.log(222, "dispatch update");
      dispatch(updateValue(input));
    }
  }

  return (
    <div>
      <input 
        placeholder={demoValue} 
        value={inputValue}
        onChange={event => doOnChange(event.target.value)}
      />
      {errorMsg}
    </div>
  );
};

export default CommonInput;
