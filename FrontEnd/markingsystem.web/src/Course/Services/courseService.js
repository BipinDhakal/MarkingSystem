import axios from "axios";

const API_URL = "https://localhost:7084/api/course";

const getAuthHeaders = () => ({
  headers: {
    Authorization: `Bearer ${localStorage.getItem("authToken")}`,
    "Content-Type": "application/json",
  },
});

export const getCourses = async () => {
  const response = await axios.get(API_URL, getAuthHeaders());
  return response.data.result;
};

export const getCourseById = async (id) => {
  const response = await axios.get(`${API_URL}/${id}`, getAuthHeaders());
  return response.data.result;
};

export const createCourse = async (course) => {
  return await axios.post(API_URL, course, getAuthHeaders());
};

export const updateCourse = async (course) => {
  return await axios.put(API_URL, course, getAuthHeaders());
};

export const deleteCourse = async (id) => {
  return await axios.delete(`${API_URL}/${id}`, getAuthHeaders());
};
