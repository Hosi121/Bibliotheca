import axios from "@/api/axiosInstance";

const authService = {
    async login(email: string, password: string) {
        const response = await axios.post("/auth/login", { email, password });
        const { token } = response.data;
        localStorage.setItem("accessToken", token);
        return token;
    },

    async refreshAccessToken() {
        const response = await axios.post("/auth/refresh");
        const { token } = response.data;
        localStorage.setItem("accessToken", token);
        return token;
    },

    getAccessToken() {
        return localStorage.getItem("accessToken");
    },

    handleLogout() {
        localStorage.removeItem("accessToken");
    },
};

export default authService;
