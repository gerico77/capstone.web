import {
    GET_ISSUER_REQUESTS
} from "../actions/types";

const initialState = [];

const IssuerReducer = (issuers = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case GET_ISSUER_REQUESTS:
            return payload;

        default:
            return issuers;
    }
};

export default IssuerReducer;