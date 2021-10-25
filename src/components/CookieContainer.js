import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { buyCookie } from "../redux";

function IceCreamContainer() {
  const dispatch = useDispatch();
  // Note: in component function when call useSelector(), the state property
  // shoule be specified like state.cake.[prop] or state.iceCream.[prop]
  const numOfCookies = useSelector(state => state.cookie.numOfCookies)

  return (
    <div>
      <h2>Number of cookies - {numOfCookies}</h2>
      <button onClick={() => dispatch(buyCookie())}>Buy Cookie</button>
    </div>
  );
}

export default IceCreamContainer;