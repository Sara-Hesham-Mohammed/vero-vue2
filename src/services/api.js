import axios from "axios";

const API_URL = "http://localhost:8000/api"; //PUT IT IN THE ENV

/******** CRUD ******/
async function sendData(data) {
  try {
    const response = await axios.post(`${API_URL}/users`, data);
    console.log("Data sent:", response.data);

    if (response.status === 200 || response.status === 201) {
      alert("Registration successful!");
    } else {
      alert("Registration failed. Please try again.");
    }
  } catch (error) {
    console.error("There was an error sending data:", error);
  }
}

// Basic GET method
async function getData(params) {
  try {
    const response = await axios.get(`${API_URL}/users`, {
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
    const response = await axios.put(`${API_URL}/users/${id}`, data);
    return response.data;
  } catch (error) {
    console.error("There was an error updating data:", error);
    throw error;
  }
}

// Basic DELETE method
async function deleteData(id) {
  try {
    const response = await axios.delete(`${API_URL}/users/${id}`);
    return response.data;
  } catch (error) {
    console.error("There was an error deleting data:", error);
    throw error;
  }
}

/************ Auth ************/

/***** Not a vue component so store has to be explicitly passed **** */
//is there a better way than just passing the store???
async function login(credentials, store) {
  try {
    const response = await axios.post(`${API_URL}/login`, credentials);

    console.log("Login successful:", response.data);

    // need to make a user obj
    store.dispatch("login", response.data.user);
    store.commit("setIsLoggedIn", true);

    return response.data;
  } catch (error) {
    // Switching on error responses
    switch (error.response && error.response.status) {
      case 401:
        console.error("Unauthorized: Invalid credentials");
        break;
      case 403:
        console.error(
          "Forbidden: You do not have permission to access this resource"
        );
        break;
      case 422:
        console.error("Validation errors:", error.response.data.errors);
    }
    console.error("There was an error logging in:", error);
  }
}

async function forgotPassword(email) {
  try {
    const response = await axios.post(`${API_URL}/forgot-password`, email);
    return response.data;
  } catch (error) {
    console.error(
      "There was an error sending the forgot password email:",
      error
    );
  }
}

async function resetPassword(resetData) {
  try {
    const response = await axios.post(`${API_URL}/reset-password`, resetData);
    return response.data;
  } catch (error) {
    console.error("There was an error resetting the password:", error);
  }
}

export default {
  sendData,
  getData,
  updateData,
  deleteData,
  forgotPassword,
  resetPassword,
  login,
};
