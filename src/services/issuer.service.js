import axios from "axios";
import authHeader from './auth-header';

const API_URL = "http://20.24.121.187/api/Issuer/";

const getRequests = () => {
    return axios.get(API_URL + "getRequest", { headers: authHeader() });
};

const IssuerService = {
    getRequests,
};

export default IssuerService;