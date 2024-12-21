import axios from "@/api/axiosInstance";

const authService = {
  async login(email: string, password: string): Promise<string> {
    const response = await axios.post<{ token: string }>("/auth/login", { email, password });
    const { token } = response.data;
    localStorage.setItem("accessToken", token);
    return token;
  },

  async refreshAccessToken(): Promise<string> {
    const response = await axios.post<{ token: string }>("/auth/refresh");
    const { token } = response.data;
    localStorage.setItem("accessToken", token);
    return token;
  },

  getAccessToken(): string | null {
    return localStorage.getItem("accessToken");
  },

  handleLogout() {
    localStorage.removeItem("accessToken");
  },
};

export default authService;
