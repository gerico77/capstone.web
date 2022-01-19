import {
    GET_ISSUER_REQUESTS,
} from "./types";

import IssuerService from "../services/issuer.service";

export const getRequests = () => async (dispatch) => {
    try {
        const response = await IssuerService.getRequests();

        dispatch({
            type: GET_ISSUER_REQUESTS,
            payload: response.data,
        });
    } catch (err) {
        console.log(err);
    }
};