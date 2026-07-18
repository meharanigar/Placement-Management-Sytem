// frontend --->req --> 5000 backend
//frontend will send the req to backend
//
import axios from "axios";

const api = axios.create({
    baseURL:"http://localhost:8000"
});
export default api;


