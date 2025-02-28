import API from "./axiosInstance";

export const fetchResponse = async (message: String) => {
    try {
        const response = await API.post("/ai/chat", { message });
        return response.data;
    } catch (error) {
        console.error("AI Api Error", error);
        return null;
    }
};