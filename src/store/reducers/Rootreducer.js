import { combineReducers } from "redux";
import todoreducer from "./Todoreducer";
import authreducer from "./Authreducer";
const rootReducer=combineReducers({
    todos:todoreducer,
     auth:authreducer
})
export default rootReducer