import axios from "axios";


async function sendData(data) {
  try {
    const response = await axios.post("http://localhost:8000/api/users", data);
    console.log("Data sent:", response.data);
  } catch (error) {
    console.error("There was an error sending data:", error);
  }
}

// Basic GET method
async function getData(params) {
  try {
    const response = await axios.get("http://localhost:8000/api/users", {
      params,
    });
    return response.data;
  } catch (error) {
    console.error("There was an error fetching data:", error);
    throw error;
  }
}

// Basic PUT method
async function updateData(id, data) {
  try {
    const response = await axios.put(
      `https://api.example.com/endpoint/${id}`,
      data
    );
    return response.data;
  } catch (error) {
    console.error("There was an error updating data:", error);
    throw error;
  }
}

// Basic DELETE method
async function deleteData(id) {
  try {
    const response = await axios.delete(
      `https://api.example.com/endpoint/${id}`
    );
    return response.data;
  } catch (error) {
    console.error("There was an error deleting data:", error);
    throw error;
  }
}

export default {
  sendData,
  getData,
  updateData,
  deleteData,
};
