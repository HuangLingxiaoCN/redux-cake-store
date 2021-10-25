import React from "react";
// import { connect } from "react-redux";
import { useSelector, useDispatch } from "react-redux";

import { buyCake } from "../redux";

function CakeContainer() {
  const dispatch = useDispatch();
  // Note: in component function when call useSelector(), the state property
  // shoule be specified like state.cake.[prop] or state.iceCream.[prop]
  const numOfCakes = useSelector(state => state.cake.numOfCakes)

  return (
    <div>
      <h2>Number of cakes - {numOfCakes}</h2>
      <button onClick={() => dispatch(buyCake())}>Buy Cake</button>
    </div>
  );
}

export default CakeContainer;

// function CakeContainer(props) {
//   return (
//     <div>
//       <h2>Number of cakes - {props.numOfCakes}</h2>
//       <button onClick={props.buyCake}>Buy Cake</button>
//     </div>
//   );
// }

// const mapStateToProps = (state) => {
//   return {
//     numOfCakes: state.numOfCakes,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     buyCake: () => dispatch(buyCake()),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
