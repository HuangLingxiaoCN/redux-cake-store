import { combineReducers } from "redux";

import cakeReducer from "./cake/cakeReducer";
import iceCreamReducer from "./iceCream/iceCreamReducer";
import cookieReducer from "./cookie/cookieReducer";
import userReducer from "./user/userReducer";

const rootReducer = combineReducers({
  // Note: in component function when call useSelector(), the state property
  // shoule be specified like state.cake.[prop] or state.iceCream.[prop]
  cake: cakeReducer,
  iceCream: iceCreamReducer,
  cookie: cookieReducer,
  user: userReducer,
});

export default rootReducer;