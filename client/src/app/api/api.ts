import axios from "axios";

const API_URL = "https://restore-course-walter.azurewebsites.net/api/";

const api = axios.create({
  baseURL: API_URL,
});

/**
 * Logs in the user and stores the token in localStorage.
 */
export const login = async (username: string, password: string): Promise<void> => {
  try {
    const response = await api.post<{ token: string }>("auth/login", { username, password });
    localStorage.setItem("token", response.data.token);
  } catch (error) {
    console.error("Login failed", error);
    throw error;
  }
};

/**
 * Fetches data from a protected endpoint using the stored token.
 */
export const getWithAuth = async <T>(endpoint: string): Promise<T> => {
    const token = localStorage.getItem("token");
    if (!token) throw new Error("No token found");
  
    const response = await api.get<T>(endpoint, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  
    return response.data;
  };
  
  /**
   * Logs out the user by removing the stored token.
   */
  export const logout = (): void => {
    localStorage.removeItem("token");
  };