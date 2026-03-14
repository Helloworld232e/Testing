
//This file contains the API calls to the backend server.
import axios from "axios";

const API_URL = "http://localhost:8000";

export const getPrediction = async (data) => {

  const response = await axios.post(`${API_URL}/predict`, {
    text: data
  });

  return response.data;

};