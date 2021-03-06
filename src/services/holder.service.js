import axios from "axios";
import authHeader from './auth-header';

const API_URL = "http://20.24.121.187/api/Holder/";

const getRequests = (userId) => {
    return axios.get(API_URL + "getRequest/" + userId, { headers: authHeader() });
};

const createRequest = (userId, nationalId, firstName, lastName, birthdate, requestStatus, recordTypeId) => {
    return axios.post(API_URL + "createRequest", {
        userId,
        nationalId,
        firstName,
        lastName,
        birthdate,
        requestStatus,
        recordTypeId,
    }, { headers: authHeader() });
};

const IssuerService = {
    getRequests,
    createRequest,
};

export default IssuerService;