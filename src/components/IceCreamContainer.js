import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { buyIceCream } from "../redux";

function IceCreamContainer() {
  const dispatch = useDispatch();
  // Note: in component function when call useSelector(), the state property
  // shoule be specified like state.cake.[prop] or state.iceCream.[prop]
  const numOfIceCreams = useSelector(state => state.iceCream.numOfIceCreams)

  return (
    <div>
      <h2>Number of ice creams - {numOfIceCreams}</h2>
      <button onClick={() => dispatch(buyIceCream())}>Buy Ice Cream</button>
    </div>
  );
}

export default IceCreamContainer;