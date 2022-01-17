import axios from "axios";

const API_URL = "https://localhost:44365/api/Auth/";

class AuthService {
    login(username, password) {
        return axios
            .post(API_URL + "login", { username, password })
            .then((response) => {
                if (response.data.accessToken) {
                    localStorage.setItem("user", JSON.stringify(response.data));
                }

                return response.data;
            });
    }

    logout() {
        localStorage.removeItem("user");
    }

    register(username, password) {
        return axios.post(API_URL + "register", {
            username,
            password,
        });
    }
}

export default new AuthService();
