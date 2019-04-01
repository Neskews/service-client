import { combineReducers } from "redux";
import view from "./views";
import people from './people'
import badges from "./badges";

export default combineReducers({
    view,
    people,
    badges
})
