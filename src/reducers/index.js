import { combineReducers } from "redux";
import auth from "./auth";
import message from "./message";
import issuer from "./issuer";

import {
    LOGOUT
} from "../actions/types";

const appReducer = combineReducers({
    auth,
    message,
    issuer,
});

const rootReducer = (state, action) => {
    if (action.type === LOGOUT) {
        return appReducer(undefined, action);
    }

    return appReducer(state, action);
}

export default rootReducer;