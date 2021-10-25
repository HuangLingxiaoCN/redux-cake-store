import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { buyCake } from "../redux";

function NewCakeContainer() {
  const [number, setNumber] = useState(1);

  const dispatch = useDispatch(number);
  // Note: in component function when call useSelector(), the state property
  // shoule be specified like state.cake.[prop] or state.iceCream.[prop]
  const numOfCakes = useSelector(state => state.cake.numOfCakes)

  return (
    <div>
      <h2>Number of cakes - {numOfCakes}</h2>
      <input type='text' value={number} onChange={e => setNumber(e.target.value)} />
      <button onClick={() => dispatch(buyCake(number))}>Buy {number} Cake</button>
    </div>
  );
}

export default NewCakeContainer;