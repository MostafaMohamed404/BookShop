import api from "./api/axios";

export const loginRequest = (data) => api.post("/login", data);

export const registerRequest = (data) => api.post("/register", data);
