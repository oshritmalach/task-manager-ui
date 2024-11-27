// // import axios from "axios";
// //
// // const api = axios.create({
// //     baseURL: "http://localhost:8083", // כתובת שרת ה-Go
// //     timeout: 10000, // זמן קצוב (timeout)
// //     headers: {
// //         "Content-Type": "application/json",
// //     },
// // });
//
// export default api;
// const API_BASE_URL = "http://localhost:8083"; // Replace with your server's address if different
//
// export const getAllTasks = async () => {
//     const response = await api.get("/tasks");
//     return response.data;
// };
//
//
// export const getTask = async (id) => {
//     const response = await axios.get(`${API_BASE_URL}/task/${id}`);
//     return response.data;
// };
//
// export const addTask = async (task) => {
//     const response = await axios.post(`${API_BASE_URL}/task`, task);
//     return response.data;
// };
//
// export const updateTask = async (id, task) => {
//     const response = await axios.post(`${API_BASE_URL}/task/${id}`, task);
//     return response.data;
// };
//
// export const deleteTask = async (id) => {
//     const response = await axios.delete(`${API_BASE_URL}/task/${id}`);
//     return response.data;
// };
